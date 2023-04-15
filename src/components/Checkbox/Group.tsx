import React, {
  useEffect,
  useMemo,
  useCallback,
  useState,
  useRef
} from 'react';
import cls from 'clsx';
import { noop, deepClone } from '@/utils/misc';
import styles from './checkbox.module.css';
import {
  ICheckboxGroupProps,
  CheckboxValueType,
  CheckboxOptionType
} from './Checkbox.types';
import { CheckboxContext } from './context';
import Checkbox from './Checkbox';

const CheckboxGroup: React.FC<ICheckboxGroupProps> = ({
  values = [],
  className = '',
  checkboxClassName = '',
  draggable = false,
  disabled = false,
  invalid = false,
  options = [],
  onChange = noop,
  children
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prevRects = useRef<Record<string, DOMRect>>({});
  const [sortedOptions, setSortedOptions] = useState(options);
  const copyOptions = useRef<CheckboxOptionType[]>(options);
  const dragItem = useRef<number>(0);
  const dragOverItem = useRef<number>(0);

  useEffect(() => {
    if (options.length) {
      setSortedOptions(options);
    }
  }, [options]);

  useEffect(() => {
    if (containerRef.current) {
      Array.from(containerRef.current.children).forEach(async node => {
        const dom = node as HTMLElement;
        const key = dom.dataset.id as string;
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
              easing: 'linear',
              fill: 'both'
            }
          );
          await Promise.allSettled(
            node.getAnimations().map(animation => animation.finished)
          );
          dom.style.pointerEvents = '';
        }
        prevRects.current[key] = rect;
      });
    }
  }, [sortedOptions]);

  const dragStartHandler = useCallback(
    (event: React.DragEvent<HTMLDivElement>, index: number) => {
      event.dataTransfer.effectAllowed = 'move';
      dragItem.current = index;
      copyOptions.current = deepClone(sortedOptions);
    },
    [sortedOptions]
  );

  const dragEnterHandler = useCallback((index: number) => {
    if (dragItem.current !== index && dragOverItem.current !== index) {
      dragOverItem.current = index;
      const newOptions = deepClone(copyOptions.current);
      const dragOption = newOptions[dragItem.current];
      newOptions.splice(dragItem.current, 1);
      newOptions.splice(dragOverItem.current, 0, dragOption);
      setSortedOptions(newOptions);
    }
  }, []);

  const dragEndHandler = useCallback(() => {
    // update values
    const newValues = [...values];
    const sortedValues = newValues.sort((a, b) => {
      const indexA = sortedOptions.findIndex(opt => opt.value === a);
      const indexB = sortedOptions.findIndex(opt => opt.value === b);
      return indexA - indexB;
    });
    onChange?.(sortedValues);
  }, [values, sortedOptions, onChange]);

  const onCheckboxChange = useCallback(
    (value: CheckboxValueType) => {
      const newValues = [...values];
      const optionIndex = newValues.indexOf(value);
      if (optionIndex === -1) {
        newValues.push(value);
      } else {
        newValues.splice(optionIndex, 1);
      }

      const sortedValues = newValues.sort((a, b) => {
        const indexA = sortedOptions.findIndex(opt => opt.value === a);
        const indexB = sortedOptions.findIndex(opt => opt.value === b);
        return indexA - indexB;
      });
      onChange?.(sortedValues);
    },
    [values, sortedOptions, onChange]
  );

  const context = useMemo(
    () => ({
      inGroup: true,
      values,
      updateState: onChange,
      disabled,
      invalid
    }),
    [values, onChange, disabled, invalid]
  );

  return (
    <div className={cls(styles.group, className)} ref={containerRef}>
      <CheckboxContext.Provider value={context}>
        {children
          ? children
          : sortedOptions.map((option, index) => (
              <Checkbox
                key={option.value.toString()}
                id={option.value.toString()}
                label={option.label}
                checked={values.includes(option.value)}
                disabled={disabled || option.disabled}
                invalid={invalid}
                className={checkboxClassName}
                onChange={() => onCheckboxChange(option.value)}
                draggable={draggable && !disabled}
                dragStartHandler={event => dragStartHandler(event, index)}
                dragEnterHandler={() => dragEnterHandler(index)}
                dragEndHandler={dragEndHandler}
              />
            ))}
      </CheckboxContext.Provider>
    </div>
  );
};

export default CheckboxGroup;
