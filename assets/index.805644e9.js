import{j as t,a,T as l}from"./index.c38a09e7.js";import{s as e,C as c}from"./view.module.2ff36782.js";const b="_tabs_1wgz1_1",d="_pane_1wgz1_5";var s={tabs:b,pane:d};const i=()=>{const{TabPane:n}=l;return t(l,{className:s.tabs,children:[a(n,{label:"Documents",name:"doc",className:s.pane,children:a("span",{children:"This is document content."})}),a(n,{label:"Start",name:"start",className:s.pane,children:a("span",{children:"Get start guide."})}),a(n,{label:"Help",name:"help",className:s.pane,children:a("span",{children:"Help documents."})})]})},r=`
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
`,m=()=>{const{TabPane:n}=l;return t(l,{className:s.tabs,activeTab:"start",children:[a(n,{label:"Documents",name:"doc",className:s.pane,children:a("span",{children:"This is document content."})}),a(n,{label:"Start",name:"start",className:s.pane,children:a("span",{children:"Get start guide."})}),a(n,{label:"Help",name:"help",className:s.pane,children:a("span",{children:"Help documents."})})]})},o=`
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
);`,p=()=>{const{TabPane:n}=l;return t(l,{className:s.tabs,children:[a(n,{label:"Documents",name:"doc",className:s.pane,children:a("span",{children:"This is document content."})}),a(n,{label:"Start",name:"start",className:s.pane,disabled:!0,children:a("span",{children:"Get start guide."})}),a(n,{label:"Help",name:"help",className:s.pane,children:a("span",{children:"Help documents."})})]})},h=`
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
`,T=()=>t("article",{className:e.article,children:[a("h1",{className:e.title,children:"Tabs"}),a("p",{className:e.desc,children:"Tabs organize content into multiple sections and allow users to navigate between them. The content under the set of tabs should be related and form a coherent unit."}),a("h2",{className:e.heading,children:"Example"}),a("h3",{className:e.caption,children:"Tabs"}),t("div",{className:e.content,children:[a(i,{}),a("div",{className:e.code,children:a(c,{code:r})})]}),a("h3",{className:e.caption,children:"Tabs with activeTab"}),t("div",{className:e.content,children:[a(m,{}),a("div",{className:e.code,children:a(c,{code:o})})]}),a("h3",{className:e.caption,children:"Tabs with disabled Tab"}),t("div",{className:e.content,children:[a(p,{}),a("div",{className:e.code,children:a(c,{code:h})})]})]});var P=T;export{P as default};
