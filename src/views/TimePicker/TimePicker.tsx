import { useState } from 'react';
import { TimePicker } from '@/components';
import { useTitle } from '@/hooks/useTitle';
import Code from '@/components/Code';
import styles from '@/styles/view.module.css';
import datepickerStyles from './timepicker.module.css';

const BasicTimePicker = () => {
  const [time, setTime] = useState('');

  return (
    <div className={datepickerStyles.picker}>
      <TimePicker value={time} onChange={setTime} clearable />
    </div>
  );
};

const basicTimePickerCode = `
const [time, setTime] = useState('');

return (
  <div className={datepickerStyles.picker}>
    <TimePicker value={time} onChange={setTime} clearable />
  </div>
);
`;

const WithSecondsTimePicker = () => {
  const [time, setTime] = useState('');

  return (
    <div className={datepickerStyles.picker}>
      <TimePicker value={time} onChange={setTime} withSeconds clearable />
    </div>
  );
};

const withSecondsTimePickerCode = `
const [time, setTime] = useState('');

return (
  <div className={datepickerStyles.picker}>
    <TimePicker value={time} onChange={setTime} withSeconds clearable />
  </div>
);
`;

const DisabledTimePicker = () => {
  const [time, setTime] = useState('');

  return (
    <div className={datepickerStyles.picker}>
      <TimePicker value={time} onChange={setTime} disabled />
    </div>
  );
};

const disabledTimePickerCode = `
const [time, setTime] = useState('');

return (
  <div className={datepickerStyles.picker}>
    <TimePicker value={time} onChange={setTime} disabled />
  </div>
);
`;

const TimePickerView = () => {
  useTitle('TimePicker | Simple UI');

  return (
    <article className={styles.article}>
      <h1 className={styles.title}>TimePicker</h1>
      <p className={styles.desc}>
        TimePickers show an optimized drop-down list to allow users to enter or
        select a time.
      </p>
      <h2 className={styles.heading}>Example</h2>
      <h3 className={styles.caption}>Basic TimePicker</h3>
      <div className={styles.content}>
        <BasicTimePicker />
        <div className={styles.code}>
          <Code code={basicTimePickerCode} />
        </div>
      </div>
      <h3 className={styles.caption}>With seconds TimePicker</h3>
      <div className={styles.content}>
        <WithSecondsTimePicker />
        <div className={styles.code}>
          <Code code={withSecondsTimePickerCode} />
        </div>
      </div>
      <h3 className={styles.caption}>Disabled TimePicker</h3>
      <div className={styles.content}>
        <DisabledTimePicker />
        <div className={styles.code}>
          <Code code={disabledTimePickerCode} />
        </div>
      </div>
    </article>
  );
};

export default TimePickerView;
