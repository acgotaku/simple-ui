import React, { useCallback, useState } from 'react';
import { eventKey } from '@/constants/keyboard';

type ReturnType = [
  boolean,
  (event: React.KeyboardEvent<HTMLInputElement>) => void
];

export function useTabFocus(
  active: boolean,
  main: React.RefObject<HTMLElement>,
  clearButton: React.RefObject<HTMLButtonElement>
): ReturnType {
  // keyboard show clearIcon
  const [tabFocus, setTabFocus] = useState(false);
  const keyDownHandler = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (!active) {
        return;
      }
      if (event.key === eventKey.Tab) {
        if (event.shiftKey) {
          if (event.target === main.current) {
            setTabFocus(false);
          } else {
            setTabFocus(true);
          }
        } else {
          if (event.target === clearButton.current) {
            setTabFocus(false);
          } else {
            setTabFocus(true);
          }
        }
      } else {
        setTabFocus(false);
      }
    },
    [main, clearButton, active]
  );

  return [tabFocus, keyDownHandler];
}
