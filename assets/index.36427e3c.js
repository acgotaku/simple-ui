import{j as t,a as e,K as n,r as d}from"./index.d343d680.js";import{u as i}from"./useTitle.8c09d26e.js";import{s as a,C as r}from"./view.module.a207d8ab.js";const o=`
<Slider label={'Score'} defaultValue={30} />
`,u=()=>{const[l,s]=d.exports.useState(65);return e(n,{label:"Score",value:l,minValue:20,maxValue:200,step:5,onChange:s})},h=`
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
`,S=()=>{const[l,s]=d.exports.useState(60);return e(n,{label:"Score",value:l,minValue:40,maxValue:100,onChange:s,disabled:!0})},m=`
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
`,v=()=>{const[l,s]=d.exports.useState({start:20,end:80});return e(n.Range,{label:"Price range",value:l,step:2,onChange:s})},c=`
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
`,b=()=>{const[l,s]=d.exports.useState({start:20,end:80});return e(n.Range,{label:"Price range",value:l,step:2,onChange:s,disabled:!0})},g=()=>(i("Slider | Simple UI"),t("article",{className:a.article,children:[e("h1",{className:a.title,children:"Slider"}),e("p",{className:a.desc,children:"Sliders allow users to quickly select a value within a range. They should be used when the upper and lower bounds to the range are invariable."}),e("h2",{className:a.heading,children:"Example"}),e("h3",{className:a.caption,children:"Basic Slider (uncontrolled)"}),t("div",{className:a.content,children:[e(n,{label:"Score",defaultValue:30}),e("div",{className:a.code,children:e(r,{code:o})})]}),e("h3",{className:a.caption,children:"Standard Slider (controlled)"}),t("div",{className:a.content,children:[e(u,{}),e("div",{className:a.code,children:e(r,{code:h})})]}),e("h3",{className:a.caption,children:"Disabled Slider"}),t("div",{className:a.content,children:[e(S,{}),e("div",{className:a.code,children:e(r,{code:m})})]}),e("h3",{className:a.caption,children:"Range Slider"}),t("div",{className:a.content,children:[e(v,{}),e("div",{className:a.code,children:e(r,{code:c})})]}),e("h3",{className:a.caption,children:"Disabled Range Slider"}),t("div",{className:a.content,children:[e(b,{}),e("div",{className:a.code,children:e(r,{code:c})})]})]}));var C=g;export{C as default};
