export function createStyle() {
  const style = document.createElement('style');
  style.setAttribute('scroll-lock', '');
  return style;
}

export function insertStyle(style: HTMLStyleElement) {
  const head = document.head || document.getElementsByTagName('head')[0];
  head.appendChild(style);
}

export function injectStyle(style: HTMLStyleElement, cssText: string) {
  style.innerHTML = cssText;
}
