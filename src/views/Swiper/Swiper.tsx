import { useMemo } from 'react';
import { Swiper } from '@/components';
import { useTitle } from '@/hooks/useTitle';
import Code from '@/components/Code';
import swiperStyles from './swiper.module.css';
import styles from '@/styles/view.module.css';
import img001 from '@/assets/swiper/001.jpg';
import img002 from '@/assets/swiper/002.jpg';
import img003 from '@/assets/swiper/003.jpg';
import img004 from '@/assets/swiper/004.jpg';
import img005 from '@/assets/swiper/005.jpg';
import img006 from '@/assets/swiper/006.jpg';
import img007 from '@/assets/swiper/007.jpg';
import img008 from '@/assets/swiper/008.jpg';

const BasicSwiper = () => {
  const images = useMemo(() => {
    return [img001, img002, img003, img004, img005, img006, img007, img008];
  }, []);

  return (
    <Swiper className={swiperStyles.swiper} space={24}>
      {images.map((image, index) => (
        <Swiper.Slide key={index}>
          <img src={image} className={swiperStyles.image} />
        </Swiper.Slide>
      ))}
    </Swiper>
  );
};

const basicSwiperCode = `
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
`;

const LoopSwiper = () => {
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
};

const loopSwiperCode = `
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
`;

const SwiperView = () => {
  useTitle('Swiper | Simple UI');

  return (
    <article className={styles.article}>
      <h1 className={styles.title}>Swiper</h1>
      <p className={styles.desc}>
        Swiper is a media component that can display the effect of playing
        multiple pictures in turn in a visualization application.
      </p>
      <h2 className={styles.heading}>Example</h2>
      <h3 className={styles.caption}>Baisc Swiper</h3>
      <div className={styles.content}>
        <BasicSwiper />
        <div className={styles.code}>
          <Code code={basicSwiperCode} />
        </div>
      </div>
      <h3 className={styles.caption}>Loop Swiper</h3>
      <div className={styles.content}>
        <LoopSwiper />
        <div className={styles.code}>
          <Code code={loopSwiperCode} />
        </div>
      </div>
    </article>
  );
};

export default SwiperView;
