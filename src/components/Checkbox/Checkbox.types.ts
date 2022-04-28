import React from 'react';

export interface ICheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /* Checkbox label */
  label?: React.ReactNode;
}

export type CheckboxValueType = string | number | boolean;

export interface CheckboxOptionType {
  label: React.ReactNode;
  value: CheckboxValueType;
  disabled?: boolean;
}

export interface ICheckboxGroupProps {
  options: Array<CheckboxOptionType>;
  values: Array<CheckboxValueType>;
  onChange: (checkedValue: Array<CheckboxValueType>) => void;
  className?: string;
  checkboxClassName?: string;
  disabled?: boolean;
}
