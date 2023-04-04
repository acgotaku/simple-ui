import React, {
  useEffect,
  useMemo,
  useCallback,
  useState,
  useRef
} from 'react';
import cls from 'clsx';
import { noop, deepClone } from '@/utils/misc';
import styles from './checkbox.module.css';
import {
  ICheckboxGroupProps,
  CheckboxValueType,
  CheckboxOptionType
} from './Checkbox.types';
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
  const [sortedOptions, setSortedOptions] = useState(options);
  const copyOptions = useRef<CheckboxOptionType[]>(options);
  const dragItem = useRef<number>(0);
  const dragOverItem = useRef<number>(0);

  useEffect(() => {
    setSortedOptions(options);
  }, [options]);

  const dragStartHandler = useCallback(
    (event: React.DragEvent<HTMLDivElement>, index: number) => {
      event.dataTransfer.effectAllowed = 'move';
      dragItem.current = index;
      copyOptions.current = deepClone(sortedOptions);
    },
    [sortedOptions]
  );

  const dragEnterHandler = useCallback((index: number) => {
    dragOverItem.current = index;
    const newOptions = deepClone(copyOptions.current);
    const dragOption = newOptions[dragItem.current];
    newOptions.splice(dragItem.current, 1);
    newOptions.splice(dragOverItem.current, 0, dragOption);
    setSortedOptions(newOptions);
  }, []);

  const dragEndHandler = useCallback(() => {
    // update values
    const newValues = [...values];
    const sortedValues = newValues.sort((a, b) => {
      const indexA = sortedOptions.findIndex(opt => opt.value === a);
      const indexB = sortedOptions.findIndex(opt => opt.value === b);
      return indexA - indexB;
    });
    onChange?.(sortedValues);
  }, [values, sortedOptions, onChange]);

  const onCheckboxChange = useCallback(
    (value: CheckboxValueType) => {
      const newValues = [...values];
      const optionIndex = newValues.indexOf(value);
      if (optionIndex === -1) {
        newValues.push(value);
      } else {
        newValues.splice(optionIndex, 1);
      }

      const sortedValues = newValues.sort((a, b) => {
        const indexA = sortedOptions.findIndex(opt => opt.value === a);
        const indexB = sortedOptions.findIndex(opt => opt.value === b);
        return indexA - indexB;
      });
      onChange?.(sortedValues);
    },
    [values, sortedOptions, onChange]
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
    <div className={cls(styles.group, className)}>
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
                dragEndHandler={dragEndHandler}
              />
            ))}
      </CheckboxContext.Provider>
    </div>
  );
};

export default CheckboxGroup;
