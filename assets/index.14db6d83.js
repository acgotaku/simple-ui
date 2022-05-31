var z=Object.defineProperty,A=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var w=(e,a,s)=>a in e?z(e,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[a]=s,D=(e,a)=>{for(var s in a||(a={}))I.call(a,s)&&w(e,s,a[s]);if(S)for(var s of S(a))H.call(a,s)&&w(e,s,a[s]);return e},E=(e,a)=>A(e,F(a));var j=(e,a)=>{var s={};for(var n in e)I.call(e,n)&&a.indexOf(n)<0&&(s[n]=e[n]);if(e!=null&&S)for(var n of S(e))a.indexOf(n)<0&&H.call(e,n)&&(s[n]=e[n]);return s};import{r,G as J,i as M,j as h,c as C,H as o,a as l}from"./index.03581a8b.js";import{s as t,C as y}from"./view.module.eae11433.js";const k=Y=>{var V=Y,{minValue:e=0,maxValue:a=100,step:s=1,defaultValue:n=0,value:p,label:$,onChange:b,className:B="",disabled:v=!1}=V,K=j(V,["minValue","maxValue","step","defaultValue","value","label","onChange","className","disabled"]);const[d,N]=r.exports.useState(n),[c,u]=r.exports.useState(n),f=r.exports.useMemo(()=>p!==void 0,[p]),g=r.exports.useMemo(()=>c>=e&&c<=a&&(+c-e)%s===0,[c,e,a,s]),R=r.exports.useMemo(()=>{const i=(d-e)/(a-e)*100;return{"--width":`${J(i,0,100)}%`}},[d,e,a]);r.exports.useEffect(()=>{f&&(N(p),u(p))},[f,p]);const q=r.exports.useCallback(i=>{u(i.target.value)},[]),m=r.exports.useCallback(()=>{g?(u(Number(c)),N(Number(c))):u(d)},[c,g,d]),G=r.exports.useCallback(()=>{m()},[m]),T=r.exports.useCallback(i=>{switch(i.key){case M.Escape:{u(d);break}case M.Enter:{m();break}}},[d,m]),W=r.exports.useCallback(i=>{const x=Number(i.target.value);N(x),u(x),b&&b(x)},[b]);return h("div",{className:C(o.slider,B),children:[h("div",{className:o.header,children:[l("label",{className:o.label,children:$}),l("input",{type:"number",className:C(o.input,{[o.invalid]:!g}),min:e,max:a,step:s,disabled:v,value:c,onChange:q,onBlur:G,onKeyDown:T})]}),l("div",{className:C(o.rangeWrapper,{[o.disabled]:v}),style:R,children:l("input",E(D({type:"range",min:e,max:a,step:s,className:o.range,disabled:v,value:d},K),{onChange:W}))})]})},L=`
<Slider label={'Score'} defaultValue={30} />
`,O=()=>{const[e,a]=r.exports.useState(65);return l(k,{label:"Score",value:e,minValue:20,maxValue:200,step:5,onChange:a})},P=`
const [value, setValue] = useState(66);
return (
  <Slider
    label={'Score'}
    value={value}
    minValue={20}
    maxValue={200}
    onChange={e => setValue(Number(e.target.value))}
  />
);
`,Q=()=>{const[e,a]=r.exports.useState(60);return l(k,{label:"Score",value:e,minValue:40,maxValue:100,onChange:a,disabled:!0})},U=`
const [value, setValue] = useState(60);
return (
  <Slider
    label={'Score'}
    value={value}
    minValue={40}
    maxValue={100}
    onChange={e => setValue(Number(e.target.value))}
    disabled
  />
);
`,X=()=>h("article",{className:t.article,children:[l("h1",{className:t.title,children:"Slider"}),l("p",{className:t.desc,children:"Sliders allow users to quickly select a value within a range. They should be used when the upper and lower bounds to the range are invariable."}),l("h2",{className:t.heading,children:"Example"}),l("h3",{className:t.caption,children:"Basic Slider (uncontrolled)"}),h("div",{className:t.content,children:[l(k,{label:"Score",defaultValue:30}),l("div",{className:t.code,children:l(y,{code:L})})]}),l("h3",{className:t.caption,children:"Standard Slider (controlled)"}),h("div",{className:t.content,children:[l(O,{}),l("div",{className:t.code,children:l(y,{code:P})})]}),l("h3",{className:t.caption,children:"Disabled Slider"}),h("div",{className:t.content,children:[l(Q,{}),l("div",{className:t.code,children:l(y,{code:U})})]})]});var ae=X;export{ae as default};
