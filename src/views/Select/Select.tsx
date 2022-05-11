import { useState } from 'react';
import cls from 'clsx';
import { Select } from '@/components';
import { SelectValueType } from '@/components/Select';
import Code from '@/components/Code';
import styles from '@/styles/view.module.css';
import selectStyles from './select.module.css';

const BasicSingleSelect = () => {
  const [value, setValue] = useState<SelectValueType>('');

  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange', disabled: true }
  ];
  return (
    <Select
      options={options}
      value={value}
      onSelect={setValue}
      clearable
      className={selectStyles.select}
    />
  );
};

const BasicDisbledSingleSelect = () => {
  const [value, setValue] = useState<SelectValueType>('');

  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange', disabled: true }
  ];
  return (
    <Select
      options={options}
      value={value}
      onSelect={setValue}
      disabled
      className={selectStyles.select}
    />
  );
};

const basicSingleSelectCode = `
const [value, setValue] = useState<SelectValueType>('');

const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: true }
];
return (
  <Select
    options={options}
    value={value}
    onSelect={setValue}
    clearable
    className={selectStyles.select}
  />
);
`;

const BasicFilterableSingleSelect = () => {
  const [country, setCountry] = useState<SelectValueType>('');

  const countries = [
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
  ];
  return (
    <Select
      options={countries}
      value={country}
      onSelect={setCountry}
      clearable
      filterable
      className={selectStyles.select}
    />
  );
};

const basicFilterableSingleSelectCode = `
const [country, setCountry] = useState<SelectValueType>('');

const countries = [
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
];
return (
  <Select
    options={countries}
    value={country}
    onSelect={setCountry}
    clearable
    filterable
    className={selectStyles.select}
  />
);
`;

const AdvancedSingleSelect = () => {
  const [country, setCountry] = useState<SelectValueType>('');

  const countries = [
    { label: 'Australia', value: 'AU' },
    { label: 'Brazil', value: 'BR' },
    { label: 'China', value: 'CN' },
    { label: 'Egypt', value: 'EG' },
    { label: 'France', value: 'FR' },
    { label: 'Germany', value: 'DE' },
    { label: 'India', value: 'IN' },
    { label: 'Japan', value: 'JP' },
    { label: 'Spain', value: 'ES', disabled: true },
    { label: 'United States', value: 'US' }
  ];
  return (
    <Select
      value={country}
      onSelect={setCountry}
      clearable
      filterable
      className={selectStyles.country}
    >
      {countries.map(option => {
        return (
          <Select.Option
            value={option.value}
            label={option.label}
            key={option.value}
          >
            <button
              className={cls(selectStyles.countryItem, {
                [selectStyles.selected]: option.value === country
              })}
              disabled={option.disabled}
            >
              <span>{option.label}</span>
              <span>{option.value}</span>
            </button>
          </Select.Option>
        );
      })}
    </Select>
  );
};

const advancedSingleSelectCode = `
const [country, setCountry] = useState<SelectValueType>('');

const countries = [
  { label: 'Australia', value: 'AU' },
  { label: 'Brazil', value: 'BR' },
  { label: 'China', value: 'CN' },
  { label: 'Egypt', value: 'EG' },
  { label: 'France', value: 'FR' },
  { label: 'Germany', value: 'DE' },
  { label: 'India', value: 'IN' },
  { label: 'Japan', value: 'JP' },
  { label: 'Spain', value: 'ES', disabled: true },
  { label: 'United States', value: 'US' }
];
return (
  <Select
    value={country}
    onSelect={setCountry}
    clearable
    filterable
    className={selectStyles.country}
  >
    {countries.map(option => {
      return (
        <Select.Option
          value={option.value}
          label={option.label}
          key={option.value}
        >
          <button
            className={cls(selectStyles.countryItem, {
              [selectStyles.selected]: option.value === country
            })}
            disabled={option.disabled}
          >
            <span>{option.label}</span>
            <span>{option.value}</span>
          </button>
        </Select.Option>
      );
    })}
  </Select>
);
`;

const BasicMultipleSelect = () => {
  const [country, setCountry] = useState<SelectValueType[]>([]);

  const countries = [
    { label: 'Australia', value: 'AU' },
    { label: 'Brazil', value: 'BR' },
    { label: 'China', value: 'CN' },
    { label: 'Egypt', value: 'EG' },
    { label: 'France', value: 'FR' },
    { label: 'Germany', value: 'DE' },
    { label: 'India', value: 'IN', disabled: true },
    { label: 'Japan', value: 'JP' },
    { label: 'Spain', value: 'ES' },
    { label: 'United States', value: 'US' }
  ];
  return (
    <Select
      options={countries}
      value={country}
      onSelect={setCountry}
      multiSelect
      clearable
      filterable
      className={selectStyles.country}
    />
  );
};

