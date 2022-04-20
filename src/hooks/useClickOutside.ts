import { useEffect } from 'react';

const DEFAULT_EVENTS = ['mousedown', 'touchstart'];

export function useClickOutside(
  handler: () => void,
  nodes?: Array<HTMLElement | null>
) {
  useEffect(() => {
    const listener = (event: Event) => {
      if (Array.isArray(nodes)) {
        const shouldTrigger = nodes.every(
          node => !!node && !node.contains(event.target as HTMLElement)
        );
        shouldTrigger && handler();
      }
    };

    DEFAULT_EVENTS.forEach(fn =>
      document.addEventListener(fn, listener, { passive: true })
    );

    return () => {
      DEFAULT_EVENTS.forEach(fn => document.removeEventListener(fn, listener));
    };
  }, [handler, nodes]);
}
