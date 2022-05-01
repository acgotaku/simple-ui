import { useRef, useCallback } from 'react';
import { tabbable } from '@/utils/tabbable';
import { eventKey } from '@/constants/keyboard';

type ReturnType = [
  (event: React.KeyboardEvent<HTMLElement>) => void,
  (instance: HTMLElement | null) => void
];

function navNextItem(node: HTMLElement) {
  const focusableElements = tabbable(node, {
    shouldIgnoreTabIndex: true
  });
  if (!focusableElements.length) {
    return;
  }

  const currentFocusedIndex = focusableElements.findIndex(em =>
    em.isSameNode(document.activeElement)
  );

  let newFocusedIndex = 0;
  if (currentFocusedIndex >= 0) {
    newFocusedIndex =
      currentFocusedIndex < focusableElements.length - 1
        ? currentFocusedIndex + 1
        : 0;
  }

  focusableElements[newFocusedIndex].focus();
  focusableElements[newFocusedIndex].click();
}

function navPrevItem(node: HTMLElement) {
  const focusableElements = tabbable(node, {
    shouldIgnoreTabIndex: true
  });
  if (!focusableElements.length) {
    return;
  }

  const currentFocusedIndex = focusableElements.findIndex(em =>
    em.isSameNode(document.activeElement)
  );

  const lastIndex = focusableElements.length - 1;
  let newFocusedIndex = lastIndex;
  if (currentFocusedIndex > 0) {
    newFocusedIndex = currentFocusedIndex - 1;
  }

  focusableElements[newFocusedIndex].focus();
  focusableElements[newFocusedIndex].click();
}

export function useTabsKeyboardNav(): ReturnType {
  const ref = useRef<HTMLElement | null>();

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLElement>) => {
      if (ref.current) {
        switch (event.key) {
          case eventKey.ArrowRight:
          case eventKey.ArrowDown: {
            event.preventDefault();
            navNextItem(ref.current);
            break;
          }
          case eventKey.ArrowLeft:
          case eventKey.ArrowUp: {
            event.preventDefault();
            navPrevItem(ref.current);
            break;
          }
        }
      }
    },
    []
  );

  const setRef = useCallback((node: HTMLElement | null) => {
    if (node) {
      ref.current = node;
    } else {
      ref.current = null;
    }
  }, []);
  return [handleKeyDown, setRef];
}