const basicMultipleSelectCode = `
const [country, setCountry] = useState<SelectValueType[]>([]);

const countries = [
  { label: 'Australia', value: 'AU' },
  { label: 'Brazil', value: 'BR' },
  { label: 'China', value: 'CN' },
  { label: 'Egypt', value: 'EG' },
  { label: 'France', value: 'FR' },
  { label: 'Germany', value: 'DE' },
  { label: 'India', value: 'IN', disabled: true },
  { label: 'Japan', value: 'JP' },
  { label: 'Spain', value: 'ES' },
  { label: 'United States', value: 'US' }
];
return (
  <Select
    options={countries}
    value={country}
    onSelect={setCountry}
    multiSelect
    clearable
    filterable
    className={selectStyles.country}
  />
);
`;

const BasicMultipleSelectWithVirtualScroll = () => {
  const [value, setValue] = useState<SelectValueType[]>([]);

  const options = Array.from(Array(100).keys()).map(key => ({
    label: 'option -' + key,
    value: key
  }));

  return (
    <Select
      options={options}
      value={value}
      filterable
      multiSelect
      virtualScroll
      onSelect={setValue}
      className={selectStyles.select}
    />
  );
};

const basicMultipleSelectWithVirtualScrollCode = `
const [value, setValue] = useState<SelectValueType[]>([]);

const options = Array.from(Array(100).keys()).map(key => ({
  label: 'option -' + key,
  value: key
}));

return (
  <Select
    options={options}
    value={value}
    filterable
    multiSelect
    virtualScroll
    onSelect={setValue}
    className={selectStyles.select}
  />
);
`;

const AdvancedMultipleSelect = () => {
  const [country, setCountry] = useState<SelectValueType[]>([]);

  const countries = [
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
  ];
  return (
    <Select
      value={country}
      onSelect={setCountry}
      multiSelect
      clearable
      filterable
      className={selectStyles.country}
    >
      {countries.map(option => {
        return (
          <Select.Option
            value={option.value}
            label={option.label}
            key={option.value}
          >
            <button
              className={cls(selectStyles.countryItem, {
                [selectStyles.selected]: country.includes(option.value)
              })}
            >
              <span>{option.label}</span>
              <span>{option.value}</span>
            </button>
          </Select.Option>
        );
      })}
    </Select>
  );
};

const advancedMultipleSelectCode = `
const [country, setCountry] = useState<SelectValueType[]>([]);

const countries = [
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
];
return (
  <Select
    value={country}
    onSelect={setCountry}
    multiSelect
    clearable
    filterable
    className={selectStyles.country}
  >
    {countries.map(option => {
      return (
        <Select.Option
          value={option.value}
          label={option.label}
          key={option.value}
        >
          <button
            className={cls(selectStyles.countryItem, {
              [selectStyles.selected]: country.includes(option.value)
            })}
          >
            <span>{option.label}</span>
            <span>{option.value}</span>
          </button>
        </Select.Option>
      );
    })}
  </Select>
);
`;

const SelectView = () => {
  return (
    <article className={styles.article}>
      <h1 className={styles.title}>Select</h1>
      <p className={styles.desc}>
        Select components are used for collecting user provided information from
        a list of options.
      </p>
      <h2 className={styles.heading}>Example</h2>
      <h3 className={styles.caption}>Basic Single Select</h3>
      <div className={styles.content}>
        <div className={selectStyles.wrapper}>
          <BasicSingleSelect />
          <BasicDisbledSingleSelect />
          <BasicFilterableSingleSelect />
        </div>
        <div className={styles.code}>
          <Code code={basicSingleSelectCode} />
          <Code code={basicFilterableSingleSelectCode} />
        </div>
      </div>
      <h3 className={styles.caption}>Advanced Single Select</h3>
      <div className={styles.content}>
        <div className={selectStyles.wrapper}>
          <AdvancedSingleSelect />
        </div>
        <div className={styles.code}>
          <Code code={advancedSingleSelectCode} />
        </div>
      </div>
      <h3 className={styles.caption}>Baisc Multiple Select</h3>
      <div className={styles.content}>
        <div className={selectStyles.wrapper}>
          <BasicMultipleSelect />
        </div>
        <div className={styles.code}>
          <Code code={basicMultipleSelectCode} />
        </div>
      </div>
      <h3 className={styles.caption}>
        Baisc Multiple Select with virtual scroll
      </h3>
      <div className={styles.content}>
        <div className={selectStyles.wrapper}>
          <BasicMultipleSelectWithVirtualScroll />
        </div>
        <div className={styles.code}>
          <Code code={basicMultipleSelectWithVirtualScrollCode} />
        </div>
      </div>
      <h3 className={styles.caption}>Advanced Multiple Select</h3>
      <div className={styles.content}>
        <div className={selectStyles.wrapper}>
          <AdvancedMultipleSelect />
        </div>
        <div className={styles.code}>
          <Code code={advancedMultipleSelectCode} />
        </div>
      </div>
    </article>
  );
};

export default SelectView;
