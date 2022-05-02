import React, { useContext } from 'react';
import { noop } from '@/utils/misc';
import { CollapseContextProps } from './Collapse.types';

const defaultContext = {
  currentPanel: [],
  accordion: false,
  updatePanel: noop
};

export const CollapseContext =
  React.createContext<CollapseContextProps>(defaultContext);

export const useCollapseContext = () => useContext(CollapseContext);
