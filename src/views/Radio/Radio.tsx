import { useState } from 'react';
import { Radio } from '@/components';
import { RadioValueType } from '@/components/Radio';
import { useTitle } from '@/hooks/useTitle';
import Code from '@/components/Code';
import styles from '@/styles/view.module.css';
import radioStyles from './radio.module.css';

const RadioGroup = () => {
  const [value, setValue] = useState<RadioValueType>('');
  return (
    <Radio.Group value={value} onChange={setValue}>
      <Radio value={'Apple'}>Apple</Radio>
      <Radio value={'Pear'}>Pear</Radio>
      <Radio value={'Orange'} label={'Orange'} />
    </Radio.Group>
  );
};

const radioGroupCode = `
const [value, setValue] = useState<RadioValueType>('');
return (
  <Radio.Group value={value} onChange={setValue}>
    <Radio value={'Apple'}>Apple</Radio>
    <Radio value={'Pear'}>Pear</Radio>
    <Radio value={'Orange'} label={'Orange'} />
  </Radio.Group>
);
`;

const DisabledCheckboxGroup = () => {
  const [value, setValue] = useState<RadioValueType>('Pear');
  return (
    <Radio.Group value={value} onChange={setValue} disabled>
      <Radio value={'Apple'}>Apple</Radio>
      <Radio value={'Pear'}>Pear</Radio>
      <Radio value={'Orange'} label={'Orange'} />
    </Radio.Group>
  );
};

const disabledCheckboxGroupCode = `
const [value, setValue] = useState<RadioValueType>('Pear');
return (
  <Radio.Group value={value} onChange={setValue} disabled>
    <Radio value={'Apple'}>Apple</Radio>
    <Radio value={'Pear'}>Pear</Radio>
    <Radio value={'Orange'} label={'Orange'} />
  </Radio.Group>
);
`;

const RadioGroupVertical = () => {
  const [value, setValue] = useState<RadioValueType>('');
  return (
    <Radio.Group
      value={value}
      onChange={setValue}
      className={radioStyles.vertical}
    >
      <Radio value={'React'} className={radioStyles.radio}>
        React
      </Radio>
      <Radio value={'Vue'} className={radioStyles.radio}>
        Vue
      </Radio>
      <Radio
        value={'Angular'}
        label={'Angular'}
        className={radioStyles.radio}
        disabled
      />
    </Radio.Group>
  );
};

const radioGroupVerticalCode = `
const [value, setValue] = useState<RadioValueType>('');
return (
  <Radio.Group
    value={value}
    onChange={setValue}
    className={radioStyles.vertical}
  >
    <Radio value={'React'} className={radioStyles.radio}>
      React
    </Radio>
    <Radio value={'Vue'} className={radioStyles.radio}>
      Vue
    </Radio>
    <Radio
      value={'Angular'}
      label={'Angular'}
      className={radioStyles.radio}
      disabled
    />
  </Radio.Group>
);
`;

const RadioView = () => {
  useTitle('Radio | Simple UI');

  return (
    <article className={styles.article}>
      <h1 className={styles.title}>Radio</h1>
      <p className={styles.desc}>
        Radio buttons allow users to select a single option from a list of
        mutually exclusive options. All possible options are exposed up front
        for users to compare.
      </p>
      <h2 className={styles.heading}>Example</h2>
      <h3 className={styles.caption}>Radio Group</h3>
      <div className={styles.content}>
        <RadioGroup />
        <div className={styles.code}>
          <Code code={radioGroupCode} />
        </div>
      </div>
      <h3 className={styles.caption}>Disabled Radio Group</h3>
      <div className={styles.content}>
        <DisabledCheckboxGroup />
        <div className={styles.code}>
          <Code code={disabledCheckboxGroupCode} />
        </div>
      </div>
      <h3 className={styles.caption}>Radio Group (vertical)</h3>
      <div className={styles.content}>
        <RadioGroupVertical />
        <div className={styles.code}>
          <Code code={radioGroupVerticalCode} />
        </div>
      </div>
    </article>
  );
};

export default RadioView;
