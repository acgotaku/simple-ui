import React from 'react';

export type ToastType = 'info' | 'success' | 'error' | 'warning' | 'loading';

export interface IToastProps {
  type: ToastType;
  content: React.ReactNode;
  duration: number;
  remove: (key: string) => void;
  toastId: string;
}

export interface ToastState extends Omit<IToastProps, 'remove'> {
  nodeRef?: React.RefObject<HTMLDivElement>;
}

export type ToastConfig = Omit<ToastState, 'toastId'>;

export interface IMessageRef {
  add: (config: ToastConfig) => void;
  remove: (toastId: string) => void;
}
