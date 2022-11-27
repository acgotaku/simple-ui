import { Placement, ReferenceElement } from '@/floating';

export interface IPopperProps {
  children: React.ReactNode;
  referenceElement: ReferenceElement | null;
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
