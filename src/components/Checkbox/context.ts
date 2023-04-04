import React, { useContext } from 'react';
import { noop } from '@/utils/misc';
import { CheckboxContextProps } from './Checkbox.types';

const defaultContext = {
  inGroup: false,
  values: [],
  updateState: noop
};

export const CheckboxContext =
  React.createContext<CheckboxContextProps>(defaultContext);

export const useCheckboxContext = () => useContext(CheckboxContext);
