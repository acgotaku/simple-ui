import{j as t,a as e,r as l,O as i}from"./index.f9f7ac8a.js";import{s,C as p}from"./view.module.a0ce22f2.js";const v="_swiper_nuac3_1",N="_image_nuac3_9";var a={swiper:v,image:N},n="/assets/001.ed28f7b3.jpg",o="/assets/002.a7a1ec78.jpg",g="/assets/003.43346ee3.jpg",d="/assets/004.8f7997c8.jpg",w="/assets/005.bb25bb9a.jpg",S="/assets/006.2be45040.jpg",u="/assets/007.1da9fa57.jpg",h="/assets/008.32375f21.jpg";const f=()=>{const r=l.exports.useMemo(()=>[n,o,g,d,w,S,u,h],[]);return e(i,{className:a.swiper,space:24,children:r.map((m,c)=>e(i.Slide,{children:e("img",{src:m,className:a.image})},c))})},x=`
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
`,y=()=>{const r=l.exports.useMemo(()=>[n,o,g,d,w,S,u,h],[]);return e(i,{className:a.swiper,space:24,loop:!0,loopedSlides:2,startIndex:2,showPagination:!1,autoplay:{interval:6e3,hoverToPause:!1},children:r.map((m,c)=>e(i.Slide,{children:e("img",{src:m,className:a.image})},c))})},j=`
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
`,b=()=>t("article",{className:s.article,children:[e("h1",{className:s.title,children:"Swiper"}),e("p",{className:s.desc,children:"Swiper is a media component that can display the effect of playing multiple pictures in turn in a visualization application."}),e("h2",{className:s.heading,children:"Example"}),e("h3",{className:s.caption,children:"Baisc Swiper"}),t("div",{className:s.content,children:[e(f,{}),e("div",{className:s.code,children:e(p,{code:x})})]}),e("h3",{className:s.caption,children:"Loop Swiper"}),t("div",{className:s.content,children:[e(y,{}),e("div",{className:s.code,children:e(p,{code:j})})]})]});var M=b;export{M as default};
