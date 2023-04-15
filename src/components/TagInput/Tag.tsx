import React, { useCallback, useMemo } from 'react';
import cls from 'clsx';
import { useRandomId } from '@/hooks/useRandomId';
import { ReactComponent as Close } from '@/assets/icons/close.svg';
import { ReactComponent as Drag } from '@/assets/icons/dots-six-vertical.svg';
import styles from './taginput.module.css';
import { ITagProps } from './TagInput.types';

const Tag: React.FC<ITagProps> = ({
  disabled = false,
  draggable = false,
  children,
  id,
  onClose,
  dragStartHandler,
  dragOverHandler,
  dragEnterHandler,
  dragEndHandler,
  dropHandler
}) => {
  id = useRandomId(id);
  const closeHandler = useCallback(() => {
    onClose?.();
  }, [onClose]);

  const dragProps = useMemo(() => {
    if (draggable) {
      return {
        draggable,
        onDragStart: dragStartHandler,
        onDragOver: dragOverHandler,
        onDragEnter: dragEnterHandler,
        onDragEnd: dragEndHandler,
        onDrop: dropHandler
      };
    }
  }, [
    draggable,
    dragStartHandler,
    dragOverHandler,
    dragEnterHandler,
    dragEndHandler,
    dropHandler
  ]);

  return (
    <div
      className={cls(styles.tag, {
        [styles.disabled]: disabled
      })}
      data-id={id}
      {...dragProps}
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
