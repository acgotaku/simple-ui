import { useState, useMemo, forwardRef } from 'react';
import { ReactComponent as ShowPassword } from '@/assets/icons/eye.svg';
import { ReactComponent as HidePassword } from '@/assets/icons/eye-closed.svg';
import styles from './input.module.css';
import { IPasswordProps } from './Input.types';
import BaseInput from './Input.base';

const Password = forwardRef<HTMLInputElement, IPasswordProps>((props, ref) => {
  const [visible, setVisible] = useState(false);
  const inputProps = useMemo(
    () => ({
      ...props,
      type: visible ? 'text' : 'password'
    }),
    [props, visible]
  );
  const suffixIcon = useMemo(() => {
    return (
      <button
        type="button"
        className={styles.button}
        disabled={props.disabled}
        onClick={() => setVisible(visible => !visible)}
      >
        {visible ? <HidePassword /> : <ShowPassword />}
      </button>
    );
  }, [visible, props]);

  return <BaseInput {...inputProps} ref={ref} suffix={suffixIcon} />;
});

Password.displayName = 'Password';

export default Password;
