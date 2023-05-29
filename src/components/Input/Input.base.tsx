import React, {
  forwardRef,
  useImperativeHandle,
  useMemo,
  useEffect,
  useState,
  useRef,
  useCallback
} from 'react';
import cls from 'clsx';
import { ReactComponent as Clear } from '@/assets/icons/clear.svg';
import styles from './input.module.css';
import { IInputProps } from './Input.types';

const simulateChangeEvent = (
  el: HTMLInputElement,
  event: React.MouseEvent<HTMLButtonElement>
): React.ChangeEvent<HTMLInputElement> => {
  return {
    ...event,
    target: el,
    currentTarget: el
  };
};

const BaseInput = forwardRef<HTMLInputElement, IInputProps>(
  (
    {
      className = '',
      disabled = false,
      clearable = false,
      invalid = false,
      defaultValue = '',
      value,
      onChange,
      onFocus,
      onBlur,
      prefix,
      suffix,
      ...rest
    }: IInputProps,
    ref: React.Ref<HTMLInputElement | null>
  ) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const clearRef = useRef<HTMLButtonElement>(null);
    const [selfValue, setSelfValue] = useState(defaultValue);
    const isControlledComponent = useMemo(() => value !== undefined, [value]);

    useImperativeHandle(ref, () => inputRef.current);

    useEffect(() => {
      if (isControlledComponent) {
        setSelfValue(value as string);
      }
    }, [isControlledComponent, value]);

    const controlledValue = isControlledComponent
      ? { value: selfValue }
      : { defaultValue };

    const inputProps = {
      ...rest,
      ...controlledValue
    };

    const showClear = useMemo(
      () => clearable && !!selfValue,
      [clearable, selfValue]
    );

    const changeHandler = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelfValue(event.target.value);
        onChange && onChange(event);
      },
      [onChange]
    );

    const focusHandler = useCallback(
      (event: React.FocusEvent<HTMLInputElement>) => {
        onFocus && onFocus(event);
      },
      [onFocus]
    );

    const blurHandler = useCallback(
      (event: React.FocusEvent<HTMLInputElement>) => {
        onBlur && onBlur(event);
      },
      [onBlur]
    );

    const clearHandler = useCallback(
      (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation();

        setSelfValue('');
        if (!inputRef.current) return;

        const changeEvent = simulateChangeEvent(inputRef.current, event);
        changeEvent.target.value = '';
        onChange && onChange(changeEvent);
        inputRef.current.focus();
      },
      [onChange]
    );

    return (
      <div
        className={cls(
          styles.wrapper,
          {
            [styles.disabled]: disabled,
            [styles.invalid]: invalid
          },
          className
        )}
        ref={wrapperRef}
      >
        {prefix && <div className={styles.prefix}>{prefix}</div>}
        <input
          ref={inputRef}
          className={styles.input}
          disabled={disabled}
          {...inputProps}
          onChange={changeHandler}
          onFocus={focusHandler}
          onBlur={blurHandler}
        />
        {showClear && (
          <div className={styles.suffix}>
            <button
              type="button"
              className={cls(styles.button, styles.clear)}
              onClick={clearHandler}
              ref={clearRef}
            >
              <Clear />
            </button>
          </div>
        )}
        {suffix && <div className={styles.suffix}>{suffix}</div>}
      </div>
    );
  }
);

BaseInput.displayName = 'BaseInput';

export default BaseInput;
