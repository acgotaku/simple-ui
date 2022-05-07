import { useRef, useCallback } from 'react';
import { noop } from '@/utils/misc';
import { tabbable } from '@/utils/tabbable';
import { eventKey } from '@/constants/keyboard';

type ReturnType = [
  (event: React.KeyboardEvent<HTMLElement>) => void,
  (instance: HTMLElement | null) => void
];

function focusNextItem(node: HTMLElement) {
  const focusableElements = tabbable(node);
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
}

function focusPrevItem(node: HTMLElement) {
  const focusableElements = tabbable(node);
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
}

function isInputEvent(event: React.KeyboardEvent<HTMLElement>) {
  const element = event.target as HTMLElement;
  return element.tagName.toLowerCase() === 'input';
}

export function useListKeyboardNav(visible = true, onClose = noop): ReturnType {
  const ref = useRef<HTMLElement | null>();
  const restoreElement = useRef<HTMLElement>();

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLElement>) => {
      if (visible && ref.current) {
        switch (event.key) {
          case eventKey.Escape: {
            onClose();
            event.stopPropagation();
            break;
          }
          case eventKey.Tab: {
            event.preventDefault();
            if (event.shiftKey) {
              focusPrevItem(ref.current);
            } else {
              focusNextItem(ref.current);
            }
            break;
          }
          case eventKey.ArrowDown: {
            if (!isInputEvent(event)) {
              event.preventDefault();
              focusNextItem(ref.current);
            }
            break;
          }
          case eventKey.ArrowUp: {
            if (!isInputEvent(event)) {
              event.preventDefault();
              focusPrevItem(ref.current);
            }
            break;
          }
        }
      }
    },
    [visible, onClose]
  );

  const setRef = useCallback(
    (node: HTMLElement | null) => {
      if (!visible) {
        restoreElement.current?.focus();
        return;
      }
      if (node) {
        restoreElement.current = document.activeElement as HTMLElement;
        ref.current = node;
      } else {
        ref.current = null;
      }
    },
    [visible]
  );
  return [handleKeyDown, setRef];
}
