import { Rect } from '../types';
import { getWindow } from './window';
import { getDocumentElement } from './getDocumentElement';

export function getViewportRect(element: Element): Rect {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;

  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;

    x = visualViewport.offsetLeft;
    y = visualViewport.offsetTop;
  }

  return { width, height, x, y };
}
