import{m as k,a as e,n as B,o as M,z as s,j as a,q as y,i as g,L as S,r as f,F as b,B as i}from"./index.7a0ea719.js";import{u as V,a as x}from"./useFocusTrap.68ec8187.js";import{u as w}from"./useWindowEvent.75a45542.js";import{s as l,C as u}from"./view.module.5c54eb9f.js";const p=({children:c,visible:o,closable:N=!1,onClose:r,title:m})=>{const h=k.useRef(null),v=d=>{d.stopPropagation()},n=()=>typeof r=="function"&&r(!1);V(o),w("keydown",d=>{d.key===g.Escape&&o&&n()});const C=x(o);return e(B,{children:e(M,{nodeRef:h,in:o,unmountOnExit:!0,timeout:300,classNames:{enter:s["mask-enter"],enterActive:s["mask-enter-active"],exit:s["mask-exit"],exitActive:s["mask-exit-active"]},children:e("div",{className:s.mask,ref:h,onClick:()=>N&&n(),children:e("div",{role:"dialog","aria-modal":"true",className:s.modal,ref:C,onClick:v,children:a("div",{className:s.inner,children:[m&&a("div",{className:s.header,children:[e("p",{className:s.title,children:m}),e("button",{onClick:n,className:s.close,children:e(y,{className:s.closeIcon})})]}),e("div",{className:s.body,children:c})]})})})})})},T="_modal_c4m7a_1",_="_footer_c4m7a_6",A="_footerButton_c4m7a_1";var t={modal:T,footer:_,footerButton:A};const I=()=>{const[c,o]=f.exports.useState(!1);return a(b,{children:[e(i,{onClick:()=>o(!0),children:"Default Modal"}),a(p,{visible:c,title:"Modal Title",onClose:o,children:[e("div",{className:t.modal,children:"Modal Body Content"}),a("div",{className:t.footer,children:[e(i,{color:"standard",className:t.footerButton,onClick:()=>o(!1),children:"close"}),e(i,{color:"primary",className:t.footerButton,onClick:()=>o(!1),children:"confirm"})]})]})]})},D=`
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
`,E=()=>{const[c,o]=f.exports.useState(!1);return a(b,{children:[e(i,{onClick:()=>o(!0),children:"Closable Modal"}),a(p,{visible:c,title:"Modal Title",onClose:o,closable:!0,children:[e("div",{className:t.modal,children:"Click outside can close modal"}),a("div",{className:t.footer,children:[e(i,{color:"standard",className:t.footerButton,onClick:()=>o(!1),children:"close"}),e(i,{color:"primary",className:t.footerButton,onClick:()=>o(!1),children:"confirm"})]})]})]})},R=`
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
`,j=()=>a("article",{className:l.article,children:[e("h1",{className:l.title,children:"Modal"}),e("p",{className:l.desc,children:"Modals are temporary pop-ups that take focus from the page or app and require people to interact with them."}),e("h2",{className:l.heading,children:"Example"}),e("h3",{className:l.caption,children:"Default Modal"}),a("div",{className:l.content,children:[e(I,{}),e("div",{className:l.code,children:e(u,{code:D})})]}),e("h3",{className:l.caption,children:"Click outside can close modal"}),a("div",{className:l.content,children:[e(E,{}),e("div",{className:l.code,children:e(u,{code:R})})]}),e("h2",{className:l.heading,children:"Accessibility"}),e("h3",{className:l.caption,children:"Keyboard Interaction"}),a("div",{className:l.content,children:[e("p",{className:l.detail,children:"When a dialog opens, focus moves to an element inside the dialog. See notes below regarding initial focus placement."}),a("p",{className:l.detail,children:[e("b",{children:"Tab"}),": Moves focus to the next tabbable element inside the dialog."]}),e("p",{className:l.detail,children:"If focus is on the last tabbable element inside the dialog, moves focus to the first tabbable element inside the dialog."}),a("p",{className:l.detail,children:[e("b",{children:"Shift + Tab"}),": Moves focus to the previous tabbable element inside the dialog."]}),e("p",{className:l.detail,children:"If focus is on the first tabbable element inside the dialog, moves focus to the last tabbable element inside the dialog."}),a("p",{className:l.detail,children:[e("b",{children:"Escape"}),": Closes the dialog."]}),e(S,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/",children:"Dialog (Modal)"})]})]});var q=j;export{q as default};
