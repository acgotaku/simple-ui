/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line
export const noop = () => {};

export const isObject = (obj: any): boolean => {
  return obj !== null && typeof obj === 'object';
};

export const hasOwnProperty = (value: unknown, key: string): boolean =>
  Object.prototype.hasOwnProperty.call(value, key);
export const objectToString = Object.prototype.toString;
export const toTypeString = (value: unknown): string =>
  objectToString.call(value);

export const isMap = (val: unknown): val is Map<any, any> =>
  toTypeString(val) === '[object Map]';
export const isSet = (val: unknown): val is Set<any> =>
  toTypeString(val) === '[object Set]';
export const isDate = (val: unknown): val is Date =>
  toTypeString(val) === '[object Date]';
export const isRegExp = (val: unknown): val is RegExp =>
  toTypeString(val) === '[object RegExp]';
export const isFunction = (val: unknown): val is AnyFunction =>
  typeof val === 'function';
export const isString = (val: unknown): val is string =>
  typeof val === 'string';
export const isSymbol = (val: unknown): val is symbol =>
  typeof val === 'symbol';
export const isPlainObject = (val: unknown): val is object =>
  toTypeString(val) === '[object Object]';

export const clamp = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max);
};

export const validNumber = (value: string | number): boolean => {
  return !Number.isNaN(+value);
};

function looseCompareArrays(a: any[], b: any[]) {
  if (a.length !== b.length) return false;
  let equal = true;
  for (let i = 0; equal && i < a.length; i++) {
    equal = looseEqual(a[i], b[i]);
  }
  return equal;
}

export function looseEqual(a: any, b: any): boolean {
  if (a === b) return true;
  let aValidType = isDate(a);
  let bValidType = isDate(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? a.getTime() === b.getTime() : false;
  }
  aValidType = isSymbol(a);
  bValidType = isSymbol(b);
  if (aValidType || bValidType) {
    return a === b;
  }
  aValidType = Array.isArray(a);
  bValidType = Array.isArray(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? looseCompareArrays(a, b) : false;
  }
  aValidType = isObject(a);
  bValidType = isObject(b);
  if (aValidType || bValidType) {
    if (!aValidType || !bValidType) {
      return false;
    }
    const aKeysCount = Object.keys(a).length;
    const bKeysCount = Object.keys(b).length;
    if (aKeysCount !== bKeysCount) {
      return false;
    }
    for (const key in a) {
      const aHasKey = hasOwnProperty(a, key);
      const bHasKey = hasOwnProperty(b, key);
      if (
        (aHasKey && !bHasKey) ||
        (!aHasKey && bHasKey) ||
        !looseEqual(a[key], b[key])
      ) {
        return false;
      }
    }
  }
  return String(a) === String(b);
}

export function deepClone<T>(val: T): T {
  if (Array.isArray(val)) {
    return val.map(deepClone) as typeof val;
  }
  if (isDate(val)) {
    return new Date(val) as typeof val;
  }
  if (isMap(val)) {
    return new Map(val) as typeof val;
  }
  if (isSet(val)) {
    return new Set(val) as typeof val;
  }
  if (isRegExp(val)) {
    return new RegExp(val.source, val.flags) as typeof val;
  }
  if (isPlainObject(val)) {
    return Object.keys(val).reduce((acc, key) => {
      acc[key as keyof T] = deepClone(val[key as keyof T]);
      return acc;
    }, {} as T);
  } else {
    return val;
  }
}
