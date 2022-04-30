import React, { useContext } from 'react';
import { noop } from '@/utils/misc';
import { RadioContextProps } from './Radio.types';

const defaultContext = {
  inGroup: false,
  name: '',
  value: '',
  updateState: noop
};

export const RadioContext =
  React.createContext<RadioContextProps>(defaultContext);

export const useRadioContext = () => useContext(RadioContext);
