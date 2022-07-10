import{j as t,a as e,r,w as s,l as o,x as p,B as g}from"./index.4c5daa55.js";import{m as y}from"./index.1bc979ee.js";import{u as h}from"./useTitle.5783f7b1.js";import{s as a,C as f}from"./view.module.2318c4f8.js";const v="_form_1qh54_1",F="_country_1qh54_5",S="_submit_1qh54_9";var l={form:v,country:F,submit:S};const I=/^(?=.*[A-Za-z])(?=.*\d).{8,}$/,N=()=>{const[u,m]=r.exports.useState({name:"",password:"",country:[]}),[i,n]=r.exports.useState(!0),d=r.exports.useMemo(()=>[{label:"Australia",value:"AU"},{label:"Brazil",value:"BR"},{label:"China",value:"CN"},{label:"Egypt",value:"EG"},{label:"France",value:"FR"},{label:"Germany",value:"DE"},{label:"India",value:"IN"},{label:"Japan",value:"JP"},{label:"Spain",value:"ES"},{label:"United States",value:"US"}],[]),c=r.exports.useMemo(()=>({name:[{required:!0,message:"Name is required",trigger:["change","blur"]}],password:[{required:!0,message:"Password is required",trigger:["change","blur"]},{pattern:I,message:"Invalid password",trigger:"blur"}],country:[{required:!0,type:"array",message:"Country is required",trigger:"change"}]}),[]),b=r.exports.useCallback(()=>{y.info("form submitted.")},[]);return t(s,{className:l.form,values:u,onValuesChange:m,onValidateChange:n,rules:c,onSubmit:b,children:[e(s.Item,{label:"Name",field:"name",children:e(o,{})}),e(s.Item,{label:"Password",field:"password",children:e(o,{type:"password"})}),e(s.Item,{label:"Country",field:"country",children:e(p,{options:d,clearable:!0,filterable:!0,multiSelect:!0,className:l.country})}),e(s.Item,{className:l.submit,children:e(g,{type:"submit",color:"primary",disabled:!i,children:"Login"})})]})},w=`
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
`,C=()=>(h("Form | Simple UI"),t("article",{className:a.article,children:[e("h1",{className:a.title,children:"Form"}),e("p",{className:a.desc,children:"Forms allow users to enter data that can be submitted while providing alignment and styling for form fields."}),e("h2",{className:a.heading,children:"Example"}),e("h3",{className:a.caption,children:"Form validate"}),t("div",{className:a.content,children:[e(N,{}),e("div",{className:a.code,children:e(f,{code:w})})]})]}));var _=C;export{_ as default};
