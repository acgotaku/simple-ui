var z=Object.defineProperty,A=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var w=(e,a,l)=>a in e?z(e,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[a]=l,D=(e,a)=>{for(var l in a||(a={}))I.call(a,l)&&w(e,l,a[l]);if(b)for(var l of b(a))H.call(a,l)&&w(e,l,a[l]);return e},E=(e,a)=>A(e,F(a));var j=(e,a)=>{var l={};for(var n in e)I.call(e,n)&&a.indexOf(n)<0&&(l[n]=e[n]);if(e!=null&&b)for(var n of b(e))a.indexOf(n)<0&&H.call(e,n)&&(l[n]=e[n]);return l};import{r,G as J,i as M,j as h,c as x,H as d,a as s}from"./index.a1c17a2d.js";import{s as t,C}from"./view.module.73e8c58c.js";const y=Y=>{var k=Y,{minValue:e=0,maxValue:a=100,step:l=1,defaultValue:n=0,value:p,label:$,onChange:S,className:B="",disabled:v=!1}=k,K=j(k,["minValue","maxValue","step","defaultValue","value","label","onChange","className","disabled"]);const[i,N]=r.exports.useState(n),[c,u]=r.exports.useState(n),V=r.exports.useMemo(()=>p!==void 0,[p]),g=r.exports.useMemo(()=>c>=e&&c<=a&&(+c-e)%l===0,[c,e,a,l]),R=r.exports.useMemo(()=>{const o=(i-e)/(a-e)*100;return{"--width":`${J(o,0,100)}%`}},[i,e,a]);r.exports.useEffect(()=>{V&&(N(p),u(p))},[V,p]);const q=r.exports.useCallback(o=>{u(o.target.value)},[]),m=r.exports.useCallback(()=>{g?(u(Number(c)),N(Number(c))):u(i)},[c,g,i]),G=r.exports.useCallback(()=>{m()},[m]),T=r.exports.useCallback(o=>{switch(o.key){case M.Escape:{u(i);break}case M.Enter:{m();break}}},[i,m]),W=r.exports.useCallback(o=>{const f=Number(o.target.value);N(f),u(f),S&&S(o)},[S]);return h("div",{className:x(d.slider,B),children:[h("div",{className:d.header,children:[s("label",{className:d.label,children:$}),s("input",{type:"number",className:x(d.input,{[d.invalid]:!g}),min:e,max:a,step:l,disabled:v,value:c,onChange:q,onBlur:G,onKeyDown:T})]}),s("div",{className:x(d.rangeWrapper,{[d.disabled]:v}),style:R,children:s("input",E(D({type:"range",min:e,max:a,step:l,className:d.range,disabled:v,value:i},K),{onChange:W}))})]})},L=`
<Slider label={'Score'} defaultValue={30} />
`,O=()=>{const[e,a]=r.exports.useState(65);return s(y,{label:"Score",value:e,minValue:20,maxValue:200,step:5,onChange:l=>a(Number(l.target.value))})},P=`
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
`,Q=()=>{const[e,a]=r.exports.useState(60);return s(y,{label:"Score",value:e,minValue:40,maxValue:100,onChange:l=>a(Number(l.target.value)),disabled:!0})},U=`
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
`,X=()=>h("article",{className:t.article,children:[s("h1",{className:t.title,children:"Slider"}),s("p",{className:t.desc,children:"Sliders allow users to quickly select a value within a range. They should be used when the upper and lower bounds to the range are invariable."}),s("h2",{className:t.heading,children:"Example"}),s("h3",{className:t.caption,children:"Basic Slider (uncontrolled)"}),h("div",{className:t.content,children:[s(y,{label:"Score",defaultValue:30}),s("div",{className:t.code,children:s(C,{code:L})})]}),s("h3",{className:t.caption,children:"Standard Slider (controlled)"}),h("div",{className:t.content,children:[s(O,{}),s("div",{className:t.code,children:s(C,{code:P})})]}),s("h3",{className:t.caption,children:"Disabled Slider"}),h("div",{className:t.content,children:[s(Q,{}),s("div",{className:t.code,children:s(C,{code:U})})]})]});var ae=X;export{ae as default};
