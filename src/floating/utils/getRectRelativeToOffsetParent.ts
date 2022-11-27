import { VirtualElement, Strategy, Rect } from '../types';
import { isHTMLElement, isOverflowElement } from './is';
import { getDocumentElement } from './getDocumentElement';
import { getBoundingClientRect } from './getBoundingClientRect';
import { getNodeName } from './getNodeName';
import { getNodeScroll } from './getNodeScroll';
import { getWindowScrollBarX } from './getWindowScrollBarX';

function isScaled(element: HTMLElement): boolean {
  const rect = getBoundingClientRect(element);
  return (
    Math.round(rect.width) !== element.offsetWidth ||
    Math.round(rect.height) !== element.offsetHeight
  );
}

export function getRectRelativeToOffsetParent(
  element: Element | VirtualElement,
  offsetParent: Element | Window,
  strategy: Strategy
): Rect {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const rect = getBoundingClientRect(
    element,
    isOffsetParentAnElement && isScaled(offsetParent)
  );

  let scroll = { scrollLeft: 0, scrollTop: 0 };
  const offsets = { x: 0, y: 0 };

  if (
    isOffsetParentAnElement ||
    (!isOffsetParentAnElement && strategy !== 'fixed')
  ) {
    if (
      getNodeName(offsetParent) !== 'body' ||
      isOverflowElement(documentElement)
    ) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent, true);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
