/* eslint-disable @typescript-eslint/no-explicit-any */
import { getWindow } from './window';
import { getNodeName } from './getNodeName';

declare global {
  interface Window {
    HTMLElement: any;
    Element: any;
    Node: any;
    ShadowRoot: any;
  }
}

export function isHTMLElement(value: any): value is HTMLElement {
  return value instanceof getWindow(value).HTMLElement;
}

export function isElement(value: any): value is Element {
  return value instanceof getWindow(value).Element;
}

export function isNode(value: any): value is Node {
  return value instanceof getWindow(value).Node;
}

export function isOverflowElement(element: HTMLElement): boolean {
  // Firefox wants us to check `-x` and `-y` variations as well
  const { overflow, overflowX, overflowY, display } = getComputedStyle(element);
  return (
    /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX) &&
    !['inline', 'contents'].includes(display)
  );
}

export function isTableElement(element: Element): boolean {
  return ['table', 'td', 'th'].includes(getNodeName(element));
}

export function isLastTraversableNode(node: Node) {
  return ['html', 'body', '#document'].includes(getNodeName(node));
}
