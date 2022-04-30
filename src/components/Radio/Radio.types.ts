import React from 'react';

export interface IRadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'value'> {
  value?: RadioValueType;
  /* Radio label */
  label?: React.ReactNode;
}

export type RadioValueType = string | number | boolean;

export interface IRadioGroupProps {
  children: React.ReactNode;
  value: RadioValueType;
  onChange: (checkedValue: RadioValueType) => void;
  name?: string;
  className?: string;
  disabled?: boolean;
}

export interface RadioContextProps {
  inGroup: boolean;
  name: string;
  value: RadioValueType;
  updateState: (checkedValue: RadioValueType) => void;
  disabled?: boolean;
}
