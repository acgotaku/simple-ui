import { useEffect } from 'react';
import { lockBody, unlockBody } from '@/utils/scrollLock';

export function useScrollLock(visible: boolean) {
  useEffect(() => {
    if (visible) {
      lockBody();
    } else {
      unlockBody();
    }

    return () => {
      unlockBody();
    };
  }, [visible]);
}
