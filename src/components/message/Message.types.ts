import React from 'react';

export type ToastType = 'info' | 'success' | 'error' | 'warning' | 'loading';

export interface IToastProps {
  type: ToastType;
  content: React.ReactNode;
  duration: number;
  onClose: () => void;
}

export type ToastConfig = Omit<IToastProps, 'onClose'>;

export interface ToastState extends ToastConfig {
  key: string;
}

export interface IMessageRef {
  add: (config: ToastConfig) => void;
  remove: (key: string) => void;
}
