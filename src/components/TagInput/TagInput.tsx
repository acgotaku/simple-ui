import React, { useCallback, useState, useRef } from 'react';
import cls from 'clsx';
import { ReactComponent as Clear } from '@/assets/icons/clear.svg';
import { useClickOutside } from '@/hooks/useClickOutside';
import { eventKey } from '@/constants/keyboard';
import styles from './taginput.module.css';
import { ITagInputProps } from './TagInput.types';
import Tags from './Tags';

const getSplitedArray = (
  originString: string,
  separator: string | string[]
): string[] => {
  let splitedValue: string[] = [];
  if (Array.isArray(separator)) {
    const tempSep = separator.pop() as string;
    let tempString = originString;
    separator.forEach(sep => {
      tempString = tempString.split(sep).join(tempSep);
    });
    splitedValue = tempString.split(tempSep);
  } else {
    splitedValue = originString.split(separator);
  }
  // remove white space character value.replace(/\s/g, '')
  return splitedValue.map(value => value.trim());
};

const TagInput: React.FC<ITagInputProps> = ({
  className = '',
  draggable = false,
  clearable = false,
  disabled = false,
  value = [],
  separator = ',',
  onChange
}) => {
  const [showDrag, setShowDrag] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const removeTag = useCallback(
    (index: number) => {
      const newValue = [...value];
      newValue.splice(index, 1);
      onChange?.(newValue);
    },
    [value, onChange]
  );

  useClickOutside(() => setShowDrag(false), [wrapperRef.current]);

  const clickHandler = useCallback(() => {
    if (draggable) {
      setShowDrag(true);
    }
  }, [draggable]);

  const keyDownHandler = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      const inputValue = event.currentTarget.value;
      if (event.key === eventKey.Enter) {
        if (inputValue) {
          const splitedValue = getSplitedArray(inputValue, separator);
          const newValue = [...value, ...splitedValue];
          onChange?.(newValue);
          event.currentTarget.value = '';
        }
      } else if (event.key === eventKey.Backspace) {
        if (inputValue === '' && value.length > 0) {
          removeTag(value.length - 1);
        }
      }
    },
    [value, separator, onChange, removeTag]
  );

  const clearHandler = useCallback(() => {
    onChange?.([]);
  }, [onChange]);

  return (
    <div
      className={cls(
        styles.taginput,
        {
          [styles.disabled]: disabled
        },
        className
      )}
      onClick={clickHandler}
      ref={wrapperRef}
    >
      <div className={styles.inner} ref={containerRef}>
        <Tags
          containerRef={containerRef}
          disabled={disabled}
          draggable={showDrag}
          value={value}
          onChange={onChange}
          removeTag={removeTag}
        />
        {!disabled && (
          <div className={styles.inputWrapper}>
            <input className={styles.input} onKeyDown={keyDownHandler} />
          </div>
        )}
      </div>
      {clearable && (
        <button type="button" onClick={clearHandler} className={styles.clear}>
          <Clear className={styles.clearIcon} />
        </button>
      )}
    </div>
  );
};

export default TagInput;
