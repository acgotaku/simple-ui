import { useCallback, useState, useEffect } from 'react';
import { useWindowEvent } from '@/hooks/useWindowEvent';
import { eventKey } from '@/constants/keyboard';
import { tabbable } from '@/utils/tabbable';

function tabbableElements(
  header: HTMLElement,
  body: HTMLElement,
  focusDate: number
) {
  const focusableHeaderElements = tabbable(header);
  const focusableBodyElements = tabbable(body);
  const lastIndex = focusableBodyElements.length - 1;
  const focusIndex = focusDate > lastIndex ? lastIndex : focusDate;
  focusableHeaderElements.push(focusableBodyElements[focusIndex]);
  return focusableHeaderElements;
}

function scopeTab(
  event: KeyboardEvent,
  header: HTMLElement,
  body: HTMLElement,
  focusDate: number
) {
  event.preventDefault();
  const focusableElements = tabbableElements(header, body, focusDate);
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

export function useDateTableKeyboardNav(
  header: React.RefObject<HTMLElement>,
  body: React.RefObject<HTMLElement>,
  currentDate: number,
  prevMonth: () => void,
  nextMonth: () => void,
  initialFocus: boolean
) {
  const [focusDate, setFocusDate] = useState(currentDate - 1);

  useEffect(() => {
    // initial focus
    if (body.current && initialFocus) {
      const focusableBodyElements = tabbable(body.current);
      focusableBodyElements[focusDate].focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialFocus]);

  const arrowMoveDate = useCallback(
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
            prevMonth();
            focusableElements = tabbable(body.current);
            newFocusedIndex =
              focusableElements.length + currentFocusedIndex + offset;
          } else if (newFocusedIndex > focusableElements.length - 1) {
            offset = newFocusedIndex - focusableElements.length;
            // next
            nextMonth();
            focusableElements = tabbable(body.current);
            newFocusedIndex = offset;
          }

          focusableElements[newFocusedIndex].focus();
          setFocusDate(newFocusedIndex);
        } else {
          focusableElements[focusDate].focus();
        }
      }
    },
    [body, focusDate, prevMonth, nextMonth]
  );

  useWindowEvent('keydown', event => {
    if (header.current && body.current) {
      switch (event.key) {
        case eventKey.Tab: {
          scopeTab(event, header.current, body.current, focusDate);
          break;
        }
        case eventKey.ArrowLeft: {
          event.preventDefault();
          arrowMoveDate(-1);
          break;
        }
        case eventKey.ArrowRight: {
          event.preventDefault();
          arrowMoveDate(1);
          break;
        }
        case eventKey.ArrowDown: {
          event.preventDefault();
          arrowMoveDate(7);
          break;
        }
        case eventKey.ArrowUp: {
          event.preventDefault();
          arrowMoveDate(-7);
          break;
        }
      }
    }
  });
}
