import React from 'react';

export type ButtonColor = 'standard' | 'primary' | 'danger';

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColor;
  loading?: boolean;
}
