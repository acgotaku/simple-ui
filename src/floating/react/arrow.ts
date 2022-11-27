import { Plugin, Padding } from '../types';
import { arrow as arrowCore } from '../plugin/arrow';

/**
 * Positions an inner element of the floating element such that it is centered
 * to the reference element.
 * This wraps the core `arrow` plugin to allow React refs as the element.
 */
export const arrow = (options: {
  element: React.MutableRefObject<HTMLElement | null> | HTMLElement;
  padding?: Padding;
}): Plugin => {
  const { element, padding } = options;

  function isRef(value: unknown): value is React.MutableRefObject<unknown> {
    return Object.prototype.hasOwnProperty.call(value, 'current');
  }

  return {
    name: 'arrow',
    options,
    fn(args) {
      if (isRef(element)) {
        if (element.current != null) {
          return arrowCore({ element: element.current, padding }).fn(args);
        }

        return {};
      } else if (element) {
        return arrowCore({ element, padding }).fn(args);
      }

      return {};
    }
  };
};
