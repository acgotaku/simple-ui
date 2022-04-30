import { forwardRef, useCallback } from 'react';
import cls from 'clsx';
import { useRandomId } from '@/hooks/useRandomId';
import styles from './radio.module.css';
import { useRadioContext } from './context';
import { IRadioProps } from './Radio.types';

const Radio = forwardRef<HTMLInputElement, IRadioProps>(
  (
    {
      label,
      value: radioValue,
      children,
      className = '',
      disabled = false,
      id,
      onChange,
      ...rest
    }: IRadioProps,
    ref
  ) => {
    label = label || children;
    id = useRandomId(id);
    const {
      inGroup,
      name,
      updateState,
      value,
      disabled: disabledAll
    } = useRadioContext();
    const changeHandler = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        if (inGroup && radioValue) {
          updateState && updateState(radioValue);
        }
        onChange && onChange(event);
      },
      [onChange, inGroup, radioValue, updateState]
    );
    return (
      <div className={cls(styles.wrapper, className)}>
        <input
          {...rest}
          onChange={changeHandler}
          id={id}
          name={name}
          disabled={disabled || disabledAll}
          checked={value === radioValue}
          ref={ref}
          type="radio"
          className={styles.radio}
        />
        {label && (
          <label htmlFor={id} className={styles.label}>
            {label}
          </label>
        )}
      </div>
    );
  }
);

Radio.displayName = 'Radio';

export default Radio;
