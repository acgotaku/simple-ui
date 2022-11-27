import { Plugin, Padding } from '../types';
import { getSideObjectFromPadding } from '../utils/getPaddingObject';
import { getLengthFromAxis } from '../utils/getLengthFromAxis';
import { getDimensions } from '../utils/getDimensions';
import { getOffsetParent } from '../utils/getOffsetParent';
import { getMainAxisFromPlacement } from '../utils/getMainAxisFromPlacement';
import { clamp } from '../utils/math';

export interface Options {
  /**
   * The arrow element to be positioned.
   * @default undefined
   */
  element: Element;
  /**
   * The padding between the arrow element and the floating element edges.
   * Useful when the floating element has rounded corners.
   * @default 0
   */
  padding?: Padding;
}

export const arrow = (options: Options): Plugin => ({
  name: 'arrow',
  options,
  fn(pluginArguments) {
    const { element, padding = 0 } = options ?? {};
    const { x, y, placement, rects } = pluginArguments;
    if (element) {
      const paddingObject = getSideObjectFromPadding(padding);
      const coords = { x, y };
      const axis = getMainAxisFromPlacement(placement);
      const length = getLengthFromAxis(axis);
      const arrowDimensions = getDimensions(element);
      const minProp = axis === 'y' ? 'top' : 'left';
      const maxProp = axis === 'y' ? 'bottom' : 'right';

      const endDiff =
        rects.reference[length] +
        rects.reference[axis] -
        coords[axis] -
        rects.floating[length];
      const startDiff = coords[axis] - rects.reference[axis];

      const arrowOffsetParent = getOffsetParent?.(element) as Element;
      let clientSize = arrowOffsetParent
        ? axis === 'y'
          ? arrowOffsetParent.clientHeight || 0
          : arrowOffsetParent.clientWidth || 0
        : 0;

      if (clientSize === 0) {
        clientSize = rects.floating[length];
      }

      const centerToReference = endDiff / 2 - startDiff / 2;

      // Make sure the arrow doesn't overflow the floating element if the center
      // point is outside the floating element's bounds
      const min = paddingObject[minProp];
      const max = clientSize - arrowDimensions[length] - paddingObject[maxProp];
      const center =
        clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
      const offset = clamp(min, center, max);

      return {
        data: {
          [axis]: offset,
          centerOffset: center - offset
        }
      };
    } else {
      return {};
    }
  }
});
