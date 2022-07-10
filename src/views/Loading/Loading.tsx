import { Loading } from '@/components';
import { useTitle } from '@/hooks/useTitle';
import Code from '@/components/Code';
import styles from '@/styles/view.module.css';

const loadingCode = `<Loading />`;

const LoadingView = () => {
  useTitle('Loading | Simple UI');

  return (
    <article className={styles.article}>
      <h1 className={styles.title}>Loading</h1>
      <p className={styles.desc}>
        A Loading is an outline of a circle which animates around itself
        indicating to the user that things are processing.
      </p>
      <h2 className={styles.heading}>Example</h2>
      <h3 className={styles.caption}>Loading</h3>
      <div className={styles.content}>
        <Loading />
        <div className={styles.code}>
          <Code code={loadingCode} />
        </div>
      </div>
    </article>
  );
};

export default LoadingView;
