import InternalSwiper from './Swiper';
import Slide from './Slide';

type InternalSwiperType = typeof InternalSwiper;

interface SwiperInterface extends InternalSwiperType {
  Slide: typeof Slide;
}

const Swiper = InternalSwiper as SwiperInterface;

Swiper.Slide = Slide;

export default Swiper;
