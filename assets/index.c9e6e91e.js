import{j as a,a as e,r as S,F as m,N as c,B as n}from"./index.9b8c4711.js";import{u}from"./useTitle.25573cff.js";import{s,C as d}from"./view.module.940b1c9c.js";const h="_steps_fy9mb_1",N="_action_fy9mb_6";var i={steps:h,action:N};const v=()=>{const[p,r]=S.exports.useState(1),l=()=>r(t=>t>0?t-1:t),o=()=>r(t=>t<3?t+1:t);return a(m,{children:[a(c,{current:p,className:i.steps,children:[e(c.Step,{title:"Create an account"}),e(c.Step,{title:"Verify email"}),e(c.Step,{title:"Get full access"})]}),a("div",{className:i.action,children:[e(n,{onClick:l,children:"Prev step"}),e(n,{color:"primary",onClick:o,children:"Next step"})]})]})},f=`
const [step, setStep] = useState(1);

const prev = () => setStep(current => (current > 0 ? current - 1 : current));
const next = () => setStep(current => (current < 3 ? current + 1 : current));

return (
  <>
    <Steps current={step} className={stepsStyles.steps}>
      <Steps.Step title="Create an account" />
      <Steps.Step title="Verify email" />
      <Steps.Step title="Get full access" />
    </Steps>
    <div className={stepsStyles.action}>
      <Button onClick={prev}>{'Prev step'}</Button>
      <Button color="primary" onClick={next}>
        {'Next step'}
      </Button>
    </div>
  </>
);
`,x=()=>(u("Steps | Simple UI"),a("article",{className:s.article,children:[e("h1",{className:s.title,children:"Steps"}),e("p",{className:s.desc,children:"Steps is a navigation bar that guides users through the steps of a task."}),e("h2",{className:s.heading,children:"Example"}),e("h3",{className:s.caption,children:"Basic Steps"}),a("div",{className:s.content,children:[e(v,{}),e("div",{className:s.code,children:e(d,{code:f})})]})]}));var _=x;export{_ as default};
