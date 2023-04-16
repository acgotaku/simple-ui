import React, { useCallback } from 'react';
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
  const {
    sortedData,
    recordRect,
    dragStartHandler,
    dragOverHandler,
    dragEnterHandler,
    dragEndHandler,
    dropHandler
  } = useDraggable({
    dataSource: value,
    updateData: onChange,
    draggable,
    containerRef
  });

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
