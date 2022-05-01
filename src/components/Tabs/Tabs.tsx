import React, { useState, useEffect } from 'react';
import cls from 'clsx';
import styles from './tabs.module.css';
import { ITabsProps } from './Tabs.types';
import { useTabsKeyboardNav } from './useTabsKeyboardNav';

const Tabs: React.FC<ITabsProps> = ({
  children,
  className = '',
  activeTab = ''
}) => {
  const [currentTab, setCurrentTab] = useState(activeTab);
  const [handleKeyDown, setTabsRef] = useTabsKeyboardNav();

  useEffect(() => {
    if (!activeTab) {
      const firstChild = React.Children.toArray(children)[0];
      if (firstChild && React.isValidElement(firstChild)) {
        setCurrentTab(firstChild.props.name);
      }
    }
  }, [children, activeTab]);

  return (
    <div className={cls(styles.tabs, className)}>
      <div className={styles.nav} ref={setTabsRef} onKeyDown={handleKeyDown}>
        {React.Children.map(children, child => {
          if (React.isValidElement(child)) {
            const { name, label, disabled } = child.props;
            const active = name === currentTab;
            return (
              <button
                type="button"
                role="tab"
                aria-selected={active}
                key={name}
                className={cls(styles.navButton, {
                  [styles.active]: active
                })}
                tabIndex={active ? 0 : -1}
                disabled={disabled}
                onClick={() => setCurrentTab(name)}
              >
                {label}
              </button>
            );
          } else {
            return null;
          }
        })}
      </div>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          const { name } = child.props;
          if (name === currentTab) {
            return child;
          } else {
            return null;
          }
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default Tabs;
