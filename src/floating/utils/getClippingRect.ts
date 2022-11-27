import { Rect, RootBoundary, ClientRectObject } from '../types';
import { getBoundingClientRect } from './getBoundingClientRect';
import { rectToClientRect } from './rectToClientRect';
import { getViewportRect } from './getViewportRect';
import { getDocumentRect } from './getDocumentRect';
import { getDocumentElement } from './getDocumentElement';
import { getParentNode } from './getParentNode';
import { getNodeName } from './getNodeName';
import { getOverflowAncestors } from './getOverflowAncestors';
import { getOffsetParent } from './getOffsetParent';
import {
  isLastTraversableNode,
  isElement,
  isHTMLElement,
  isOverflowElement
} from './is';

function getNearestParentCapableOfEscapingClipping(
  element: Element,
  clippingAncestors: Array<Element | Window | VisualViewport>
): Node {
  let currentNode: Node | null = element;

  while (
    currentNode &&
    !isLastTraversableNode(currentNode) &&
    !clippingAncestors.includes(currentNode as Element)
  ) {
    if (
      isElement(currentNode) &&
      ['absolute', 'fixed'].includes(getComputedStyle(currentNode).position)
    ) {
      break;
    }

    currentNode = getParentNode(currentNode);
  }

  return currentNode;
}

function getInnerBoundingClientRect(element: Element): ClientRectObject {
  const clientRect = getBoundingClientRect(element, false);
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  return {
    top,
    left,
    x: left,
    y: top,
    right: left + element.clientWidth,
    bottom: top + element.clientHeight,
    width: element.clientWidth,
    height: element.clientHeight
  };
}

function getClientRectFromClippingAncestor(
  element: Element,
  clippingParent: Element | RootBoundary
): ClientRectObject {
  if (clippingParent === 'viewport') {
    return rectToClientRect(getViewportRect(element));
  }

  if (isElement(clippingParent)) {
    return getInnerBoundingClientRect(clippingParent);
  }

  return rectToClientRect(getDocumentRect(getDocumentElement(element)));
}

// A "clipping ancestor" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`
function getClippingAncestors(element: Element): Array<Element> {
  const clippingAncestors = getOverflowAncestors(element);
  const nearestEscapableParent = getNearestParentCapableOfEscapingClipping(
    element,
    clippingAncestors
  );

  let clipperElement: Element | null = null;
  if (nearestEscapableParent && isHTMLElement(nearestEscapableParent)) {
    const offsetParent = getOffsetParent(nearestEscapableParent);
    if (isOverflowElement(nearestEscapableParent)) {
      clipperElement = nearestEscapableParent;
    } else if (isHTMLElement(offsetParent)) {
      clipperElement = offsetParent;
    }
  }

  if (!isElement(clipperElement)) {
    return [];
  }

  return clippingAncestors.filter(
    clippingAncestors =>
      clipperElement &&
      isElement(clippingAncestors) &&
      clippingAncestors.contains(clipperElement) &&
      getNodeName(clippingAncestors) !== 'body'
  ) as Array<Element>;
}

// Gets the maximum area that the element is visible in due to any number of
// clipping ancestors
export function getClippingRect({ element }: { element: Element }): Rect {
  const rootBoundary: RootBoundary = 'viewport';
  const mainClippingAncestors = getClippingAncestors(element);
  const clippingAncestors = [...mainClippingAncestors, rootBoundary];

  const firstClippingAncestor = clippingAncestors[0];

  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor);

    accRect.top = Math.max(rect.top, accRect.top);
    accRect.right = Math.min(rect.right, accRect.right);
    accRect.bottom = Math.min(rect.bottom, accRect.bottom);
    accRect.left = Math.max(rect.left, accRect.left);

    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor));

  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
