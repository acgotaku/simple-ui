import{j as n,a,L as i,T as l}from"./index.bf76a016.js";import{s as e,C as c}from"./view.module.b0f73883.js";const b="_tabs_1wgz1_1",o="_pane_1wgz1_5";var s={tabs:b,pane:o};const d=()=>{const{TabPane:t}=l;return n(l,{className:s.tabs,children:[a(t,{label:"Documents",name:"doc",className:s.pane,children:a("span",{children:"This is document content."})}),a(t,{label:"Start",name:"start",className:s.pane,children:a("span",{children:"Get start guide."})}),a(t,{label:"Help",name:"help",className:s.pane,children:a("span",{children:"Help documents."})})]})},r=`
const { TabPane } = Tabs;
return (
  <Tabs className={tabsStyles.tabs}>
    <TabPane label="Documents" name="doc" className={tabsStyles.pane}>
      <span>{'This is document content.'}</span>
    </TabPane>
    <TabPane label="Start" name="start" className={tabsStyles.pane}>
      <span>{'Get start guide.'}</span>
    </TabPane>
    <TabPane label="Help" name="help" className={tabsStyles.pane}>
      <span>{'Help documents.'}</span>
    </TabPane>
  </Tabs>
);
`,h=()=>{const{TabPane:t}=l;return n(l,{className:s.tabs,activeTab:"start",children:[a(t,{label:"Documents",name:"doc",className:s.pane,children:a("span",{children:"This is document content."})}),a(t,{label:"Start",name:"start",className:s.pane,children:a("span",{children:"Get start guide."})}),a(t,{label:"Help",name:"help",className:s.pane,children:a("span",{children:"Help documents."})})]})},m=`
const { TabPane } = Tabs;
return (
  <Tabs className={tabsStyles.tabs} activeTab={'start'}>
    <TabPane label="Documents" name="doc" className={tabsStyles.pane}>
      <span>{'This is document content.'}</span>
    </TabPane>
    <TabPane label="Start" name="start" className={tabsStyles.pane}>
      <span>{'Get start guide.'}</span>
    </TabPane>
    <TabPane label="Help" name="help" className={tabsStyles.pane}>
      <span>{'Help documents.'}</span>
    </TabPane>
  </Tabs>
);`,p=()=>{const{TabPane:t}=l;return n(l,{className:s.tabs,children:[a(t,{label:"Documents",name:"doc",className:s.pane,children:a("span",{children:"This is document content."})}),a(t,{label:"Start",name:"start",className:s.pane,disabled:!0,children:a("span",{children:"Get start guide."})}),a(t,{label:"Help",name:"help",className:s.pane,children:a("span",{children:"Help documents."})})]})},T=`
const { TabPane } = Tabs;
return (
  <Tabs className={tabsStyles.tabs}>
    <TabPane label="Documents" name="doc" className={tabsStyles.pane}>
      <span>{'This is document content.'}</span>
    </TabPane>
    <TabPane label="Start" name="start" className={tabsStyles.pane} disabled>
      <span>{'Get start guide.'}</span>
    </TabPane>
    <TabPane label="Help" name="help" className={tabsStyles.pane}>
      <span>{'Help documents.'}</span>
    </TabPane>
  </Tabs>
);
`,u=()=>n("article",{className:e.article,children:[a("h1",{className:e.title,children:"Tabs"}),a("p",{className:e.desc,children:"Tabs organize content into multiple sections and allow users to navigate between them. The content under the set of tabs should be related and form a coherent unit."}),a("h2",{className:e.heading,children:"Example"}),a("h3",{className:e.caption,children:"Tabs"}),n("div",{className:e.content,children:[a(d,{}),a("div",{className:e.code,children:a(c,{code:r})})]}),a("h3",{className:e.caption,children:"Tabs with activeTab"}),n("div",{className:e.content,children:[a(h,{}),a("div",{className:e.code,children:a(c,{code:m})})]}),a("h3",{className:e.caption,children:"Tabs with disabled Tab"}),n("div",{className:e.content,children:[a(p,{}),a("div",{className:e.code,children:a(c,{code:T})})]}),a("h2",{className:e.heading,children:"Accessibility"}),a("h3",{className:e.caption,children:"Keyboard Interaction"}),n("div",{className:e.content,children:[a("p",{className:e.detail,children:"For the tab list:"}),n("p",{className:e.detail,children:[a("b",{children:"Tab"}),": When focus moves into the tab list, places focus on the active tab element."]}),a("p",{className:e.detail,children:"When the tab list contains the focus, moves focus to the next element in the page tab sequence outside the tablist, which is the tabpanel unless the first element containing meaningful content inside the tabpanel is focusable."}),a("p",{className:e.detail,children:"When focus is on a tab element in a horizontal tab list:"}),n("p",{className:e.detail,children:[a("b",{children:"Left Arrow"}),": moves focus to the previous tab. If focus is on the first tab, moves focus to the last tab. Optionally, activates the newly focused tab."]}),n("p",{className:e.detail,children:[a("b",{children:"Right Arrow"}),": Moves focus to the next tab. If focus is on the last tab element, moves focus to the first tab. Optionally, activates the newly focused tab."]}),a(i,{href:"https://www.w3.org/TR/wai-aria-practices/#tabpanel",children:"WAI-ARIA Authoring Practices - 3.24 Tabs"})]})]});var v=u;export{v as default};
