var N=Object.defineProperty,v=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var l=(e,c,s)=>c in e?N(e,c,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[c]=s,m=(e,c)=>{for(var s in c||(c={}))u.call(c,s)&&l(e,s,c[s]);if(n)for(var s of n(c))k.call(c,s)&&l(e,s,c[s]);return e},w=(e,c)=>v(e,p(c));var S=(e,c)=>{var s={};for(var d in e)u.call(e,d)&&c.indexOf(d)<0&&(s[d]=e[d]);if(e!=null&&n)for(var d of n(e))c.indexOf(d)<0&&k.call(e,d)&&(s[d]=e[d]);return s};import{n as b,a as t,c as g,o as x,j as h,r as C}from"./index.3c04a82b.js";import{s as a,C as i}from"./view.module.f8e5862e.js";const r=d=>{var o=d,{className:e="",id:c}=o,s=S(o,["className","id"]);return c=b(c),t("input",w(m({},s),{id:c,type:"checkbox",role:"switch",className:g(x.switch,e)}))},f="<Switch />",y=()=>{const[e,c]=C.exports.useState(!0);return t(r,{checked:e,onChange:s=>c(s.currentTarget.checked)})},T=`
const [checked, setChecked] = useState(true);
return (
  <Switch
    checked={checked}
    onChange={event => setChecked(event.currentTarget.checked)}
  />
);
`,j="<Switch disabled />",D=()=>{const[e,c]=C.exports.useState(!0);return t(r,{checked:e,disabled:!0,onChange:s=>c(s.currentTarget.checked)})},$=`
const [checked, setChecked] = useState(true);
return (
  <Switch
    checked={checked}
    disabled={true}
    onChange={event => setChecked(event.currentTarget.checked)}
  />
);
`,E=()=>h("article",{className:a.article,children:[t("h1",{className:a.title,children:"Switch"}),t("p",{className:a.desc,children:"Switches allow users to turn an individual option on or off. They are usually used to activate or deactivate a specific setting."}),t("h2",{className:a.heading,children:"Example"}),t("h3",{className:a.caption,children:"Switch (uncontrolled)"}),h("div",{className:a.content,children:[t(r,{}),t("div",{className:a.code,children:t(i,{code:f})})]}),t("h3",{className:a.caption,children:"Checked Switch"}),h("div",{className:a.content,children:[t(y,{}),t("div",{className:a.code,children:t(i,{code:T})})]}),t("h3",{className:a.caption,children:"Disabled Switch"}),h("div",{className:a.content,children:[t(r,{disabled:!0}),t("div",{className:a.code,children:t(i,{code:j})})]}),t("h3",{className:a.caption,children:"Disabled (checked) Switch"}),h("div",{className:a.content,children:[t(D,{}),t("div",{className:a.code,children:t(i,{code:$})})]})]});var q=E;export{q as default};
