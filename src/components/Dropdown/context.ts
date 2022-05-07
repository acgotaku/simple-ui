import React, { useContext } from 'react';
import { noop } from '@/utils/misc';
import { DropdownContextProps } from './Dropdown.types';

const defaultContext = {
  onClose: noop
};

export const DropdownContext =
  React.createContext<DropdownContextProps>(defaultContext);

export const useDropdownContext = () => useContext(DropdownContext);
