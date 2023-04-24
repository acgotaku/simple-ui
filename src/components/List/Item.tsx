import React, { useMemo } from 'react';
import cls from 'clsx';
import { useRandomId } from '@/hooks/useRandomId';
import { IListItemProps } from './List.types';
import styles from './list.module.css';

const Item: React.FC<IListItemProps> = ({
  className,
  draggable = false,
  id,
  children,
  dragStartHandler,
  dragOverHandler,
  dragEnterHandler,
  dragEndHandler,
  dropHandler
}) => {
  id = useRandomId(id);

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
    <li className={cls(styles.item, className)} data-id={id} {...dragProps}>
      {children}
    </li>
  );
};

export default Item;
