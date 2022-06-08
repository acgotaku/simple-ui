import{j as t,a as e,J as r,r as d}from"./index.633fae18.js";import{s as a,C as n}from"./view.module.2e8680b5.js";const i=`
<Slider label={'Score'} defaultValue={30} />
`,o=()=>{const[l,s]=d.exports.useState(65);return e(r,{label:"Score",value:l,minValue:20,maxValue:200,step:5,onChange:s})},u=`
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
`,h=()=>{const[l,s]=d.exports.useState(60);return e(r,{label:"Score",value:l,minValue:40,maxValue:100,onChange:s,disabled:!0})},S=`
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
`,m=()=>{const[l,s]=d.exports.useState({start:20,end:80});return e(r.Range,{label:"Price range",value:l,step:2,onChange:s})},c=`
const [value, setValue] = useState({
  start: 20,
  end: 80
});
return (
  <Slider.Range
    label={'Price range'}
    value={value}
    step={2}
    onChange={setValue}
  />
);
`,v=()=>{const[l,s]=d.exports.useState({start:20,end:80});return e(r.Range,{label:"Price range",value:l,step:2,onChange:s,disabled:!0})},b=()=>t("article",{className:a.article,children:[e("h1",{className:a.title,children:"Slider"}),e("p",{className:a.desc,children:"Sliders allow users to quickly select a value within a range. They should be used when the upper and lower bounds to the range are invariable."}),e("h2",{className:a.heading,children:"Example"}),e("h3",{className:a.caption,children:"Basic Slider (uncontrolled)"}),t("div",{className:a.content,children:[e(r,{label:"Score",defaultValue:30}),e("div",{className:a.code,children:e(n,{code:i})})]}),e("h3",{className:a.caption,children:"Standard Slider (controlled)"}),t("div",{className:a.content,children:[e(o,{}),e("div",{className:a.code,children:e(n,{code:u})})]}),e("h3",{className:a.caption,children:"Disabled Slider"}),t("div",{className:a.content,children:[e(h,{}),e("div",{className:a.code,children:e(n,{code:S})})]}),e("h3",{className:a.caption,children:"Range Slider"}),t("div",{className:a.content,children:[e(m,{}),e("div",{className:a.code,children:e(n,{code:c})})]}),e("h3",{className:a.caption,children:"Disabled Range Slider"}),t("div",{className:a.content,children:[e(v,{}),e("div",{className:a.code,children:e(n,{code:c})})]})]});var V=b;export{V as default};
