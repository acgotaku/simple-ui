import React, { memo, useCallback } from 'react';
import cls from 'clsx';
import { ReactComponent as Close } from '@/assets/icons/close.svg';
import styles from './select.module.css';
import { ITagProps } from './Select.types';

const Tag: React.FC<ITagProps> = ({ disabled = false, children, onClose }) => {
  const closeHandler = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      onClose?.();
    },
    [onClose]
  );

  return (
    <div
      className={cls(styles.tag, {
        [styles.disabled]: disabled
      })}
    >
      <span className={styles.tagText}>{children}</span>
      {!disabled && (
        <button
          type="button"
          className={styles.tagClose}
          onClick={closeHandler}
        >
          <Close className={styles.tagIcon} />
        </button>
      )}
    </div>
  );
};

export default memo(Tag);
