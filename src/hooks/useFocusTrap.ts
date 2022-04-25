import { useRef, useCallback } from 'react';
import { useWindowEvent } from './useWindowEvent';
import { eventKey } from '@/constants/keyboard';
import { tabbable } from '@/utils/tabbable';

function scopeTab(node: HTMLElement, event: KeyboardEvent) {
  if (event.key !== eventKey.Tab) {
    return;
  }

  event.preventDefault();

  const focusableElements = tabbable(node);
  if (!focusableElements.length) {
    return;
  }

  const currentFocusedIndex = focusableElements.findIndex(em =>
    em.isSameNode(document.activeElement)
  );

  let newFocusedIndex = 0;
  if (currentFocusedIndex >= 0) {
    if (event.shiftKey) {
      newFocusedIndex =
        currentFocusedIndex > 0
          ? currentFocusedIndex - 1
          : focusableElements.length - 1;
    } else {
      newFocusedIndex =
        currentFocusedIndex < focusableElements.length - 1
          ? currentFocusedIndex + 1
          : 0;
    }
  }

  focusableElements[newFocusedIndex].focus();
}

export function useFocusTrap(
  active = true
): (instance: HTMLElement | null) => void {
  const ref = useRef<HTMLElement | null>();
  const restoreElement = useRef<HTMLElement>();

  useWindowEvent('keydown', event => {
    if (ref.current) {
      scopeTab(ref.current, event);
    }
  });

  const setRef = useCallback(
    (node: HTMLElement | null) => {
      if (!active) {
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
    [active]
  );
  return setRef;
}
