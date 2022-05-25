import{j as a,a as e,L as t,b as n}from"./index.7533c7a2.js";import{s as l,C as r}from"./view.module.f1dd493b.js";const i="_collapse_175rd_1",c="_panel_175rd_5";var s={collapse:i,panel:c};const p=()=>{const{Panel:o}=n;return a(n,{className:s.collapse,children:[e(o,{title:"What is your refund policy?",children:e("p",{className:s.panel,children:"If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked."})}),e(o,{title:"Do you offer technical support?",children:e("p",{className:s.panel,children:"No."})}),e(o,{title:"What are the supported browsers?",children:e("p",{className:s.panel,children:`Supported browsers:
          \u30FB Firefox (latest version)
          \u30FB Safari (latest version)
          \u30FB Google Chrome (latest version)`})})]})},d=`
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
`,h=()=>{const{Panel:o}=n;return a(n,{className:s.collapse,accordion:!0,children:[e(o,{title:"What is your refund policy?",children:e("p",{className:s.panel,children:"If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked."})}),e(o,{title:"Do you offer technical support?",children:e("p",{className:s.panel,children:"No."})}),e(o,{title:"What are the supported browsers?",children:e("p",{className:s.panel,children:`Supported browsers:
          \u30FB Firefox (latest version)
          \u30FB Safari (latest version)
          \u30FB Google Chrome (latest version)`})})]})},u=`
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
`,y=()=>a("article",{className:l.article,children:[e("h1",{className:l.title,children:"Collapse"}),e("p",{className:l.desc,children:"A simple, accessible foundation for building custom UIs that show and hide content, like togglable accordion panels."}),e("h2",{className:l.heading,children:"Example"}),e("h3",{className:l.caption,children:"Collapse"}),a("div",{className:l.content,children:[e(p,{}),e("div",{className:l.code,children:e(r,{code:d})})]}),e("h3",{className:l.caption,children:"Accordion Collapse"}),a("div",{className:l.content,children:[e(h,{}),e("div",{className:l.code,children:e(r,{code:u})})]}),e("h2",{className:l.heading,children:"Accessibility"}),e("h3",{className:l.caption,children:"Keyboard Interaction"}),a("div",{className:l.content,children:[e("p",{className:l.detail,children:"When the disclosure control has focus:"}),a("p",{className:l.detail,children:[e("b",{children:"Enter"}),": activates the disclosure control and toggles the visibility of the disclosure content."]}),a("p",{className:l.detail,children:[e("b",{children:"Space"}),": activates the disclosure control and toggles the visibility of the disclosure content."]}),e(t,{href:"https://www.w3.org/TR/wai-aria-practices/#disclosure",children:"WAI-ARIA Authoring Practices - 3.10 Disclosure (Show/Hide)"})]})]});var N=y;export{N as default};
