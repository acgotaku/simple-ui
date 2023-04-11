import React, { useState, useCallback } from 'react';
import cls from 'clsx';
import { eventKey } from '@/constants/keyboard';
import { ReactComponent as Clock } from '@/assets/icons/clock.svg';
import styles from './timepicker.module.css';
import Input from '../Input';
import Popper from '../Popper';
import { ITimePickerProps } from './TimePicker.types';
import TimePanel from './TimePanel';
import { isValidTime } from './utils';

const TimePicker: React.FC<ITimePickerProps> = ({
  value = '',
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
  const [inputTime, setInputTime] = useState(value);
  const onClose = useCallback(() => setVisible(false), []);

  const selectTime = useCallback(
    (time: string) => {
      setInputTime(time);
      onChange?.(time);
    },
    [onChange]
  );

  const checkInputTime = useCallback(() => {
    if (isValidTime(inputTime)) {
      selectTime(inputTime);
    } else {
      setInputTime(value);
    }
  }, [inputTime, selectTime, value]);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setInputTime(value);
      if (clearable && !value) {
        onChange?.('');
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
          value={inputTime}
          onChange={handleChange}
          onClick={() => setVisible(visible => !visible)}
          onBlur={checkInputTime}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          clearable={clearable}
          suffix={<Clock className={styles.icon} />}
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
          <TimePanel value={value} onChange={selectTime} onClose={onClose} />
        </Popper>
      )}
    </>
  );
};

export default TimePicker;
