import{a as e,U as c,r as o,V as A,j as i,c as S}from"./index.2587f82c.js";import{P as L}from"./Pagination.450b7471.js";import{u as T}from"./useTitle.63d97bf9.js";import{s,C as b}from"./view.module.85f397c2.js";const w=({columns:n})=>e("thead",{className:c.head,children:e("tr",{className:c.headRow,children:n.map(({name:r,label:t})=>e("th",{className:c.headCell,children:t},r))})}),f=({columns:n,dataSource:r})=>e("tbody",{className:c.body,children:r.map((t,d)=>e("tr",{className:c.bodyRow,children:n.map(l=>l.render?e("td",{className:c.bodyCell,children:l.render(t[l.name],t,d)},l.name):e("td",{className:c.bodyCell,children:t[l.name]},l.name))},d))}),p=({columns:n,dataSource:r,className:t="",scroll:d={},pagination:l})=>{const a=o.exports.useMemo(()=>A(l)?l:l?{pageSize:10,currentPage:1}:null,[l]),[m,u]=o.exports.useState(()=>a!=null&&a.currentPage?a.currentPage:1),g=o.exports.useMemo(()=>({"--count-column":n.length,maxHeight:d.y,width:d.x}),[n,d]),y=o.exports.useMemo(()=>{if(a!=null&&a.pageSize){const h=(m-1)*a.pageSize,x=Math.min(h+a.pageSize,r.length);return r.slice(h,x)}else return r},[a,r,m]),N=o.exports.useMemo(()=>a!=null&&a.pageSize?Math.ceil(r.length/a.pageSize):0,[a,r]);return i("div",{className:c.wrapper,children:[i("table",{className:S(c.table,t),style:g,children:[e(w,{columns:n}),e(f,{columns:n,dataSource:y})]}),a&&e(L,{currentPage:m,total:N,onChange:u,className:c.pagination})]})},v=n=>o.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 256 256",...n},o.exports.createElement("rect",{width:256,height:256,fill:"none"}),o.exports.createElement("line",{x1:216,y1:56,x2:40,y2:56,fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:16}),o.exports.createElement("line",{x1:104,y1:104,x2:104,y2:168,fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:16}),o.exports.createElement("line",{x1:152,y1:104,x2:152,y2:168,fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:16}),o.exports.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:16}),o.exports.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:16})),C="_button_gbxxc_1",P="_icon_gbxxc_15";var k={button:C,icon:P};const D=()=>e(p,{columns:[{name:"name",label:"Name"},{name:"age",label:"Age"},{name:"address",label:"Address"}],dataSource:[{name:"Mike",age:32,address:"New York No. 1 Lake Park"},{name:"John",age:42,address:"10 Downing Street"},{name:"Jim Green",age:36,address:"London No. 1 Lake Park"}]}),$=`
const columns = [
  {
    name: 'name',
    label: 'Name'
  },
  {
    name: 'age',
    label: 'Age'
  },
  {
    name: 'address',
    label: 'Address'
  }
];

const dataSource = [
  {
    name: 'Mike',
    age: 32,
    address: 'New York No. 1 Lake Park'
  },
  {
    name: 'John',
    age: 42,
    address: '10 Downing Street'
  },
  {
    name: 'Jim Green',
    age: 36,
    address: 'London No. 1 Lake Park'
  }
];
return <Table columns={columns} dataSource={dataSource} />;
`,J=()=>{const n=[{name:"name",label:"Name"},{name:"age",label:"Age"},{name:"address",label:"Address"}],r=Array.from(Array(30).keys()).map(t=>({name:`Jim Green ${t+1}`,age:36,address:`London No. ${t+1} Lake Park`}));return e(p,{columns:n,dataSource:r,scroll:{y:400}})},M=`
const columns = [
  {
    name: 'name',
    label: 'Name'
  },
  {
    name: 'age',
    label: 'Age'
  },
  {
    name: 'address',
    label: 'Address'
  }
];

