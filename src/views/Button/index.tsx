import { Button } from '@/components';
import styles from './button.module.css';

const ButtonView = () => {
  return (
    <article className={styles.article}>
      <h1 className={styles.title}>Button</h1>
      <p className={styles.desc}>
        Buttons allow users to perform an action or to navigate to another page.
        They have multiple styles for various needs, and are ideal for calling
        attention to where a user needs to do something in order to move forward
        in a flow.
      </p>
      <h2 className={styles.heading}>Example</h2>
      <h3 className={styles.caption}>Default Button</h3>
      <div className={styles.content}>
        <Button>{'Standard'}</Button>
      </div>
    </article>
  );
};

export default ButtonView;
