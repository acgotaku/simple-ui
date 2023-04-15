import React, { useEffect, useCallback, useRef } from 'react';
import { useDraggable } from '@/hooks/useDraggable';
import { noop } from '@/utils/misc';
import { ITagsProps } from './TagInput.types';
import Tag from './Tag';

const Tags: React.FC<ITagsProps> = ({
  containerRef,
  disabled = false,
  draggable = false,
  value = [],
  onChange = noop,
  removeTag = noop
}) => {
  const prevRects = useRef<Record<string, DOMRect>>({});
  const recordRect = useCallback(() => {
    if (containerRef.current) {
      Array.from(containerRef.current.children).forEach(async node => {
        const dom = node as HTMLElement;
        const key = dom.dataset.id as string;
        if (key) {
          const rect = dom.getBoundingClientRect();
          prevRects.current[key] = rect;
        }
      });
    }
  }, [containerRef]);

  const {
    sortedData,
    dragStartHandler,
    dragOverHandler,
    dragEnterHandler,
    dragEndHandler,
    dropHandler
  } = useDraggable({
    dataSource: value,
    updateData: onChange,
    onDragStart: recordRect
  });

  useEffect(() => {
    if (containerRef.current) {
      Array.from(containerRef.current.children).forEach(async node => {
        const dom = node as HTMLElement;
        const key = dom.dataset.id as string;
        if (key) {
          const prevRect = prevRects.current[key];
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
                duration: 300,
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
      });
    }
  }, [sortedData, containerRef]);

  const removeHandler = useCallback(
    (index: number) => {
      recordRect();
      removeTag(index);
    },
    [removeTag, recordRect]
  );

  return (
    <>
      {sortedData.map((tag, index) => (
        <Tag
          key={tag}
          disabled={disabled}
          onClose={() => removeHandler(index)}
          draggable={draggable}
          dragStartHandler={event => dragStartHandler(event, index)}
          dragEnterHandler={() => dragEnterHandler(index)}
          dragEndHandler={dragEndHandler}
          dragOverHandler={dragOverHandler}
          dropHandler={dropHandler}
        >
          {tag}
        </Tag>
      ))}
    </>
  );
};

export default Tags;
