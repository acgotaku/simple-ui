/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line
export const noop = () => {};

export const isObject = (obj: any): boolean => {
  return obj !== null && typeof obj === 'object';
};
