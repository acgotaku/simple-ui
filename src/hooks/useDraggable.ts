import { useEffect, useRef, useState, useCallback } from 'react';
import { looseEqual, deepClone } from '@/utils/misc';

const TIMEOUT = 300;

interface Rect {
  x: number;
  y: number;
}

interface DraggableOptions {
  dataSource: AnyArray;
  updateData?: (data: AnyArray) => void;
  draggable?: boolean;
  containerRef?: React.RefObject<HTMLElement>;
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
  draggable = false,
  containerRef
}) => {
  const [sortedData, setSortedData] = useState(dataSource);
  const prevRects = useRef<Record<string, Rect>>({});
  const copyData = useRef<AnyArray>(dataSource);
  const dragItem = useRef<number>(0);
  const dragOverItem = useRef<number>(0);

  useEffect(() => {
    if (!looseEqual(dataSource, sortedData)) {
      setSortedData(dataSource);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataSource]);

  useEffect(() => {
    if (draggable && containerRef?.current) {
      Array.from(containerRef.current.querySelectorAll('[data-id]')).forEach(
        async node => {
          const dom = node as HTMLElement;
          const key = dom.dataset.id as string;
          const prevRect = prevRects.current[key];
          if (key) {
            const rect = {
              x: dom.offsetLeft,
              y: dom.offsetTop
            };
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
      // set dataTransfer enable mobile drag
      event.dataTransfer.setData('text/plain', index.toString());
      dragItem.current = index;
      copyData.current = deepClone(sortedData);
    },
    [sortedData]
  );
  const dragEnterHandler = useCallback((index: number) => {
    if (dragOverItem.current !== index) {
      dragOverItem.current = index;
      const newData = deepClone(copyData.current);
      const dragData = newData[dragItem.current];
      newData.splice(dragItem.current, 1);
      newData.splice(dragOverItem.current, 0, dragData);
      setSortedData(newData);
    }
  }, []);
  const dragEndHandler = useCallback(() => {
    updateData?.(sortedData);
  }, [sortedData, updateData]);
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
