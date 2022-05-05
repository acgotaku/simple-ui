import { Modifier, StrictModifier } from 'react-popper';
import { Placement } from '@popperjs/core';

export interface IPopperProps {
  children: React.ReactNode;
  referenceElement: HTMLDivElement | null;
  visible: boolean;
  onClose: () => void;
  placement: Placement;
  withArrow: boolean;
  withinPortal: boolean;
  sameWidth: boolean;
  className?: string;
}

export interface IPopperContainerProps {
  children: React.ReactNode;
  withinPortal: boolean;
}

export type SameWidthModifier = Modifier<'sameWidth'>;

export type ExtendedModifiers = Array<SameWidthModifier | StrictModifier>;
