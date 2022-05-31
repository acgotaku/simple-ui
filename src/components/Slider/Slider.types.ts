import React from 'react';

export interface ISliderProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  minValue?: number;
  maxValue?: number;
  step?: number;
  value?: number;
  defaultValue?: number;
  label?: React.ReactNode;
  onChange?: (value: number) => void;
}
