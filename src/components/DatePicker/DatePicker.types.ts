import { Placement } from '@/floating';

export type DatePickerValueType = string | number | Date;
export type PanelView = 'date' | 'month' | 'year';

export interface IDatePickerProps {
  value?: DatePickerValueType;
  onChange?: (date?: Date) => void;
  className?: string;
  disabled?: boolean;
  clearable?: boolean;
  placement?: Placement;
  withArrow?: boolean;
  withinPortal?: boolean;
  sameWidth?: boolean;
}

export interface IDatePanelProps {
  value?: DatePickerValueType;
  onChange: (date: Date) => void;
  onClose: () => void;
}

export interface DateContextProps {
  currentDate: Date;
  currentYear: number;
  currentMonth: number;
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
  setView: React.Dispatch<React.SetStateAction<PanelView>>;
  backToDateView: () => void;
}

export interface IDateTableProps {
  date: Date;
  onSelectDate: (date: Date) => void;
  isSelected: boolean;
  initialFocus: boolean;
}

export type CellType = 'normal' | 'today' | 'selected' | 'disabled';

export interface Cell {
  type: CellType;
  value: string;
}

export interface IYearTableProps {
  className?: string;
}

export interface IMonthTableProps {
  className?: string;
}
