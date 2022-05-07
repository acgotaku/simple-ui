import React from 'react';
import { Placement } from '@popperjs/core';

export type Trigger = 'click' | 'hover';

export interface IBaseDropdownProps {
  children: React.ReactNode;
  target: React.ReactElement;
  disabled?: boolean;
  placement?: Placement;
  withArrow?: boolean;
  withinPortal?: boolean;
  sameWidth?: boolean;
}

export interface IBasicDropdownProps extends IBaseDropdownProps {
  trigger?: Trigger;
}

export interface IAdvancedDropdownProps extends IBaseDropdownProps {
  visible: boolean;
  onClose: () => void;
}

export type IDropdownProps = IBasicDropdownProps | IAdvancedDropdownProps;

export interface IDropdownMenuProps
  extends React.HTMLAttributes<HTMLUListElement> {
  className?: string;
}

export interface IDropdownItemProps
  extends React.LiHTMLAttributes<HTMLLIElement> {
  className?: string;
}

export interface DropdownContextProps {
  onClose: () => void;
}
