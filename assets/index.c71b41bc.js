import{j as a,a as e,C as n,r}from"./index.2587f82c.js";import{u as h}from"./useTitle.63d97bf9.js";import{s as c,C as t}from"./view.module.85f397c2.js";const i="_vertical_xx7zc_1",b="_checkbox_xx7zc_7";var d={vertical:i,checkbox:b};const u="<Checkbox label={'Unchecked Checkbox (uncontrolled)'} />",p=()=>{const[l,s]=r.exports.useState(!0);return e(n,{label:"Checked Checkbox",checked:l,onChange:o=>s(o.target.checked)})},k=`
const [checked, setChecked] = useState(true);
return (
  <Checkbox
    label={'Checked Checkbox'}
    checked={checked}
    onChange={event => setChecked(event.target.checked)}
  />
);
`,C="<Checkbox label={'Disabled Checkbox'} disabled />",x="<Checkbox label={'Disabled (checked) Checkbox'} disabled checked />",v=()=>{const[l,s]=r.exports.useState(["Apple"]),o=[{label:"Apple",value:"Apple"},{label:"Pear",value:"Pear"},{label:"Orange",value:"Orange"}];return e(n.Group,{options:o,values:l,onChange:s})},m=`
const [values, setValues] = useState<CheckboxValueType[]>(['Apple']);

const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' }
];
return (
  <Checkbox.Group options={options} values={values} onChange={setValues} />
);
`,N=()=>{const[l,s]=r.exports.useState(["Pear"]),o=[{label:"Apple",value:"Apple"},{label:"Pear",value:"Pear"},{label:"Orange",value:"Orange"}];return e(n.Group,{options:o,values:l,onChange:s,className:d.vertical,checkboxClassName:d.checkbox})},g=`
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
`,A=()=>{const[l,s]=r.exports.useState(["Apple"]),o=[{label:"Apple",value:"Apple"},{label:"Pear",value:"Pear"},{label:"Orange",value:"Orange"}];return e(n.Group,{options:o,values:l,onChange:s,disabled:!0})},G=`
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
`,V=()=>(h("Checkbox | Simple UI"),a("article",{className:c.article,children:[e("h1",{className:c.title,children:"Checkbox"}),e("p",{className:c.desc,children:"Checkboxes allow users to select multiple items from a list of individual items, or to mark one individual item as selected."}),e("h2",{className:c.heading,children:"Example"}),e("h3",{className:c.caption,children:"Unchecked Checkbox (uncontrolled)"}),a("div",{className:c.content,children:[e(n,{label:"Unchecked Checkbox (uncontrolled)"}),e("div",{className:c.code,children:e(t,{code:u})})]}),e("h3",{className:c.caption,children:"Checked Checkbox"}),a("div",{className:c.content,children:[e(p,{}),e("div",{className:c.code,children:e(t,{code:k})})]}),e("h3",{className:c.caption,children:"Disabled Checkbox"}),a("div",{className:c.content,children:[e(n,{label:"Disabled Checkbox",disabled:!0}),e("div",{className:c.code,children:e(t,{code:C})})]}),e("h3",{className:c.caption,children:"Disabled (checked) Checkbox"}),a("div",{className:c.content,children:[e(n,{label:"Disabled (checked) Checkbox",disabled:!0,checked:!0}),e("div",{className:c.code,children:e(t,{code:x})})]}),e("h3",{className:c.caption,children:"Checkbox Group"}),a("div",{className:c.content,children:[e(v,{}),e("div",{className:c.code,children:e(t,{code:m})})]}),e("h3",{className:c.caption,children:"Checkbox Group (vertical)"}),a("div",{className:c.content,children:[e(N,{}),e("div",{className:c.code,children:e(t,{code:g})})]}),e("h3",{className:c.caption,children:"Disabled Checkbox Group"}),a("div",{className:c.content,children:[e(A,{}),e("div",{className:c.code,children:e(t,{code:G})})]})]}));var D=V;export{D as default};
