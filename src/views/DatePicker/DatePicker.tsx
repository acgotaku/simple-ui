import { useState } from 'react';
import { DatePicker } from '@/components';
import { useTitle } from '@/hooks/useTitle';
import { DatePickerValueType } from '@/components/DatePicker';
import Code from '@/components/Code';
import styles from '@/styles/view.module.css';
import datepickerStyles from './datepicker.module.css';

const BasicDatePicker = () => {
  const [date, setDate] = useState<Date>();

  return (
    <div className={datepickerStyles.picker}>
      <DatePicker value={date} onChange={setDate} clearable />
    </div>
  );
};

const StringDatePicker = () => {
  const [date, setDate] = useState<DatePickerValueType | undefined>(
    '2020-05-05'
  );

  return (
    <div className={datepickerStyles.picker}>
      <DatePicker value={date} onChange={setDate} clearable />
    </div>
  );
};

const basicDatePickerCode = `
const [date, setDate] = useState<Date>();

return (
  <div className={datepickerStyles.picker}>
    <DatePicker value={date} onChange={setDate} clearable />
  </div>
);
`;

const stringDatePickerCode = `
const [date, setDate] = useState<DatePickerValueType | undefined>(
  '2020-05-05'
);

return (
  <div className={datepickerStyles.picker}>
    <DatePicker value={date} onChange={setDate} clearable />
  </div>
);
`;

const DatePickerView = () => {
  useTitle('DatePicker | Simple UI');

  return (
    <article className={styles.article}>
      <h1 className={styles.title}>DatePicker</h1>
      <p className={styles.desc}>
        DatePickers show a calendar view to allow users to enter or select a
        date.
      </p>
      <h2 className={styles.heading}>Example</h2>
      <h3 className={styles.caption}>Basic DatePicker</h3>
      <div className={styles.content}>
        <BasicDatePicker />
        <div className={styles.code}>
          <Code code={basicDatePickerCode} />
        </div>
      </div>
      <h3 className={styles.caption}>String DatePicker</h3>
      <div className={styles.content}>
        <StringDatePicker />
        <div className={styles.code}>
          <Code code={stringDatePickerCode} />
        </div>
      </div>
    </article>
  );
};

export default DatePickerView;
