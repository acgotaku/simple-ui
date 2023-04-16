import { useEffect, useRef, useState, useCallback } from 'react';
import { deepClone } from '@/utils/misc';

const TIMEOUT = 300;

interface DraggableOptions {
  dataSource: AnyArray;
  updateData: (data: AnyArray) => void;
  draggable?: boolean;
  containerRef?: React.RefObject<HTMLElement>;
  onDragStart?: () => void;
  onDragEnter?: () => void;
  onDragEnd?: () => void;
}

type UseDraggable = (options: DraggableOptions) => {
  sortedData: AnyArray;
  recordRect: () => void;
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
  draggable = false,
  containerRef,
  onDragStart,
  onDragEnter,
  onDragEnd
}) => {
  const [sortedData, setSortedData] = useState(dataSource);
  const prevRects = useRef<Record<string, DOMRect>>({});
  const copyData = useRef<AnyArray>(dataSource);
  const dragItem = useRef<number>(0);
  const dragOverItem = useRef<number>(0);

  useEffect(() => {
    setSortedData(dataSource);
  }, [dataSource]);

  const recordRect = useCallback(() => {
    if (draggable && containerRef?.current) {
      Array.from(containerRef.current.querySelectorAll('[data-id]')).forEach(
        async node => {
          const dom = node as HTMLElement;
          const key = dom.dataset.id as string;
          const rect = dom.getBoundingClientRect();
          if (key) {
            prevRects.current[key] = rect;
          }
        }
      );
    }
  }, [draggable, containerRef]);

  useEffect(() => {
    if (draggable && containerRef?.current) {
      Array.from(containerRef.current.querySelectorAll('[data-id]')).forEach(
        async node => {
          const dom = node as HTMLElement;
          const key = dom.dataset.id as string;
          const prevRect = prevRects.current[key];
          if (key) {
            const rect = dom.getBoundingClientRect();
            if (prevRect) {
              const dy = prevRect.y - rect.y;
              const dx = prevRect.x - rect.x;
              dom.style.pointerEvents = 'none';
              dom.animate(
                [
                  {
                    transform: `translate(${dx}px, ${dy}px)`
                  },
                  { transform: 'translate(0, 0)' }
                ],
                {
                  duration: TIMEOUT,
                  easing: 'linear'
                }
              );
              await Promise.allSettled(
                node.getAnimations().map(animation => animation.finished)
              );
              dom.style.pointerEvents = '';
            }
            prevRects.current[key] = rect;
          }
        }
      );
    }
  }, [draggable, sortedData, containerRef]);

  const dragStartHandler = useCallback(
    (event: React.DragEvent<HTMLElement>, index: number) => {
      event.dataTransfer.effectAllowed = 'move';
      dragItem.current = index;
      copyData.current = deepClone(sortedData);
      recordRect();
      onDragStart?.();
    },
    [sortedData, recordRect, onDragStart]
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
    recordRect,
    dragStartHandler,
    dragOverHandler,
    dragEnterHandler,
    dragEndHandler,
    dropHandler
  };
};
