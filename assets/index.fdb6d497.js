import{R as N,a as e,d as _,s as n,c as k,e as y,j as o,r as i,F as c,B as l,f as C,L as v}from"./index.f0f1bd0b.js";import{u as S,a as D}from"./useFocusTrap.f191e122.js";import{u as g}from"./useWindowEvent.1f15e467.js";import{P as x}from"./index.59399ebf.js";import{s as a,C as V}from"./view.module.7035687b.js";const d=({children:r,visible:s,onClose:u,position:f="left"})=>{const m=N.useRef(null),b=h=>{h.stopPropagation()},p=()=>typeof u=="function"&&u(!1);S(s),g("keydown",h=>{h.key===y.Escape&&s&&p()});const w=D(s);return e(x,{children:e(_,{nodeRef:m,in:s,unmountOnExit:!0,timeout:300,classNames:{enter:n["mask-enter"],enterActive:n["mask-enter-active"],exit:n["mask-exit"],exitActive:n["mask-exit-active"]},children:e("div",{className:n.mask,ref:m,onClick:p,children:e("div",{role:"dialog","aria-modal":"true",className:k(n.drawer,n[f]),ref:w,onClick:b,children:r})})})})},P="_inner_r7yv8_1",L="_header_r7yv8_5",B="_close_r7yv8_11",R="_closeIcon_r7yv8_1",T="_button_r7yv8_35",I="_left_r7yv8_39",E="_right_r7yv8_43",j="_top_r7yv8_47",F="_bottom_r7yv8_51";var t={inner:P,header:L,close:B,closeIcon:R,button:T,left:I,right:E,top:j,bottom:F};const O=()=>{const[r,s]=i.exports.useState(!1);return o(c,{children:[e(l,{className:t.button,onClick:()=>s(!0),children:"Open Drawer"}),e(d,{visible:r,onClose:s,children:e("div",{className:t.left,children:o("div",{className:t.inner,children:[e("div",{className:t.header,children:e("button",{onClick:()=>s(!1),className:t.close,children:e(C,{className:t.closeIcon})})}),e(v,{to:"/button",children:"Button View"}),e("p",{children:"Press escape to close the drawer."}),e(v,{href:"https://github.com/acgotaku/simple-ui",children:"Github"}),e("p",{children:"Trap focus inside drawer."})]})})})]})},A=`
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
`,G=()=>{const[r,s]=i.exports.useState(!1);return o(c,{children:[e(l,{className:t.button,onClick:()=>s(!0),children:"Left"}),e(d,{visible:r,onClose:s,children:e("div",{className:t.left,children:"Press escape to close the drawer."})})]})},$=()=>{const[r,s]=i.exports.useState(!1);return o(c,{children:[e(l,{className:t.button,onClick:()=>s(!0),children:"Right"}),e(d,{visible:r,position:"right",onClose:s,children:e("div",{className:t.right,children:"Press escape to close the drawer."})})]})},K=()=>{const[r,s]=i.exports.useState(!1);return o(c,{children:[e(l,{className:t.button,onClick:()=>s(!0),children:"Top"}),e(d,{visible:r,position:"top",onClose:s,children:e("div",{className:t.top,children:"Press escape to close the drawer."})})]})},W=()=>{const[r,s]=i.exports.useState(!1);return o(c,{children:[e(l,{className:t.button,onClick:()=>s(!0),children:"Bottom"}),e(d,{visible:r,position:"bottom",onClose:s,children:e("div",{className:t.bottom,children:"Press escape to close the drawer."})})]})},q=()=>o("article",{className:a.article,children:[e("h1",{className:a.title,children:"Drawer"}),e("p",{className:a.desc,children:"Display overlay area at any side of the screen."}),e("h2",{className:a.heading,children:"Example"}),e("h3",{className:a.caption,children:"Standard Drawer"}),o("div",{className:a.content,children:[e(O,{}),e("div",{className:a.code,children:e(V,{code:A})})]}),e("h3",{className:a.caption,children:"Drawer Position"}),o("div",{className:a.content,children:[e(G,{}),e($,{}),e(K,{}),e(W,{})]})]});var U=q;export{U as default};
