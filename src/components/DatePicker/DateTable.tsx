import React, { useCallback, useMemo, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import cls from 'clsx';
import styles from './datepicker.module.css';
import { IDateTableProps, CellType } from './DatePicker.types';
import dateUtils from './utils';
import { useDateContext } from './context';
import { ROW, COL } from './constants';
import { useDateTableKeyboardNav } from './useDateTableKeyboardNav';
import { ReactComponent as PrevYear } from '@/assets/icons/caret-double-left.svg';
import { ReactComponent as PrevMonth } from '@/assets/icons/caret-left.svg';
import { ReactComponent as NextMonth } from '@/assets/icons/caret-right.svg';
import { ReactComponent as NextYear } from '@/assets/icons/caret-double-right.svg';

const DateTable: React.FC<IDateTableProps> = ({
  date,
  onSelectDate,
  isSelected,
  initialFocus
}) => {
  const { t } = useTranslation();
  const { currentDate, setCurrentDate, setView } = useDateContext();
  const currentYear = useMemo(() => currentDate.getFullYear(), [currentDate]);
  const currentMonth = useMemo(() => currentDate.getMonth(), [currentDate]);
  const currentDay = useMemo(() => currentDate.getDate(), [currentDate]);
  const headerRef = useRef(null);
  const bodyRef = useRef(null);
  const headerText = useMemo(() => {
    return t(`date.month.month${currentMonth + 1}`) + ' ' + currentYear;
  }, [currentYear, currentMonth, t]);

  const getCellType = useCallback(
    (day: number) => {
      const cellDate = new Date(currentYear, currentMonth, day);
      let type: CellType = 'normal';
      if (dateUtils.isToday(cellDate)) {
        type = 'today';
      }
      if (
        isSelected &&
        dateUtils.dateToString(cellDate) === dateUtils.dateToString(date)
      ) {
        type = 'selected';
      }
      return type;
    },
    [date, currentYear, currentMonth, isSelected]
  );

  const tableCell = useMemo(() => {
    const month = dateUtils.getMonthArray(currentYear, currentMonth);
    const offset = dateUtils.getFirstDayOfMonth(currentDate);
    const cell = dateUtils.getDefaultTableCell();
    for (let j = offset; j < COL; j++) {
      const day = month.shift();
      if (day) {
        cell[0][j].value = day.toString();
        cell[0][j].type = getCellType(day);
      }
    }
    for (let i = 1; i < ROW; i++) {
      for (let j = 0; j < COL; j++) {
        const day = month.shift();
        if (day) {
          cell[i][j].value = day.toString();
          cell[i][j].type = getCellType(day);
        }
      }
    }
    // remove last empty row
    if (cell[ROW - 1].every(cell => !cell.value)) {
      delete cell[ROW - 1];
    }
    return cell;
  }, [currentYear, currentMonth, currentDate, getCellType]);

  const getCellTitle = useCallback(
    (day: number) => {
      const cellDate = new Date(currentYear, currentMonth, day);
      return dateUtils.dateToString(cellDate);
    },
    [currentYear, currentMonth]
  );

  const prevMonth = useCallback(() => {
    setCurrentDate(dateUtils.prevMonth(currentYear, currentMonth));
  }, [currentYear, currentMonth, setCurrentDate]);

  const nextMonth = useCallback(() => {
    setCurrentDate(dateUtils.nextMonth(currentYear, currentMonth));
  }, [currentYear, currentMonth, setCurrentDate]);

  const prevYear = useCallback(() => {
    const prev = new Date(currentYear - 1, currentMonth, 1);
    setCurrentDate(prev);
  }, [currentYear, currentMonth, setCurrentDate]);

  const nextYear = useCallback(() => {
    const next = new Date(currentYear + 1, currentMonth, 1);
    setCurrentDate(next);
  }, [currentYear, currentMonth, setCurrentDate]);

  useDateTableKeyboardNav(
    headerRef,
    bodyRef,
    currentDay,
    prevMonth,
    nextMonth,
    initialFocus
  );

  const handleClick = useCallback(
    (day: number) => {
      const cellDate = new Date(currentYear, currentMonth, day);
      onSelectDate(cellDate);
    },
    [currentYear, currentMonth, onSelectDate]
  );

  const showYearTable = useCallback(() => {
    setView('year');
  }, [setView]);

  return (
    <div className={styles.dateTable}>
      <div className={styles.dateTableHeader} ref={headerRef}>
        <button
          type="button"
          className={styles.dateTableButton}
          onClick={prevYear}
        >
          <PrevYear className={styles.dateTableIcon} />
        </button>
        <button
          type="button"
          className={styles.dateTableButton}
          onClick={prevMonth}
        >
          <PrevMonth className={styles.dateTableIcon} />
        </button>
        <button
          type="button"
          className={styles.dateTableCurrent}
          onClick={showYearTable}
        >
          {headerText}
        </button>
        <button
          type="button"
          className={styles.dateTableButton}
          onClick={nextMonth}
        >
          <NextMonth className={styles.dateTableIcon} />
        </button>
        <button
          type="button"
          className={styles.dateTableButton}
          onClick={nextYear}
        >
          <NextYear className={styles.dateTableIcon} />
        </button>
      </div>
      <div className={styles.dateTableBody} role="grid" ref={bodyRef}>
        <div className={styles.dateTableWeek}>
          <div className={styles.dateTableWeekItem}>{t('date.weeks.sun')}</div>
          <div className={styles.dateTableWeekItem}>{t('date.weeks.mon')}</div>
          <div className={styles.dateTableWeekItem}>{t('date.weeks.tue')}</div>
          <div className={styles.dateTableWeekItem}>{t('date.weeks.wed')}</div>
          <div className={styles.dateTableWeekItem}>{t('date.weeks.thu')}</div>
          <div className={styles.dateTableWeekItem}>{t('date.weeks.fri')}</div>
          <div className={styles.dateTableWeekItem}>{t('date.weeks.sat')}</div>
        </div>
        <div className={styles.dateTableMonth}>
          {tableCell.flat().map((cell, index) => (
            <div className={styles.dateTableCell} key={index}>
              {cell.value && (
                <button
                  type="button"
                  className={cls(styles.dateTableCellButton, {
                    [styles.today]: cell.type === 'today',
                    [styles.selected]: cell.type === 'selected'
                  })}
                  onClick={() => handleClick(Number(cell.value))}
                  title={getCellTitle(Number(cell.value))}
                >
                  {cell.value}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DateTable;
