import { Link } from '@/components';
import { useTitle } from '@/hooks/useTitle';
import styles from './home.module.css';

const HomeView = () => {
  useTitle('Simple UI');

  return (
    <article className={styles.home}>
      <h1 className={styles.title}>Simple UI</h1>
      <p className={styles.desc}>
        Learn how to build a simple user interface from the soucre code.
      </p>
      <Link
        className={styles.link}
        href="https://github.com/acgotaku/simple-ui"
      >
        Github
      </Link>
    </article>
  );
};

export default HomeView;
