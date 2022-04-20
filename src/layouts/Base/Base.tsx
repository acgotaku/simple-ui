import React, { useState, useMemo } from 'react';
import { Outlet } from 'react-router-dom';
import { useClickOutside } from '@/hooks/useClickOutside';
import Header from '../Header';
import Sidebar from '../Sidebar';
import styles from './base.module.css';
import { BaseContext } from './context';

const BaseLayout: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [headerElement, setHeaderElement] = useState<HTMLElement | null>(null);
  const [sidebarElement, setSidebarElement] = useState<HTMLElement | null>(
    null
  );
  useClickOutside(() => setOpenMenu(false), [headerElement, sidebarElement]);

  const context = useMemo(
    () => ({
      openMenu,
      setOpenMenu
    }),
    [openMenu]
  );

  return (
    <BaseContext.Provider value={context}>
      <div className={styles.base}>
        <Header ref={setHeaderElement} />
        <div className={styles.container}>
          <Sidebar ref={setSidebarElement} />
          <main className={styles.main}>
            <div className={styles.inner}>
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </BaseContext.Provider>
  );
};

export default BaseLayout;
