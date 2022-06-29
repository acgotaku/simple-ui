var N=Object.defineProperty,v=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var o=(e,c,s)=>c in e?N(e,c,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[c]=s,m=(e,c)=>{for(var s in c||(c={}))u.call(c,s)&&o(e,s,c[s]);if(i)for(var s of i(c))k.call(c,s)&&o(e,s,c[s]);return e},w=(e,c)=>v(e,p(c));var S=(e,c)=>{var s={};for(var d in e)u.call(e,d)&&c.indexOf(d)<0&&(s[d]=e[d]);if(e!=null&&i)for(var d of i(e))c.indexOf(d)<0&&k.call(e,d)&&(s[d]=e[d]);return s};import{Q as b,a as t,c as g,T as x,j as h,r as C}from"./index.f9f7ac8a.js";import{s as a,C as n}from"./view.module.a0ce22f2.js";const r=d=>{var l=d,{className:e="",id:c}=l,s=S(l,["className","id"]);return c=b(c),t("input",w(m({},s),{id:c,type:"checkbox",role:"switch",className:g(x.switch,e)}))},f="<Switch />",T=()=>{const[e,c]=C.exports.useState(!0);return t(r,{checked:e,onChange:s=>c(s.currentTarget.checked)})},y=`
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
`,E=()=>h("article",{className:a.article,children:[t("h1",{className:a.title,children:"Switch"}),t("p",{className:a.desc,children:"Switches allow users to turn an individual option on or off. They are usually used to activate or deactivate a specific setting."}),t("h2",{className:a.heading,children:"Example"}),t("h3",{className:a.caption,children:"Switch (uncontrolled)"}),h("div",{className:a.content,children:[t(r,{}),t("div",{className:a.code,children:t(n,{code:f})})]}),t("h3",{className:a.caption,children:"Checked Switch"}),h("div",{className:a.content,children:[t(T,{}),t("div",{className:a.code,children:t(n,{code:y})})]}),t("h3",{className:a.caption,children:"Disabled Switch"}),h("div",{className:a.content,children:[t(r,{disabled:!0}),t("div",{className:a.code,children:t(n,{code:j})})]}),t("h3",{className:a.caption,children:"Disabled (checked) Switch"}),h("div",{className:a.content,children:[t(D,{}),t("div",{className:a.code,children:t(n,{code:$})})]})]});var V=E;export{V as default};
