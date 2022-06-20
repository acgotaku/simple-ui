import{j as s,a as e,r as i}from"./index.c957bdf8.js";import{P as c}from"./Pagination.2de63d42.js";import{s as a,C as o}from"./view.module.fd553c76.js";const r="_right_1vscw_1";var g={right:r};const l=()=>{const[t,n]=i.exports.useState(1);return e(c,{currentPage:t,total:3,onChange:n})},h=`
const [page, setPage] = useState(1);
return <Pagination currentPage={page} total={3} onChange={setPage} />;
`,d=()=>{const[t,n]=i.exports.useState(1);return e(c,{currentPage:t,total:20,onChange:n})},P=`
const [page, setPage] = useState(1);
return <Pagination currentPage={page} total={20} onChange={setPage} />;
`,p=()=>{const[t,n]=i.exports.useState(1);return e(c,{currentPage:t,total:20,onChange:n,className:g.right})},m=`
const [page, setPage] = useState(1);
return (
  <Pagination
    currentPage={page}
    total={20}
    onChange={setPage}
    className={paginationStyles.right}
  />
);
`,u=()=>s("article",{className:a.article,children:[e("h1",{className:a.title,children:"Pagination"}),e("p",{className:a.desc,children:"The Pagination component allows you to display active page and navigate between multiple pages."}),e("h2",{className:a.heading,children:"Example"}),e("h3",{className:a.caption,children:" Pagination with 3 pages"}),s("div",{className:a.content,children:[e(l,{}),e("div",{className:a.code,children:e(o,{code:h})})]}),e("h3",{className:a.caption,children:" Pagination with 20 pages"}),s("div",{className:a.content,children:[e(d,{}),e("div",{className:a.code,children:e(o,{code:P})})]}),e("h3",{className:a.caption,children:" Pagination with align right"}),s("div",{className:a.content,children:[e(p,{}),e("div",{className:a.code,children:e(o,{code:m})})]})]});var w=u;export{w as default};
