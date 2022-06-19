var g=Object.defineProperty;var h=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var y=(a,r,n)=>r in a?g(a,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[r]=n,p=(a,r)=>{for(var n in r||(r={}))x.call(r,n)&&y(a,n,r[n]);if(h)for(var n of h(r))A.call(r,n)&&y(a,n,r[n]);return a};import{a as e,T as c,r as o,j as i,c as L}from"./index.57dcb55e.js";import{s as t,C as u}from"./view.module.ded59703.js";const S=({columns:a})=>e("thead",{className:c.head,children:e("tr",{className:c.headRow,children:a.map(({name:r,label:n})=>e("th",{className:c.headCell,children:n},r))})}),w=({columns:a,dataSource:r})=>e("tbody",{className:c.body,children:r.map((n,l)=>e("tr",{className:c.bodyRow,children:a.map(s=>s.render?e("td",{className:c.bodyCell,children:s.render(n[s.name],n,l)},s.name):e("td",{className:c.bodyCell,children:n[s.name]},s.name))},l))}),b=({columns:a,dataSource:r,className:n="",scroll:l={}})=>{const s=o.exports.useMemo(()=>({"--count-column":a.length,maxHeight:l.y,width:l.x}),[a,l]);return i("table",{className:L(c.table,n),style:s,children:[e(S,{columns:a}),e(w,{columns:a,dataSource:r})]})},T=a=>o.exports.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 256 256"},a),o.exports.createElement("rect",{width:256,height:256,fill:"none"}),o.exports.createElement("line",{x1:216,y1:56,x2:40,y2:56,fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:16}),o.exports.createElement("line",{x1:104,y1:104,x2:104,y2:168,fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:16}),o.exports.createElement("line",{x1:152,y1:104,x2:152,y2:168,fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:16}),o.exports.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:16}),o.exports.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:16})),f="_button_gbxxc_1",C="_icon_gbxxc_15";var N={button:f,icon:C};const v=()=>e(b,{columns:[{name:"name",label:"Name"},{name:"age",label:"Age"},{name:"address",label:"Address"}],dataSource:[{name:"Mike",age:32,address:"New York No. 1 Lake Park"},{name:"John",age:42,address:"10 Downing Street"},{name:"Jim Green",age:36,address:"London No. 1 Lake Park"}]}),D=`
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
`,$=()=>{const a=[{name:"name",label:"Name"},{name:"age",label:"Age"},{name:"address",label:"Address"}],r=Array.from(Array(30).keys()).map(n=>({name:`Jim Green ${n}`,age:36,address:`London No. ${n} Lake Park`}));return e(b,{columns:a,dataSource:r,scroll:{y:400}})},j=`
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
  name: \`Jim Green \${key}\`,
  age: 36,
  address: \`London No. \${key} Lake Park\`
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
`,E=()=>{const a=Array.from(Array(10).keys()).map(d=>({name:`Jim Green ${d}`,age:36,address:`London No. ${d} Lake Park`})),[r,n]=o.exports.useState(a),l=o.exports.useCallback(d=>{n(k=>{const m=[...k];return m.splice(d,1),m})},[]);return e(b,{columns:[{name:"name",label:"Name"},{name:"age",label:"Age"},{name:"address",label:"Address"},{name:"Action",label:"Action",render:(d,k,m)=>e("button",{type:"button",onClick:()=>l(m),className:N.button,children:e(T,{className:N.icon})})}],dataSource:r})},J=`
const dataSource = Array.from(Array(10).keys()).map(key => ({
  name: \`Jim Green \${key}\`,
  age: 36,
  address: \`London No. \${key} Lake Park\`
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
`,P=()=>i("article",{className:t.article,children:[e("h1",{className:t.title,children:"Table"}),e("p",{className:t.desc,children:"Tables are containers for displaying information. They allow users to quickly scan, sort, compare, and take action on large amounts of data."}),e("h2",{className:t.heading,children:"Example"}),e("h3",{className:t.caption,children:"Basic Table"}),i("div",{className:t.content,children:[e(v,{}),e("div",{className:t.code,children:e(u,{code:D})})]}),e("h3",{className:t.caption,children:"Fixed Header Table"}),i("div",{className:t.content,children:[e($,{}),e("div",{className:t.code,children:e(u,{code:j})})]}),e("h3",{className:t.caption,children:"Table with Action"}),i("div",{className:t.content,children:[e(E,{}),e("div",{className:t.code,children:e(u,{code:J})})]})]});var _=P;export{_ as default};
