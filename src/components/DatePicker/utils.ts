import { DatePickerValueType, Cell } from './DatePicker.types';
import { ROW, COL } from './constants';

export const DATE_REGEX = /^[12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;

export function isDate(date: DatePickerValueType): date is Date {
  return date instanceof Date;
}

export function isValidDate(
  date?: DatePickerValueType
): date is DatePickerValueType {
  if (date) {
    if (isDate(date)) {
      return !Number.isNaN(+date);
    } else {
      return DATE_REGEX.test(date);
    }
  } else {
    return false;
  }
}

export function getDayCountOfMonth(year: number, month: number) {
  if (month === 3 || month === 5 || month === 8 || month === 10) {
    return 30;
  }

  if (month === 1) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return 29;
    } else {
      return 28;
    }
  }

  return 31;
}

export function getFirstDayOfMonth(date: Date) {
  const temp = new Date(date.getTime());
  temp.setDate(1);
  return temp.getDay();
}

export function getMonthArray(year: number, month: number) {
  const len = getDayCountOfMonth(year, month);
  return Array.from(Array(len).keys()).map(i => i + 1);
}

export function getDefaultTableCell(): Array<Array<Cell>> {
  const cells = [];
  const cell: Cell = {
    type: 'normal',
    value: ''
  };

  for (let i = 0; i < ROW; i++) {
    const row = [];
    for (let j = 0; j < COL; j++) {
      row.push({ ...cell });
    }
    cells.push(row);
  }
  return cells;
}

export function isToday(date: Date) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return today.getTime() === date.getTime();
}

export function dateToString(date?: Date) {
  if (date) {
    return `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
  } else {
    return '';
  }
}

export function parseDate(date: string): Date {
  if (DATE_REGEX.test(date)) {
    const [year, month, day] = date.split('-');
    return new Date(Number(year), Number(month) - 1, Number(day));
  } else {
    return new Date();
  }
}

export function covertToDate(date?: DatePickerValueType): Date {
  if (date) {
    if (isDate(date)) {
      return date;
    } else {
      return parseDate(date);
    }
  } else {
    return new Date();
  }
}

export function prevMonth(year: number, month: number) {
  return month === 0 ? new Date(year - 1, 11, 1) : new Date(year, month - 1, 1);
}

export function nextMonth(year: number, month: number) {
  return month === 11 ? new Date(year + 1, 0, 1) : new Date(year, month + 1, 1);
}

export default {
  getFirstDayOfMonth,
  getMonthArray,
  getDefaultTableCell,
  isToday,
  dateToString,
  parseDate,
  prevMonth,
  nextMonth
};
