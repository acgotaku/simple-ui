import { Link } from 'react-router-dom';
import styles from './about.module.css';

const AboutView = () => {
  return (
    <div className={styles.about}>
        {'about view'}
      <Link to="/">Home</Link>
    </div>
  );
};

export default AboutView;
