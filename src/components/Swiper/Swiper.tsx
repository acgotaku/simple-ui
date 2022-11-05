import React, {
  useRef,
  useMemo,
  useState,
  useEffect,
  useCallback
} from 'react';
import cls from 'clsx';
import { ReactComponent as Prev } from '@/assets/icons/caret-left.svg';
import { ReactComponent as Next } from '@/assets/icons/caret-right.svg';
import { SwiperContext } from './context';
import { isObject } from '@/utils/misc';
import styles from './swiper.module.css';
import { ISwiperProps, IAutoPlay, Size, SizeMapping } from './Swiper.types';

const SWIPER_THRESHOLD = 40;

const DEFAULT_INTERVAL = 3000;

const Swiper: React.FC<ISwiperProps> = ({
  className = '',
  showArrow = true,
  showPagination = true,
  loop = false,
  autoplay = false,
  loopedSlides = 0,
  startIndex = 0,
  space = 0,
  children
}) => {
  const containerRef = useRef<HTMLUListElement>(null);
  const [translateX, setTranslateX] = useState(0);
  const touchStartXRef = useRef(0);
  const touchDeltaXRef = useRef(0);
  const intervalRef = useRef<number>();
  const [containerSize, setContainerSize] = useState<Size>({
    width: 0,
    height: 0
  });
  const [slidesSizeMapping, setSlidesSizeMapping] = useState<SizeMapping>({});
  const [currentIndex, setCurrentIndex] = useState(startIndex);

  const context = useMemo(
    () => ({
      slidesSizeMapping,
      setSlidesSizeMapping
    }),
    [slidesSizeMapping]
  );
  const hoverToPause = useMemo(
    () => isObject(autoplay) && !!(autoplay as IAutoPlay).hoverToPause,
    [autoplay]
  );
  const slideCount = useMemo(() => React.Children.count(children), [children]);
  const lastIndex = useMemo(() => slideCount - 1, [slideCount]);
  const visible = useMemo(
    () => slideCount === Object.keys(slidesSizeMapping).length,
    [slideCount, slidesSizeMapping]
  );
  const canNext = useMemo(
    () => loop || currentIndex < lastIndex,
    [loop, currentIndex, lastIndex]
  );
  const canPrev = useMemo(() => loop || currentIndex > 0, [loop, currentIndex]);

  const translateContainer = useCallback(
    async (translateX = 0, transition = true) => {
      const containerNode = containerRef.current;
      if (containerNode) {
        containerNode.animate(
          [
            {
              transform: `translate3d(${translateX}px, 0, 0)`
            }
          ],
          {
            duration: transition ? 300 : 0,
            fill: 'forwards'
          }
        );
        await Promise.allSettled(
          containerNode.getAnimations().map(animation => animation.finished)
        );
        setTranslateX(translateX);
      }
    },
    []
  );

  const containerStyle = useMemo(
    () => ({
      transform: `translate3d(${translateX}px, 0, 0)`
    }),
    [translateX]
  );

  const slideTo = useCallback(
    async (index: number, transition = true) => {
      let slideIndexes = [];
      let translate = 0;

      if (loop) {
        // copy loopedSlides
        const loopedIndexs = Array.from(Array(slideCount).keys()).slice(
          -loopedSlides
        );
        if (index < 0) {
          // loop first index
          loopedIndexs.splice(index);
          slideIndexes = loopedIndexs;
        } else {
          slideIndexes = loopedIndexs.concat(Array.from(Array(index).keys()));
        }
      } else {
        slideIndexes = Array.from(Array(index).keys());
      }

      slideIndexes.forEach(index => {
        translate += slidesSizeMapping[index].width + space;
      });
      // last and first index
      index = (index + slideCount) % slideCount;
      // center index slide
      translate -= (containerSize.width - slidesSizeMapping[index].width) / 2;
      await translateContainer(-translate, transition);
      setCurrentIndex(index);
    },
    [
      translateContainer,
      loop,
      containerSize,
      slidesSizeMapping,
      space,
      slideCount,
      loopedSlides
    ]
  );

  const slideLastToFirst = useCallback(async () => {
    await slideTo(currentIndex + 1);
    slideTo(0, false);
  }, [slideTo, currentIndex]);

  const nextSlide = useCallback(() => {
    if (currentIndex < lastIndex) {
      slideTo(currentIndex + 1);
    } else {
      if (loop) {
        slideLastToFirst();
      } else {
        slideTo(0);
      }
    }
  }, [currentIndex, lastIndex, loop, slideTo, slideLastToFirst]);

  const slideFirstToLast = useCallback(async () => {
    await slideTo(-1);
    slideTo(lastIndex, false);
  }, [slideTo, lastIndex]);

  const prevSlide = useCallback(() => {
    if (currentIndex > 0) {
      slideTo(currentIndex - 1);
    } else {
      if (loop) {
        slideFirstToLast();
      } else {
        slideTo(lastIndex);
      }
    }
  }, [currentIndex, loop, lastIndex, slideTo, slideFirstToLast]);

  const stop = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, []);

  const play = useCallback(() => {
    if (visible && autoplay) {
      const interval = isObject(autoplay)
        ? (autoplay as IAutoPlay).interval || DEFAULT_INTERVAL
        : DEFAULT_INTERVAL;
      // keep only one interval
      stop();
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, interval);
    }
  }, [visible, autoplay, nextSlide, stop]);

  const slidesChildren = useMemo(() => {
    const slides = React.Children.toArray(
      React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement, {
            index,
            space
          });
        }
      })
    );

    if (loop && loopedSlides > 0) {
      return slides
        .slice(-loopedSlides)
        .concat(slides)
        .concat(slides.slice(0, loopedSlides))
        .map((child, index) => {
          if (React.isValidElement(child)) {
            // keep unique key
            return React.cloneElement(child, { key: index });
          }
        });
    } else {
      return slides;
    }
  }, [children, space, loop, loopedSlides]);

  const handlePointerEnter = useCallback(() => {
    if (hoverToPause) {
      stop();
    }
  }, [hoverToPause, stop]);

  const handlePointerLeave = useCallback(() => {
    if (hoverToPause) {
      play();
    }
  }, [hoverToPause, play]);

  const handlePointerDown = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      touchStartXRef.current = event.clientX;
      touchDeltaXRef.current = 0;
    },
    []
  );

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (event.isPrimary) {
        touchDeltaXRef.current = event.clientX - touchStartXRef.current;
      } else {
        touchDeltaXRef.current = 0;
      }
    },
    []
  );

  const handlePointerUp = useCallback(() => {
    const touchDeltaX = touchDeltaXRef.current;

    if (Math.abs(touchDeltaX) > SWIPER_THRESHOLD) {
      if (touchDeltaX > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
  }, [prevSlide, nextSlide]);

  useEffect(() => {
    const containerNode = containerRef.current;
    if (containerNode) {
      const resizeObserver = new ResizeObserver(entries => {
        for (const entry of entries) {
          const contentRect = Array.isArray(entry.contentRect)
            ? entry.contentRect[0]
            : entry.contentRect;
          if (contentRect.width > 0 && contentRect.height > 0) {
            setContainerSize({
              width: contentRect.width,
              height: contentRect.height
            });
          }
        }
      });
      resizeObserver.observe(containerNode);
    }
  }, []);

  useEffect(() => {
    if (visible) {
      slideTo(startIndex, false);
    }
  }, [visible, startIndex, slideTo]);

  useEffect(() => {
    play();
    return stop;
  }, [play, stop]);

  return (
    <div className={cls(styles.swiper, className)}>
      <div
        className={cls(styles.inner, {
          [styles.visible]: visible
        })}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        onClick={play}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        <ul
          ref={containerRef}
          className={styles.container}
          style={containerStyle}
        >
          <SwiperContext.Provider value={context}>
            {slidesChildren}
          </SwiperContext.Provider>
        </ul>
        {showArrow && (
          <div className={styles.nav}>
            <button
              className={cls(styles.navButton, styles.prev)}
              disabled={!canPrev}
              onClick={prevSlide}
            >
              <Prev className={styles.icon} />
            </button>
            <button
              className={cls(styles.navButton, styles.next)}
              disabled={!canNext}
              onClick={nextSlide}
            >
              <Next className={styles.icon} />
            </button>
          </div>
        )}
        {showPagination && (
          <div className={styles.pagination}>
            {Array.from(Array(slideCount).keys()).map(index => (
              <button
                key={index}
                className={cls(styles.bullet, {
                  [styles.active]: index === currentIndex
                })}
                onClick={() => slideTo(index)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Swiper;
