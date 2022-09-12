import React, { useContext } from 'react';
import { noop } from '@/utils/misc';
import { TabsContextProps } from './Tabs.types';

const defaultContext = {
  currentTab: '',
  tabButtons: [],
  updateButtons: noop,
  updateTab: noop
};

export const TabsContext =
  React.createContext<TabsContextProps>(defaultContext);

export const useTabsContext = () => useContext(TabsContext);
