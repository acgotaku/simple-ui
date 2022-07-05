import{j as d,a as o,L as s,r as l,B as c,v as t}from"./index.2587f82c.js";import{u}from"./useTitle.63d97bf9.js";import{s as n,C as a}from"./view.module.85f397c2.js";const w="_wrapper_a2g3r_1",h="_inner_a2g3r_7",b="_button_a2g3r_11",k="_dropdown_a2g3r_15",N="_dropdownButton_a2g3r_1",D="_dropdownLink_a2g3r_1";var e={wrapper:w,inner:h,button:b,dropdown:k,dropdownButton:N,dropdownLink:D};const I=()=>{const r=l.exports.useMemo(()=>o(c,{className:e.button,children:"Click me show dropdown"}),[]);return o(t,{target:r,sameWidth:!1,trigger:"click",children:d(t.Menu,{className:e.dropdown,children:[o(t.Item,{children:o("button",{className:e.dropdownButton,children:"button menu"})}),o(t.Item,{children:o("button",{className:e.dropdownButton,disabled:!0,children:"disabled button menu"})}),o(t.Item,{children:o(s,{to:"/collapse",className:e.dropdownLink,children:"collapse link menu"})}),o(t.Item,{children:o(s,{to:"/checkbox",className:e.dropdownLink,children:"checkbox link menu"})})]})})},B=`
const refButton = useMemo(
  () => (
    <Button className={dropdownStyles.button}>
      {'Click me show dropdown'}
    </Button>
  ),
  []
);

return (
  <Dropdown target={refButton} sameWidth={false} trigger={'click'}>
    <Dropdown.Menu className={dropdownStyles.dropdown}>
      <Dropdown.Item>
        <button className={dropdownStyles.dropdownButton}>
          {'button menu'}
        </button>
      </Dropdown.Item>
      <Dropdown.Item>
        <button className={dropdownStyles.dropdownButton} disabled>
          {'disabled button menu'}
        </button>
      </Dropdown.Item>
      <Dropdown.Item>
        <Link to="/collapse" className={dropdownStyles.dropdownLink}>
          {'collapse link menu'}
        </Link>
      </Dropdown.Item>
      <Dropdown.Item>
        <Link to="/checkbox" className={dropdownStyles.dropdownLink}>
          {'checkbox link menu'}
        </Link>
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);
`,f=()=>{const r=l.exports.useMemo(()=>o(c,{className:e.button,children:"Hover me show dropdown"}),[]);return o(t,{target:r,sameWidth:!1,trigger:"hover",children:d(t.Menu,{className:e.dropdown,children:[o(t.Item,{children:o("button",{className:e.dropdownButton,children:"button menu"})}),o(t.Item,{children:o("button",{className:e.dropdownButton,disabled:!0,children:"disabled button menu"})}),o(t.Item,{children:o(s,{to:"/collapse",className:e.dropdownLink,children:"collapse link menu"})}),o(t.Item,{children:o(s,{to:"/checkbox",className:e.dropdownLink,children:"checkbox link menu"})})]})})},L=`
const refButton = useMemo(
  () => (
    <Button className={dropdownStyles.button}>
      {'Hover me show dropdown'}
    </Button>
  ),
  []
);

return (
  <Dropdown target={refButton} sameWidth={false} trigger={'hover'}>
    <Dropdown.Menu className={dropdownStyles.dropdown}>
      <Dropdown.Item>
        <button className={dropdownStyles.dropdownButton}>
          {'button menu'}
        </button>
      </Dropdown.Item>
      <Dropdown.Item>
        <button className={dropdownStyles.dropdownButton} disabled>
          {'disabled button menu'}
        </button>
      </Dropdown.Item>
      <Dropdown.Item>
        <Link to="/collapse" className={dropdownStyles.dropdownLink}>
          {'collapse link menu'}
        </Link>
      </Dropdown.Item>
      <Dropdown.Item>
        <Link to="/checkbox" className={dropdownStyles.dropdownLink}>
          {'checkbox link menu'}
        </Link>
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);
`,v=()=>{const r=l.exports.useMemo(()=>o(c,{className:e.button,onClick:()=>i(m=>!m),children:"Click me show dropdown"}),[]),[p,i]=l.exports.useState(!1);return o(t,{target:r,visible:p,onClose:()=>i(!1),children:d(t.Menu,{className:e.dropdown,children:[o(t.Item,{children:o("button",{className:e.dropdownButton,children:"button menu"})}),o(t.Item,{children:o("button",{className:e.dropdownButton,disabled:!0,children:"disabled button menu"})}),o(t.Item,{children:o(s,{to:"/collapse",className:e.dropdownLink,children:"collapse link menu"})}),o(t.Item,{children:o(s,{to:"/checkbox",className:e.dropdownLink,children:"checkbox link menu"})})]})})},g=`
const refButton = useMemo(
  () => (
    <Button
      className={dropdownStyles.button}
      onClick={() => setVisible(visible => !visible)}
    >
      {'Click me show dropdown'}
    </Button>
  ),
  []
);
const [visible, setVisible] = useState(false);

return (
  <Dropdown
    target={refButton}
    visible={visible}
    onClose={() => setVisible(false)}
  >
    <Dropdown.Menu className={dropdownStyles.dropdown}>
      <Dropdown.Item>
        <button className={dropdownStyles.dropdownButton}>
          {'button menu'}
        </button>
      </Dropdown.Item>
      <Dropdown.Item>
        <button className={dropdownStyles.dropdownButton} disabled>
          {'disabled button menu'}
        </button>
      </Dropdown.Item>
      <Dropdown.Item>
        <Link to="/collapse" className={dropdownStyles.dropdownLink}>
          {'collapse link menu'}
        </Link>
      </Dropdown.Item>
      <Dropdown.Item>
        <Link to="/checkbox" className={dropdownStyles.dropdownLink}>
          {'checkbox link menu'}
        </Link>
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);
`,y=()=>(u("Dropdown | Simple UI"),d("article",{className:n.article,children:[o("h1",{className:n.title,children:"Dropdown"}),o("p",{className:n.desc,children:"Dropdown offer an easy way to build custom, accessible menu components with robust support for keyboard navigation."}),o("h2",{className:n.heading,children:"Example"}),o("h3",{className:n.caption,children:"Basic Dropdown"}),d("div",{className:n.content,children:[d("div",{className:e.wrapper,children:[o(I,{}),o(f,{})]}),d("div",{className:n.code,children:[o(a,{code:B}),o(a,{code:L})]})]}),o("h3",{className:n.caption,children:"Advanced Dropdown"}),d("div",{className:n.content,children:[o("div",{className:e.wrapper,children:o(v,{})}),o("div",{className:n.code,children:o(a,{code:g})})]}),o("h2",{className:n.heading,children:"Accessibility"}),o("h3",{className:n.caption,children:"Keyboard Interaction"}),d("div",{className:n.content,children:[o("p",{className:n.detail,children:"With focus on the button:"}),d("p",{className:n.detail,children:[o("b",{children:"Enter"}),": Opens the menu and places focus on the first menu item."]}),d("p",{className:n.detail,children:[o("b",{children:"Space"}),": Opens the menu and places focus on the first menu item."]}),d("p",{className:n.detail,children:[o("b",{children:"Down Arrow"}),": Opens the menu and moves focus to the first menu item."]}),d("p",{className:n.detail,children:[o("b",{children:"Up Arrow"}),": Opens the menu and moves focus to the last menu item."]}),d("p",{className:n.detail,children:[o("b",{children:"Escape"}),": Close the menu that contains focus and return focus to the element or context."]}),o(s,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/menubutton/",children:"Menu Button"})]})]}));var C=y;export{C as default};
