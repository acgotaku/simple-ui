var T=Object.defineProperty;var p=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var g=(r,a,n)=>a in r?T(r,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[a]=n,y=(r,a)=>{for(var n in a||(a={}))w.call(a,n)&&g(r,n,a[n]);if(p)for(var n of p(a))f.call(a,n)&&g(r,n,a[n]);return r};import{a as e,T as c,r as o,U as v,j as i,c as C}from"./index.1bafc5fc.js";import{P}from"./Pagination.e1f498c2.js";import{s as t,C as b}from"./view.module.11814ac2.js";const D=({columns:r})=>e("thead",{className:c.head,children:e("tr",{className:c.headRow,children:r.map(({name:a,label:n})=>e("th",{className:c.headCell,children:n},a))})}),$=({columns:r,dataSource:a})=>e("tbody",{className:c.body,children:a.map((n,d)=>e("tr",{className:c.bodyRow,children:r.map(l=>l.render?e("td",{className:c.bodyCell,children:l.render(n[l.name],n,d)},l.name):e("td",{className:c.bodyCell,children:n[l.name]},l.name))},d))}),h=({columns:r,dataSource:a,className:n="",scroll:d={},pagination:l})=>{const s=o.exports.useMemo(()=>v(l)?l:l?{pageSize:10,currentPage:1}:null,[l]),[m,u]=o.exports.useState(()=>s!=null&&s.currentPage?s.currentPage:1),x=o.exports.useMemo(()=>({"--count-column":r.length,maxHeight:d.y,width:d.x}),[r,d]),A=o.exports.useMemo(()=>{if(s!=null&&s.pageSize){const k=(m-1)*s.pageSize,L=Math.min(k+s.pageSize,a.length);return a.slice(k,L)}else return a},[s,a,m]),S=o.exports.useMemo(()=>s!=null&&s.pageSize?Math.ceil(a.length/s.pageSize):0,[s,a]);return i("div",{className:c.wrapper,children:[i("table",{className:C(c.table,n),style:x,children:[e(D,{columns:r}),e($,{columns:r,dataSource:A})]}),s&&e(P,{currentPage:m,total:S,onChange:u,className:c.pagination})]})},J=r=>o.exports.createElement("svg",y({xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 256 256"},r),o.exports.createElement("rect",{width:256,height:256,fill:"none"}),o.exports.createElement("line",{x1:216,y1:56,x2:40,y2:56,fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:16}),o.exports.createElement("line",{x1:104,y1:104,x2:104,y2:168,fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:16}),o.exports.createElement("line",{x1:152,y1:104,x2:152,y2:168,fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:16}),o.exports.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:16}),o.exports.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:16})),M="_button_gbxxc_1",j="_icon_gbxxc_15";var N={button:M,icon:j};const z=()=>e(h,{columns:[{name:"name",label:"Name"},{name:"age",label:"Age"},{name:"address",label:"Address"}],dataSource:[{name:"Mike",age:32,address:"New York No. 1 Lake Park"},{name:"John",age:42,address:"10 Downing Street"},{name:"Jim Green",age:36,address:"London No. 1 Lake Park"}]}),E=`
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
`,G=()=>{const r=[{name:"name",label:"Name"},{name:"age",label:"Age"},{name:"address",label:"Address"}],a=Array.from(Array(30).keys()).map(n=>({name:`Jim Green ${n+1}`,age:36,address:`London No. ${n+1} Lake Park`}));return e(h,{columns:r,dataSource:a,scroll:{y:400}})},H=`
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
`,R=()=>{const r=Array.from(Array(10).keys()).map(s=>({name:`Jim Green ${s+1}`,age:36,address:`London No. ${s+1} Lake Park`})),[a,n]=o.exports.useState(r),d=o.exports.useCallback(s=>{n(m=>{const u=[...m];return u.splice(s,1),u})},[]);return e(h,{columns:[{name:"name",label:"Name"},{name:"age",label:"Age"},{name:"address",label:"Address"},{name:"Action",label:"Action",render:(s,m,u)=>e("button",{type:"button",onClick:()=>d(u),className:N.button,children:e(J,{className:N.icon})})}],dataSource:a})},_=`
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
`,V=()=>{const r=[{name:"name",label:"Name"},{name:"age",label:"Age"},{name:"address",label:"Address"}],a=Array.from(Array(108).keys()).map(n=>({name:`Jim Green ${n+1}`,age:36,address:`London No. ${n+1} Lake Park`}));return e(h,{columns:r,dataSource:a,pagination:{pageSize:5,currentPage:3}})},W=`
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
`,B=()=>i("article",{className:t.article,children:[e("h1",{className:t.title,children:"Table"}),e("p",{className:t.desc,children:"Tables are containers for displaying information. They allow users to quickly scan, sort, compare, and take action on large amounts of data."}),e("h2",{className:t.heading,children:"Example"}),e("h3",{className:t.caption,children:"Basic Table"}),i("div",{className:t.content,children:[e(z,{}),e("div",{className:t.code,children:e(b,{code:E})})]}),e("h3",{className:t.caption,children:"Fixed Header Table"}),i("div",{className:t.content,children:[e(G,{}),e("div",{className:t.code,children:e(b,{code:H})})]}),e("h3",{className:t.caption,children:"Table with Action"}),i("div",{className:t.content,children:[e(R,{}),e("div",{className:t.code,children:e(b,{code:_})})]}),e("h3",{className:t.caption,children:"Table with Pagination"}),i("div",{className:t.content,children:[e(V,{}),e("div",{className:t.code,children:e(b,{code:W})})]})]});var O=B;export{O as default};
