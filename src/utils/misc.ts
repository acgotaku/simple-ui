/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line
export const noop = () => {};

export const isObject = (obj: any): boolean => {
  return obj !== null && typeof obj === 'object';
};

export const clamp = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max);
};

export const validNumber = (value: string | number): boolean => {
  return !Number.isNaN(+value);
};
