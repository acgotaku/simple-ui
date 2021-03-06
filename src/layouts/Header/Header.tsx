import { forwardRef } from 'react';
import cls from 'clsx';
import { Link } from '@/components';
import { ReactComponent as Logo } from '@/assets/logo.svg';
import styles from './header.module.css';
import { useBaseContext } from '../Base/context';

const Header = forwardRef<HTMLElement>((props, ref) => {
  const { openMenu, setOpenMenu } = useBaseContext();
  return (
    <header className={styles.header} ref={ref}>
      <div className={styles.inner}>
        <button
          className={styles.menu}
          onClick={() => setOpenMenu(open => !open)}
        >
          <span
            className={cls(styles.menuIcon, {
              [styles.open]: openMenu
            })}
          ></span>
        </button>
        <Link to="/" className={styles.home}>
          <Logo className={styles.icon} />
          <span className={styles.text}>Simple UI</span>
        </Link>
        <Link
          href="https://github.com/acgotaku/simple-ui"
          className={styles.github}
        >
          Github
        </Link>
      </div>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
