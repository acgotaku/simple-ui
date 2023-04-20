import React, { memo, useCallback, useRef, useMemo, useState } from 'react';
import cls from 'clsx';
import { noop } from '@/utils/misc';
import { useListKeyboardNav } from '@/hooks/useListKeyboardNav';
import { eventKey } from '@/constants/keyboard';
import styles from './select.module.css';
import {
  ISelectProps,
  ISingleSelectProps,
  IMultiSelectProps,
  IBasicSingleSelectProps,
  SelectOptionType,
  SelectValueType
} from './Select.types';
import Popper from '../Popper';
import Input from '../Input';
import Option from './Option';
import MultiSelect from './MultiSelect';
import VirtualScroll from '../VirtualScroll';
import { LIST_HEIGHT, LIST_SIZE } from './Select.constants';
import { ReactComponent as Down } from '@/assets/icons/caret-down.svg';
import { ReactComponent as Clear } from '@/assets/icons/clear.svg';
import { ReactComponent as Search } from '@/assets/icons/search.svg';

const isBasicProps = (
  props: ISingleSelectProps
): props is IBasicSingleSelectProps => 'options' in props;

const SingleSelect: React.FC<ISingleSelectProps> = props => {
  const {
    value = '',
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
  const clearRef = useRef<HTMLButtonElement>(null);
  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState('');
  const onClose = useCallback(() => setVisible(false), []);
  const [handleKeyDown, setPopperRef] = useListKeyboardNav(visible, onClose);

  const handleClick = useCallback(
    (optionValue: SelectValueType) => {
      onSelect(optionValue);
      setVisible(false);
    },
    [onSelect]
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
    () => mergedOptions.find(option => option.value === value)?.label,
    [mergedOptions, value]
  );

  const showClear = useMemo(
    () => clearable && !!selectedLabel,
    [clearable, selectedLabel]
  );

  const handleClear = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      onSelect('');
      referenceElement?.focus();
    },
    [onSelect, referenceElement]
  );

  const handleSelectedClick = useCallback(() => {
    if (!disabled) {
      setVisible(visible => !visible);
    }
  }, [disabled]);

  const handleSelectedKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLElement>) => {
      handleKeyDown(event);
      if (event.key === eventKey.Enter || event.key === eventKey.Space) {
        handleSelectedClick();
      }
    },
    [handleKeyDown, handleSelectedClick]
  );

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
          selected={option.value === value}
          disabled={option.disabled}
          onClick={handleClick}
        >
          <button
            type="button"
            disabled={option.disabled}
            className={cls(styles.menuItemButton, {
              [styles.selected]: option.value === value
            })}
          >
            <span className={styles.menuItemText}>{option.label}</span>
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
        tabIndex={disabled ? undefined : 0}
        role="combobox"
        aria-expanded={visible}
        aria-haspopup="listbox"
        onClick={handleSelectedClick}
        onKeyDown={handleSelectedKeyDown}
        className={cls(
          styles.ref,
          {
            [styles.disabled]: disabled,
            [styles.invalid]: invalid
          },
          className
        )}
      >
        <div className={styles.selection}>
          <span className={styles.selectionText}>{selectedLabel}</span>
        </div>
        <div className={styles.icon}>
          <Down className={styles.down} />
          {showClear && (
            <button
              type="button"
              ref={clearRef}
              onClick={handleClear}
              onKeyDown={e => e.stopPropagation()}
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
              <div className={styles.search}>
                <Input
                  suffix={<Search className={styles.searchIcon} />}
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

const isMultiProps = (props: ISelectProps): props is IMultiSelectProps =>
  !!props.multiSelect;

const Select: React.FC<ISelectProps> = props => {
  if (isMultiProps(props)) {
    return <MultiSelect {...props} />;
  } else {
    return <SingleSelect {...props} />;
  }
};

export default memo(Select);
