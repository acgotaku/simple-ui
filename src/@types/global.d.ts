/* eslint-disable @typescript-eslint/no-explicit-any */

type AnyValue = any;
type AnyLiteral = Record<string, any>;
type AnyArray = Array<any>;
type AnyClass = new (...args: any[]) => any;
type AnyFunction = (...args: any[]) => any;
type AnyToVoidFunction = (...args: any[]) => void;
type NoneToVoidFunction = () => void;
