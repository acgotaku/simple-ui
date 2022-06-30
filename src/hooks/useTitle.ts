import { useEffect } from 'react';

export function useTitle(title: string) {
  useEffect(() => {
    if (title.trim().length > 0) {
      document.title = title.trim();
    }
  }, [title]);
}
