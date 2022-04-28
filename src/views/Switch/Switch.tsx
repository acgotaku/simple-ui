import { useState } from 'react';
import { Switch } from '@/components';
import Code from '@/components/Code';
import styles from '@/styles/view.module.css';

const switchCode = `<Switch />`;

const CheckedSwitch = () => {
  const [checked, setChecked] = useState(true);
  return (
    <Switch
      checked={checked}
      onChange={event => setChecked(event.currentTarget.checked)}
    />
  );
};

const checkedSwitchCode = `
const [checked, setChecked] = useState(true);
return (
  <Switch
    checked={checked}
    onChange={event => setChecked(event.currentTarget.checked)}
  />
);
`;

const disabledSwitchCode = `<Switch disabled />`;

const DisabledCheckedSwitch = () => {
  const [checked, setChecked] = useState(true);
  return (
    <Switch
      checked={checked}
      disabled={true}
      onChange={event => setChecked(event.currentTarget.checked)}
    />
  );
};
const disabledCheckedSwitchCode = `
const [checked, setChecked] = useState(true);
return (
  <Switch
    checked={checked}
    disabled={true}
    onChange={event => setChecked(event.currentTarget.checked)}
  />
);
`;

const SwitchView = () => {
  return (
    <article className={styles.article}>
      <h1 className={styles.title}>Switch</h1>
      <p className={styles.desc}>
        Switches allow users to turn an individual option on or off. They are
        usually used to activate or deactivate a specific setting.
      </p>
      <h2 className={styles.heading}>Example</h2>
      <h3 className={styles.caption}>Switch (uncontrolled)</h3>
      <div className={styles.content}>
        <Switch />
        <div className={styles.code}>
          <Code code={switchCode} />
        </div>
      </div>
      <h3 className={styles.caption}>Checked Switch</h3>
      <div className={styles.content}>
        <CheckedSwitch />
        <div className={styles.code}>
          <Code code={checkedSwitchCode} />
        </div>
      </div>
      <h3 className={styles.caption}>Disabled Switch</h3>
      <div className={styles.content}>
        <Switch disabled />
        <div className={styles.code}>
          <Code code={disabledSwitchCode} />
        </div>
      </div>
      <h3 className={styles.caption}>Disabled (checked) Switch</h3>
      <div className={styles.content}>
        <DisabledCheckedSwitch />
        <div className={styles.code}>
          <Code code={disabledCheckedSwitchCode} />
        </div>
      </div>
    </article>
  );
};

export default SwitchView;
