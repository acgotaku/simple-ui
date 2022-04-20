import React, { forwardRef } from 'react';
import cls from 'clsx';
import styles from './button.module.css';
import { IButtonProps } from './Button.types';
import { ReactComponent as Loading } from '@/assets/icons/circle-notch.svg';

const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      children,
      color = 'standard',
      loading = false,
      type = 'button',
      disabled = false,
      className = '',
      ...rest
    }: IButtonProps,
    ref
  ) => {
    const disableState = React.useMemo(
      () => disabled || loading,
      [disabled, loading]
    );
    return (
      <button
        ref={ref}
        type={type}
        disabled={disableState}
        className={cls(
          styles.button,
          { [styles[color]]: !disableState },
          className
        )}
        {...rest}
      >
        {loading && <Loading className={styles.icon} />}
        <span className={styles.text}> {children} </span>
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
