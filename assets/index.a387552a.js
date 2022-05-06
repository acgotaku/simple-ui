import{j as a,a as e,C as n,r}from"./index.3c04a82b.js";import{s as c,C as t}from"./view.module.f8e5862e.js";const h="_vertical_xx7zc_1",i="_checkbox_xx7zc_7";var d={vertical:h,checkbox:i};const b="<Checkbox label={'Unchecked Checkbox (uncontrolled)'} />",u=()=>{const[l,s]=r.exports.useState(!0);return e(n,{label:"Checked Checkbox",checked:l,onChange:o=>s(o.target.checked)})},p=`
const [checked, setChecked] = useState(true);
return (
  <Checkbox
    label={'Checked Checkbox'}
    checked={checked}
    onChange={event => setChecked(event.target.checked)}
  />
);
`,k="<Checkbox label={'Disabled Checkbox'} disabled />",C="<Checkbox label={'Disabled (checked) Checkbox'} disabled checked />",x=()=>{const[l,s]=r.exports.useState(["Apple"]),o=[{label:"Apple",value:"Apple"},{label:"Pear",value:"Pear"},{label:"Orange",value:"Orange"}];return e(n.Group,{options:o,values:l,onChange:s})},v=`
const [values, setValues] = useState<CheckboxValueType[]>(['Apple']);

const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' }
];
return (
  <Checkbox.Group options={options} values={values} onChange={setValues} />
);
`,m=()=>{const[l,s]=r.exports.useState(["Pear"]),o=[{label:"Apple",value:"Apple"},{label:"Pear",value:"Pear"},{label:"Orange",value:"Orange"}];return e(n.Group,{options:o,values:l,onChange:s,className:d.vertical,checkboxClassName:d.checkbox})},N=`
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
`,g=()=>{const[l,s]=r.exports.useState(["Apple"]),o=[{label:"Apple",value:"Apple"},{label:"Pear",value:"Pear"},{label:"Orange",value:"Orange"}];return e(n.Group,{options:o,values:l,onChange:s,disabled:!0})},A=`
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
`,G=()=>a("article",{className:c.article,children:[e("h1",{className:c.title,children:"Checkbox"}),e("p",{className:c.desc,children:"Checkboxes allow users to select multiple items from a list of individual items, or to mark one individual item as selected."}),e("h2",{className:c.heading,children:"Example"}),e("h3",{className:c.caption,children:"Unchecked Checkbox (uncontrolled)"}),a("div",{className:c.content,children:[e(n,{label:"Unchecked Checkbox (uncontrolled)"}),e("div",{className:c.code,children:e(t,{code:b})})]}),e("h3",{className:c.caption,children:"Checked Checkbox"}),a("div",{className:c.content,children:[e(u,{}),e("div",{className:c.code,children:e(t,{code:p})})]}),e("h3",{className:c.caption,children:"Disabled Checkbox"}),a("div",{className:c.content,children:[e(n,{label:"Disabled Checkbox",disabled:!0}),e("div",{className:c.code,children:e(t,{code:k})})]}),e("h3",{className:c.caption,children:"Disabled (checked) Checkbox"}),a("div",{className:c.content,children:[e(n,{label:"Disabled (checked) Checkbox",disabled:!0,checked:!0}),e("div",{className:c.code,children:e(t,{code:C})})]}),e("h3",{className:c.caption,children:"Checkbox Group"}),a("div",{className:c.content,children:[e(x,{}),e("div",{className:c.code,children:e(t,{code:v})})]}),e("h3",{className:c.caption,children:"Checkbox Group (vertical)"}),a("div",{className:c.content,children:[e(m,{}),e("div",{className:c.code,children:e(t,{code:N})})]}),e("h3",{className:c.caption,children:"Disabled Checkbox Group"}),a("div",{className:c.content,children:[e(g,{}),e("div",{className:c.code,children:e(t,{code:A})})]})]});var O=G;export{O as default};
