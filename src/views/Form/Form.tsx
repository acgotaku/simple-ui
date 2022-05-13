import { useCallback, useMemo, useState } from 'react';
import { Form, Input, Select, message, Button } from '@/components';
import { FormValues, Rules } from '@/components/Form';
import Code from '@/components/Code';
import styles from '@/styles/view.module.css';
import formStyles from './form.module.css';

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

const FormValidate = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    password: '',
    country: []
  });
  const [valid, setValid] = useState(true);

  const countries = useMemo(
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

  const rules: Rules = useMemo(
    () => ({
      name: [
        {
          required: true,
          message: 'Name is required',
          trigger: ['change', 'blur']
        }
      ],
      password: [
        {
          required: true,
          message: 'Password is required',
          trigger: ['change', 'blur']
        },
        {
          pattern: passwordRegex,
          message: 'Invalid password',
          trigger: 'blur'
        }
      ],
      country: [
        {
          required: true,
          type: 'array',
          message: 'Country is required',
          trigger: 'change'
        }
      ]
    }),
    []
  );

  const submitForm = useCallback(() => {
    message.info('form submitted.');
  }, []);

  return (
    <Form
      className={formStyles.form}
      values={formValues}
      onValuesChange={setFormValues}
      onValidateChange={setValid}
      rules={rules}
      onSubmit={submitForm}
    >
      <Form.Item label="Name" field="name">
        <Input />
      </Form.Item>
      <Form.Item label="Password" field="password">
        <Input type="password" />
      </Form.Item>
      <Form.Item label="Country" field="country">
        <Select
          options={countries}
          clearable
          filterable
          multiSelect
          className={formStyles.country}
        />
      </Form.Item>
      <Form.Item className={formStyles.submit}>
        <Button type="submit" color="primary" disabled={!valid}>
          {'Login'}
        </Button>
      </Form.Item>
    </Form>
  );
};

const formValidateCode = `
const [formValues, setFormValues] = useState<FormValues>({
  name: '',
  password: '',
  country: []
});
const [valid, setValid] = useState(true);

const countries = useMemo(
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

const rules: Rules = useMemo(
  () => ({
    name: [
      {
        required: true,
        message: 'Name is required',
        trigger: ['change', 'blur']
      }
    ],
    password: [
      {
        required: true,
        message: 'Password is required',
        trigger: ['change', 'blur']
      },
      {
        pattern: passwordRegex,
        message: 'Invalid password',
        trigger: 'blur'
      }
    ],
    country: [
      {
        required: true,
        type: 'array',
        message: 'Country is required',
        trigger: 'change'
      }
    ]
  }),
  []
);

const submitForm = useCallback(() => {
  message.info('form submitted.');
}, []);

return (
  <Form
    className={formStyles.form}
    values={formValues}
    onValuesChange={setFormValues}
    onValidateChange={setValid}
    rules={rules}
    onSubmit={submitForm}
  >
    <Form.Item label="Name" field="name">
      <Input />
    </Form.Item>
    <Form.Item label="Password" field="password">
      <Input type="password" />
    </Form.Item>
    <Form.Item label="Country" field="country">
      <Select
        options={countries}
        clearable
        filterable
        multiSelect
        className={formStyles.country}
      />
    </Form.Item>
    <Form.Item className={formStyles.submit}>
      <Button type="submit" color="primary" disabled={!valid}>
        {'Login'}
      </Button>
    </Form.Item>
  </Form>
);
`;
const FormView = () => {
  return (
    <article className={styles.article}>
      <h1 className={styles.title}>Form</h1>
      <p className={styles.desc}>
        Forms allow users to enter data that can be submitted while providing
        alignment and styling for form fields.
      </p>
      <h2 className={styles.heading}>Example</h2>
      <h3 className={styles.caption}>Form validate</h3>
      <div className={styles.content}>
        <FormValidate />
        <div className={styles.code}>
          <Code code={formValidateCode} />
        </div>
      </div>
    </article>
  );
};

export default FormView;
