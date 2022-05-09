import { Placement } from '@floating-ui/react-dom';

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
