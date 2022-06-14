import React from 'react';
import cls from 'clsx';
import styles from './skeleton.module.css';
import { ISkeletonProps } from './Skeleton.types';

const Skeleton: React.FC<ISkeletonProps> = ({
  animate = true,
  className = ''
}) => {
  return (
    <div
      className={cls(
        styles.skeleton,
        {
          [styles.animate]: animate
        },
        className
      )}
    ></div>
  );
};

export default Skeleton;
