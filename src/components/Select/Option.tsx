import React, { useCallback } from 'react';
import styles from './select.module.css';
import { IOptionProps } from './Select.types';

const Option: React.FC<IOptionProps> = ({
  value,
  onClick,
  selected,
  disabled = false,
  children
}) => {
  const handleClick = useCallback(() => {
    if (onClick && !disabled) {
      onClick(value);
    }
  }, [value, disabled, onClick]);
  return (
    <div
      className={styles.menuItem}
      onClick={handleClick}
      role="option"
      aria-selected={selected}
    >
      {children}
    </div>
  );
};

export default Option;
