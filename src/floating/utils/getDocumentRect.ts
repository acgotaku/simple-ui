import { Rect } from '../types';
import { getDocumentElement } from './getDocumentElement';
import { getNodeScroll } from './getNodeScroll';
import { getWindowScrollBarX } from './getWindowScrollBarX';

// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable
export function getDocumentRect(element: HTMLElement): Rect {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument?.body;

  const width = Math.max(
    html.scrollWidth,
    html.clientWidth,
    body ? body.scrollWidth : 0,
    body ? body.clientWidth : 0
  );
  const height = Math.max(
    html.scrollHeight,
    html.clientHeight,
    body ? body.scrollHeight : 0,
    body ? body.clientHeight : 0
  );

  const x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;

  return { width, height, x, y };
}
