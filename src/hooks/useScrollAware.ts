import { useState, useEffect, useCallback } from 'react';

export function useScrollAware(main: React.RefObject<HTMLElement>) {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = useCallback((event: Event) => {
    requestAnimationFrame(() => {
      setScrollTop((event.target as HTMLElement).scrollTop);
    });
  }, []);

  useEffect(() => {
    const scrollContainer = main.current;
    if (scrollContainer) {
      setScrollTop(scrollContainer.scrollTop);
      scrollContainer.addEventListener('scroll', onScroll, { passive: true });
      return () => scrollContainer.removeEventListener('scroll', onScroll);
    }
  }, [main, onScroll]);

  return scrollTop;
}
