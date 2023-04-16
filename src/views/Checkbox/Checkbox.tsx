import { useMemo, useState } from 'react';
import { Checkbox } from '@/components';
import { useTitle } from '@/hooks/useTitle';
import { CheckboxValueType } from '@/components/Checkbox';
import Code from '@/components/Code';
import styles from '@/styles/view.module.css';
import checkboxStyles from './checkbox.module.css';

const uncheckedCheckboxCode = `<Checkbox label={'Unchecked Checkbox (uncontrolled)'} />`;

const CheckedCheckbox = () => {
  const [checked, setChecked] = useState(true);
  return (
    <Checkbox
      label={'Checked Checkbox'}
      checked={checked}
      onChange={event => setChecked(event.target.checked)}
    />
  );
};

const checkedCheckboxCode = `
const [checked, setChecked] = useState(true);
return (
  <Checkbox
    label={'Checked Checkbox'}
    checked={checked}
    onChange={event => setChecked(event.target.checked)}
  />
);
`;
const disabledCheckboxCode = `<Checkbox label={'Disabled Checkbox'} disabled />`;
const disableCheckedCheckboxCode = `<Checkbox label={'Disabled (checked) Checkbox'} disabled checked />`;
const CheckboxGroup = () => {
  const [values, setValues] = useState<CheckboxValueType[]>(['Apple']);

  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' }
  ];
  return (
    <Checkbox.Group options={options} values={values} onChange={setValues} />
  );
};

const checkboxGroupCode = `
const [values, setValues] = useState<CheckboxValueType[]>(['Apple']);

const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' }
];
return (
  <Checkbox.Group options={options} values={values} onChange={setValues} />
);
`;

const DraggableCheckboxGroup = () => {
  const [values, setValues] = useState<CheckboxValueType[]>(['CN']);

  const options = useMemo(
    () => [
      { label: 'Australia', value: 'AU' },
      { label: 'Brazil', value: 'BR' },
      { label: 'China', value: 'CN' },
      { label: 'Egypt', value: 'EG' },
      { label: 'France', value: 'FR' },
      { label: 'Germany', value: 'DE' },
      { label: 'India', value: 'IN' },
      { label: 'Japan', value: 'JP' },
      { label: 'Spain', value: 'ES' },
      { label: 'United States', value: 'US' }
    ],
    []
  );
  return (
    <Checkbox.Group
      options={options}
      values={values}
      onChange={setValues}
      draggable
    />
  );
};

const draggableCheckboxGroupCode = `
const [values, setValues] = useState<CheckboxValueType[]>(['CN']);

const options = useMemo(
  () => [
    { label: 'Australia', value: 'AU' },
    { label: 'Brazil', value: 'BR' },
    { label: 'China', value: 'CN' },
    { label: 'Egypt', value: 'EG' },
    { label: 'France', value: 'FR' },
    { label: 'Germany', value: 'DE' },
    { label: 'India', value: 'IN' },
    { label: 'Japan', value: 'JP' },
    { label: 'Spain', value: 'ES' },
    { label: 'United States', value: 'US' }
  ],
  []
);
return (
  <Checkbox.Group
    options={options}
    values={values}
    onChange={setValues}
    draggable
  />
);
`;

const AdvancedCheckboxGroup = () => {
  const [values, setValues] = useState<CheckboxValueType[]>(['Apple']);

  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' }
  ];
  return (
    <Checkbox.Group values={values} onChange={setValues}>
      {options.map(option => (
        <Checkbox value={option.value} key={option.value}>
          {option.label}
        </Checkbox>
      ))}
    </Checkbox.Group>
  );
};

const advancedCheckboxGroupCode = `
const [values, setValues] = useState<CheckboxValueType[]>(['Apple']);

const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' }
];
return (
  <Checkbox.Group values={values} onChange={setValues}>
    {options.map(option => (
      <Checkbox value={option.value} key={option.value}>
        {option.label}
      </Checkbox>
    ))}
  </Checkbox.Group>
);
`;

