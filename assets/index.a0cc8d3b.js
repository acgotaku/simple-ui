import{r as m,e as N,t as B,f as M,a as e,g as x,s as a,j as s,h as S,L as w,F as v,B as u}from"./index.2084eccf.js";import{u as y}from"./useWindowEvent.7e3db803.js";import{P as V}from"./index.2837aa1f.js";import{s as o,C as b}from"./view.module.da909903.js";function T(){return window.innerWidth-document.documentElement.clientWidth}function E(){const l=T();l&&document.body.style.setProperty("padding-right",`${l}px`),document.body.style.setProperty("overflow","hidden")}function p(){document.body.style.removeProperty("overflow"),document.body.style.removeProperty("padding-right")}function R(l){m.exports.useEffect(()=>(l?E():p(),()=>{p()}),[l])}function _(l,t){if(t.key!==N.Tab)return;t.preventDefault();const n=B(l);if(!n.length)return;const c=n.findIndex(d=>d.isSameNode(document.activeElement));let i=0;c>=0&&(t.shiftKey?i=c>0?c-1:n.length-1:i=c<n.length-1?c+1:0),n[i].focus()}function I(l=!0){const t=m.exports.useRef(),n=m.exports.useRef();return y("keydown",i=>{t.current&&_(t.current,i)}),m.exports.useCallback(i=>{var d;if(!l){(d=n.current)==null||d.focus();return}i?(n.current=document.activeElement,t.current=i):t.current=null},[l])}const C=({children:l,visible:t,closable:n=!1,onClose:c,title:i})=>{const d=M.useRef(null),k=h=>{h.stopPropagation()},f=()=>typeof c=="function"&&c(!1);R(t),y("keydown",h=>{h.key===N.Escape&&t&&f()});const g=I(t);return e(V,{children:e(x,{nodeRef:d,in:t,unmountOnExit:!0,timeout:300,classNames:{enter:a["mask-enter"],enterActive:a["mask-enter-active"],exit:a["mask-exit"],exitActive:a["mask-exit-active"]},children:e("div",{className:a.mask,ref:d,onClick:()=>n&&f(),children:e("div",{role:"dialog","aria-modal":"true",className:a.modal,ref:g,onClick:k,children:s("div",{className:a.inner,children:[i&&s("div",{className:a.header,children:[e("p",{className:a.title,children:i}),e("button",{onClick:f,className:a.close,children:e(S,{className:a.closeIcon})})]}),e("div",{className:a.body,children:l})]})})})})})},P="_modal_c4m7a_1",W="_footer_c4m7a_6",A="_footerButton_c4m7a_1";var r={modal:P,footer:W,footerButton:A};const D=()=>{const[l,t]=m.exports.useState(!1);return s(v,{children:[e(u,{onClick:()=>t(!0),children:"Default Modal"}),s(C,{visible:l,title:"Modal Title",onClose:t,children:[e("div",{className:r.modal,children:"Modal Body Content"}),s("div",{className:r.footer,children:[e(u,{color:"standard",className:r.footerButton,onClick:()=>t(!1),children:"close"}),e(u,{color:"primary",className:r.footerButton,onClick:()=>t(!1),children:"confirm"})]})]})]})},F=`
const [visible, setVisible] = useState(false);
return (
  <>
    <Button onClick={() => setVisible(true)}>{'Default Modal'}</Button>
    <Modal visible={visible} title={'Modal Title'} onClose={setVisible}>
      <div className={modalStyles.modal}>{'Modal Body Content'}</div>
      <div className={modalStyles.footer}>
        <Button
          color="standard"
          className={modalStyles.footerButton}
          onClick={() => setVisible(false)}
        >
          {'close'}
        </Button>
        <Button
          color="primary"
          className={modalStyles.footerButton}
          onClick={() => setVisible(false)}
        >
          {'confirm'}
        </Button>
      </div>
    </Modal>
  </>
);
`,j=()=>{const[l,t]=m.exports.useState(!1);return s(v,{children:[e(u,{onClick:()=>t(!0),children:"Closable Modal"}),s(C,{visible:l,title:"Modal Title",onClose:t,closable:!0,children:[e("div",{className:r.modal,children:"Click outside can close modal"}),s("div",{className:r.footer,children:[e(u,{color:"standard",className:r.footerButton,onClick:()=>t(!1),children:"close"}),e(u,{color:"primary",className:r.footerButton,onClick:()=>t(!1),children:"confirm"})]})]})]})},K=`
const [visible, setVisible] = useState(false);
return (
  <>
    <Button onClick={() => setVisible(true)}>{'Closable Modal'}</Button>
    <Modal
      visible={visible}
      title={'Modal Title'}
      onClose={setVisible}
      closable={true}
    >
      <div className={modalStyles.modal}>
        {'Click outside can close modal'}
      </div>
      <div className={modalStyles.footer}>
        <Button
          color="standard"
          className={modalStyles.footerButton}
          onClick={() => setVisible(false)}
        >
          {'close'}
        </Button>
        <Button
          color="primary"
          className={modalStyles.footerButton}
          onClick={() => setVisible(false)}
        >
          {'confirm'}
        </Button>
      </div>
    </Modal>
  </>
);
`,L=()=>s("article",{className:o.article,children:[e("h1",{className:o.title,children:"Modal"}),e("p",{className:o.desc,children:"Modals are temporary pop-ups that take focus from the page or app and require people to interact with them."}),e("h2",{className:o.heading,children:"Example"}),e("h3",{className:o.caption,children:"Default Modal"}),s("div",{className:o.content,children:[e(D,{}),e("div",{className:o.code,children:e(b,{code:F})})]}),e("h3",{className:o.caption,children:"Click outside can close modal"}),s("div",{className:o.content,children:[e(j,{}),e("div",{className:o.code,children:e(b,{code:K})})]}),e("h2",{className:o.heading,children:"Accessibility"}),e("h3",{className:o.caption,children:"Keyboard Interaction"}),s("div",{className:o.content,children:[e("p",{className:o.detail,children:"When a dialog opens, focus moves to an element inside the dialog. See notes below regarding initial focus placement."}),s("p",{className:o.detail,children:[e("b",{children:"Tab"}),": Moves focus to the next tabbable element inside the dialog."]}),e("p",{className:o.detail,children:"If focus is on the last tabbable element inside the dialog, moves focus to the first tabbable element inside the dialog."}),s("p",{className:o.detail,children:[e("b",{children:"Shift + Tab"}),": Moves focus to the previous tabbable element inside the dialog."]}),e("p",{className:o.detail,children:"If focus is on the first tabbable element inside the dialog, moves focus to the last tabbable element inside the dialog."}),s("p",{className:o.detail,children:[e("b",{children:"Escape"}),": Closes the dialog."]}),e(w,{href:"https://www.w3.org/TR/wai-aria-practices/#dialog_modal",children:"WAI-ARIA Authoring Practices - 3.9 Dialog (Modal)"})]})]});var G=L;export{G as default};
