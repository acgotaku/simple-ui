import React, { useMemo } from 'react';
import cls from 'clsx';
import { useRandomId } from '@/hooks/useRandomId';
import styles from './radio.module.css';
import { IRadioGroupProps } from './Radio.types';
import { RadioContext } from './context';

const RadioGroup: React.FC<IRadioGroupProps> = ({
  value,
  onChange,
  className = '',
  name = '',
  disabled = false,
  children
}) => {
  name = useRandomId(name);
  const context = useMemo(
    () => ({
      inGroup: true,
      name,
      value,
      updateState: onChange,
      disabled
    }),
    [name, value, onChange, disabled]
  );

  return (
    <div className={cls(styles.group, className)}>
      <RadioContext.Provider value={context}>{children}</RadioContext.Provider>
    </div>
  );
};

export default RadioGroup;
