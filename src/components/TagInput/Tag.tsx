import React, { useCallback } from 'react';
import cls from 'clsx';
import { noop } from '@/utils/misc';
import { ReactComponent as Close } from '@/assets/icons/close.svg';
import { ReactComponent as Drag } from '@/assets/icons/dots-six-vertical.svg';
import styles from './taginput.module.css';
import { ITagProps } from './TagInput.types';

const Tag: React.FC<ITagProps> = ({
  disabled = false,
  draggable = false,
  children,
  index,
  onClose,
  dragStartHandler = noop,
  dragEnterHandler = noop,
  dragEndHandler = noop
}) => {
  const closeHandler = useCallback(() => {
    onClose?.();
  }, [onClose]);

  const dragOverHandler = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.dataTransfer.dropEffect = 'move';
      return false;
    },
    []
  );

  const dropHandler = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.stopPropagation();
    event.preventDefault();
    return false;
  }, []);

  return (
    <div
      className={cls(styles.tag, {
        [styles.disabled]: disabled
      })}
      draggable={draggable}
      onDragStart={event => dragStartHandler(event, index)}
      onDragOver={dragOverHandler}
      onDragEnter={() => dragEnterHandler(index)}
      onDragEnd={dragEndHandler}
      onDrop={dropHandler}
    >
      {draggable && (
        <button type="button" className={styles.drag}>
          <Drag className={styles.dragIcon} />
        </button>
      )}
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

export default Tag;
