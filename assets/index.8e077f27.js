import{j as o,a as e,r as t,H as l}from"./index.2587f82c.js";import{u}from"./useTitle.63d97bf9.js";import{s as a,C as d}from"./view.module.85f397c2.js";const c="_vertical_v80de_1",n="_radio_v80de_7";var i={vertical:c,radio:n};const p=()=>{const[r,s]=t.exports.useState("");return o(l.Group,{value:r,onChange:s,children:[e(l,{value:"Apple",children:"Apple"}),e(l,{value:"Pear",children:"Pear"}),e(l,{value:"Orange",label:"Orange"})]})},v=`
const [value, setValue] = useState<RadioValueType>('');
return (
  <Radio.Group value={value} onChange={setValue}>
    <Radio value={'Apple'}>Apple</Radio>
    <Radio value={'Pear'}>Pear</Radio>
    <Radio value={'Orange'} label={'Orange'} />
  </Radio.Group>
);
`,R=()=>{const[r,s]=t.exports.useState("Pear");return o(l.Group,{value:r,onChange:s,disabled:!0,children:[e(l,{value:"Apple",children:"Apple"}),e(l,{value:"Pear",children:"Pear"}),e(l,{value:"Orange",label:"Orange"})]})},h=`
const [value, setValue] = useState<RadioValueType>('Pear');
return (
  <Radio.Group value={value} onChange={setValue} disabled>
    <Radio value={'Apple'}>Apple</Radio>
    <Radio value={'Pear'}>Pear</Radio>
    <Radio value={'Orange'} label={'Orange'} />
  </Radio.Group>
);
`,m=()=>{const[r,s]=t.exports.useState("");return o(l.Group,{value:r,onChange:s,className:i.vertical,children:[e(l,{value:"React",className:i.radio,children:"React"}),e(l,{value:"Vue",className:i.radio,children:"Vue"}),e(l,{value:"Angular",label:"Angular",className:i.radio,disabled:!0})]})},N=`
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
`,g=()=>(u("Radio | Simple UI"),o("article",{className:a.article,children:[e("h1",{className:a.title,children:"Radio"}),e("p",{className:a.desc,children:"Radio buttons allow users to select a single option from a list of mutually exclusive options. All possible options are exposed up front for users to compare."}),e("h2",{className:a.heading,children:"Example"}),e("h3",{className:a.caption,children:"Radio Group"}),o("div",{className:a.content,children:[e(p,{}),e("div",{className:a.code,children:e(d,{code:v})})]}),e("h3",{className:a.caption,children:"Disabled Radio Group"}),o("div",{className:a.content,children:[e(R,{}),e("div",{className:a.code,children:e(d,{code:h})})]}),e("h3",{className:a.caption,children:"Radio Group (vertical)"}),o("div",{className:a.content,children:[e(m,{}),e("div",{className:a.code,children:e(d,{code:N})})]})]}));var A=g;export{A as default};
