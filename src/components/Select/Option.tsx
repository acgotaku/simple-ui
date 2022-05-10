import React, { useCallback } from 'react';
import styles from './select.module.css';
import { IOptionProps } from './Select.types';

const Option: React.FC<IOptionProps> = ({
  value,
  onClick,
  selected,
  style,
  children
}) => {
  const handleClick = useCallback(() => {
    if (onClick) {
      onClick(value);
    }
  }, [value, onClick]);
  return (
    <div
      className={styles.menuItem}
      onClick={handleClick}
      style={style}
      role="option"
      aria-selected={selected}
    >
      {children}
    </div>
  );
};

export default Option;
