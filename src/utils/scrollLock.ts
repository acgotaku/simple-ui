export function getScrollbarWidth() {
  const scrollbarWidth =
    window.innerWidth - document.documentElement.clientWidth;
  return scrollbarWidth;
}

export function lockBody() {
  const scrollbarWidth = getScrollbarWidth();
  if (scrollbarWidth) {
    document.body.style.setProperty('padding-right', `${scrollbarWidth}px`);
  }
  document.body.style.setProperty('overflow', 'hidden');
}

export function unlockBody() {
  document.body.style.removeProperty('overflow');
  document.body.style.removeProperty('padding-right');
}
