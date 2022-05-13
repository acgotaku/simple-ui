import { useRef } from 'react';

export function useDidUpdate() {
  const mounted = useRef(false);

  if (mounted.current) {
    return true;
  } else {
    mounted.current = true;
    return false;
  }
}
