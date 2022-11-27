const hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };

export function getOppositePlacement<T extends string>(placement: T): T {
  return placement.replace(
    /left|right|bottom|top/g,
    matched => (hash as Record<string, string>)[matched]
  ) as T;
}
