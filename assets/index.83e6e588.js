import{l as N,a as e,m as _,n as k,o as n,c as C,i as S,j as o,r as i,F as c,B as l,S as g,L as b}from"./index.b36b1cd1.js";import{u as D,a as y}from"./useFocusTrap.d53b039e.js";import{u as x}from"./useWindowEvent.5c69fbb0.js";import{s as a,C as V}from"./view.module.0fdd3734.js";const d=({children:r,visible:s,onClose:u,position:w="left"})=>{const m=N.useRef(null),f=h=>{h.stopPropagation()},p=()=>typeof u=="function"&&u(!1);D(s),x("keydown",h=>{h.key===S.Escape&&s&&p()});const v=y(s);return e(_,{children:e(k,{nodeRef:m,in:s,unmountOnExit:!0,timeout:300,classNames:{enter:n["mask-enter"],enterActive:n["mask-enter-active"],exit:n["mask-exit"],exitActive:n["mask-exit-active"]},children:e("div",{className:n.mask,ref:m,onClick:p,children:e("div",{role:"dialog","aria-modal":"true",className:C(n.drawer,n[w]),ref:v,onClick:f,children:r})})})})},z="_inner_10brz_1",P="_header_10brz_5",L="_close_10brz_11",B="_closeIcon_10brz_1",T="_wrapper_10brz_35",R="_button_10brz_41",I="_left_10brz_45",E="_right_10brz_49",j="_top_10brz_53",F="_bottom_10brz_57";var t={inner:z,header:P,close:L,closeIcon:B,wrapper:T,button:R,left:I,right:E,top:j,bottom:F};const O=()=>{const[r,s]=i.exports.useState(!1);return o(c,{children:[e(l,{className:t.button,onClick:()=>s(!0),children:"Open Drawer"}),e(d,{visible:r,onClose:s,children:e("div",{className:t.left,children:o("div",{className:t.inner,children:[e("div",{className:t.header,children:e("button",{onClick:()=>s(!1),className:t.close,children:e(g,{className:t.closeIcon})})}),e(b,{to:"/button",children:"Button View"}),e("p",{children:"Press escape to close the drawer."}),e(b,{href:"https://github.com/acgotaku/simple-ui",children:"Github"}),e("p",{children:"Trap focus inside drawer."})]})})})]})},A=`
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
`,G=()=>{const[r,s]=i.exports.useState(!1);return o(c,{children:[e(l,{className:t.button,onClick:()=>s(!0),children:"Left"}),e(d,{visible:r,onClose:s,children:e("div",{className:t.left,children:"Press escape to close the drawer."})})]})},$=()=>{const[r,s]=i.exports.useState(!1);return o(c,{children:[e(l,{className:t.button,onClick:()=>s(!0),children:"Right"}),e(d,{visible:r,position:"right",onClose:s,children:e("div",{className:t.right,children:"Press escape to close the drawer."})})]})},K=()=>{const[r,s]=i.exports.useState(!1);return o(c,{children:[e(l,{className:t.button,onClick:()=>s(!0),children:"Top"}),e(d,{visible:r,position:"top",onClose:s,children:e("div",{className:t.top,children:"Press escape to close the drawer."})})]})},W=()=>{const[r,s]=i.exports.useState(!1);return o(c,{children:[e(l,{className:t.button,onClick:()=>s(!0),children:"Bottom"}),e(d,{visible:r,position:"bottom",onClose:s,children:e("div",{className:t.bottom,children:"Press escape to close the drawer."})})]})},q=()=>o("article",{className:a.article,children:[e("h1",{className:a.title,children:"Drawer"}),e("p",{className:a.desc,children:"Display overlay area at any side of the screen."}),e("h2",{className:a.heading,children:"Example"}),e("h3",{className:a.caption,children:"Standard Drawer"}),o("div",{className:a.content,children:[e(O,{}),e("div",{className:a.code,children:e(V,{code:A})})]}),e("h3",{className:a.caption,children:"Drawer Position"}),e("div",{className:a.content,children:o("div",{className:t.wrapper,children:[e(G,{}),e($,{}),e(K,{}),e(W,{})]})})]});var U=q;export{U as default};
