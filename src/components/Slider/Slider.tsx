import React, { useState, useEffect, useMemo, useCallback } from 'react';
import cls from 'clsx';
import { eventKey } from '@/constants/keyboard';
import { clamp } from '@/utils/misc';
import styles from './slider.module.css';
import { ISliderProps } from './Slider.types';

const Slider: React.FC<ISliderProps> = ({
  minValue = 0,
  maxValue = 100,
  step = 1,
  defaultValue = 0,
  value,
  label,
  onChange,
  className = '',
  disabled = false,
  ...rest
}) => {
  const [rangeValue, setRangeValue] = useState(defaultValue);
  const [inputValue, setInputValue] = useState<number | string>(defaultValue);
  const isControlledComponent = useMemo(() => value !== undefined, [value]);
  const validInputValue = useMemo(
    () =>
      inputValue >= minValue &&
      inputValue <= maxValue &&
      (+inputValue - minValue) % step === 0,
    [inputValue, minValue, maxValue, step]
  );

  const rangeStyle = useMemo(() => {
    const percent = ((rangeValue - minValue) / (maxValue - minValue)) * 100;
    return {
      '--width': `${clamp(percent, 0, 100)}%`
    };
  }, [rangeValue, minValue, maxValue]) as React.CSSProperties;

  useEffect(() => {
    if (isControlledComponent) {
      setRangeValue(value as number);
      setInputValue(value as number);
    }
  }, [isControlledComponent, value]);

  const changeInputHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    },
    []
  );
  const checkInputValue = useCallback(() => {
    if (validInputValue) {
      const value = Number(inputValue);
      setRangeValue(value);
      onChange?.(value);
    } else {
      setInputValue(rangeValue);
    }
  }, [inputValue, validInputValue, rangeValue, onChange]);
  const blurInputHandler = useCallback(() => {
    checkInputValue();
  }, [checkInputValue]);
  const keyDownInputHandler = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      switch (event.key) {
        case eventKey.Escape: {
          setInputValue(rangeValue);
          break;
        }
        case eventKey.Enter: {
          checkInputValue();
          break;
        }
      }
    },
    [rangeValue, checkInputValue]
  );

  const changeRangeHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number(event.target.value);
      setRangeValue(value);
      setInputValue(value);
      onChange && onChange(value);
    },
    [onChange]
  );

  return (
    <div className={cls(styles.slider, className)}>
      <div className={styles.header}>
        <label className={styles.label}>{label}</label>
        <input
          type="number"
          className={cls(styles.input, {
            [styles.invalid]: !validInputValue
          })}
          min={minValue}
          max={maxValue}
          step={step}
          disabled={disabled}
          value={inputValue}
          onChange={changeInputHandler}
          onBlur={blurInputHandler}
          onKeyDown={keyDownInputHandler}
        />
      </div>
      <div
        className={cls(styles.rangeWrapper, {
          [styles.disabled]: disabled
        })}
        style={rangeStyle}
      >
        <input
          type="range"
          min={minValue}
          max={maxValue}
          step={step}
          className={styles.range}
          disabled={disabled}
          value={rangeValue}
          {...rest}
          onChange={changeRangeHandler}
        />
      </div>
    </div>
  );
};

export default Slider;
