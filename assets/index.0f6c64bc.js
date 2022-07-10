import{j as n,a as e,r as i,x as r,c as v}from"./index.4c5daa55.js";import{u as b}from"./useTitle.5783f7b1.js";import{s as l,C as o}from"./view.module.2318c4f8.js";const d="_wrapper_1u4yv_1",p="_select_1u4yv_7",S="_country_1u4yv_11",y="_countryItem_1u4yv_1",m="_selected_1u4yv_33";var t={wrapper:d,select:p,country:S,countryItem:y,selected:m};const N=()=>{const[c,s]=i.exports.useState("");return e(r,{options:[{label:"Apple",value:"Apple"},{label:"Pear",value:"Pear"},{label:"Orange",value:"Orange",disabled:!0}],value:c,onSelect:s,clearable:!0,className:t.select})},h=()=>{const[c,s]=i.exports.useState("");return e(r,{options:[{label:"Apple",value:"Apple"},{label:"Pear",value:"Pear"},{label:"Orange",value:"Orange",disabled:!0}],value:c,onSelect:s,disabled:!0,className:t.select})},C=`
const [value, setValue] = useState<SelectValueType>('');

const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: true }
];
return (
  <Select
    options={options}
    value={value}
    onSelect={setValue}
    clearable
    className={selectStyles.select}
  />
);
`,E=()=>{const[c,s]=i.exports.useState("");return e(r,{options:[{label:"Australia",value:"AU"},{label:"Brazil",value:"BR"},{label:"China",value:"CN"},{label:"Egypt",value:"EG"},{label:"France",value:"FR"},{label:"Germany",value:"DE"},{label:"India",value:"IN"},{label:"Japan",value:"JP"},{label:"Spain",value:"ES"},{label:"United States",value:"US"}],value:c,onSelect:s,clearable:!0,filterable:!0,className:t.select})},A=`
const [country, setCountry] = useState<SelectValueType>('');

const countries = [
  { label: 'Australia', value: 'AU' },
  { label: 'Brazil', value: 'BR' },
  { label: 'China', value: 'CN' },
  { label: 'Egypt', value: 'EG' },
  { label: 'France', value: 'FR' },
  { label: 'Germany', value: 'DE' },
  { label: 'India', value: 'IN' },
  { label: 'Japan', value: 'JP' },
  { label: 'Spain', value: 'ES' },
  { label: 'United States', value: 'US' }
];
return (
  <Select
    options={countries}
    value={country}
    onSelect={setCountry}
    clearable
    filterable
    className={selectStyles.select}
  />
);
`,g=()=>{const[c,s]=i.exports.useState(""),u=[{label:"Australia",value:"AU"},{label:"Brazil",value:"BR"},{label:"China",value:"CN"},{label:"Egypt",value:"EG"},{label:"France",value:"FR"},{label:"Germany",value:"DE"},{label:"India",value:"IN"},{label:"Japan",value:"JP"},{label:"Spain",value:"ES",disabled:!0},{label:"United States",value:"US"}];return e(r,{value:c,onSelect:s,clearable:!0,filterable:!0,className:t.country,children:u.map(a=>e(r.Option,{value:a.value,label:a.label,children:n("button",{className:v(t.countryItem,{[t.selected]:a.value===c}),disabled:a.disabled,children:[e("span",{children:a.label}),e("span",{children:a.value})]})},a.value))})},U=`
const [country, setCountry] = useState<SelectValueType>('');

const countries = [
  { label: 'Australia', value: 'AU' },
  { label: 'Brazil', value: 'BR' },
  { label: 'China', value: 'CN' },
  { label: 'Egypt', value: 'EG' },
  { label: 'France', value: 'FR' },
  { label: 'Germany', value: 'DE' },
  { label: 'India', value: 'IN' },
  { label: 'Japan', value: 'JP' },
  { label: 'Spain', value: 'ES', disabled: true },
  { label: 'United States', value: 'US' }
];
return (
  <Select
    value={country}
    onSelect={setCountry}
    clearable
    filterable
    className={selectStyles.country}
  >
    {countries.map(option => {
      return (
        <Select.Option
          value={option.value}
          label={option.label}
          key={option.value}
        >
          <button
            className={cls(selectStyles.countryItem, {
              [selectStyles.selected]: option.value === country
            })}
            disabled={option.disabled}
          >
            <span>{option.label}</span>
            <span>{option.value}</span>
          </button>
        </Select.Option>
      );
    })}
  </Select>
);
`,B=()=>{const[c,s]=i.exports.useState([]);return e(r,{options:[{label:"Australia",value:"AU"},{label:"Brazil",value:"BR"},{label:"China",value:"CN"},{label:"Egypt",value:"EG"},{label:"France",value:"FR"},{label:"Germany",value:"DE"},{label:"India",value:"IN",disabled:!0},{label:"Japan",value:"JP"},{label:"Spain",value:"ES"},{label:"United States",value:"US"}],value:c,onSelect:s,multiSelect:!0,clearable:!0,filterable:!0,className:t.country})},I=`
const [country, setCountry] = useState<SelectValueType[]>([]);

const countries = [
  { label: 'Australia', value: 'AU' },
  { label: 'Brazil', value: 'BR' },
  { label: 'China', value: 'CN' },
  { label: 'Egypt', value: 'EG' },
  { label: 'France', value: 'FR' },
  { label: 'Germany', value: 'DE' },
  { label: 'India', value: 'IN', disabled: true },
  { label: 'Japan', value: 'JP' },
  { label: 'Spain', value: 'ES' },
  { label: 'United States', value: 'US' }
];
return (
  <Select
    options={countries}
    value={country}
    onSelect={setCountry}
    multiSelect
    clearable
    filterable
    className={selectStyles.country}
  />
);
`,f=()=>{const[c,s]=i.exports.useState([]),u=Array.from(Array(100).keys()).map(a=>({label:"option -"+a,value:a}));return e(r,{options:u,value:c,filterable:!0,multiSelect:!0,virtualScroll:!0,onSelect:s,className:t.select})},F=`
const [value, setValue] = useState<SelectValueType[]>([]);

const options = Array.from(Array(100).keys()).map(key => ({
  label: 'option -' + key,
  value: key
}));

return (
  <Select
    options={options}
    value={value}
    filterable
    multiSelect
    virtualScroll
    onSelect={setValue}
    className={selectStyles.select}
  />
);
`,G=()=>{const[c,s]=i.exports.useState([]),u=[{label:"Australia",value:"AU"},{label:"Brazil",value:"BR"},{label:"China",value:"CN"},{label:"Egypt",value:"EG"},{label:"France",value:"FR"},{label:"Germany",value:"DE"},{label:"India",value:"IN"},{label:"Japan",value:"JP"},{label:"Spain",value:"ES"},{label:"United States",value:"US"}];return e(r,{value:c,onSelect:s,multiSelect:!0,clearable:!0,filterable:!0,className:t.country,children:u.map(a=>e(r.Option,{value:a.value,label:a.label,children:n("button",{className:v(t.countryItem,{[t.selected]:c.includes(a.value)}),children:[e("span",{children:a.label}),e("span",{children:a.value})]})},a.value))})},J=`
const [country, setCountry] = useState<SelectValueType[]>([]);

const countries = [
  { label: 'Australia', value: 'AU' },
  { label: 'Brazil', value: 'BR' },
  { label: 'China', value: 'CN' },
  { label: 'Egypt', value: 'EG' },
  { label: 'France', value: 'FR' },
  { label: 'Germany', value: 'DE' },
  { label: 'India', value: 'IN' },
  { label: 'Japan', value: 'JP' },
  { label: 'Spain', value: 'ES' },
  { label: 'United States', value: 'US' }
];
return (
  <Select
    value={country}
    onSelect={setCountry}
    multiSelect
    clearable
    filterable
    className={selectStyles.country}
  >
    {countries.map(option => {
      return (
        <Select.Option
          value={option.value}
          label={option.label}
          key={option.value}
        >
          <button
            className={cls(selectStyles.countryItem, {
              [selectStyles.selected]: country.includes(option.value)
            })}
          >
            <span>{option.label}</span>
            <span>{option.value}</span>
          </button>
        </Select.Option>
      );
    })}
  </Select>
);
`,R=()=>(b("Select | Simple UI"),n("article",{className:l.article,children:[e("h1",{className:l.title,children:"Select"}),e("p",{className:l.desc,children:"Select components are used for collecting user provided information from a list of options."}),e("h2",{className:l.heading,children:"Example"}),e("h3",{className:l.caption,children:"Basic Single Select"}),n("div",{className:l.content,children:[n("div",{className:t.wrapper,children:[e(N,{}),e(h,{}),e(E,{})]}),n("div",{className:l.code,children:[e(o,{code:C}),e(o,{code:A})]})]}),e("h3",{className:l.caption,children:"Advanced Single Select"}),n("div",{className:l.content,children:[e("div",{className:t.wrapper,children:e(g,{})}),e("div",{className:l.code,children:e(o,{code:U})})]}),e("h3",{className:l.caption,children:"Baisc Multiple Select"}),n("div",{className:l.content,children:[e("div",{className:t.wrapper,children:e(B,{})}),e("div",{className:l.code,children:e(o,{code:I})})]}),e("h3",{className:l.caption,children:"Baisc Multiple Select with virtual scroll"}),n("div",{className:l.content,children:[e("div",{className:t.wrapper,children:e(f,{})}),e("div",{className:l.code,children:e(o,{code:F})})]}),e("h3",{className:l.caption,children:"Advanced Multiple Select"}),n("div",{className:l.content,children:[e("div",{className:t.wrapper,children:e(G,{})}),e("div",{className:l.code,children:e(o,{code:J})})]})]}));var x=R;export{x as default};
