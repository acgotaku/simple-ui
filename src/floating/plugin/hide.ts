import { Plugin, Side, SideObject, Rect } from '../types';
import {
  Options as DetectOverflowOptions,
  detectOverflow
} from '../detectOverflow';

export const sides: Side[] = ['top', 'right', 'bottom', 'left'];

function getSideOffsets(overflow: SideObject, rect: Rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}

function isAnySideFullyClipped(overflow: SideObject) {
  return sides.some(side => overflow[side] >= 0);
}

export interface Options {
  strategy: 'referenceHidden' | 'escaped';
}

export const hide = ({
  strategy = 'referenceHidden',
  ...detectOverflowOptions
}: Partial<Options & DetectOverflowOptions> = {}): Plugin => ({
  name: 'hide',
  fn(pluginArguments) {
    const { rects } = pluginArguments;

    switch (strategy) {
      case 'referenceHidden': {
        const overflow = detectOverflow(pluginArguments, {
          ...detectOverflowOptions,
          elementContext: 'reference'
        });
        const offsets = getSideOffsets(overflow, rects.reference);
        return {
          data: {
            referenceHiddenOffsets: offsets,
            referenceHidden: isAnySideFullyClipped(offsets)
          }
        };
      }
      case 'escaped': {
        const overflow = detectOverflow(pluginArguments, {
          ...detectOverflowOptions
        });
        const offsets = getSideOffsets(overflow, rects.floating);
        return {
          data: {
            escapedOffsets: offsets,
            escaped: isAnySideFullyClipped(offsets)
          }
        };
      }
      default: {
        return {};
      }
    }
  }
});
