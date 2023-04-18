const HM_REGEX = /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/;
const HMS_REGEX = /^([0-1][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/;

export function parseTime(time: string) {
  const [hour = 0, min = 0, sec = 0] = time.split(':');
  return [Number(hour), Number(min), Number(sec)];
}

export function timeToString(
  hour: number,
  min: number,
  sec: number,
  withSeconds = false
) {
  if (withSeconds) {
    return `${hour.toString().padStart(2, '0')}:${min
      .toString()
      .padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  } else {
    return `${hour.toString().padStart(2, '0')}:${min
      .toString()
      .padStart(2, '0')}`;
  }
}

export function isValidTime(time: string, withSeconds = false) {
  if (withSeconds) {
    return HMS_REGEX.test(time);
  } else {
    return HM_REGEX.test(time);
  }
}
