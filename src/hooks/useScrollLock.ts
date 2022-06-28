import { useEffect, useRef } from 'react';
import { lockScroll, unlockScroll } from '@/utils/scrollLock';

export function useScrollLock(visible: boolean) {
  const style = useRef<HTMLStyleElement | null>(null);

  useEffect(() => {
    if (visible) {
      lockScroll(style);
    } else {
      unlockScroll(style);
    }

    return () => {
      unlockScroll(style);
    };
  }, [visible]);
}
