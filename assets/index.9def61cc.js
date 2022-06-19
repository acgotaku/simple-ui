import{j as o,a as e,r as t,H as l}from"./index.1bafc5fc.js";import{s as a,C as d}from"./view.module.11814ac2.js";const c="_vertical_v80de_1",u="_radio_v80de_7";var i={vertical:c,radio:u};const n=()=>{const[r,s]=t.exports.useState("");return o(l.Group,{value:r,onChange:s,children:[e(l,{value:"Apple",children:"Apple"}),e(l,{value:"Pear",children:"Pear"}),e(l,{value:"Orange",label:"Orange"})]})},p=`
const [value, setValue] = useState<RadioValueType>('');
return (
  <Radio.Group value={value} onChange={setValue}>
    <Radio value={'Apple'}>Apple</Radio>
    <Radio value={'Pear'}>Pear</Radio>
    <Radio value={'Orange'} label={'Orange'} />
  </Radio.Group>
);
`,v=()=>{const[r,s]=t.exports.useState("Pear");return o(l.Group,{value:r,onChange:s,disabled:!0,children:[e(l,{value:"Apple",children:"Apple"}),e(l,{value:"Pear",children:"Pear"}),e(l,{value:"Orange",label:"Orange"})]})},R=`
const [value, setValue] = useState<RadioValueType>('Pear');
return (
  <Radio.Group value={value} onChange={setValue} disabled>
    <Radio value={'Apple'}>Apple</Radio>
    <Radio value={'Pear'}>Pear</Radio>
    <Radio value={'Orange'} label={'Orange'} />
  </Radio.Group>
);
`,h=()=>{const[r,s]=t.exports.useState("");return o(l.Group,{value:r,onChange:s,className:i.vertical,children:[e(l,{value:"React",className:i.radio,children:"React"}),e(l,{value:"Vue",className:i.radio,children:"Vue"}),e(l,{value:"Angular",label:"Angular",className:i.radio,disabled:!0})]})},m=`
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
`,N=()=>o("article",{className:a.article,children:[e("h1",{className:a.title,children:"Radio"}),e("p",{className:a.desc,children:"Radio buttons allow users to select a single option from a list of mutually exclusive options. All possible options are exposed up front for users to compare."}),e("h2",{className:a.heading,children:"Example"}),e("h3",{className:a.caption,children:"Radio Group"}),o("div",{className:a.content,children:[e(n,{}),e("div",{className:a.code,children:e(d,{code:p})})]}),e("h3",{className:a.caption,children:"Disabled Radio Group"}),o("div",{className:a.content,children:[e(v,{}),e("div",{className:a.code,children:e(d,{code:R})})]}),e("h3",{className:a.caption,children:"Radio Group (vertical)"}),o("div",{className:a.content,children:[e(h,{}),e("div",{className:a.code,children:e(d,{code:m})})]})]});var G=N;export{G as default};
