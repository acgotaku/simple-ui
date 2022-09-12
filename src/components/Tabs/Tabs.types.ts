import React from 'react';

export interface ITabsProps {
  children: React.ReactNode;
  activeTab?: string;
  className?: string;
}

export interface ITabPaneProps {
  children: React.ReactNode;
  label: React.ReactNode;
  name: string;
  disabled?: boolean;
  className?: string;
}

export interface TabButton {
  label: React.ReactNode;
  name: string;
  disabled?: boolean;
}

export interface TabsContextProps {
  currentTab: string;
  tabButtons: TabButton[];
  updateButtons: React.Dispatch<React.SetStateAction<TabButton[]>>;
  updateTab: React.Dispatch<React.SetStateAction<string>>;
}
