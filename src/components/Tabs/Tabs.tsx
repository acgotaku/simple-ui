import React, { useState, useMemo, useEffect } from 'react';
import cls from 'clsx';
import { TabsContext } from './context';
import styles from './tabs.module.css';
import { ITabsProps, TabButton } from './Tabs.types';
import { useTabsKeyboardNav } from './useTabsKeyboardNav';

const Tabs: React.FC<ITabsProps> = ({
  children,
  className = '',
  activeTab = ''
}) => {
  const [currentTab, setCurrentTab] = useState(activeTab);
  const [tabButtons, setTabButtons] = useState<TabButton[]>([]);
  const [handleKeyDown, setTabsRef] = useTabsKeyboardNav();

  const context = useMemo(
    () => ({
      currentTab,
      tabButtons,
      updateButtons: setTabButtons,
      updateTab: setCurrentTab
    }),
    [currentTab, tabButtons]
  );

  useEffect(() => {
    if (!activeTab) {
      const firstChild = tabButtons[0];
      if (firstChild && firstChild.name) {
        setCurrentTab(firstChild.name);
      }
    } else {
      setCurrentTab(activeTab);
    }
  }, [tabButtons, activeTab]);

  return (
    <div className={cls(styles.tabs, className)}>
      <TabsContext.Provider value={context}>
        <div className={styles.nav} ref={setTabsRef} onKeyDown={handleKeyDown}>
          {tabButtons.map(button => {
            const { name, label, disabled } = button;
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
          })}
        </div>
        {children}
      </TabsContext.Provider>
    </div>
  );
};

export default Tabs;
