import { useEffect, useRef, useState, useCallback } from 'react';
import { deepClone } from '@/utils/misc';

interface DraggableOptions {
  dataSource: AnyArray;
  updateData: (data: AnyArray) => void;
  onDragStart?: () => void;
  onDragEnter?: () => void;
  onDragEnd?: () => void;
}

type UseDraggable = (options: DraggableOptions) => {
  sortedData: AnyArray;
  dragStartHandler: (
    event: React.DragEvent<HTMLElement>,
    index: number
  ) => void;
  dragEnterHandler: (index: number) => void;
  dragEndHandler: () => void;
  dragOverHandler: (event: React.DragEvent<HTMLElement>) => void;
  dropHandler: (event: React.DragEvent<HTMLElement>) => void;
};

export const useDraggable: UseDraggable = ({
  dataSource,
  updateData,
  onDragStart,
  onDragEnter,
  onDragEnd
}) => {
  const [sortedData, setSortedData] = useState(dataSource);
  const copyData = useRef<AnyArray>(dataSource);
  const dragItem = useRef<number>(0);
  const dragOverItem = useRef<number>(0);

  useEffect(() => {
    setSortedData(dataSource);
  }, [dataSource]);

  const dragStartHandler = useCallback(
    (event: React.DragEvent<HTMLElement>, index: number) => {
      event.dataTransfer.effectAllowed = 'move';
      dragItem.current = index;
      copyData.current = deepClone(sortedData);
      onDragStart?.();
    },
    [sortedData, onDragStart]
  );
  const dragEnterHandler = useCallback(
    (index: number) => {
      if (dragItem.current !== index && dragOverItem.current !== index) {
        dragOverItem.current = index;
        const newData = deepClone(copyData.current);
        const dragData = newData[dragItem.current];
        newData.splice(dragItem.current, 1);
        newData.splice(dragOverItem.current, 0, dragData);
        setSortedData(newData);
        onDragEnter?.();
      }
    },
    [onDragEnter]
  );
  const dragEndHandler = useCallback(() => {
    updateData(sortedData);
    onDragEnd?.();
  }, [sortedData, updateData, onDragEnd]);
  const dragOverHandler = useCallback((event: React.DragEvent<HTMLElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
    return false;
  }, []);
  const dropHandler = useCallback((event: React.DragEvent<HTMLElement>) => {
    event.stopPropagation();
    event.preventDefault();
    return false;
  }, []);

  return {
    sortedData,
    dragStartHandler,
    dragOverHandler,
    dragEnterHandler,
    dragEndHandler,
    dropHandler
  };
};
