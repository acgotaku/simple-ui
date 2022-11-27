import { VirtualElement, ClientRectObject } from '../types';
import { isHTMLElement } from './is';

export function getBoundingClientRect(
  element: Element | VirtualElement,
  includeScale = false
): ClientRectObject {
  const clientRect = element.getBoundingClientRect();

  let scaleX = 1;
  let scaleY = 1;

  if (includeScale && isHTMLElement(element)) {
    scaleX =
      element.offsetWidth > 0
        ? Math.round(clientRect.width) / element.offsetWidth || 1
        : 1;
    scaleY =
      element.offsetHeight > 0
        ? Math.round(clientRect.height) / element.offsetHeight || 1
        : 1;
  }

  const x = clientRect.left;
  const y = clientRect.top;

  const width = clientRect.width / scaleX;
  const height = clientRect.height / scaleY;

  return {
    width,
    height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x,
    y
  };
}
