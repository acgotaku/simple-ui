import React, { useEffect } from 'react';
import cls from 'clsx';
import { useTabsContext } from './context';
import styles from './tabs.module.css';
import { ITabPaneProps } from './Tabs.types';

const TabPane: React.FC<ITabPaneProps> = ({
  name,
  label,
  disabled,
  className = '',
  children
}) => {
  const { currentTab, updateButtons } = useTabsContext();
  useEffect(() => {
    updateButtons(prevButtons => {
      const index = prevButtons.findIndex(button => button.name === name);
      const tabButton = {
        name,
        label,
        disabled
      };
      const newButtons = [...prevButtons];
      if (index > -1) {
        newButtons.splice(index, 1, tabButton);
      } else {
        newButtons.push(tabButton);
      }
      return newButtons;
    });
  }, [updateButtons, name, label, disabled]);
  if (currentTab === name) {
    return (
      <div className={cls(styles.tab, className)} role="tabpanel">
        {children}
      </div>
    );
  } else {
    return null;
  }
};

export default TabPane;
