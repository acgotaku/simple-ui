import React, { useState, useEffect, useMemo, useCallback } from 'react';
import cls from 'clsx';
import { eventKey } from '@/constants/keyboard';
import { clamp } from '@/utils/misc';
import styles from './slider.module.css';
import { IRangeSliderProps } from './Slider.types';

const RangeSlider: React.FC<IRangeSliderProps> = ({
  minValue = 0,
  maxValue = 100,
  step = 1,
  defaultValue = {
    start: 0,
    end: 100
  },
  value,
  label,
  onChange,
  className = '',
  disabled = false,
  ...rest
}) => {
  const [rangeValue, setRangeValue] = useState(defaultValue);
  const [inputStartValue, setInputStartValue] = useState<string | number>(
    defaultValue.start
  );
  const [inputEndValue, setInputEndValue] = useState<string | number>(
    defaultValue.end
  );
  const isControlledComponent = useMemo(() => value !== undefined, [value]);

  const validInputStartValue = useMemo(
    () =>
      inputStartValue >= minValue &&
      inputStartValue <= rangeValue.end &&
      (+inputStartValue - minValue) % step === 0,
    [inputStartValue, minValue, step, rangeValue]
  );
  const validInputEndValue = useMemo(
    () =>
      inputEndValue <= maxValue &&
      inputEndValue >= rangeValue.start &&
      (+inputEndValue - minValue) % step === 0,
    [inputEndValue, minValue, maxValue, step, rangeValue]
  );

  const rangeStyle = useMemo(() => {
    const left = ((rangeValue.start - minValue) / (maxValue - minValue)) * 100;
    const width =
      ((rangeValue.end - rangeValue.start) / (maxValue - minValue)) * 100;
    return {
      '--left': `${clamp(left, 0, 100)}%`,
      '--width': `${clamp(width, 0, 100)}%`
    };
  }, [rangeValue, minValue, maxValue]) as React.CSSProperties;

  useEffect(() => {
    if (isControlledComponent && value) {
      setRangeValue(value);
      setInputStartValue(value.start);
      setInputEndValue(value.end);
    }
  }, [isControlledComponent, value]);

  const changeInputStartHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputStartValue(event.target.value);
    },
    []
  );
  const changeInputEndHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputEndValue(event.target.value);
    },
    []
  );
  const checkInputStartValue = useCallback(() => {
    if (validInputStartValue) {
      setRangeValue({
        start: Number(inputStartValue),
        end: rangeValue.end
      });
    } else {
      setInputStartValue(rangeValue.start);
    }
  }, [inputStartValue, validInputStartValue, rangeValue]);
  const checkInputEndValue = useCallback(() => {
    if (validInputEndValue) {
      setRangeValue({
        start: rangeValue.start,
        end: Number(inputEndValue)
      });
    } else {
      setInputEndValue(rangeValue.end);
    }
  }, [inputEndValue, validInputEndValue, rangeValue]);

  const blurInputStartHandler = useCallback(() => {
    checkInputStartValue();
  }, [checkInputStartValue]);
  const blurInputEndHandler = useCallback(() => {
    checkInputEndValue();
  }, [checkInputEndValue]);

  const keyDownInputStartHandler = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      switch (event.key) {
        case eventKey.Escape: {
          setInputStartValue(rangeValue.start);
          break;
        }
        case eventKey.Enter: {
          checkInputStartValue();
          break;
        }
      }
    },
    [rangeValue, checkInputStartValue]
  );
  const keyDownInputEndHandler = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      switch (event.key) {
        case eventKey.Escape: {
          setInputEndValue(rangeValue.end);
          break;
        }
        case eventKey.Enter: {
          checkInputEndValue();
          break;
        }
      }
    },
    [rangeValue, checkInputEndValue]
  );

  const changeReangeStartHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number(event.target.value);
      if (value <= rangeValue.end) {
        const newRangeValue = {
          start: value,
          end: rangeValue.end
        };
        setRangeValue(newRangeValue);
        setInputStartValue(value);
        onChange && onChange(newRangeValue);
      }
    },
    [rangeValue, onChange]
  );

  const changeReangeEndHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number(event.target.value);
      if (value >= rangeValue.start) {
        const newRangeValue = {
          start: rangeValue.start,
          end: value
        };
        setRangeValue(newRangeValue);
        setInputEndValue(value);
        onChange && onChange(newRangeValue);
      }
    },
    [rangeValue, onChange]
  );

  return (
    <div className={cls(styles.slider, className)}>
      <div className={styles.header}>
        <label className={styles.label}>{label}</label>
        <div className={styles.inputWrapper}>
          <input
            type="number"
            className={cls(styles.input, {
              [styles.invalid]: !validInputStartValue
            })}
            min={minValue}
            max={rangeValue.end}
            step={step}
            disabled={disabled}
            value={inputStartValue}
            onChange={changeInputStartHandler}
            onBlur={blurInputStartHandler}
            onKeyDown={keyDownInputStartHandler}
          />
          <span className={styles.separator}>-</span>
          <input
            type="number"
            className={cls(styles.input, {
              [styles.invalid]: !validInputEndValue
            })}
            min={rangeValue.start}
            max={maxValue}
            step={step}
            disabled={disabled}
            value={inputEndValue}
            onChange={changeInputEndHandler}
            onBlur={blurInputEndHandler}
            onKeyDown={keyDownInputEndHandler}
          />
        </div>
      </div>
      <div
        className={cls(styles.rangeWrapper, styles.dual, {
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
          value={rangeValue.start}
          {...rest}
          onChange={changeReangeStartHandler}
        />
        <input
          type="range"
          min={minValue}
          max={maxValue}
          step={step}
          className={styles.range}
          disabled={disabled}
          value={rangeValue.end}
          {...rest}
          onChange={changeReangeEndHandler}
        />
      </div>
    </div>
  );
};

export default RangeSlider;
