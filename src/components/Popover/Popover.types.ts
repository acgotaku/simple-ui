import React from 'react';
import { Placement } from '@/floating';

export type Trigger = 'click' | 'hover';

export interface IBasePopoverProps {
  children: React.ReactNode;
  target: React.ReactElement;
  disabled?: boolean;
  placement?: Placement;
  withArrow?: boolean;
  withinPortal?: boolean;
  sameWidth?: boolean;
}

export interface IBasicPopoverProps extends IBasePopoverProps {
  trigger?: Trigger;
}

export interface IAdvancedPopoverProps extends IBasePopoverProps {
  visible: boolean;
  onClose: () => void;
}

export type IPopoverProps = IBasicPopoverProps | IAdvancedPopoverProps;
