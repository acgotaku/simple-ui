import{j as p,a as e,r as l,Q as i}from"./index.4c5daa55.js";import{u as v}from"./useTitle.5783f7b1.js";import{s,C as t}from"./view.module.2318c4f8.js";const N="_swiper_nuac3_1",f="_image_nuac3_9";var a={swiper:N,image:f},n="/assets/001.ed28f7b3.jpg",o="/assets/002.a7a1ec78.jpg",g="/assets/003.43346ee3.jpg",d="/assets/004.8f7997c8.jpg",w="/assets/005.bb25bb9a.jpg",S="/assets/006.2be45040.jpg",u="/assets/007.1da9fa57.jpg",h="/assets/008.32375f21.jpg";const x=()=>{const r=l.exports.useMemo(()=>[n,o,g,d,w,S,u,h],[]);return e(i,{className:a.swiper,space:24,children:r.map((m,c)=>e(i.Slide,{children:e("img",{src:m,className:a.image})},c))})},y=`
const images = useMemo(() => {
  return [img001, img002, img003, img004, img005, img006, img007, img008];
}, []);

return (
  <Swiper
    className={swiperStyles.swiper}
    space={24}
  >
    {images.map((image, index) => (
      <Swiper.Slide key={index}>
        <img src={image} className={swiperStyles.image} />
      </Swiper.Slide>
    ))}
  </Swiper>
);
`,j=()=>{const r=l.exports.useMemo(()=>[n,o,g,d,w,S,u,h],[]);return e(i,{className:a.swiper,space:24,loop:!0,loopedSlides:2,startIndex:2,showPagination:!1,autoplay:{interval:6e3,hoverToPause:!1},children:r.map((m,c)=>e(i.Slide,{children:e("img",{src:m,className:a.image})},c))})},b=`
const images = useMemo(() => {
  return [img001, img002, img003, img004, img005, img006, img007, img008];
}, []);

return (
  <Swiper
    className={swiperStyles.swiper}
    space={24}
    loop={true}
    loopedSlides={2}
    startIndex={2}
    showPagination={false}
    autoplay={{
      interval: 6000,
      hoverToPause: false
    }}
  >
    {images.map((image, index) => (
      <Swiper.Slide key={index}>
        <img src={image} className={swiperStyles.image} />
      </Swiper.Slide>
    ))}
  </Swiper>
);
`,_=()=>(v("Swiper | Simple UI"),p("article",{className:s.article,children:[e("h1",{className:s.title,children:"Swiper"}),e("p",{className:s.desc,children:"Swiper is a media component that can display the effect of playing multiple pictures in turn in a visualization application."}),e("h2",{className:s.heading,children:"Example"}),e("h3",{className:s.caption,children:"Baisc Swiper"}),p("div",{className:s.content,children:[e(x,{}),e("div",{className:s.code,children:e(t,{code:y})})]}),e("h3",{className:s.caption,children:"Loop Swiper"}),p("div",{className:s.content,children:[e(j,{}),e("div",{className:s.code,children:e(t,{code:b})})]})]}));var I=_;export{I as default};
