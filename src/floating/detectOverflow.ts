import { Padding, PluginArguments, SideObject, ElementContext } from './types';
import { isElement } from './utils/is';
import { getDocumentElement } from './utils/getDocumentElement';
import { getSideObjectFromPadding } from './utils/getPaddingObject';
import { rectToClientRect } from './utils/rectToClientRect';
import { getOffsetParent } from './utils/getOffsetParent';
import { getClippingRect } from './utils/getClippingRect';
import { convertOffsetParentRelativeRectToViewportRelativeRect } from './utils/convertOffsetParentRelativeRectToViewportRelativeRect';
export interface Options {
  /**
   * The element in which overflow is being checked relative to a boundary.
   * @default 'floating'
   */
  elementContext: ElementContext;
  /**
   * Virtual padding for the resolved overflow offsets.
   * @default 0
   */
  padding: Padding;
}

/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 */
export function detectOverflow(
  args: PluginArguments,
  options: Partial<Options> = {}
): SideObject {
  const { x, y, rects, elements, strategy } = args;

  const { elementContext = 'floating', padding = 0 } = options;

  const paddingObject = getSideObjectFromPadding(padding);

  const element = elements[elementContext];

  const clippingClientRect = rectToClientRect(
    getClippingRect({
      element: isElement(element)
        ? element
        : element.contextElement || getDocumentElement(elements.floating)
    })
  );

  const elementClientRect = rectToClientRect(
    convertOffsetParentRelativeRectToViewportRelativeRect({
      rect:
        elementContext === 'floating'
          ? { ...rects.floating, x, y }
          : rects.reference,
      offsetParent: getOffsetParent?.(elements.floating),
      strategy
    })
  );

  return {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom:
      elementClientRect.bottom -
      clippingClientRect.bottom +
      paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right:
      elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
}
