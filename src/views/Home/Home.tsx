import { Link } from 'react-router-dom';
import styles from './home.module.css';

const HomeView = () => {
  return (
    <div className={styles.home}>
      {'home view'}
      <Link to="/about">About</Link>
    </div>
  );
};

export default HomeView;
