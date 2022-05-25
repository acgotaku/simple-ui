export interface IAutoPlay {
  interval?: number;
  hoverToPause?: boolean;
}

export interface ISwiperProps {
  children: React.ReactNode;
  className?: string;
  space?: number;
  startIndex?: number;
  showArrow?: boolean;
  showPagination?: boolean;
  loop?: boolean;
  loopedSlides?: number;
  autoplay?: boolean | IAutoPlay;
}

export interface ISlideProps {
  children: React.ReactNode;
  className?: string;
  index?: number;
  space?: number;
}

export interface Size {
  width: number;
  height: number;
}

export type SizeMapping = Record<string, Size>;
export interface SwiperContextProps {
  slidesSizeMapping: SizeMapping;
  setSlidesSizeMapping: React.Dispatch<React.SetStateAction<SizeMapping>>;
}
