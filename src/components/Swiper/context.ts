import React, { useContext } from 'react';
import { noop } from '@/utils/misc';
import { SwiperContextProps } from './Swiper.types';

const defaultContext = {
  slidesSizeMapping: {},
  setSlidesSizeMapping: noop
};

export const SwiperContext =
  React.createContext<SwiperContextProps>(defaultContext);

export const useSwiperContext = () => useContext(SwiperContext);
