import { ElementRects, Placement, Coords } from '../types';
import { getMainAxisFromPlacement } from './getMainAxisFromPlacement';
import { getLengthFromAxis } from './getLengthFromAxis';
import { getSide } from './getSide';
import { getAlignment } from './getAlignment';

export function computeCoordsFromPlacement(
  { reference, floating }: ElementRects,
  placement: Placement
): Coords {
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  const commonAlign = reference[length] / 2 - floating[length] / 2;
  const side = getSide(placement);

  let coords;
  switch (side) {
    case 'top':
      coords = { x: commonX, y: reference.y - floating.height };
      break;
    case 'bottom':
      coords = { x: commonX, y: reference.y + reference.height };
      break;
    case 'right':
      coords = { x: reference.x + reference.width, y: commonY };
      break;
    case 'left':
      coords = { x: reference.x - floating.width, y: commonY };
      break;
    default:
      coords = { x: reference.x, y: reference.y };
  }

  switch (getAlignment(placement)) {
    case 'start':
      coords[mainAxis] -= commonAlign;
      break;
    case 'end':
      coords[mainAxis] += commonAlign;
      break;
    default:
  }

  return coords;
}
