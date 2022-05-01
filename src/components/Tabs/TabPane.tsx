import React from 'react';
import cls from 'clsx';
import styles from './tabs.module.css';
import { ITabPaneProps } from './Tabs.types';

const TabPane: React.FC<ITabPaneProps> = ({ children, className = '' }) => {
  return (
    <div className={cls(styles.tab, className)} role="tabpanel">
      {children}
    </div>
  );
};

export default TabPane;
