import React, { useState, useCallback, useMemo } from 'react';
import cls from 'clsx';
import { eventKey } from '@/constants/keyboard';
import styles from './datepicker.module.css';
import Input from '../Input';
import Popper from '../Popper';
import { IDatePickerProps } from './DatePicker.types';
import DatePanel from './DatePanel';
import { isValidDate, dateToString, isDate, parseDate } from './utils';
import { ReactComponent as Calendar } from '@/assets/icons/calendar.svg';

const DatePicker: React.FC<IDatePickerProps> = ({
  value,
  onChange,
  disabled = false,
  clearable = false,
  className = '',
  placement = 'bottom',
  withArrow = false,
  withinPortal = true,
  sameWidth = false
}) => {
  const [referenceElement, setReferenceElement] =
    useState<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const onClose = useCallback(() => setVisible(false), []);
  const strDate = useMemo(() => {
    if (isValidDate(value)) {
      if (isDate(value)) {
        return dateToString(value);
      } else {
        return value;
      }
    } else {
      return '';
    }
  }, [value]);
  const [inputDate, setInputDate] = useState(strDate);

  const selectDate = useCallback(
    (date: Date) => {
      setInputDate(dateToString(date));
      onChange && onChange(date);
    },
    [onChange]
  );

  const checkInputDate = useCallback(() => {
    if (isValidDate(inputDate)) {
      selectDate(parseDate(inputDate));
    } else {
      setInputDate(strDate);
    }
  }, [inputDate, selectDate, strDate]);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setInputDate(value);
      if (clearable && !value) {
        onChange?.();
      }
    },
    [onChange, clearable]
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      switch (event.key) {
        case eventKey.Escape: {
          setVisible(false);
          break;
        }
        case eventKey.ArrowDown:
        case eventKey.Enter: {
          setVisible(true);
          break;
        }
      }
    },
    []
  );

  return (
    <>
      <div ref={setReferenceElement} className={styles.ref}>
        <Input
          className={cls(styles.input, className)}
          role="combobox"
          aria-expanded={visible}
          aria-haspopup="dialog"
          value={inputDate}
          onChange={handleChange}
          onClick={() => setVisible(visible => !visible)}
          onBlur={checkInputDate}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          clearable={clearable}
          suffix={<Calendar className={styles.icon} />}
        />
      </div>
      {!disabled && (
        <Popper
          referenceElement={referenceElement}
          placement={placement}
          withArrow={withArrow}
          withinPortal={withinPortal}
          sameWidth={sameWidth}
          visible={visible}
          onClose={onClose}
        >
          <DatePanel value={value} onChange={selectDate} onClose={onClose} />
        </Popper>
      )}
    </>
  );
};

export default DatePicker;
