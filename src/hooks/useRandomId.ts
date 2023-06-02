import { useState } from 'react';
import { randomId } from '@/utils/random';

export function useRandomId(staticId?: string) {
  const [id] = useState(randomId());

  return staticId || id;
}
