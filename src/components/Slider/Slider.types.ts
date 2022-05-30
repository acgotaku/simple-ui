import React from 'react';

export interface ISliderProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  minValue?: number;
  maxValue?: number;
  step?: number;
  value?: number;
  defaultValue?: number;
  label?: React.ReactNode;
}
