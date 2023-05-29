import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { eventKey } from '@/constants/keyboard';
import styles from './datepicker.module.css';
import { IDatePanelProps, PanelView } from './DatePicker.types';
import { isValidDate, covertToDate } from './utils';
import { DateContext } from './context';
import DateTable from './DateTable';
import MonthTable from './MonthTable';
import YearTable from './YearTable';

const DatePanel: React.FC<IDatePanelProps> = ({ value, onChange, onClose }) => {
  const [view, setView] = useState<PanelView>('date');
  const [initialFocus, setInitialFocus] = useState(false);
  const initDate = useMemo(() => covertToDate(value), [value]);
  const [currentDate, setCurrentDate] = useState(initDate);
  const currentYear = useMemo(() => currentDate.getFullYear(), [currentDate]);
  const currentMonth = useMemo(() => currentDate.getMonth(), [currentDate]);
  const restoreElement = useRef<HTMLElement>();

  useEffect(() => {
    restoreElement.current = document.activeElement as HTMLElement;
  }, []);

  const backToDateView = useCallback(() => {
    setView('date');
    setInitialFocus(true);
  }, []);

  const context = useMemo(
    () => ({
      currentDate,
      currentYear,
      currentMonth,
      setCurrentDate,
      setView,
      backToDateView
    }),
    [currentDate, currentYear, currentMonth, backToDateView]
  );

  const selectDate = useCallback(
    (date: Date) => {
      onChange && onChange(date);
      onClose();
      restoreElement.current?.focus();
    },
    [onChange, onClose]
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLElement>) => {
      if (event.key === eventKey.Escape) {
        onClose();
        restoreElement.current?.focus();
      }
    },
    [onClose]
  );

  const currentView = useMemo(() => {
    switch (view) {
      case 'date': {
        return (
          <DateTable
            date={initDate}
            onSelectDate={selectDate}
            isSelected={isValidDate(value)}
            initialFocus={initialFocus}
          />
        );
      }
      case 'year': {
        return <YearTable />;
      }
      case 'month': {
        return <MonthTable />;
      }
      default: {
        return null;
      }
    }
  }, [view, value, initDate, selectDate, initialFocus]);
  return (
    <div className={styles.panel} onKeyDown={handleKeyDown}>
      <DateContext.Provider value={context}>{currentView}</DateContext.Provider>
    </div>
  );
};

export default DatePanel;
