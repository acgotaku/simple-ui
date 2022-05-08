import{R as k,a as e,P as B,d as M,h as t,j as a,f as y,e as g,L as S,r as f,F as b,B as i}from"./index.90915ce0.js";import{u as V,a as x}from"./useFocusTrap.50d77b15.js";import{u as w}from"./useWindowEvent.239b94e4.js";import{s as l,C as u}from"./view.module.37d08e99.js";const p=({children:c,visible:o,closable:N=!1,onClose:r,title:m})=>{const h=k.useRef(null),v=d=>{d.stopPropagation()},n=()=>typeof r=="function"&&r(!1);V(o),w("keydown",d=>{d.key===g.Escape&&o&&n()});const C=x(o);return e(B,{children:e(M,{nodeRef:h,in:o,unmountOnExit:!0,timeout:300,classNames:{enter:t["mask-enter"],enterActive:t["mask-enter-active"],exit:t["mask-exit"],exitActive:t["mask-exit-active"]},children:e("div",{className:t.mask,ref:h,onClick:()=>N&&n(),children:e("div",{role:"dialog","aria-modal":"true",className:t.modal,ref:C,onClick:v,children:a("div",{className:t.inner,children:[m&&a("div",{className:t.header,children:[e("p",{className:t.title,children:m}),e("button",{onClick:n,className:t.close,children:e(y,{className:t.closeIcon})})]}),e("div",{className:t.body,children:c})]})})})})})},T="_modal_c4m7a_1",_="_footer_c4m7a_6",R="_footerButton_c4m7a_1";var s={modal:T,footer:_,footerButton:R};const A=()=>{const[c,o]=f.exports.useState(!1);return a(b,{children:[e(i,{onClick:()=>o(!0),children:"Default Modal"}),a(p,{visible:c,title:"Modal Title",onClose:o,children:[e("div",{className:s.modal,children:"Modal Body Content"}),a("div",{className:s.footer,children:[e(i,{color:"standard",className:s.footerButton,onClick:()=>o(!1),children:"close"}),e(i,{color:"primary",className:s.footerButton,onClick:()=>o(!1),children:"confirm"})]})]})]})},I=`
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
`,D=()=>{const[c,o]=f.exports.useState(!1);return a(b,{children:[e(i,{onClick:()=>o(!0),children:"Closable Modal"}),a(p,{visible:c,title:"Modal Title",onClose:o,closable:!0,children:[e("div",{className:s.modal,children:"Click outside can close modal"}),a("div",{className:s.footer,children:[e(i,{color:"standard",className:s.footerButton,onClick:()=>o(!1),children:"close"}),e(i,{color:"primary",className:s.footerButton,onClick:()=>o(!1),children:"confirm"})]})]})]})},E=`
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
`,P=()=>a("article",{className:l.article,children:[e("h1",{className:l.title,children:"Modal"}),e("p",{className:l.desc,children:"Modals are temporary pop-ups that take focus from the page or app and require people to interact with them."}),e("h2",{className:l.heading,children:"Example"}),e("h3",{className:l.caption,children:"Default Modal"}),a("div",{className:l.content,children:[e(A,{}),e("div",{className:l.code,children:e(u,{code:I})})]}),e("h3",{className:l.caption,children:"Click outside can close modal"}),a("div",{className:l.content,children:[e(D,{}),e("div",{className:l.code,children:e(u,{code:E})})]}),e("h2",{className:l.heading,children:"Accessibility"}),e("h3",{className:l.caption,children:"Keyboard Interaction"}),a("div",{className:l.content,children:[e("p",{className:l.detail,children:"When a dialog opens, focus moves to an element inside the dialog. See notes below regarding initial focus placement."}),a("p",{className:l.detail,children:[e("b",{children:"Tab"}),": Moves focus to the next tabbable element inside the dialog."]}),e("p",{className:l.detail,children:"If focus is on the last tabbable element inside the dialog, moves focus to the first tabbable element inside the dialog."}),a("p",{className:l.detail,children:[e("b",{children:"Shift + Tab"}),": Moves focus to the previous tabbable element inside the dialog."]}),e("p",{className:l.detail,children:"If focus is on the first tabbable element inside the dialog, moves focus to the last tabbable element inside the dialog."}),a("p",{className:l.detail,children:[e("b",{children:"Escape"}),": Closes the dialog."]}),e(S,{href:"https://www.w3.org/TR/wai-aria-practices/#dialog_modal",children:"WAI-ARIA Authoring Practices - 3.9 Dialog (Modal)"})]})]});var K=P;export{K as default};
