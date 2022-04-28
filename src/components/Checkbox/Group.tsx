import React, { useCallback } from 'react';
import cls from 'clsx';
import styles from './checkbox.module.css';
import { ICheckboxGroupProps, CheckboxValueType } from './Checkbox.types';
import Checkbox from './Checkbox';

const CheckboxGroup: React.FC<ICheckboxGroupProps> = ({
  options,
  values,
  className = '',
  checkboxClassName = '',
  disabled = false,
  onChange
}) => {
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
        const indexA = options.findIndex(opt => opt.value === a);
        const indexB = options.findIndex(opt => opt.value === b);
        return indexA - indexB;
      });
      onChange(sortedValues);
    },
    [values, options, onChange]
  );

  return (
    <div className={cls(styles.group, className)}>
      {options.map(option => (
        <Checkbox
          key={option.value.toString()}
          label={option.label}
          checked={values.includes(option.value)}
          onChange={() => onCheckboxChange(option.value)}
          disabled={disabled || option.disabled}
          className={checkboxClassName}
        />
      ))}
    </div>
  );
};

export default CheckboxGroup;
