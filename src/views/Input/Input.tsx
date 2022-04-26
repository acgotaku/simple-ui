import { Input } from '@/components';
import Code from '@/components/Code';
import styles from '@/styles/view.module.css';
import inputStyles from './input.module.css';

const standardInputCode = `<Input className={inputStyles.input} defaultValue={'hello'} />`;

const InputView = () => {
  return (
    <article className={styles.article}>
      <h1 className={styles.title}>Input</h1>
      <p className={styles.desc}>
        Inputs that allow users to input custom text entries with a keyboard.
        Various decorations can be displayed around the field to communicate the
        entry requirements.
      </p>
      <h2 className={styles.heading}>Example</h2>
      <h3 className={styles.caption}>Standard Input (uncontrolled)</h3>
      <div className={styles.content}>
        <Input className={inputStyles.input} defaultValue={'hello world'} />
        <div className={styles.code}>
          <Code code={standardInputCode} />
        </div>
      </div>
    </article>
  );
};

export default InputView;
