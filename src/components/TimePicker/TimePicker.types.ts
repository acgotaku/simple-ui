import { Placement } from '../../floating';

export interface ITimePickerProps {
  value?: string;
  onChange?: (time: string) => void;
  className?: string;
  disabled?: boolean;
  clearable?: boolean;
  placement?: Placement;
  withArrow?: boolean;
  withinPortal?: boolean;
  sameWidth?: boolean;
}

export interface ITimePanelProps {
  value: string;
  onChange: (time: string) => void;
  onClose: () => void;
}
