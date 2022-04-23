import { useEffect, useState } from 'react';
import { randomId } from '@/utils/random';

export function useRandomId(staticId?: string) {
  const [id, setId] = useState('');

  useEffect(() => {
    setId(randomId());
  }, []);

  return staticId || id;
}
