import React, { useCallback, useRef, useMemo, useState } from 'react';
import cls from 'clsx';
import { noop } from '@/utils/misc';
import { useTabFocus } from '@/hooks/useTabFocus';
import { useListKeyboardNav } from '@/hooks/useListKeyboardNav';
import { useClickOutside } from '@/hooks/useClickOutside';
import styles from './select.module.css';
import {
  IMultiSelectProps,
  IBasicMultiSelectProps,
  SelectOptionType,
  SelectValueType
} from './Select.types';
import Popper from '../Popper';
import Input from '../Input';
import Option from './Option';
import Checkbox from '../Checkbox';
import VirtualScroll from './VirtualScroll';
import { LIST_HEIGHT, LIST_SIZE } from './Select.constants';
import { ReactComponent as Down } from '@/assets/icons/caret-down.svg';
import { ReactComponent as Clear } from '@/assets/icons/clear.svg';
import { ReactComponent as Search } from '@/assets/icons/search.svg';

const isBasicProps = (
  props: IMultiSelectProps
): props is IBasicMultiSelectProps => 'options' in props;

const MultiSelect: React.FC<IMultiSelectProps> = props => {
  const {
    value = [],
    onSelect = noop,
    className = '',
    disabled = false,
    clearable = false,
    filterable = false,
    invalid = false,
    virtualScroll = false,
    placement = 'bottom',
    withArrow = false,
    withinPortal = true,
    sameWidth = true
  } = props;
  const [referenceElement, setReferenceElement] =
    useState<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const clearRef = useRef<HTMLButtonElement>(null);
  const [visible, setVisible] = useState(false);
  const [focus, setFocus] = useState(false);
  const [search, setSearch] = useState('');
  const onClose = useCallback(() => setVisible(false), []);
  const [handleKeyDown, setPopperRef] = useListKeyboardNav(visible, onClose);
  useClickOutside(() => setFocus(false), [referenceElement]);

  const handleClick = useCallback(
    (optionValue: SelectValueType) => {
      const newValue = [...value];

      const optionIndex = newValue.indexOf(optionValue);
      if (optionIndex === -1) {
        newValue.push(optionValue);
      } else {
        newValue.splice(optionIndex, 1);
      }

      onSelect(newValue);
    },
    [onSelect, value]
  );

  const mergedOptions: Array<SelectOptionType> = useMemo(() => {
    if (isBasicProps(props)) {
      return props.options;
    } else {
      const { children } = props;
      return (
        React.Children.map(children, child => {
          if (React.isValidElement(child)) {
            const { value, label } = child.props as SelectOptionType;
            return {
              label,
              value
            };
          }
        }) || []
      );
    }
  }, [props]);

  const selectedLabel = useMemo(
    () =>
      mergedOptions
        .filter(option => value.includes(option.value))
        .map(option => option.label)
        .join(', '),
    [mergedOptions, value]
  );

  const showClear = useMemo(
    () => clearable && !!selectedLabel,
    [clearable, selectedLabel]
  );
  const [tabFocus, keyDownHandler] = useTabFocus(
    showClear,
    buttonRef,
    clearRef
  );

  const handleClear = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      onSelect([]);
      buttonRef.current?.focus();
    },
    [onSelect]
  );

  const handleButtonClick = useCallback(() => {
    setVisible(visible => !visible);
    setFocus(true);
  }, []);

  const selectOptions = useMemo(() => {
    if (filterable && search) {
      return mergedOptions.filter(option =>
        option.label?.toString().toLowerCase().includes(search.toLowerCase())
      );
    } else {
      return mergedOptions;
    }
  }, [mergedOptions, filterable, search]);

  const listView = useMemo(() => {
    if (isBasicProps(props)) {
      const itemData = selectOptions.map(option => (
        <Option
          key={option.value.toString()}
          value={option.value}
          onClick={handleClick}
        >
          <button
            disabled={option.disabled}
            className={cls(styles.menuItemButton, {
              [styles.selected]: value.includes(option.value)
            })}
          >
            <Checkbox
              readOnly
              tabIndex={-1}
              checked={value.includes(option.value)}
              disabled={option.disabled}
              className={styles.checkbox}
            />
            {option.label}
          </button>
        </Option>
      ));
      if (virtualScroll) {
        return (
          <VirtualScroll
            itemCount={selectOptions.length}
            height={LIST_HEIGHT}
            childHeight={LIST_SIZE}
            itemData={itemData}
          />
        );
      } else {
        return itemData;
      }
    } else {
      const { children } = props;
      return React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          const { value } = child.props;
          if (selectOptions.some(option => option.value === value)) {
            return React.cloneElement(child as React.ReactElement, {
              onClick: handleClick
            });
          }
        }
      });
    }
  }, [props, handleClick, value, selectOptions, virtualScroll]);

  return (
    <>
      <div
        ref={setReferenceElement}
        className={cls(
          styles.ref,
          {
            [styles.focus]: focus || tabFocus,
            [styles.disabled]: disabled,
            [styles.invalid]: invalid
          },
          className
        )}
        onKeyDown={keyDownHandler}
      >
        <button
          type="button"
          role="combobox"
          aria-expanded={visible}
          aria-haspopup="listbox"
          ref={buttonRef}
          className={styles.button}
          onFocus={() => setFocus(true)}
          disabled={disabled}
          onClick={handleButtonClick}
          onKeyDown={handleKeyDown}
        >
          <span className={styles.text}>{selectedLabel}</span>
        </button>
        <div className={styles.icon}>
          <Down className={styles.down} />
          {showClear && (
            <button
              type="button"
              ref={clearRef}
              onClick={handleClear}
              className={styles.clear}
            >
              <Clear className={styles.clearIcon} />
            </button>
          )}
        </div>
      </div>
      {!disabled && (
        <Popper
          referenceElement={referenceElement}
          placement={placement}
          withArrow={withArrow}
          withinPortal={withinPortal}
          sameWidth={sameWidth}
          visible={visible}
          onClose={onClose}
        >
          <div
            className={styles.select}
            ref={setPopperRef}
            onKeyDown={handleKeyDown}
          >
            {filterable && (
              <div className={styles.input}>
                <Input
                  suffix={<Search className={styles.search} />}
                  value={search}
                  clearable
                  onChange={e => setSearch(e.target.value)}
                />
              </div>
            )}
            <div className={styles.menu} role="listbox">
              {listView}
            </div>
          </div>
        </Popper>
      )}
    </>
  );
};

export default MultiSelect;
