import { Button } from '@/components';
import { useTitle } from '@/hooks/useTitle';
import Code from '@/components/Code';
import styles from '@/styles/view.module.css';

const defaultButtonCode = `<Button>{'Standard'}</Button>`;
const primaryButtonCode = `<Button color="primary">{'Primary'}</Button>`;
const dangerButtonCode = `<Button color="danger">{'Danger'}</Button>`;
const disabledButtonCode = `<Button disabled={true}>{'Disabled'}</Button>`;
const loadingButtonCode = `<Button loading={true}>{'Loading'}</Button>`;

const ButtonView = () => {
  useTitle('Button | Simple UI');

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
        <div className={styles.code}>
          <Code code={defaultButtonCode} />
        </div>
      </div>
      <h3 className={styles.caption}>Primary Button</h3>
      <div className={styles.content}>
        <Button color="primary">{'Primary'}</Button>
        <div className={styles.code}>
          <Code code={primaryButtonCode} />
        </div>
      </div>
      <h3 className={styles.caption}>Danger Button</h3>
      <div className={styles.content}>
        <Button color="danger">{'Danger'}</Button>
        <div className={styles.code}>
          <Code code={dangerButtonCode} />
        </div>
      </div>
      <h3 className={styles.caption}>Disabled Button</h3>
      <div className={styles.content}>
        <Button disabled={true}>{'Disabled'}</Button>
        <div className={styles.code}>
          <Code code={disabledButtonCode} />
        </div>
      </div>
      <h3 className={styles.caption}>Loading Button</h3>
      <div className={styles.content}>
        <Button loading={true}>{'Loading'}</Button>
        <div className={styles.code}>
          <Code code={loadingButtonCode} />
        </div>
      </div>
    </article>
  );
};

export default ButtonView;
