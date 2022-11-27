import { Plugin, Coords } from '../types';
import { Options, detectOverflow } from '../detectOverflow';
import { getSide } from '../utils/getSide';
import { getCrossAxis } from '../utils/getCrossAxis';
import { getMainAxisFromPlacement } from '../utils/getMainAxisFromPlacement';
import { clamp } from '../utils/math';

export const shift = (options: Partial<Options> = {}): Plugin => ({
  name: 'shift',
  options,
  fn(pluginArguments) {
    const { x, y, placement } = pluginArguments;
    const coords = { x, y };
    const overflow = detectOverflow(pluginArguments, options);
    const mainAxis = getMainAxisFromPlacement(getSide(placement));
    const crossAxis = getCrossAxis(mainAxis);

    let mainAxisCoord = coords[mainAxis];
    const crossAxisCoord = coords[crossAxis];

    const minSide = mainAxis === 'y' ? 'top' : 'left';
    const maxSide = mainAxis === 'y' ? 'bottom' : 'right';
    const min = mainAxisCoord + overflow[minSide];
    const max = mainAxisCoord - overflow[maxSide];

    mainAxisCoord = clamp(min, mainAxisCoord, max);
    return { [mainAxis]: mainAxisCoord, [crossAxis]: crossAxisCoord } as Coords;
  }
});
