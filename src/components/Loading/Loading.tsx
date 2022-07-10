import React from 'react';
import cls from 'clsx';
import styles from './loading.module.css';
import { ILoadingProps } from './Loading.types';

const Loading: React.FC<ILoadingProps> = ({ className = '' }) => {
  return <div className={cls(styles.loading, className)}></div>;
};

export default Loading;
