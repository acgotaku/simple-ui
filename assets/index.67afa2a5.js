var w=Object.defineProperty;var p=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var y=(t,e,l)=>e in t?w(t,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[e]=l,b=(t,e)=>{for(var l in e||(e={}))I.call(e,l)&&y(t,l,e[l]);if(p)for(var l of p(e))E.call(e,l)&&y(t,l,e[l]);return t};import{r as u,e as g,d as V,a as o,f as T,s as r,j as i,g as R,L as A,F as C,B as m}from"./index.5fddeb22.js";import{P as _}from"./index.a90159cb.js";import{s,C as v}from"./view.module.027ad2e7.js";function P(){return window.innerWidth-document.documentElement.clientWidth}function W(){const t=P();t&&document.body.style.setProperty("padding-right",`${t}px`),document.body.style.setProperty("overflow","hidden")}function N(){document.body.style.removeProperty("overflow"),document.body.style.removeProperty("padding-right")}function D(t){u.exports.useEffect(()=>(t?W():N(),()=>{N()}),[t])}function k(t,e,l){u.exports.useEffect(()=>(window.addEventListener(t,e,l),()=>window.removeEventListener(t,e,l)),[t,e,l])}const F=["input:not([disabled])","select:not([disabled])","textarea:not([disabled])","a[href]","area[href]","button:not([disabled])",'[tabindex="0"]',"audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary"],L=F.join(","),j={shouldIgnoreVisibility:!1,shouldIgnoreTabIndex:!1};function B(t){return t?getComputedStyle(t).display==="none"?!0:B(t.parentElement):!1}function K(t){return!!(getComputedStyle(t).visibility==="hidden"||B(t))}function O(t){const e=t.getAttribute("tabindex");return!(e&&Number(e)<0)}function $(t,e){const l=b(b({},j),e);let a=Array.from(t.querySelectorAll(L));return l.shouldIgnoreVisibility||(a=a.filter(n=>!K(n))),l.shouldIgnoreTabIndex||(a=a.filter(n=>O(n))),a}function q(t,e){if(e.key!==g.Tab)return;e.preventDefault();const l=$(t);if(!l.length)return;const a=l.findIndex(d=>d.isSameNode(document.activeElement));let n=0;a>=0&&(e.shiftKey?n=a>0?a-1:l.length-1:n=a<l.length-1?a+1:0),l[n].focus()}function H(t=!0){const e=u.exports.useRef(),l=u.exports.useRef();return k("keydown",n=>{e.current&&q(e.current,n)}),u.exports.useCallback(n=>{var d;if(!t){(d=l.current)==null||d.focus();return}n?(l.current=document.activeElement,e.current=n):e.current=null},[t])}const x=({children:t,visible:e,closable:l=!1,onClose:a,title:n})=>{const d=V.useRef(null),M=h=>{h.stopPropagation()},f=()=>typeof a=="function"&&a(!1);D(e),k("keydown",h=>{h.key===g.Escape&&e&&f()});const S=H(e);return o(_,{children:o(T,{nodeRef:d,in:e,unmountOnExit:!0,timeout:300,classNames:{enter:r["mask-enter"],enterActive:r["mask-enter-active"],exit:r["mask-exit"],exitActive:r["mask-exit-active"]},children:o("div",{className:r.mask,ref:d,onClick:()=>l&&f(),children:o("div",{role:"dialog","aria-modal":"true",className:r.modal,ref:S,onClick:M,children:i("div",{className:r.inner,children:[n&&i("div",{className:r.header,children:[o("p",{className:r.title,children:n}),o("button",{onClick:f,className:r.close,children:o(R,{className:r.closeIcon})})]}),o("div",{className:r.body,children:t})]})})})})})},z="_modal_c4m7a_1",G="_footer_c4m7a_6",J="_footerButton_c4m7a_1";var c={modal:z,footer:G,footerButton:J};const Q=()=>{const[t,e]=u.exports.useState(!1);return i(C,{children:[o(m,{onClick:()=>e(!0),children:"Default Modal"}),i(x,{visible:t,title:"Modal Title",onClose:e,children:[o("div",{className:c.modal,children:"Modal Body Content"}),i("div",{className:c.footer,children:[o(m,{color:"standard",className:c.footerButton,onClick:()=>e(!1),children:"close"}),o(m,{color:"primary",className:c.footerButton,onClick:()=>e(!1),children:"confirm"})]})]})]})},U=`
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
`,X=()=>{const[t,e]=u.exports.useState(!1);return i(C,{children:[o(m,{onClick:()=>e(!0),children:"Closable Modal"}),i(x,{visible:t,title:"Modal Title",onClose:e,closable:!0,children:[o("div",{className:c.modal,children:"Click outside can close modal"}),i("div",{className:c.footer,children:[o(m,{color:"standard",className:c.footerButton,onClick:()=>e(!1),children:"close"}),o(m,{color:"primary",className:c.footerButton,onClick:()=>e(!1),children:"confirm"})]})]})]})},Y=`
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
`,Z=()=>i("article",{className:s.article,children:[o("h1",{className:s.title,children:"Modal"}),o("p",{className:s.desc,children:"Modals are temporary pop-ups that take focus from the page or app and require people to interact with them."}),o("h2",{className:s.heading,children:"Example"}),o("h3",{className:s.caption,children:"Default Modal"}),i("div",{className:s.content,children:[o(Q,{}),o("div",{className:s.code,children:o(v,{code:U})})]}),o("h3",{className:s.caption,children:"Click outside can close modal"}),i("div",{className:s.content,children:[o(X,{}),o("div",{className:s.code,children:o(v,{code:Y})})]}),o("h2",{className:s.heading,children:"Accessibility"}),o("h3",{className:s.caption,children:"Keyboard Interaction"}),i("div",{className:s.content,children:[o("p",{className:s.detail,children:"When a dialog opens, focus moves to an element inside the dialog. See notes below regarding initial focus placement."}),i("p",{className:s.detail,children:[o("b",{children:"Tab"}),": Moves focus to the next tabbable element inside the dialog."]}),o("p",{className:s.detail,children:"If focus is on the last tabbable element inside the dialog, moves focus to the first tabbable element inside the dialog."}),i("p",{className:s.detail,children:[o("b",{children:"Shift + Tab"}),": Moves focus to the previous tabbable element inside the dialog."]}),o("p",{className:s.detail,children:"If focus is on the first tabbable element inside the dialog, moves focus to the last tabbable element inside the dialog."}),i("p",{className:s.detail,children:[o("b",{children:"Escape"}),": Closes the dialog."]}),o(A,{href:"https://www.w3.org/TR/wai-aria-practices/#dialog_modal",children:"WAI-ARIA Authoring Practices - 3.9 Dialog (Modal)"})]})]});var se=Z;export{se as default};
