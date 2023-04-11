import { TIME_LEN, HOUR_COUNTS, MIN_COUNTS, SEC_COUNTS } from './constants';

export function parseTime(time: string) {
  if (time.length === TIME_LEN) {
    const [hour, min, sec] = time.split(':');
    return [Number(hour), Number(min), Number(sec)];
  } else {
    return [0, 0, 0];
  }
}

export function timeToString(hour: number, min: number, sec: number) {
  return `${hour.toString().padStart(2, '0')}:${min
    .toString()
    .padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
}

export function isValidTime(time: string) {
  if (time.length < TIME_LEN) {
    return true;
  } else if (time.length > TIME_LEN) {
    return false;
  }
  const [hour, min, sec] = time.split(':');
  if (
    Number(hour) < HOUR_COUNTS &&
    Number(min) < MIN_COUNTS &&
    Number(sec) < SEC_COUNTS
  ) {
    return true;
  }
}
