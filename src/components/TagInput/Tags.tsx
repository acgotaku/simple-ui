import React, { useEffect, useCallback, useRef, useState } from 'react';
import { noop, deepClone } from '@/utils/misc';
import { ITagsProps } from './TagInput.types';
import Tag from './Tag';

const Tags: React.FC<ITagsProps> = ({
  disabled = false,
  draggable = false,
  value = [],
  onChange,
  removeTag = noop
}) => {
  const [data, setData] = useState(value);
  const copyData = useRef<string[]>([]);
  const dragItem = useRef<number>(0);
  const dragOverItem = useRef<number>(0);

  useEffect(() => {
    setData(value);
  }, [value]);

  const dragStartHandler = useCallback(
    (event: React.DragEvent<HTMLDivElement>, index: number) => {
      event.dataTransfer.effectAllowed = 'move';
      dragItem.current = index;
      copyData.current = deepClone(data);
    },
    [data]
  );

  const dragEnterHandler = useCallback((index: number) => {
    dragOverItem.current = index;
    const newData = deepClone(copyData.current);
    const dragData = newData[dragItem.current];
    newData.splice(dragItem.current, 1);
    newData.splice(dragOverItem.current, 0, dragData);
    setData(newData);
  }, []);

  const dragEndHandler = useCallback(() => {
    const newData = deepClone(value);
    const dragData = newData[dragItem.current];
    newData.splice(dragItem.current, 1);
    newData.splice(dragOverItem.current, 0, dragData);
    onChange?.(newData);
  }, [value, onChange]);

  return (
    <>
      {data.map((tag, index) => (
        <Tag
          key={index}
          index={index}
          disabled={disabled}
          onClose={() => removeTag(index)}
          draggable={draggable}
          dragStartHandler={dragStartHandler}
          dragEnterHandler={dragEnterHandler}
          dragEndHandler={dragEndHandler}
        >
          {tag}
        </Tag>
      ))}
    </>
  );
};

export default Tags;