const CheckboxGroupVertical = () => {
  const [values, setValues] = useState<CheckboxValueType[]>(['Pear']);

  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' }
  ];
  return (
    <Checkbox.Group
      options={options}
      values={values}
      onChange={setValues}
      className={checkboxStyles.vertical}
      checkboxClassName={checkboxStyles.checkbox}
    />
  );
};

const checkboxGroupVerticalCode = `
const [values, setValues] = useState<CheckboxValueType[]>(['Pear']);

const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' }
];
return (
  <Checkbox.Group
    options={options}
    values={values}
    onChange={setValues}
    className={checkboxStyles.vertical}
    checkboxClassName={checkboxStyles.checkbox}
  />
);
`;

const DisabledCheckboxGroup = () => {
  const [values, setValues] = useState<CheckboxValueType[]>(['Apple']);

  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' }
  ];
  return (
    <Checkbox.Group
      options={options}
      values={values}
      onChange={setValues}
      disabled
    />
  );
};

const disabledCheckboxGroupCode = `
const [values, setValues] = useState<CheckboxValueType[]>(['Apple']);

const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' }
];
return (
  <Checkbox.Group
    options={options}
    values={values}
    onChange={setValues}
    disabled
  />
);
`;

const CheckboxView = () => {
  useTitle('Checkbox | Simple UI');

  return (
    <article className={styles.article}>
      <h1 className={styles.title}>Checkbox</h1>
      <p className={styles.desc}>
        Checkboxes allow users to select multiple items from a list of
        individual items, or to mark one individual item as selected.
      </p>
      <h2 className={styles.heading}>Example</h2>
      <h3 className={styles.caption}>Unchecked Checkbox (uncontrolled)</h3>
      <div className={styles.content}>
        <Checkbox label={'Unchecked Checkbox (uncontrolled)'} />
        <div className={styles.code}>
          <Code code={uncheckedCheckboxCode} />
        </div>
      </div>
      <h3 className={styles.caption}>Checked Checkbox</h3>
      <div className={styles.content}>
        <CheckedCheckbox />
        <div className={styles.code}>
          <Code code={checkedCheckboxCode} />
        </div>
      </div>
      <h3 className={styles.caption}>Disabled Checkbox</h3>
      <div className={styles.content}>
        <Checkbox label={'Disabled Checkbox'} disabled />
        <div className={styles.code}>
          <Code code={disabledCheckboxCode} />
        </div>
      </div>
      <h3 className={styles.caption}>Disabled (checked) Checkbox</h3>
      <div className={styles.content}>
        <Checkbox label={'Disabled (checked) Checkbox'} disabled checked />
        <div className={styles.code}>
          <Code code={disableCheckedCheckboxCode} />
        </div>
      </div>
      <h3 className={styles.caption}>Checkbox Group</h3>
      <div className={styles.content}>
        <CheckboxGroup />
        <div className={styles.code}>
          <Code code={checkboxGroupCode} />
        </div>
      </div>
      <h3 className={styles.caption}>Draggable Checkbox Group</h3>
      <div className={styles.content}>
        <DraggableCheckboxGroup />
        <div className={styles.code}>
          <Code code={draggableCheckboxGroupCode} />
        </div>
      </div>
      <h3 className={styles.caption}>Advanced Checkbox Group</h3>
      <div className={styles.content}>
        <AdvancedCheckboxGroup />
        <div className={styles.code}>
          <Code code={advancedCheckboxGroupCode} />
        </div>
      </div>
      <h3 className={styles.caption}>Checkbox Group (vertical)</h3>
      <div className={styles.content}>
        <CheckboxGroupVertical />
        <div className={styles.code}>
          <Code code={checkboxGroupVerticalCode} />
        </div>
      </div>
      <h3 className={styles.caption}>Disabled Checkbox Group</h3>
      <div className={styles.content}>
        <DisabledCheckboxGroup />
        <div className={styles.code}>
          <Code code={disabledCheckboxGroupCode} />
        </div>
      </div>
    </article>
  );
};

export default CheckboxView;
