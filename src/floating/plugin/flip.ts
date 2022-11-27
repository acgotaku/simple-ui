import { Plugin, Placement } from '../types';
import {
  Options as DetectOverflowOptions,
  detectOverflow
} from '../detectOverflow';
import { getSide } from '../utils/getSide';
import { getOppositePlacement } from '../utils/getOppositePlacement';

export interface Options {
  /**
   * What strategy to use when no placements fit.
   * @default 'bestFit'
   */
  fallbackStrategy: 'bestFit' | 'initialPlacement';
}

export const flip = (
  options: Partial<Options & DetectOverflowOptions> = {}
): Plugin => ({
  name: 'flip',
  options,
  fn(pluginArguments) {
    const { placement, initialPlacement, pluginData } = pluginArguments;
    const { fallbackStrategy = 'bestFit', ...detectOverflowOptions } = options;

    const side = getSide(placement);

    const placements = [initialPlacement, getOppositePlacement(placement)];

    const overflow = detectOverflow(pluginArguments, detectOverflowOptions);

    const overflows = [];
    let overflowsData = pluginData.flip?.overflows || [];
    overflows.push(overflow[side]);

    overflowsData = [...overflowsData, { placement, overflows }];

    // One or more sides is overflowing
    if (!overflows.every(side => side <= 0)) {
      const nextIndex = (pluginData.flip?.index ?? 0) + 1;
      const nextPlacement = placements[nextIndex];

      if (nextPlacement) {
        // Try next placement and re-run the lifecycle
        return {
          data: {
            index: nextIndex,
            overflows: overflowsData
          },
          reset: {
            placement: nextPlacement
          }
        };
      }

      let resetPlacement: Placement = 'bottom';
      switch (fallbackStrategy) {
        case 'bestFit': {
          const placement = overflowsData
            .map(
              d =>
                [
                  d,
                  d.overflows
                    .filter(overflow => overflow > 0)
                    .reduce((acc, overflow) => acc + overflow, 0)
                ] as const
            )
            .sort((a, b) => a[1] - b[1])[0]?.[0].placement;
          if (placement) {
            resetPlacement = placement;
          }
          break;
        }
        case 'initialPlacement':
          resetPlacement = initialPlacement;
          break;
      }

      if (placement !== resetPlacement) {
        return {
          reset: {
            placement: resetPlacement
          }
        };
      }
    }

    return {};
  }
});
