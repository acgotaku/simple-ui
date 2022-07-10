import{j as s,a as e,r as o}from"./index.25217346.js";import{P as c}from"./Pagination.650f22a1.js";import{u as r}from"./useTitle.0dd6fec0.js";import{s as a,C as i}from"./view.module.32c29292.js";const g="_right_1vscw_1";var l={right:g};const h=()=>{const[t,n]=o.exports.useState(1);return e(c,{currentPage:t,total:3,onChange:n})},d=`
const [page, setPage] = useState(1);
return <Pagination currentPage={page} total={3} onChange={setPage} />;
`,P=()=>{const[t,n]=o.exports.useState(1);return e(c,{currentPage:t,total:20,onChange:n})},p=`
const [page, setPage] = useState(1);
return <Pagination currentPage={page} total={20} onChange={setPage} />;
`,m=()=>{const[t,n]=o.exports.useState(1);return e(c,{currentPage:t,total:20,onChange:n,className:l.right})},u=`
const [page, setPage] = useState(1);
return (
  <Pagination
    currentPage={page}
    total={20}
    onChange={setPage}
    className={paginationStyles.right}
  />
);
`,N=()=>(r("Pagination | Simple UI"),s("article",{className:a.article,children:[e("h1",{className:a.title,children:"Pagination"}),e("p",{className:a.desc,children:"The Pagination component allows you to display active page and navigate between multiple pages."}),e("h2",{className:a.heading,children:"Example"}),e("h3",{className:a.caption,children:" Pagination with 3 pages"}),s("div",{className:a.content,children:[e(h,{}),e("div",{className:a.code,children:e(i,{code:d})})]}),e("h3",{className:a.caption,children:" Pagination with 20 pages"}),s("div",{className:a.content,children:[e(P,{}),e("div",{className:a.code,children:e(i,{code:p})})]}),e("h3",{className:a.caption,children:" Pagination with align right"}),s("div",{className:a.content,children:[e(m,{}),e("div",{className:a.code,children:e(i,{code:u})})]})]}));var x=N;export{x as default};
