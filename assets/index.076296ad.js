import{m as N,a as e,n as _,o as k,p as n,c as C,i as S,j as o,r as i,F as c,B as l,q as g,L as w}from"./index.f9f7ac8a.js";import{u as D,a as y}from"./useFocusTrap.38732765.js";import{u as x}from"./useWindowEvent.f9fae91a.js";import{s as a,C as V}from"./view.module.a0ce22f2.js";const d=({children:r,visible:s,onClose:p,position:f="left"})=>{const u=N.useRef(null),b=h=>{h.stopPropagation()},m=()=>typeof p=="function"&&p(!1);D(s),x("keydown",h=>{h.key===S.Escape&&s&&m()});const v=y(s);return e(_,{children:e(k,{nodeRef:u,in:s,unmountOnExit:!0,timeout:300,classNames:{enter:n["mask-enter"],enterActive:n["mask-enter-active"],exit:n["mask-exit"],exitActive:n["mask-exit-active"]},children:e("div",{className:n.mask,ref:u,onClick:m,children:e("div",{role:"dialog","aria-modal":"true",className:C(n.drawer,n[f]),ref:v,onClick:b,children:r})})})})},P="_inner_1phfw_1",L="_header_1phfw_5",B="_close_1phfw_11",T="_closeIcon_1phfw_1",R="_wrapper_1phfw_36",I="_button_1phfw_42",E="_left_1phfw_46",j="_right_1phfw_50",F="_top_1phfw_54",O="_bottom_1phfw_58";var t={inner:P,header:L,close:B,closeIcon:T,wrapper:R,button:I,left:E,right:j,top:F,bottom:O};const A=()=>{const[r,s]=i.exports.useState(!1);return o(c,{children:[e(l,{className:t.button,onClick:()=>s(!0),children:"Open Drawer"}),e(d,{visible:r,onClose:s,children:e("div",{className:t.left,children:o("div",{className:t.inner,children:[e("div",{className:t.header,children:e("button",{onClick:()=>s(!1),className:t.close,children:e(g,{className:t.closeIcon})})}),e(w,{to:"/button",children:"Button View"}),e("p",{children:"Press escape to close the drawer."}),e(w,{href:"https://github.com/acgotaku/simple-ui",children:"Github"}),e("p",{children:"Trap focus inside drawer."})]})})})]})},G=`
const [visible, setVisible] = useState(false);
return (
  <>
    <Button className={drawerStyles.button} onClick={() => setVisible(true)}>
      {'Open Drawer'}
    </Button>
    <Drawer visible={visible} onClose={setVisible}>
      <div className={drawerStyles.left}>
        <div className={drawerStyles.inner}>
          <div className={drawerStyles.header}>
            <button
              onClick={() => setVisible(false)}
              className={drawerStyles.close}
            >
              <Close className={drawerStyles.closeIcon} />
            </button>
          </div>
          <Link to="/button">Button View</Link>
          <p>{'Press escape to close the drawer.'}</p>
          <Link href="https://github.com/acgotaku/simple-ui">Github</Link>
          <p>{'Trap focus inside drawer.'}</p>
        </div>
      </div>
    </Drawer>
  </>
);
`,$=()=>{const[r,s]=i.exports.useState(!1);return o(c,{children:[e(l,{className:t.button,onClick:()=>s(!0),children:"Left"}),e(d,{visible:r,onClose:s,children:e("div",{className:t.left,children:"Press escape to close the drawer."})})]})},q=()=>{const[r,s]=i.exports.useState(!1);return o(c,{children:[e(l,{className:t.button,onClick:()=>s(!0),children:"Right"}),e(d,{visible:r,position:"right",onClose:s,children:e("div",{className:t.right,children:"Press escape to close the drawer."})})]})},K=()=>{const[r,s]=i.exports.useState(!1);return o(c,{children:[e(l,{className:t.button,onClick:()=>s(!0),children:"Top"}),e(d,{visible:r,position:"top",onClose:s,children:e("div",{className:t.top,children:"Press escape to close the drawer."})})]})},W=()=>{const[r,s]=i.exports.useState(!1);return o(c,{children:[e(l,{className:t.button,onClick:()=>s(!0),children:"Bottom"}),e(d,{visible:r,position:"bottom",onClose:s,children:e("div",{className:t.bottom,children:"Press escape to close the drawer."})})]})},z=()=>o("article",{className:a.article,children:[e("h1",{className:a.title,children:"Drawer"}),e("p",{className:a.desc,children:"Display overlay area at any side of the screen."}),e("h2",{className:a.heading,children:"Example"}),e("h3",{className:a.caption,children:"Standard Drawer"}),o("div",{className:a.content,children:[e(A,{}),e("div",{className:a.code,children:e(V,{code:G})})]}),e("h3",{className:a.caption,children:"Drawer Position"}),e("div",{className:a.content,children:o("div",{className:t.wrapper,children:[e($,{}),e(q,{}),e(K,{}),e(W,{})]})})]});var U=z;export{U as default};
