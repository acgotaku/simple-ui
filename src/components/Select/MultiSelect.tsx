import React, { memo, useCallback, useRef, useMemo, useState } from 'react';
import cls from 'clsx';
import { noop } from '@/utils/misc';
import { useListKeyboardNav } from '@/hooks/useListKeyboardNav';
import { eventKey } from '@/constants/keyboard';
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
import Tag from './Tag';
import VirtualScroll from '../VirtualScroll';
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
    placeholder = '',
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

  const selectedOptions = useMemo(
    () => mergedOptions.filter(option => value.includes(option.value)),
    [mergedOptions, value]
  );

  const showClear = useMemo(
    () => clearable && !!selectedOptions.length,
    [clearable, selectedOptions]
  );

  const showPlaceholder = useMemo(
    () => placeholder && !selectedOptions.length,
    [placeholder, selectedOptions]
  );

  const isSelectAll = useMemo(() => {
    return mergedOptions.every(option => {
      if (option.disabled) {
        return true;
      } else {
        return value.includes(option.value);
      }
    });
  }, [mergedOptions, value]);

  const toggleSelectAll = useCallback(() => {
    if (isSelectAll) {
      onSelect([]);
    } else {
      const sortedValues = mergedOptions
        .filter(option => !option.disabled)
        .map(option => option.value);
      onSelect(sortedValues);
    }
  }, [isSelectAll, mergedOptions, onSelect]);

  const handleClick = useCallback(
    (optionValue: SelectValueType) => {
      const newValues = [...value];

      const optionIndex = newValues.indexOf(optionValue);
      if (optionIndex === -1) {
        newValues.push(optionValue);
      } else {
        newValues.splice(optionIndex, 1);
      }

      const sortedValues = mergedOptions
        .filter(option => newValues.includes(option.value))
        .map(option => option.value);

      onSelect(sortedValues);
    },
    [onSelect, value, mergedOptions]
  );

  const handleClear = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      onSelect([]);
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
  const removeOption = useCallback(
    (optionValue: SelectValueType) => {
      const newValue = value.filter(key => key !== optionValue);
      onSelect(newValue);
    },
    [onSelect, value]
  );

  const selectOptions = useMemo(() => {
    if (filterable && search) {
      const keywords = search.split(' ').filter(x => x);
      if (keywords.length) {
        return mergedOptions.filter(option => {
          const label = option.label?.toString().toLowerCase() || '';
          return keywords.some(key => label.includes(key));
        });
      } else {
        return mergedOptions;
      }
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
          selected={value.includes(option.value)}
          disabled={option.disabled}
          onClick={handleClick}
        >
          <button
            type="button"
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
          {showPlaceholder ? (
            <span className={cls(styles.selectionText, styles.placeholder)}>
              {placeholder}
            </span>
          ) : (
            selectedOptions.map(option => (
              <Tag
                key={option.value}
                disabled={disabled}
                onClose={() => removeOption(option.value)}
              >
                {option.label}
              </Tag>
            ))
          )}
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
                <Checkbox
                  checked={isSelectAll}
                  onChange={toggleSelectAll}
                  className={styles.checkbox}
                />
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

export default memo(MultiSelect);
