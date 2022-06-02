import React from 'react';

export interface RangeValue<T> {
  /** The start value of the range. */
  start: T;
  /** The end value of the range. */
  end: T;
}

export interface IBaseSliderProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'onChange' | 'value' | 'defaultValue'
  > {
  minValue?: number;
  maxValue?: number;
  step?: number;
  label?: React.ReactNode;
}

export interface ISliderProps extends IBaseSliderProps {
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
}

export interface IRangeSliderProps extends IBaseSliderProps {
  value?: RangeValue<number>;
  defaultValue?: RangeValue<number>;
  onChange?: (value: RangeValue<number>) => void;
}
