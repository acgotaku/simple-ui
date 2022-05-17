import React, { useContext } from 'react';
import { noop } from '@/utils/misc';
import { DateContextProps } from './DatePicker.types';

const defaultContext = {
  currentDate: new Date(),
  currentYear: 0,
  currentMonth: 0,
  setCurrentDate: noop,
  setView: noop,
  backToDateView: noop
};

export const DateContext =
  React.createContext<DateContextProps>(defaultContext);

export const useDateContext = () => useContext(DateContext);
