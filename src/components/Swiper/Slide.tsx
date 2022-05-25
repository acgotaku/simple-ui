import React, { useEffect, useRef } from 'react';
import cls from 'clsx';
import { useSwiperContext } from './context';
import styles from './swiper.module.css';
import { ISlideProps } from './Swiper.types';

const Slide: React.FC<ISlideProps> = ({
  className = '',
  index = 0,
  space = 0,
  children
}) => {
  const { setSlidesSizeMapping } = useSwiperContext();
  const slideRef = useRef<HTMLLIElement>(null);
  useEffect(() => {
    if (slideRef.current) {
      const resizeObserver = new ResizeObserver(entries => {
        for (const entry of entries) {
          const contentRect = Array.isArray(entry.contentRect)
            ? entry.contentRect[0]
            : entry.contentRect;
          if (contentRect.width > 0 && contentRect.height > 0) {
            setSlidesSizeMapping(prevMapping => {
              return {
                ...prevMapping,
                [index]: {
                  width: contentRect.width,
                  height: contentRect.height
                }
              };
            });
          }
        }
      });
      resizeObserver.observe(slideRef.current);
    }
  }, [index, setSlidesSizeMapping]);
  return (
    <li
      ref={slideRef}
      className={cls(styles.slide, className)}
      data-index={index}
      style={{
        marginRight: space
      }}
    >
      {children}
    </li>
  );
};

export default Slide;
