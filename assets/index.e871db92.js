import{j as s,a as e,L as r,b as n}from"./index.4c5daa55.js";import{u as i}from"./useTitle.5783f7b1.js";import{s as l,C as t}from"./view.module.2318c4f8.js";const c="_collapse_175rd_1",p="_panel_175rd_5";var a={collapse:c,panel:p};const d=()=>{const{Panel:o}=n;return s(n,{className:a.collapse,children:[e(o,{title:"What is your refund policy?",children:e("p",{className:a.panel,children:"If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked."})}),e(o,{title:"Do you offer technical support?",children:e("p",{className:a.panel,children:"No."})}),e(o,{title:"What are the supported browsers?",children:e("p",{className:a.panel,children:`Supported browsers:
          \u30FB Firefox (latest version)
          \u30FB Safari (latest version)
          \u30FB Google Chrome (latest version)`})})]})},h=`
const { Panel } = Collapse;
return (
  <Collapse className={collapseStyles.collapse}>
    <Panel title="What is your refund policy?">
      <p className={collapseStyles.panel}>
        If you&apos;re unhappy with your purchase for any reason, email us
        within 90 days and we&apos;ll refund you in full, no questions asked.
      </p>
    </Panel>
    <Panel title="Do you offer technical support?">
      <p className={collapseStyles.panel}>{'No.'}</p>
    </Panel>
    <Panel title="What are the supported browsers?">
      <p className={collapseStyles.panel}>{\`Supported browsers:
        \u30FB Firefox (latest version)
        \u30FB Safari (latest version)
        \u30FB Google Chrome (latest version)\`}</p>
    </Panel>
  </Collapse>
);
`,u=()=>{const{Panel:o}=n;return s(n,{className:a.collapse,accordion:!0,children:[e(o,{title:"What is your refund policy?",children:e("p",{className:a.panel,children:"If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked."})}),e(o,{title:"Do you offer technical support?",children:e("p",{className:a.panel,children:"No."})}),e(o,{title:"What are the supported browsers?",children:e("p",{className:a.panel,children:`Supported browsers:
          \u30FB Firefox (latest version)
          \u30FB Safari (latest version)
          \u30FB Google Chrome (latest version)`})})]})},m=`
const { Panel } = Collapse;
return (
  <Collapse className={collapseStyles.collapse} accordion>
    <Panel title="What is your refund policy?">
      <p className={collapseStyles.panel}>
        If you&apos;re unhappy with your purchase for any reason, email us
        within 90 days and we&apos;ll refund you in full, no questions asked.
      </p>
    </Panel>
    <Panel title="Do you offer technical support?">
      <p className={collapseStyles.panel}>{'No.'}</p>
    </Panel>
    <Panel title="What are the supported browsers?">
      <p className={collapseStyles.panel}>{\`Supported browsers:
        \u30FB Firefox (latest version)
        \u30FB Safari (latest version)
        \u30FB Google Chrome (latest version)\`}</p>
    </Panel>
  </Collapse>
);
`,y=()=>(i("Collapse | Simple UI"),s("article",{className:l.article,children:[e("h1",{className:l.title,children:"Collapse"}),e("p",{className:l.desc,children:"A simple, accessible foundation for building custom UIs that show and hide content, like togglable accordion panels."}),e("h2",{className:l.heading,children:"Example"}),e("h3",{className:l.caption,children:"Collapse"}),s("div",{className:l.content,children:[e(d,{}),e("div",{className:l.code,children:e(t,{code:h})})]}),e("h3",{className:l.caption,children:"Accordion Collapse"}),s("div",{className:l.content,children:[e(u,{}),e("div",{className:l.code,children:e(t,{code:m})})]}),e("h2",{className:l.heading,children:"Accessibility"}),e("h3",{className:l.caption,children:"Keyboard Interaction"}),s("div",{className:l.content,children:[e("p",{className:l.detail,children:"When the disclosure control has focus:"}),s("p",{className:l.detail,children:[e("b",{children:"Enter"}),": activates the disclosure control and toggles the visibility of the disclosure content."]}),s("p",{className:l.detail,children:[e("b",{children:"Space"}),": activates the disclosure control and toggles the visibility of the disclosure content."]}),e(r,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/",children:"Disclosure (Show/Hide)"})]})]}));var C=y;export{C as default};