const dataSource = Array.from(Array(30).keys()).map(key => ({
  name: \`Jim Green \${key + 1}\`,
  age: 36,
  address: \`London No. \${key + 1} Lake Park\`
}));
return (
  <Table
    columns={columns}
    dataSource={dataSource}
    scroll={{
      y: 400
    }}
  />
);
`,j=()=>{const n=Array.from(Array(10).keys()).map(a=>({name:`Jim Green ${a+1}`,age:36,address:`London No. ${a+1} Lake Park`})),[r,t]=o.exports.useState(n),d=o.exports.useCallback(a=>{t(m=>{const u=[...m];return u.splice(a,1),u})},[]);return e(p,{columns:[{name:"name",label:"Name"},{name:"age",label:"Age"},{name:"address",label:"Address"},{name:"Action",label:"Action",render:(a,m,u)=>e("button",{type:"button",onClick:()=>d(u),className:k.button,children:e(v,{className:k.icon})})}],dataSource:r})},z=`
const dataSource = Array.from(Array(10).keys()).map(key => ({
  name: \`Jim Green \${key + 1}\`,
  age: 36,
  address: \`London No. \${key + 1} Lake Park\`
}));
const [data, setData] = useState(dataSource);

const removeRow = useCallback((index: number) => {
  setData(prevData => {
    const newData = [...prevData];
    newData.splice(index, 1);
    return newData;
  });
}, []);

const columns = [
  {
    name: 'name',
    label: 'Name'
  },
  {
    name: 'age',
    label: 'Age'
  },
  {
    name: 'address',
    label: 'Address'
  },
  {
    name: 'Action',
    label: 'Action',
    render: (text: string, record: RecordType, index: number) => {
      return (
        <button
          type="button"
          onClick={() => removeRow(index)}
          className={tableStyles.button}
        >
          <Delete className={tableStyles.icon} />
        </button>
      );
    }
  }
];

return <Table columns={columns} dataSource={data} />;
`,E=()=>{const n=[{name:"name",label:"Name"},{name:"age",label:"Age"},{name:"address",label:"Address"}],r=Array.from(Array(108).keys()).map(t=>({name:`Jim Green ${t+1}`,age:36,address:`London No. ${t+1} Lake Park`}));return e(p,{columns:n,dataSource:r,pagination:{pageSize:5,currentPage:3}})},G=`
const columns = [
  {
    name: 'name',
    label: 'Name'
  },
  {
    name: 'age',
    label: 'Age'
  },
  {
    name: 'address',
    label: 'Address'
  }
];

const dataSource = Array.from(Array(108).keys()).map(key => ({
  name: \`Jim Green \${key + 1}\`,
  age: 36,
  address: \`London No. \${key + 1} Lake Park\`
}));
return (
  <Table
    columns={columns}
    dataSource={dataSource}
    pagination={{
      pageSize: 5,
      currentPage: 3
    }}
  />
);
`,H=()=>(T("Table | Simple UI"),i("article",{className:s.article,children:[e("h1",{className:s.title,children:"Table"}),e("p",{className:s.desc,children:"Tables are containers for displaying information. They allow users to quickly scan, sort, compare, and take action on large amounts of data."}),e("h2",{className:s.heading,children:"Example"}),e("h3",{className:s.caption,children:"Basic Table"}),i("div",{className:s.content,children:[e(D,{}),e("div",{className:s.code,children:e(b,{code:$})})]}),e("h3",{className:s.caption,children:"Fixed Header Table"}),i("div",{className:s.content,children:[e(J,{}),e("div",{className:s.code,children:e(b,{code:M})})]}),e("h3",{className:s.caption,children:"Table with Action"}),i("div",{className:s.content,children:[e(j,{}),e("div",{className:s.code,children:e(b,{code:z})})]}),e("h3",{className:s.caption,children:"Table with Pagination"}),i("div",{className:s.content,children:[e(E,{}),e("div",{className:s.code,children:e(b,{code:G})})]})]}));var B=H;export{B as default};
