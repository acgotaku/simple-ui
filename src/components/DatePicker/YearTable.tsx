import React, { useState, useCallback, useMemo, useRef } from 'react';
import cls from 'clsx';
import styles from './datepicker.module.css';
import { YEAR_COUNTS } from './constants';
import { IYearTableProps } from './DatePicker.types';
import { useDateContext } from './context';
import { useYearTableKeyboardNav } from './useYearTableKeyboardNav';
import { ReactComponent as PrevYear } from '@/assets/icons/caret-double-left.svg';
import { ReactComponent as NextYear } from '@/assets/icons/caret-double-right.svg';

const YearTable: React.FC<IYearTableProps> = () => {
  const { currentYear, setCurrentDate, setView, backToDateView } =
    useDateContext();
  const headerRef = useRef(null);
  const bodyRef = useRef(null);
  const [baseYear, setBaseYear] = useState(currentYear - (currentYear % 10));
  const years = useMemo(() => {
    return Array.from(Array(YEAR_COUNTS).keys()).map(index => baseYear + index);
  }, [baseYear]);

  const prevYear = useCallback(() => {
    setBaseYear(year => year - YEAR_COUNTS);
  }, []);

  const nextYear = useCallback(() => {
    setBaseYear(year => year + YEAR_COUNTS);
  }, []);
  useYearTableKeyboardNav(
    headerRef,
    bodyRef,
    currentYear - baseYear,
    prevYear,
    nextYear
  );
  const selectYear = useCallback(
    (year: number) => {
      setCurrentDate(
        prevDate => new Date(year, prevDate.getMonth(), prevDate.getDate())
      );
      setView('month');
    },
    [setCurrentDate, setView]
  );

  return (
    <div className={styles.yearTable}>
      <div className={styles.yearTableHeader} ref={headerRef}>
        <button
          type="button"
          className={styles.yearTableButton}
          onClick={prevYear}
        >
          <PrevYear className={styles.yearTableIcon} />
        </button>

        <button
          type="button"
          className={styles.yearTableRange}
          onClick={backToDateView}
        >
          {years[0] + ' ~ ' + years[years.length - 1]}
        </button>
        <button
          type="button"
          className={styles.yearTableButton}
          onClick={nextYear}
        >
          <NextYear className={styles.yearTableIcon} />
        </button>
      </div>
      <div className={styles.yearTableBody} ref={bodyRef}>
        {years.map(year => (
          <div className={styles.yearTableCell} key={year}>
            <button
              type="button"
              className={cls(styles.yearTableCellButton, {
                [styles.current]: year === currentYear
              })}
              onClick={() => selectYear(year)}
            >
              {year}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YearTable;
