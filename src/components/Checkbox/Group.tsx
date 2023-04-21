import React, { useMemo, memo, useCallback, useRef } from 'react';
import cls from 'clsx';
import { noop } from '@/utils/misc';
import { useDraggable } from '@/hooks/useDraggable';
import styles from './checkbox.module.css';
import { ICheckboxGroupProps, CheckboxValueType } from './Checkbox.types';
import { CheckboxContext } from './context';
import Checkbox from './Checkbox';

const CheckboxGroup: React.FC<ICheckboxGroupProps> = ({
  values = [],
  className = '',
  checkboxClassName = '',
  draggable = false,
  disabled = false,
  invalid = false,
  options = [],
  onChange = noop,
  children
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const {
    sortedData: sortedOptions,
    dragStartHandler,
    dragOverHandler,
    dragEnterHandler,
    dragEndHandler,
    dropHandler
  } = useDraggable({
    dataSource: options,
    draggable,
    containerRef
  });

  const sortValues = useCallback(
    (values: Array<CheckboxValueType>) => {
      const sortedValues = sortedOptions
        .filter(option => values.includes(option.value))
        .map(option => option.value);
      onChange?.(sortedValues);
    },
    [onChange, sortedOptions]
  );

  const dragEnd = useCallback(() => {
    dragEndHandler();
    sortValues(values);
  }, [dragEndHandler, sortValues, values]);

  const onCheckboxChange = useCallback(
    (value: CheckboxValueType) => {
      const newValues = [...values];
      const optionIndex = newValues.indexOf(value);
      if (optionIndex === -1) {
        newValues.push(value);
      } else {
        newValues.splice(optionIndex, 1);
      }

      sortValues(newValues);
    },
    [values, sortValues]
  );

  const context = useMemo(
    () => ({
      inGroup: true,
      values,
      updateState: onChange,
      disabled,
      invalid
    }),
    [values, onChange, disabled, invalid]
  );

  return (
    <div className={cls(styles.group, className)} ref={containerRef}>
      <CheckboxContext.Provider value={context}>
        {children
          ? children
          : sortedOptions.map((option, index) => (
              <Checkbox
                key={option.value.toString()}
                label={option.label}
                checked={values.includes(option.value)}
                disabled={disabled || option.disabled}
                invalid={invalid}
                className={checkboxClassName}
                onChange={() => onCheckboxChange(option.value)}
                draggable={draggable && !disabled}
                dragStartHandler={event => dragStartHandler(event, index)}
                dragEnterHandler={() => dragEnterHandler(index)}
                dragEndHandler={dragEnd}
                dragOverHandler={dragOverHandler}
                dropHandler={dropHandler}
              />
            ))}
      </CheckboxContext.Provider>
    </div>
  );
};

export default memo(CheckboxGroup);
