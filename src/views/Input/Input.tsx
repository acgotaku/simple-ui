import { Input } from '@/components';
import Code from '@/components/Code';
import styles from '@/styles/view.module.css';
import inputStyles from './input.module.css';
import { ReactComponent as Calendar } from '@/assets/icons/calendar.svg';

const standardInputCode = `<Input className={inputStyles.input} defaultValue={'hello world'} />`;
const clearableInputCode = `<Input className={inputStyles.input} defaultValue={'hello world'} clearable />`;
const disabledInputCode = `<Input className={inputStyles.input} defaultValue={'hello world'} disabled />`;
const readOnlyInputCode = `<Input className={inputStyles.input} defaultValue={'hello world'} readOnly />`;
const placeholderInputCode = `<Input className={inputStyles.input} placeholder={'Please input something...'} />`;
const suffixIconInputCode = `<Input className={inputStyles.input} suffix={<Calendar className={inputStyles.icon} />} />`;

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
      <h3 className={styles.caption}>Clearable Input (uncontrolled)</h3>
      <div className={styles.content}>
        <Input
          className={inputStyles.input}
          defaultValue={'hello world'}
          clearable
        />
        <div className={styles.code}>
          <Code code={clearableInputCode} />
        </div>
      </div>
      <h3 className={styles.caption}>Disabled Input (uncontrolled)</h3>
      <div className={styles.content}>
        <Input
          className={inputStyles.input}
          defaultValue={'hello world'}
          disabled
        />
        <div className={styles.code}>
          <Code code={disabledInputCode} />
        </div>
      </div>
      <h3 className={styles.caption}>Read-only Input (uncontrolled)</h3>
      <div className={styles.content}>
        <Input
          className={inputStyles.input}
          defaultValue={'hello world'}
          readOnly
        />
        <div className={styles.code}>
          <Code code={readOnlyInputCode} />
        </div>
      </div>
      <h3 className={styles.caption}>Input with placeholder</h3>
      <div className={styles.content}>
        <Input
          className={inputStyles.input}
          placeholder={'Please input something...'}
        />
        <div className={styles.code}>
          <Code code={placeholderInputCode} />
        </div>
      </div>
      <h3 className={styles.caption}>Input with suffix icon</h3>
      <div className={styles.content}>
        <Input
          className={inputStyles.input}
          suffix={<Calendar className={inputStyles.icon} />}
        />
        <div className={styles.code}>
          <Code code={suffixIconInputCode} />
        </div>
      </div>
    </article>
  );
};

export default InputView;
