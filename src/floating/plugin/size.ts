import { Plugin, PluginArguments } from '../types';
import {
  Options as DetectOverflowOptions,
  detectOverflow
} from '../detectOverflow';
import { getSide } from '../utils/getSide';
import { getAlignment } from '../utils/getAlignment';
import { getDimensions } from '../utils/getDimensions';

export interface Options {
  /**
   * Function that is called to perform style mutations to the floating element
   * to change its size.
   * @default undefined
   */
  apply(
    args: PluginArguments & {
      availableWidth: number;
      availableHeight: number;
    }
  ): void;
}

export const size = (
  options: Partial<Options & DetectOverflowOptions> = {}
): Plugin => ({
  name: 'size',
  options,
  fn(pluginArguments) {
    const { placement, rects, elements } = pluginArguments;
    // eslint-disable-next-line
    const { apply = () => {}, ...detectOverflowOptions } = options;
    const overflow = detectOverflow(pluginArguments, detectOverflowOptions);

    const side = getSide(placement);
    const alignment = getAlignment(placement);

    let heightSide: 'top' | 'bottom';
    let widthSide: 'left' | 'right';

    if (side === 'top' || side === 'bottom') {
      heightSide = side;
      widthSide = alignment === 'end' ? 'left' : 'right';
    } else {
      widthSide = side;
      heightSide = alignment === 'end' ? 'top' : 'bottom';
    }

    const xMin = Math.max(overflow.left, 0);
    const xMax = Math.max(overflow.right, 0);
    const yMin = Math.max(overflow.top, 0);
    const yMax = Math.max(overflow.bottom, 0);

    const dimensions = {
      availableHeight:
        rects.floating.height -
        (['left', 'right'].includes(placement)
          ? 2 *
            (yMin !== 0 || yMax !== 0
              ? yMin + yMax
              : Math.max(overflow.top, overflow.bottom))
          : overflow[heightSide]),
      availableWidth:
        rects.floating.width -
        (['top', 'bottom'].includes(placement)
          ? 2 *
            (xMin !== 0 || xMax !== 0
              ? xMin + xMax
              : Math.max(overflow.left, overflow.right))
          : overflow[widthSide])
    };

    apply({ ...pluginArguments, ...dimensions });

    const nextDimensions = getDimensions(elements.floating);

    if (
      rects.floating.width !== nextDimensions.width ||
      rects.floating.height !== nextDimensions.height
    ) {
      return {
        reset: {
          rects: true
        }
      };
    }

    return {};
  }
});
