import{T as r,a as e,c as l,U as o,j as d,r as n}from"./index.25217346.js";import{u}from"./useTitle.0dd6fec0.js";import{s as c,C as i}from"./view.module.32c29292.js";const h=({className:s="",id:t,...a})=>(t=r(t),e("input",{...a,id:t,type:"checkbox",role:"switch",className:l(o.switch,s)})),m="<Switch />",k=()=>{const[s,t]=n.exports.useState(!0);return e(h,{checked:s,onChange:a=>t(a.currentTarget.checked)})},w=`
const [checked, setChecked] = useState(true);
return (
  <Switch
    checked={checked}
    onChange={event => setChecked(event.currentTarget.checked)}
  />
);
`,S="<Switch disabled />",C=()=>{const[s,t]=n.exports.useState(!0);return e(h,{checked:s,disabled:!0,onChange:a=>t(a.currentTarget.checked)})},p=`
const [checked, setChecked] = useState(true);
return (
  <Switch
    checked={checked}
    disabled={true}
    onChange={event => setChecked(event.currentTarget.checked)}
  />
);
`,N=()=>(u("Switch | Simple UI"),d("article",{className:c.article,children:[e("h1",{className:c.title,children:"Switch"}),e("p",{className:c.desc,children:"Switches allow users to turn an individual option on or off. They are usually used to activate or deactivate a specific setting."}),e("h2",{className:c.heading,children:"Example"}),e("h3",{className:c.caption,children:"Switch (uncontrolled)"}),d("div",{className:c.content,children:[e(h,{}),e("div",{className:c.code,children:e(i,{code:m})})]}),e("h3",{className:c.caption,children:"Checked Switch"}),d("div",{className:c.content,children:[e(k,{}),e("div",{className:c.code,children:e(i,{code:w})})]}),e("h3",{className:c.caption,children:"Disabled Switch"}),d("div",{className:c.content,children:[e(h,{disabled:!0}),e("div",{className:c.code,children:e(i,{code:S})})]}),e("h3",{className:c.caption,children:"Disabled (checked) Switch"}),d("div",{className:c.content,children:[e(C,{}),e("div",{className:c.code,children:e(i,{code:p})})]})]}));var x=N;export{x as default};
