import{j as t,a as e,r,q as s,k as o,v as g,B as p}from"./index.5d70a170.js";import{m as y}from"./index.236f4c9f.js";import{s as a,C as h}from"./view.module.3cf4659e.js";const v="_form_1qh54_1",f="_country_1qh54_5",F="_submit_1qh54_9";var l={form:v,country:f,submit:F};const S=/^(?=.*[A-Za-z])(?=.*\d).{8,}$/,I=()=>{const[u,i]=r.exports.useState({name:"",password:"",country:[]}),[m,n]=r.exports.useState(!0),d=r.exports.useMemo(()=>[{label:"Australia",value:"AU"},{label:"Brazil",value:"BR"},{label:"China",value:"CN"},{label:"Egypt",value:"EG"},{label:"France",value:"FR"},{label:"Germany",value:"DE"},{label:"India",value:"IN"},{label:"Japan",value:"JP"},{label:"Spain",value:"ES"},{label:"United States",value:"US"}],[]),c=r.exports.useMemo(()=>({name:[{required:!0,message:"Name is required",trigger:["change","blur"]}],password:[{required:!0,message:"Password is required",trigger:["change","blur"]},{pattern:S,message:"Invalid password",trigger:"blur"}],country:[{required:!0,type:"array",message:"Country is required",trigger:"change"}]}),[]),b=r.exports.useCallback(()=>{y.info("form submitted.")},[]);return t(s,{className:l.form,values:u,onValuesChange:i,onValidateChange:n,rules:c,onSubmit:b,children:[e(s.Item,{label:"Name",field:"name",children:e(o,{})}),e(s.Item,{label:"Password",field:"password",children:e(o,{type:"password"})}),e(s.Item,{label:"Country",field:"country",children:e(g,{options:d,clearable:!0,filterable:!0,multiSelect:!0,className:l.country})}),e(s.Item,{className:l.submit,children:e(p,{type:"submit",color:"primary",disabled:!m,children:"Login"})})]})},N=`
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
`,w=()=>t("article",{className:a.article,children:[e("h1",{className:a.title,children:"Form"}),e("p",{className:a.desc,children:"Forms allow users to enter data that can be submitted while providing alignment and styling for form fields."}),e("h2",{className:a.heading,children:"Example"}),e("h3",{className:a.caption,children:"Form validate"}),t("div",{className:a.content,children:[e(I,{}),e("div",{className:a.code,children:e(h,{code:N})})]})]});var x=w;export{x as default};
