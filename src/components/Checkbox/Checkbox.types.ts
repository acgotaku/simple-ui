import React from 'react';

export type CheckboxValueType = string | number | boolean;

export interface ICheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value'> {
  /* Checkbox label */
  label?: React.ReactNode;
  value?: CheckboxValueType;
  invalid?: boolean;
  draggable?: boolean;
  dragStartHandler?: (event: React.DragEvent<HTMLElement>) => void;
  dragEnterHandler?: () => void;
  dragEndHandler?: () => void;
  dragOverHandler?: (event: React.DragEvent<HTMLElement>) => void;
  dropHandler?: (event: React.DragEvent<HTMLElement>) => void;
}

export interface CheckboxOptionType {
  label: React.ReactNode;
  value: CheckboxValueType;
  disabled?: boolean;
}

export interface ICheckboxGroupProps {
  values?: Array<CheckboxValueType>;
  onChange?: (checkedValue: Array<CheckboxValueType>) => void;
  className?: string;
  checkboxClassName?: string;
  draggable?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  options?: Array<CheckboxOptionType>;
  children?: React.ReactNode;
}

export interface CheckboxContextProps {
  inGroup: boolean;
  values: Array<CheckboxValueType>;
  updateState: (checkedValue: Array<CheckboxValueType>) => void;
  disabled?: boolean;
  invalid?: boolean;
}
