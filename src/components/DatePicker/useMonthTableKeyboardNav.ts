import { useCallback, useState, useEffect } from 'react';
import { useWindowEvent } from '@/hooks/useWindowEvent';
import { eventKey } from '@/constants/keyboard';
import { tabbable } from '@/utils/tabbable';

function tabbableElements(
  header: HTMLElement,
  body: HTMLElement,
  focusMonth: number
) {
  const focusableHeaderElements = tabbable(header);
  const focusableBodyElements = tabbable(body);
  const lastIndex = focusableBodyElements.length - 1;
  const focusIndex = focusMonth > lastIndex ? lastIndex : focusMonth;
  focusableHeaderElements.push(focusableBodyElements[focusIndex]);
  return focusableHeaderElements;
}

function scopeTab(
  event: KeyboardEvent,
  header: HTMLElement,
  body: HTMLElement,
  focusMonth: number
) {
  event.preventDefault();
  const focusableElements = tabbableElements(header, body, focusMonth);
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

export function useMonthTableKeyboardNav(
  header: React.RefObject<HTMLElement>,
  body: React.RefObject<HTMLElement>,
  currentMonth: number,
  prevYear: () => void,
  nextYear: () => void
) {
  const [focusMonth, setFocusMonth] = useState(currentMonth);

  useEffect(() => {
    // initial focus
    if (body.current) {
      const focusableBodyElements = tabbable(body.current);
      focusableBodyElements[focusMonth].focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const arrowMoveMonth = useCallback(
    (offset: number) => {
      if (body.current) {
        let focusableElements = tabbable(body.current);
        if (!focusableElements.length) {
          return;
        }
        const currentFocusedIndex = focusableElements.findIndex(em =>
          em.isSameNode(document.activeElement)
        );
        if (currentFocusedIndex >= 0) {
          let newFocusedIndex = currentFocusedIndex + offset;
          if (newFocusedIndex < 0) {
            // prev
            prevYear();
            focusableElements = tabbable(body.current);
            newFocusedIndex =
              focusableElements.length + currentFocusedIndex + offset;
          } else if (newFocusedIndex > focusableElements.length - 1) {
            offset = newFocusedIndex - focusableElements.length;
            // next
            nextYear();
            focusableElements = tabbable(body.current);
            newFocusedIndex = offset;
          }

          focusableElements[newFocusedIndex].focus();
          setFocusMonth(newFocusedIndex);
        }
      }
    },
    [body, prevYear, nextYear]
  );

  useWindowEvent('keydown', event => {
    if (header.current && body.current) {
      switch (event.key) {
        case eventKey.Tab: {
          scopeTab(event, header.current, body.current, focusMonth);
          break;
        }
        case eventKey.ArrowLeft: {
          event.preventDefault();
          arrowMoveMonth(-1);
          break;
        }
        case eventKey.ArrowRight: {
          event.preventDefault();
          arrowMoveMonth(1);
          break;
        }
        case eventKey.ArrowDown: {
          event.preventDefault();
          arrowMoveMonth(4);
          break;
        }
        case eventKey.ArrowUp: {
          event.preventDefault();
          arrowMoveMonth(-4);
          break;
        }
      }
    }
  });
}
