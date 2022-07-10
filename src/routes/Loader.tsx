import { Loading } from '@/components';
import styles from './loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <Loading />
    </div>
  );
};
export default Loader;
