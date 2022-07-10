import{m as N,a as e,n as _,o as k,p as i,c as C,i as S,j as o,r as n,F as c,B as l,q as D,L as w}from"./index.4c5daa55.js";import{u as g,a as y}from"./useFocusTrap.633b3c48.js";import{u as x}from"./useWindowEvent.f3c81cb2.js";import{u as V}from"./useTitle.5783f7b1.js";import{s as a,C as P}from"./view.module.2318c4f8.js";const d=({children:r,visible:s,onClose:p,position:f="left"})=>{const u=N.useRef(null),b=h=>{h.stopPropagation()},m=()=>typeof p=="function"&&p(!1);g(s),x("keydown",h=>{h.key===S.Escape&&s&&m()});const v=y(s);return e(_,{children:e(k,{nodeRef:u,in:s,unmountOnExit:!0,timeout:300,classNames:{enter:i["mask-enter"],enterActive:i["mask-enter-active"],exit:i["mask-exit"],exitActive:i["mask-exit-active"]},children:e("div",{className:i.mask,ref:u,onClick:m,children:e("div",{role:"dialog","aria-modal":"true",className:C(i.drawer,i[f]),ref:v,onClick:b,children:r})})})})},L="_inner_1phfw_1",B="_header_1phfw_5",T="_close_1phfw_11",I="_closeIcon_1phfw_1",R="_wrapper_1phfw_36",E="_button_1phfw_42",j="_left_1phfw_46",F="_right_1phfw_50",O="_top_1phfw_54",A="_bottom_1phfw_58";var t={inner:L,header:B,close:T,closeIcon:I,wrapper:R,button:E,left:j,right:F,top:O,bottom:A};const G=()=>{const[r,s]=n.exports.useState(!1);return o(c,{children:[e(l,{className:t.button,onClick:()=>s(!0),children:"Open Drawer"}),e(d,{visible:r,onClose:s,children:e("div",{className:t.left,children:o("div",{className:t.inner,children:[e("div",{className:t.header,children:e("button",{onClick:()=>s(!1),className:t.close,children:e(D,{className:t.closeIcon})})}),e(w,{to:"/button",children:"Button View"}),e("p",{children:"Press escape to close the drawer."}),e(w,{href:"https://github.com/acgotaku/simple-ui",children:"Github"}),e("p",{children:"Trap focus inside drawer."})]})})})]})},$=`
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
`,q=()=>{const[r,s]=n.exports.useState(!1);return o(c,{children:[e(l,{className:t.button,onClick:()=>s(!0),children:"Left"}),e(d,{visible:r,onClose:s,children:e("div",{className:t.left,children:"Press escape to close the drawer."})})]})},K=()=>{const[r,s]=n.exports.useState(!1);return o(c,{children:[e(l,{className:t.button,onClick:()=>s(!0),children:"Right"}),e(d,{visible:r,position:"right",onClose:s,children:e("div",{className:t.right,children:"Press escape to close the drawer."})})]})},U=()=>{const[r,s]=n.exports.useState(!1);return o(c,{children:[e(l,{className:t.button,onClick:()=>s(!0),children:"Top"}),e(d,{visible:r,position:"top",onClose:s,children:e("div",{className:t.top,children:"Press escape to close the drawer."})})]})},W=()=>{const[r,s]=n.exports.useState(!1);return o(c,{children:[e(l,{className:t.button,onClick:()=>s(!0),children:"Bottom"}),e(d,{visible:r,position:"bottom",onClose:s,children:e("div",{className:t.bottom,children:"Press escape to close the drawer."})})]})},z=()=>(V("Drawer | Simple UI"),o("article",{className:a.article,children:[e("h1",{className:a.title,children:"Drawer"}),e("p",{className:a.desc,children:"Display overlay area at any side of the screen."}),e("h2",{className:a.heading,children:"Example"}),e("h3",{className:a.caption,children:"Standard Drawer"}),o("div",{className:a.content,children:[e(G,{}),e("div",{className:a.code,children:e(P,{code:$})})]}),e("h3",{className:a.caption,children:"Drawer Position"}),e("div",{className:a.content,children:o("div",{className:t.wrapper,children:[e(q,{}),e(K,{}),e(U,{}),e(W,{})]})})]}));var Y=z;export{Y as default};
