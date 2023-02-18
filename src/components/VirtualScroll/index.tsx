import React, { memo, useMemo, useRef } from 'react';
import { useScrollAware } from '@/hooks/useScrollAware';

export interface IVirtualScrollProps {
  itemCount: number;
  height: number;
  childHeight: number;
  itemData: Array<React.ReactNode>;
}

const VirtualScroll: React.FC<IVirtualScrollProps> = ({
  itemCount,
  height,
  childHeight,
  itemData
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const scrollTop = useScrollAware(wrapperRef);
  const totalHeight = useMemo(
    () => childHeight * itemCount,
    [childHeight, itemCount]
  );
  const startIndex = useMemo(
    () => Math.floor(scrollTop / childHeight),
    [scrollTop, childHeight]
  );
  const visibleItemCount = useMemo(
    () => Math.ceil(height / childHeight),
    [height, childHeight]
  );
  const offsetY = useMemo(
    () => startIndex * childHeight,
    [childHeight, startIndex]
  );
  const visibleItemData = useMemo(() => {
    return itemData.slice(startIndex, startIndex + visibleItemCount);
  }, [itemData, startIndex, visibleItemCount]);

  return (
    <div
      style={{
        height,
        overflow: 'auto'
      }}
      ref={wrapperRef}
    >
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          willChange: 'transform',
          height: totalHeight
        }}
      >
        <div
          style={{
            willChange: 'transform',
            transform: `translate3d(0, ${offsetY}px, 0)`
          }}
        >
          {visibleItemData}
        </div>
      </div>
    </div>
  );
};

export default memo(VirtualScroll);
