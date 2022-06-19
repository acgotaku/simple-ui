import{r as o,j as l,c as u,A as r,a as e,S,k as w,E as k}from"./index.57dcb55e.js";import{s as n,C as g}from"./view.module.ded59703.js";const d=5,f=Math.floor(d/2),h=({currentPage:a,total:t,onChange:c,className:m=""})=>{const i=o.exports.useMemo(()=>{const s=Math.min(d,t),b=k(a-f,1,t-s+1);return Array.from(Array(s).keys()).map(y=>y+b)},[a,t]),p=o.exports.useMemo(()=>t>d,[t]),P=o.exports.useMemo(()=>a>1,[a]),N=o.exports.useMemo(()=>a<t,[a,t]),v=o.exports.useCallback(()=>{const s=Math.max(1,i[0]-1);c(s)},[i,c]),x=o.exports.useCallback(()=>{const s=Math.min(t,i[i.length-1]+1);c(s)},[t,i,c]),C=o.exports.useCallback(s=>{c(s)},[c]);return l("div",{className:u(r.pagination,m),children:[p&&e("button",{type:"button",disabled:!P,className:r.button,onClick:v,children:e(S,{})}),i.map(s=>e("button",{type:"button",className:u(r.button,{[r.current]:s===a}),onClick:()=>C(s),children:e("span",{children:s})},s)),p&&e("button",{type:"button",disabled:!N,className:r.button,onClick:x,children:e(w,{})})]})},M="_right_1vscw_1";var T={right:M};const E=()=>{const[a,t]=o.exports.useState(1);return e(h,{currentPage:a,total:3,onChange:t})},_=`
const [page, setPage] = useState(1);
return <Pagination currentPage={page} total={3} onChange={setPage} />;
`,j=()=>{const[a,t]=o.exports.useState(1);return e(h,{currentPage:a,total:20,onChange:t})},A=`
const [page, setPage] = useState(1);
return <Pagination currentPage={page} total={20} onChange={setPage} />;
`,B=()=>{const[a,t]=o.exports.useState(1);return e(h,{currentPage:a,total:20,onChange:t,className:T.right})},$=`
const [page, setPage] = useState(1);
return (
  <Pagination
    currentPage={page}
    total={20}
    onChange={setPage}
    className={paginationStyles.right}
  />
);
`,D=()=>l("article",{className:n.article,children:[e("h1",{className:n.title,children:"Pagination"}),e("p",{className:n.desc,children:"The Pagination component allows you to display active page and navigate between multiple pages."}),e("h2",{className:n.heading,children:"Example"}),e("h3",{className:n.caption,children:" Pagination with 3 pages"}),l("div",{className:n.content,children:[e(E,{}),e("div",{className:n.code,children:e(g,{code:_})})]}),e("h3",{className:n.caption,children:" Pagination with 20 pages"}),l("div",{className:n.content,children:[e(j,{}),e("div",{className:n.code,children:e(g,{code:A})})]}),e("h3",{className:n.caption,children:" Pagination with align right"}),l("div",{className:n.content,children:[e(B,{}),e("div",{className:n.code,children:e(g,{code:$})})]})]});var O=D;export{O as default};
