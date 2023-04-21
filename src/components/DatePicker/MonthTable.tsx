import React, { useRef, useMemo, memo, useCallback } from 'react';
import cls from 'clsx';
import { useTranslation } from 'react-i18next';
import styles from './datepicker.module.css';
import { IMonthTableProps } from './DatePicker.types';
import { useDateContext } from './context';
import { MONTH_COUNTS } from './constants';
import { useMonthTableKeyboardNav } from './useMonthTableKeyboardNav';
import { ReactComponent as PrevYear } from '@/assets/icons/caret-double-left.svg';
import { ReactComponent as NextYear } from '@/assets/icons/caret-double-right.svg';

const MonthTable: React.FC<IMonthTableProps> = () => {
  const { t } = useTranslation();
  const headerRef = useRef(null);
  const bodyRef = useRef(null);
  const { currentYear, currentMonth, setCurrentDate, backToDateView } =
    useDateContext();
  const prevYear = useCallback(() => {
    setCurrentDate(
      prevDate => new Date(currentYear - 1, currentMonth, prevDate.getDate())
    );
  }, [currentYear, currentMonth, setCurrentDate]);

  const nextYear = useCallback(() => {
    setCurrentDate(
      prevDate => new Date(currentYear + 1, currentMonth, prevDate.getDate())
    );
  }, [currentYear, currentMonth, setCurrentDate]);

  useMonthTableKeyboardNav(
    headerRef,
    bodyRef,
    currentMonth,
    prevYear,
    nextYear
  );
  const months = useMemo(() => {
    return Array.from(Array(MONTH_COUNTS).keys());
  }, []);

  const selectMonth = useCallback(
    (month: number) => {
      setCurrentDate(
        prevDate => new Date(prevDate.getFullYear(), month, prevDate.getDate())
      );
      backToDateView();
    },
    [setCurrentDate, backToDateView]
  );

  return (
    <div className={styles.monthTable}>
      <div className={styles.monthTableHeader} ref={headerRef}>
        <button
          type="button"
          className={styles.monthTableButton}
          onClick={prevYear}
        >
          <PrevYear className={styles.monthTableIcon} />
        </button>

        <button
          type="button"
          className={styles.monthTableCurrent}
          onClick={backToDateView}
        >
          {currentYear}
        </button>
        <button
          type="button"
          className={styles.monthTableButton}
          onClick={nextYear}
        >
          <NextYear className={styles.monthTableIcon} />
        </button>
      </div>
      <div className={styles.monthTableBody} ref={bodyRef}>
        {months.map(month => (
          <div className={styles.monthTableCell} key={month}>
            <button
              type="button"
              className={cls(styles.monthTableCellButton, {
                [styles.current]: month === currentMonth
              })}
              onClick={() => selectMonth(month)}
            >
              {t(`date.month.month${month + 1}`)}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(MonthTable);
