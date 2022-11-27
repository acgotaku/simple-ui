import { Padding, SideObject } from '../types';

function expandPaddingObject(padding: Partial<SideObject>): SideObject {
  return { top: 0, right: 0, bottom: 0, left: 0, ...padding };
}

export function getSideObjectFromPadding(padding: Padding): SideObject {
  return typeof padding !== 'number'
    ? expandPaddingObject(padding)
    : { top: padding, right: padding, bottom: padding, left: padding };
}
