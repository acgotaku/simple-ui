import { forwardRef, useMemo, useCallback } from 'react';
import cls from 'clsx';
import { useRandomId } from '@/hooks/useRandomId';
import { noop } from '@/utils/misc';
import styles from './checkbox.module.css';
import { useCheckboxContext } from './context';
import { ICheckboxProps } from './Checkbox.types';

const Checkbox = forwardRef<HTMLInputElement, ICheckboxProps>(
  (
    {
      label,
      value: checkboxValue,
      children,
      className = '',
      invalid = false,
      draggable = false,
      dragStartHandler = noop,
      dragEnterHandler = noop,
      dragEndHandler = noop,
      id,
      onChange,
      ...rest
    }: ICheckboxProps,
    ref
  ) => {
    label = label || children;
    id = useRandomId(id);

    const { inGroup, values, updateState } = useCheckboxContext();

    const checkboxProps = useMemo(() => {
      if (inGroup && checkboxValue) {
        return {
          ...rest,
          checked: values.includes(checkboxValue)
        };
      } else {
        return rest;
      }
    }, [inGroup, rest, checkboxValue, values]);

    const dragOverHandler = useCallback(
      (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
        return false;
      },
      []
    );

    const dropHandler = useCallback(
      (event: React.DragEvent<HTMLDivElement>) => {
        event.stopPropagation();
        event.preventDefault();
        return false;
      },
      []
    );

    const changeHandler = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        if (inGroup && checkboxValue) {
          const newValues = [...values];
          const optionIndex = newValues.indexOf(checkboxValue);
          if (optionIndex === -1) {
            newValues.push(checkboxValue);
          } else {
            newValues.splice(optionIndex, 1);
          }
          updateState?.(newValues);
        }
        onChange?.(event);
      },
      [onChange, inGroup, checkboxValue, updateState, values]
    );

    return (
      <div
        className={cls(
          styles.wrapper,
          {
            [styles.invalid]: invalid
          },
          className
        )}
        data-id={id}
        draggable={draggable}
        onDragStart={dragStartHandler}
        onDragOver={dragOverHandler}
        onDragEnter={dragEnterHandler}
        onDragEnd={dragEndHandler}
        onDrop={dropHandler}
      >
        <input
          {...checkboxProps}
          onChange={changeHandler}
          id={id}
          ref={ref}
          type="checkbox"
          className={styles.checkbox}
        />
        {label && (
          <label
            htmlFor={id}
            className={cls(styles.label, {
              [styles.drag]: draggable
            })}
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
