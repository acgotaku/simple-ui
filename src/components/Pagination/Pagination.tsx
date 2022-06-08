import React, { useCallback, useMemo } from 'react';
import cls from 'clsx';
import { clamp } from '@/utils/misc';
import { ReactComponent as Prev } from '@/assets/icons/caret-left.svg';
import { ReactComponent as Next } from '@/assets/icons/caret-right.svg';
import styles from './pagination.module.css';
import { IPaginationProps } from './Pagination.types';
import { INDEX_COUNTS, STEP } from './Pagination.constants';

const Pagination: React.FC<IPaginationProps> = ({
  currentPage,
  total,
  onChange,
  className = ''
}) => {
  const pages = useMemo(() => {
    const indexCounts = Math.min(INDEX_COUNTS, total);
    const offset = clamp(currentPage - STEP, 1, total - indexCounts + 1);
    return Array.from(Array(indexCounts).keys()).map(index => index + offset);
  }, [currentPage, total]);

  const showNavButton = useMemo(() => total > INDEX_COUNTS, [total]);

  const canPrev = useMemo(() => currentPage > 1, [currentPage]);
  const canNext = useMemo(() => currentPage < total, [currentPage, total]);

  const navPrev = useCallback(() => {
    const prev = Math.max(1, pages[0] - 1);
    onChange(prev);
  }, [pages, onChange]);
  const navNext = useCallback(() => {
    const next = Math.min(total, pages[pages.length - 1] + 1);
    onChange(next);
  }, [total, pages, onChange]);

  const handlePageButtonClick = useCallback(
    (page: number) => {
      onChange(page);
    },
    [onChange]
  );

  return (
    <div className={cls(styles.pagination, className)}>
      {showNavButton && (
        <button
          type="button"
          disabled={!canPrev}
          className={styles.button}
          onClick={navPrev}
        >
          <Prev />
        </button>
      )}
      {pages.map(page => (
        <button
          type="button"
          key={page}
          className={cls(styles.button, {
            [styles.current]: page === currentPage
          })}
          onClick={() => handlePageButtonClick(page)}
        >
          <span>{page}</span>
        </button>
      ))}
      {showNavButton && (
        <button
          type="button"
          disabled={!canNext}
          className={styles.button}
          onClick={navNext}
        >
          <Next />
        </button>
      )}
    </div>
  );
};

export default Pagination;
