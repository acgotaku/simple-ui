import { Plugin, PluginArguments, Coords } from '../types';
import { getSide } from '../utils/getSide';
import { getAlignment } from '../utils/getAlignment';
import { getMainAxisFromPlacement } from '../utils/getMainAxisFromPlacement';

type OffsetValue =
  | number
  | {
      /**
       * The axis that runs along the side of the floating element.
       * @default 0
       */
      mainAxis?: number;
      /**
       * The axis that runs along the alignment of the floating element.
       * @default 0
       */
      crossAxis?: number;
      /**
       * When set to a number, overrides the `crossAxis` value for aligned
       * (non-centered/base) placements and works logically. A positive number
       * will move the floating element in the direction of the opposite edge
       * to the one that is aligned, while a negative number the reverse.
       * @default null
       */
      alignmentAxis?: number | null;
    };

export type Options = OffsetValue;

export function convertValueToCoords(
  pluginArguments: PluginArguments,
  options: Options
): Coords {
  const { placement } = pluginArguments;

  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getMainAxisFromPlacement(placement) === 'x';
  const mainAxisMulti = ['left', 'top'].includes(side) ? -1 : 1;
  const crossAxisMulti = 1;

  // eslint-disable-next-line prefer-const
  let { mainAxis, crossAxis, alignmentAxis } =
    typeof options === 'number'
      ? { mainAxis: options, crossAxis: 0, alignmentAxis: null }
      : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...options };

  if (alignment && typeof alignmentAxis === 'number') {
    crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
  }

  return isVertical
    ? { x: crossAxis * crossAxisMulti, y: mainAxis * mainAxisMulti }
    : { x: mainAxis * mainAxisMulti, y: crossAxis * crossAxisMulti };
}

export const offset = (options: Options = 0): Plugin => ({
  name: 'offset',
  options,
  fn(pluginArguments) {
    const { x, y } = pluginArguments;
    const diffCoords = convertValueToCoords(pluginArguments, options);

    return {
      x: x + diffCoords.x,
      y: y + diffCoords.y
    };
  }
});
