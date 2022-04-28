import { forwardRef } from 'react';
import cls from 'clsx';
import { useRandomId } from '@/hooks/useRandomId';
import styles from './checkbox.module.css';
import { ICheckboxProps } from './Checkbox.types';

const Checkbox = forwardRef<HTMLInputElement, ICheckboxProps>(
  ({ label, children, className = '', id, ...rest }: ICheckboxProps, ref) => {
    label = label || children;
    id = useRandomId(id);
    return (
      <div className={cls(styles.wrapper, className)}>
        <input
          {...rest}
          id={id}
          ref={ref}
          type="checkbox"
          className={styles.checkbox}
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

Checkbox.displayName = 'Checkbox';

export default Checkbox;
