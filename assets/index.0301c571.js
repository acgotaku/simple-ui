import{j as d,a as e,L as s,r as l,B as a,D as t}from"./index.cd75f31d.js";import{s as n,C as c}from"./view.module.ba99645e.js";const u="_wrapper_1ie3i_1",w="_inner_1ie3i_5",h="_button_1ie3i_9",b="_dropdown_1ie3i_13",k="_dropdownButton_1ie3i_1",N="_dropdownLink_1ie3i_1";var o={wrapper:u,inner:w,button:h,dropdown:b,dropdownButton:k,dropdownLink:N};const D=()=>{const r=l.exports.useMemo(()=>e(a,{className:o.button,children:"Click me show dropdown"}),[]);return e(t,{target:r,sameWidth:!1,trigger:"click",children:d(t.Menu,{className:o.dropdown,children:[e(t.Item,{children:e("button",{className:o.dropdownButton,children:"button menu"})}),e(t.Item,{children:e("button",{className:o.dropdownButton,disabled:!0,children:"disabled button menu"})}),e(t.Item,{children:e(s,{to:"/collapse",className:o.dropdownLink,children:"collapse link menu"})}),e(t.Item,{children:e(s,{to:"/checkbox",className:o.dropdownLink,children:"checkbox link menu"})})]})})},I=`
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
`,B=()=>{const r=l.exports.useMemo(()=>e(a,{className:o.button,children:"Hover me show dropdown"}),[]);return e(t,{target:r,sameWidth:!1,trigger:"hover",children:d(t.Menu,{className:o.dropdown,children:[e(t.Item,{children:e("button",{className:o.dropdownButton,children:"button menu"})}),e(t.Item,{children:e("button",{className:o.dropdownButton,disabled:!0,children:"disabled button menu"})}),e(t.Item,{children:e(s,{to:"/collapse",className:o.dropdownLink,children:"collapse link menu"})}),e(t.Item,{children:e(s,{to:"/checkbox",className:o.dropdownLink,children:"checkbox link menu"})})]})})},f=`
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
`,v=()=>{const r=l.exports.useMemo(()=>e(a,{className:o.button,onClick:()=>i(m=>!m),children:"Click me show dropdown"}),[]),[p,i]=l.exports.useState(!1);return e(t,{target:r,visible:p,onClose:()=>i(!1),children:d(t.Menu,{className:o.dropdown,children:[e(t.Item,{children:e("button",{className:o.dropdownButton,children:"button menu"})}),e(t.Item,{children:e("button",{className:o.dropdownButton,disabled:!0,children:"disabled button menu"})}),e(t.Item,{children:e(s,{to:"/collapse",className:o.dropdownLink,children:"collapse link menu"})}),e(t.Item,{children:e(s,{to:"/checkbox",className:o.dropdownLink,children:"checkbox link menu"})})]})})},L=`
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
`,y=()=>d("article",{className:n.article,children:[e("h1",{className:n.title,children:"Dropdown"}),e("p",{className:n.desc,children:"Dropdown offer an easy way to build custom, accessible menu components with robust support for keyboard navigation."}),e("h2",{className:n.heading,children:"Example"}),e("h3",{className:n.caption,children:"Basic Dropdown"}),d("div",{className:n.content,children:[d("div",{className:o.wrapper,children:[e("div",{className:o.inner,children:e(D,{})}),e("div",{className:o.inner,children:e(B,{})})]}),d("div",{className:n.code,children:[e(c,{code:I}),e(c,{code:f})]})]}),e("h3",{className:n.caption,children:"Advanced Dropdown"}),d("div",{className:n.content,children:[e("div",{className:o.wrapper,children:e("div",{className:o.inner,children:e(v,{})})}),e("div",{className:n.code,children:e(c,{code:L})})]}),e("h2",{className:n.heading,children:"Accessibility"}),e("h3",{className:n.caption,children:"Keyboard Interaction"}),d("div",{className:n.content,children:[e("p",{className:n.detail,children:"With focus on the button:"}),d("p",{className:n.detail,children:[e("b",{children:"Enter"}),": Opens the menu and places focus on the first menu item."]}),d("p",{className:n.detail,children:[e("b",{children:"Space"}),": Opens the menu and places focus on the first menu item."]}),d("p",{className:n.detail,children:[e("b",{children:"Down Arrow"}),": Opens the menu and moves focus to the first menu item."]}),d("p",{className:n.detail,children:[e("b",{children:"Up Arrow"}),": Opens the menu and moves focus to the last menu item."]}),d("p",{className:n.detail,children:[e("b",{children:"Escape"}),": Close the menu that contains focus and return focus to the element or context."]}),e(s,{href:"https://www.w3.org/TR/wai-aria-practices/#menubutton",children:"WAI-ARIA Authoring Practices - 3.16 Menu Button"})]})]});var g=y;export{g as default};
