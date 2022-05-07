import{R as N,a as e,P as _,d as k,s as n,c as C,e as S,j as o,r as i,F as c,B as l,f as D,L as f}from"./index.cd75f31d.js";import{u as g,a as y}from"./useFocusTrap.ea3ba3a9.js";import{u as x}from"./useWindowEvent.53bfd5f5.js";import{s as r,C as V}from"./view.module.ba99645e.js";const d=({children:a,visible:s,onClose:u,position:b="left"})=>{const m=N.useRef(null),w=h=>{h.stopPropagation()},p=()=>typeof u=="function"&&u(!1);g(s),x("keydown",h=>{h.key===S.Escape&&s&&p()});const v=y(s);return e(_,{children:e(k,{nodeRef:m,in:s,unmountOnExit:!0,timeout:300,classNames:{enter:n["mask-enter"],enterActive:n["mask-enter-active"],exit:n["mask-exit"],exitActive:n["mask-exit-active"]},children:e("div",{className:n.mask,ref:m,onClick:p,children:e("div",{role:"dialog","aria-modal":"true",className:C(n.drawer,n[b]),ref:v,onClick:w,children:a})})})})},P="_inner_125aq_1",q="_header_125aq_5",L="_close_125aq_11",B="_closeIcon_125aq_1",R="_button_125aq_35",T="_left_125aq_39",I="_right_125aq_43",E="_top_125aq_47",j="_bottom_125aq_51";var t={inner:P,header:q,close:L,closeIcon:B,button:R,left:T,right:I,top:E,bottom:j};const F=()=>{const[a,s]=i.exports.useState(!1);return o(c,{children:[e(l,{className:t.button,onClick:()=>s(!0),children:"Open Drawer"}),e(d,{visible:a,onClose:s,children:e("div",{className:t.left,children:o("div",{className:t.inner,children:[e("div",{className:t.header,children:e("button",{onClick:()=>s(!1),className:t.close,children:e(D,{className:t.closeIcon})})}),e(f,{to:"/button",children:"Button View"}),e("p",{children:"Press escape to close the drawer."}),e(f,{href:"https://github.com/acgotaku/simple-ui",children:"Github"}),e("p",{children:"Trap focus inside drawer."})]})})})]})},O=`
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
`,A=()=>{const[a,s]=i.exports.useState(!1);return o(c,{children:[e(l,{className:t.button,onClick:()=>s(!0),children:"Left"}),e(d,{visible:a,onClose:s,children:e("div",{className:t.left,children:"Press escape to close the drawer."})})]})},G=()=>{const[a,s]=i.exports.useState(!1);return o(c,{children:[e(l,{className:t.button,onClick:()=>s(!0),children:"Right"}),e(d,{visible:a,position:"right",onClose:s,children:e("div",{className:t.right,children:"Press escape to close the drawer."})})]})},$=()=>{const[a,s]=i.exports.useState(!1);return o(c,{children:[e(l,{className:t.button,onClick:()=>s(!0),children:"Top"}),e(d,{visible:a,position:"top",onClose:s,children:e("div",{className:t.top,children:"Press escape to close the drawer."})})]})},K=()=>{const[a,s]=i.exports.useState(!1);return o(c,{children:[e(l,{className:t.button,onClick:()=>s(!0),children:"Bottom"}),e(d,{visible:a,position:"bottom",onClose:s,children:e("div",{className:t.bottom,children:"Press escape to close the drawer."})})]})},W=()=>o("article",{className:r.article,children:[e("h1",{className:r.title,children:"Drawer"}),e("p",{className:r.desc,children:"Display overlay area at any side of the screen."}),e("h2",{className:r.heading,children:"Example"}),e("h3",{className:r.caption,children:"Standard Drawer"}),o("div",{className:r.content,children:[e(F,{}),e("div",{className:r.code,children:e(V,{code:O})})]}),e("h3",{className:r.caption,children:"Drawer Position"}),o("div",{className:r.content,children:[e(A,{}),e(G,{}),e($,{}),e(K,{})]})]});var Q=W;export{Q as default};
