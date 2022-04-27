var p=Object.defineProperty,N=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var u=(e,c,t)=>c in e?p(e,c,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[c]=t,w=(e,c)=>{for(var t in c||(c={}))k.call(c,t)&&u(e,t,c[t]);if(h)for(var t of h(c))m.call(c,t)&&u(e,t,c[t]);return e},S=(e,c)=>N(e,v(c));var C=(e,c)=>{var t={};for(var d in e)k.call(e,d)&&c.indexOf(d)<0&&(t[d]=e[d]);if(e!=null&&h)for(var d of h(e))c.indexOf(d)<0&&m.call(e,d)&&(t[d]=e[d]);return t};import{r,g,a as s,c as b,h as f,j as n}from"./index.d2921468.js";import{s as a,C as i}from"./view.module.9df30955.js";function x(e){const[c,t]=r.exports.useState("");return r.exports.useEffect(()=>{t(g())},[]),e||c}const o=d=>{var l=d,{className:e="",id:c}=l,t=C(l,["className","id"]);return c=x(c),s("input",S(w({},t),{id:c,type:"checkbox",role:"switch",className:b(f.switch,e)}))},y="<Switch />",T=()=>{const[e,c]=r.exports.useState(!0);return s(o,{checked:e,onChange:t=>c(t.currentTarget.checked)})},j=`
const [checked, setChecked] = useState(true);
return (
  <Switch
    checked={checked}
    onChange={event => setChecked(event.currentTarget.checked)}
  />
);
`,D="<Switch disabled />",I=()=>{const[e,c]=r.exports.useState(!0);return s(o,{checked:e,disabled:!0,onChange:t=>c(t.currentTarget.checked)})},E=`
const [checked, setChecked] = useState(true);
return (
  <Switch
    checked={checked}
    disabled={true}
    onChange={event => setChecked(event.currentTarget.checked)}
  />
);
`,$=()=>n("article",{className:a.article,children:[s("h1",{className:a.title,children:"Switch"}),s("p",{className:a.desc,children:"Switches allow users to turn an individual option on or off. They are usually used to activate or deactivate a specific setting."}),s("h2",{className:a.heading,children:"Example"}),s("h3",{className:a.caption,children:"Switch (uncontrolled)"}),n("div",{className:a.content,children:[s(o,{}),s("div",{className:a.code,children:s(i,{code:y})})]}),s("h3",{className:a.caption,children:"Checked Switch"}),n("div",{className:a.content,children:[s(T,{}),s("div",{className:a.code,children:s(i,{code:j})})]}),s("h3",{className:a.caption,children:"Disabled Switch"}),n("div",{className:a.content,children:[s(o,{disabled:!0}),s("div",{className:a.code,children:s(i,{code:D})})]}),s("h3",{className:a.caption,children:"Disabled(checked) Switch"}),n("div",{className:a.content,children:[s(I,{}),s("div",{className:a.code,children:s(i,{code:E})})]})]});var z=$;export{z as default};
