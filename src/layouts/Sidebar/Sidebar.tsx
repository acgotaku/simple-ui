import { forwardRef } from 'react';
import { NavLink } from 'react-router-dom';
import cls from 'clsx';
import type { LinkProps } from 'react-router-dom';
import styles from './sidebar.module.css';
import { useBaseContext } from '../Base/context';

const Link = ({ children, to, ...props }: LinkProps) => {
  return (
    <NavLink
      className={({ isActive }) =>
        styles.link + (isActive ? ` ${styles.activated}` : '')
      }
      to={to}
      {...props}
    >
      {children}
    </NavLink>
  );
};

const Sidebar = forwardRef<HTMLElement>((props, ref) => {
  const { openMenu, setOpenMenu } = useBaseContext();

  return (
    <aside
      className={cls(styles.sidebar, {
        [styles.open]: openMenu
      })}
      ref={ref}
    >
      <div className={styles.inner}>
        <nav className={styles.nav}>
          <h3 className={styles.heading}>Components</h3>
          <ol className={styles.navList} onClick={() => setOpenMenu(false)}>
            <li className={styles.navItem}>
              <Link to="/button">Button</Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/checkbox">Checkbox</Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/collapse">Collapse</Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/input">Input</Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/link">Link</Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/message">Message</Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/modal">Modal</Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/radio">Radio</Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/switch">Switch</Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/tabs">Tabs</Link>
            </li>
          </ol>
        </nav>
      </div>
    </aside>
  );
});

Sidebar.displayName = 'Sidebar';

export default Sidebar;
