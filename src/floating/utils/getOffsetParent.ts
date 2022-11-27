import { getNodeName } from './getNodeName';
import { getWindow } from './window';
import { isHTMLElement, isTableElement } from './is';

function getTrueOffsetParent(element: Element): Element | null {
  if (
    !isHTMLElement(element) ||
    getComputedStyle(element).position === 'fixed'
  ) {
    return null;
  }

  return element.offsetParent;
}

// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
export function getOffsetParent(element: Element): Element | Window {
  const window = getWindow(element);

  let offsetParent = getTrueOffsetParent(element);

  while (
    offsetParent &&
    isTableElement(offsetParent) &&
    getComputedStyle(offsetParent).position === 'static'
  ) {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && getNodeName(offsetParent) === 'html') {
    return window;
  }

  return offsetParent || window;
}
