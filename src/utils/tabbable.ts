const candidateSelectors = [
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  'a[href]',
  'area[href]',
  'button:not([disabled])',
  '[tabindex="0"]',
  'audio[controls]',
  'video[controls]',
  '[contenteditable]:not([contenteditable="false"])',
  'details>summary'
];
const candidateSelector = candidateSelectors.join(',');

type Option = {
  shouldIgnoreVisibility: boolean;
  shouldIgnoreTabIndex: boolean;
};
const defaultOption: Option = {
  shouldIgnoreVisibility: false,
  shouldIgnoreTabIndex: false
};

function isDisplayNone(node: Element | null): boolean {
  if (!node) {
    return false;
  }
  if (getComputedStyle(node).display === 'none') return true;
  return isDisplayNone(node.parentElement);
}

function isHidden(node: Element) {
  if (getComputedStyle(node).visibility === 'hidden') return true;
  if (isDisplayNone(node)) return true;

  return false;
}

function focusableIndex(node: Element) {
  const tabIndex = node.getAttribute('tabindex');
  if (tabIndex && Number(tabIndex) < 0) {
    return false;
  } else {
    return true;
  }
}

export function tabbable(el: HTMLElement, option?: Partial<Option>) {
  const mergedOption = {
    ...defaultOption,
    ...option
  };
  let candidates = Array.from(
    el.querySelectorAll<HTMLElement>(candidateSelector)
  );
  if (!mergedOption.shouldIgnoreVisibility) {
    candidates = candidates.filter(candidate => !isHidden(candidate));
  }

  if (!mergedOption.shouldIgnoreTabIndex) {
    candidates = candidates.filter(candidate => focusableIndex(candidate));
  }

  return candidates;
}
