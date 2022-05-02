import{r as m,e as v,t as B,f as M,a as e,g as x,s as n,j as s,h as w,L as S,F as N,B as u}from"./index.ca8ff8cb.js";import{P as E}from"./index.7eb07430.js";import{s as l,C as b}from"./view.module.01589275.js";function V(){return window.innerWidth-document.documentElement.clientWidth}function T(){const o=V();o&&document.body.style.setProperty("padding-right",`${o}px`),document.body.style.setProperty("overflow","hidden")}function p(){document.body.style.removeProperty("overflow"),document.body.style.removeProperty("padding-right")}function R(o){m.exports.useEffect(()=>(o?T():p(),()=>{p()}),[o])}function y(o,t,a){m.exports.useEffect(()=>(window.addEventListener(o,t,a),()=>window.removeEventListener(o,t,a)),[o,t,a])}function _(o,t){if(t.key!==v.Tab)return;t.preventDefault();const a=B(o);if(!a.length)return;const c=a.findIndex(d=>d.isSameNode(document.activeElement));let i=0;c>=0&&(t.shiftKey?i=c>0?c-1:a.length-1:i=c<a.length-1?c+1:0),a[i].focus()}function I(o=!0){const t=m.exports.useRef(),a=m.exports.useRef();return y("keydown",i=>{t.current&&_(t.current,i)}),m.exports.useCallback(i=>{var d;if(!o){(d=a.current)==null||d.focus();return}i?(a.current=document.activeElement,t.current=i):t.current=null},[o])}const C=({children:o,visible:t,closable:a=!1,onClose:c,title:i})=>{const d=M.useRef(null),k=h=>{h.stopPropagation()},f=()=>typeof c=="function"&&c(!1);R(t),y("keydown",h=>{h.key===v.Escape&&t&&f()});const g=I(t);return e(E,{children:e(x,{nodeRef:d,in:t,unmountOnExit:!0,timeout:300,classNames:{enter:n["mask-enter"],enterActive:n["mask-enter-active"],exit:n["mask-exit"],exitActive:n["mask-exit-active"]},children:e("div",{className:n.mask,ref:d,onClick:()=>a&&f(),children:e("div",{role:"dialog","aria-modal":"true",className:n.modal,ref:g,onClick:k,children:s("div",{className:n.inner,children:[i&&s("div",{className:n.header,children:[e("p",{className:n.title,children:i}),e("button",{onClick:f,className:n.close,children:e(w,{className:n.closeIcon})})]}),e("div",{className:n.body,children:o})]})})})})})},P="_modal_c4m7a_1",W="_footer_c4m7a_6",A="_footerButton_c4m7a_1";var r={modal:P,footer:W,footerButton:A};const D=()=>{const[o,t]=m.exports.useState(!1);return s(N,{children:[e(u,{onClick:()=>t(!0),children:"Default Modal"}),s(C,{visible:o,title:"Modal Title",onClose:t,children:[e("div",{className:r.modal,children:"Modal Body Content"}),s("div",{className:r.footer,children:[e(u,{color:"standard",className:r.footerButton,onClick:()=>t(!1),children:"close"}),e(u,{color:"primary",className:r.footerButton,onClick:()=>t(!1),children:"confirm"})]})]})]})},F=`
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
`,L=()=>{const[o,t]=m.exports.useState(!1);return s(N,{children:[e(u,{onClick:()=>t(!0),children:"Closable Modal"}),s(C,{visible:o,title:"Modal Title",onClose:t,closable:!0,children:[e("div",{className:r.modal,children:"Click outside can close modal"}),s("div",{className:r.footer,children:[e(u,{color:"standard",className:r.footerButton,onClick:()=>t(!1),children:"close"}),e(u,{color:"primary",className:r.footerButton,onClick:()=>t(!1),children:"confirm"})]})]})]})},j=`
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
`,K=()=>s("article",{className:l.article,children:[e("h1",{className:l.title,children:"Modal"}),e("p",{className:l.desc,children:"Modals are temporary pop-ups that take focus from the page or app and require people to interact with them."}),e("h2",{className:l.heading,children:"Example"}),e("h3",{className:l.caption,children:"Default Modal"}),s("div",{className:l.content,children:[e(D,{}),e("div",{className:l.code,children:e(b,{code:F})})]}),e("h3",{className:l.caption,children:"Click outside can close modal"}),s("div",{className:l.content,children:[e(L,{}),e("div",{className:l.code,children:e(b,{code:j})})]}),e("h2",{className:l.heading,children:"Accessibility"}),e("h3",{className:l.caption,children:"Keyboard Interaction"}),s("div",{className:l.content,children:[e("p",{className:l.detail,children:"When a dialog opens, focus moves to an element inside the dialog. See notes below regarding initial focus placement."}),s("p",{className:l.detail,children:[e("b",{children:"Tab"}),": Moves focus to the next tabbable element inside the dialog."]}),e("p",{className:l.detail,children:"If focus is on the last tabbable element inside the dialog, moves focus to the first tabbable element inside the dialog."}),s("p",{className:l.detail,children:[e("b",{children:"Shift + Tab"}),": Moves focus to the previous tabbable element inside the dialog."]}),e("p",{className:l.detail,children:"If focus is on the first tabbable element inside the dialog, moves focus to the last tabbable element inside the dialog."}),s("p",{className:l.detail,children:[e("b",{children:"Escape"}),": Closes the dialog."]}),e(S,{href:"https://www.w3.org/TR/wai-aria-practices/#dialog_modal",children:"WAI-ARIA Authoring Practices - 3.9 Dialog (Modal)"})]})]});var z=K;export{z as default};
