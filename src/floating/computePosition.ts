import { ComputePosition, ComputePositionReturn, PluginData } from './types';
import { getElementRects } from './utils/getElementRects';
import { computeCoordsFromPlacement } from './utils/computeCoordsFromPlacement';

export const computePosition: ComputePosition = async (
  reference,
  floating,
  config
): Promise<ComputePositionReturn> => {
  const { placement = 'bottom', strategy = 'absolute', plugin = [] } = config;
  let statefulPlacement = placement;
  let rects = getElementRects({ reference, floating, strategy });
  let { x, y } = computeCoordsFromPlacement(rects, placement);
  let pluginData: PluginData = {};
  let resetCount = 0;

  for (let i = 0; i < plugin.length; i++) {
    const { name, fn } = plugin[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      rects,
      elements: { reference, floating },
      pluginData
    });
    x = nextX ?? x;
    y = nextY ?? y;

    pluginData = {
      ...pluginData,
      [name]: {
        ...pluginData[name],
        ...data
      }
    };

    if (reset && resetCount <= 24) {
      resetCount++;

      if (typeof reset === 'object') {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }

        if (reset.rects) {
          rects =
            reset.rects === true
              ? getElementRects({
                  reference,
                  floating,
                  strategy
                })
              : reset.rects;
        }

        ({ x, y } = computeCoordsFromPlacement(rects, statefulPlacement));
      }

      i = -1;
      continue;
    }
  }

  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    pluginData
  };
};
