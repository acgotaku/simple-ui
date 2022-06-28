import { createStyle, injectStyle, insertStyle } from './style';

export function getScrollbarWidth() {
  const scrollbarWidth =
    window.innerWidth - document.documentElement.clientWidth;
  return scrollbarWidth;
}

export const getLockStyles = () => {
  const scrollbarWidth = getScrollbarWidth();
  const styles = `body {
        touch-action: none;
        overflow: hidden !important;
        position: relative !important;
        ${
          scrollbarWidth ? `padding-right: ${scrollbarWidth}px !important;` : ''
        }
        `;
  return styles;
};

export function lockScroll(
  style: React.MutableRefObject<HTMLStyleElement | null>
) {
  /**
   * by applying styles via style tag
   * we dont care about previous styles due to inheritance
   * when scroll gets unlocked we delete that style tag
   */
  const styleSheet = createStyle();
  injectStyle(styleSheet, getLockStyles());
  insertStyle(styleSheet);
  style.current = styleSheet;
}

export function unlockScroll(
  style: React.MutableRefObject<HTMLStyleElement | null>
) {
  if (style.current) {
    style.current.remove();
    style.current = null;
  }
}
