var p=Object.defineProperty,N=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var o=(e,c,s)=>c in e?p(e,c,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[c]=s,k=(e,c)=>{for(var s in c||(c={}))u.call(c,s)&&o(e,s,c[s]);if(h)for(var s of h(c))m.call(c,s)&&o(e,s,c[s]);return e},w=(e,c)=>N(e,v(c));var S=(e,c)=>{var s={};for(var d in e)u.call(e,d)&&c.indexOf(d)<0&&(s[d]=e[d]);if(e!=null&&h)for(var d of h(e))c.indexOf(d)<0&&m.call(e,d)&&(s[d]=e[d]);return s};import{Q as b,a as t,c as g,T as f,j as i,r as C}from"./index.9b8c4711.js";import{u as x}from"./useTitle.25573cff.js";import{s as a,C as n}from"./view.module.940b1c9c.js";const r=d=>{var l=d,{className:e="",id:c}=l,s=S(l,["className","id"]);return c=b(c),t("input",w(k({},s),{id:c,type:"checkbox",role:"switch",className:g(f.switch,e)}))},T="<Switch />",y=()=>{const[e,c]=C.exports.useState(!0);return t(r,{checked:e,onChange:s=>c(s.currentTarget.checked)})},j=`
const [checked, setChecked] = useState(true);
return (
  <Switch
    checked={checked}
    onChange={event => setChecked(event.currentTarget.checked)}
  />
);
`,D="<Switch disabled />",I=()=>{const[e,c]=C.exports.useState(!0);return t(r,{checked:e,disabled:!0,onChange:s=>c(s.currentTarget.checked)})},$=`
const [checked, setChecked] = useState(true);
return (
  <Switch
    checked={checked}
    disabled={true}
    onChange={event => setChecked(event.currentTarget.checked)}
  />
);
`,E=()=>(x("Switch | Simple UI"),i("article",{className:a.article,children:[t("h1",{className:a.title,children:"Switch"}),t("p",{className:a.desc,children:"Switches allow users to turn an individual option on or off. They are usually used to activate or deactivate a specific setting."}),t("h2",{className:a.heading,children:"Example"}),t("h3",{className:a.caption,children:"Switch (uncontrolled)"}),i("div",{className:a.content,children:[t(r,{}),t("div",{className:a.code,children:t(n,{code:T})})]}),t("h3",{className:a.caption,children:"Checked Switch"}),i("div",{className:a.content,children:[t(y,{}),t("div",{className:a.code,children:t(n,{code:j})})]}),t("h3",{className:a.caption,children:"Disabled Switch"}),i("div",{className:a.content,children:[t(r,{disabled:!0}),t("div",{className:a.code,children:t(n,{code:D})})]}),t("h3",{className:a.caption,children:"Disabled (checked) Switch"}),i("div",{className:a.content,children:[t(I,{}),t("div",{className:a.code,children:t(n,{code:$})})]})]}));var q=E;export{q as default};
