import { ReferenceElement, FloatingElement } from './types';
import { isElement } from './utils/is';
import { getOverflowAncestors } from './utils/getOverflowAncestors';
import { getBoundingClientRect } from './utils/getBoundingClientRect';

export interface Options {
  /**
   * Whether to update the position when an overflow ancestor is scrolled.
   * @default true
   */
  ancestorScroll: boolean;

  /**
   * Whether to update the position when an overflow ancestor is resized. This
   * uses the native `resize` event.
   * @default true
   */
  ancestorResize: boolean;

  /**
   * Whether to update the position when either the reference or floating
   * elements resized. This uses a `ResizeObserver`.
   * @default true
   */
  elementResize: boolean;

  /**
   * Whether to update on every animation frame if necessary. Optimized for
   * performance so updates are only called when necessary, but use sparingly.
   * @default false
   */
  animationFrame: boolean;
}

/**
 * Automatically updates the position of the floating element when necessary.
 */
export function autoUpdate(
  reference: ReferenceElement,
  floating: FloatingElement,
  update: () => void,
  options: Partial<Options> = {}
) {
  const {
    ancestorScroll: _ancestorScroll = true,
    ancestorResize = true,
    elementResize = true,
    animationFrame = false
  } = options;

  const ancestorScroll = _ancestorScroll && !animationFrame;

  const ancestors =
    ancestorScroll || ancestorResize
      ? [
          ...(isElement(reference)
            ? getOverflowAncestors(reference)
            : reference.contextElement
            ? getOverflowAncestors(reference.contextElement)
            : [])
        ]
      : [];

  ancestors.forEach(ancestor => {
    ancestorScroll &&
      ancestor.addEventListener('scroll', update, { passive: true });
    ancestorResize && ancestor.addEventListener('resize', update);
  });

  let observer: ResizeObserver | null = null;
  if (elementResize) {
    let initialUpdate = true;
    observer = new ResizeObserver(() => {
      if (!initialUpdate) {
        update();
      }

      initialUpdate = false;
    });
    isElement(reference) && !animationFrame && observer.observe(reference);
    if (!isElement(reference) && reference.contextElement && !animationFrame) {
      observer.observe(reference.contextElement);
    }
    observer.observe(floating);
  }

  let frameId: number;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;

  if (animationFrame) {
    frameLoop();
  }

  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);

    if (
      prevRefRect &&
      (nextRefRect.x !== prevRefRect.x ||
        nextRefRect.y !== prevRefRect.y ||
        nextRefRect.width !== prevRefRect.width ||
        nextRefRect.height !== prevRefRect.height)
    ) {
      update();
    }

    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }

  update();

  return () => {
    ancestors.forEach(ancestor => {
      ancestorScroll && ancestor.removeEventListener('scroll', update);
      ancestorResize && ancestor.removeEventListener('resize', update);
    });

    observer?.disconnect();
    observer = null;

    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
