import React from 'react';
import cls from 'clsx';
import { useRandomId } from '@/hooks/useRandomId';
import styles from './switch.module.css';
import { ISwitchProps } from './Switch.types';

const Switch: React.FC<ISwitchProps> = ({ className = '', id, ...rest }) => {
  id = useRandomId(id);
  return (
    <input
      {...rest}
      id={id}
      type="checkbox"
      role="switch"
      className={cls(styles.switch, className)}
    />
  );
};

export default Switch;
