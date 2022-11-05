import React, { useCallback } from 'react';
import cls from 'clsx';
import { STEP_STATUS } from './Steps.constants';
import styles from './steps.module.css';
import { IStepsProps } from './Steps.types';

const Steps: React.FC<IStepsProps> = ({
  current = 0,
  children,
  className = ''
}) => {
  const stepStatus = useCallback(
    (index: number) => {
      if (current < index) {
        return STEP_STATUS.WAIT;
      } else if (current === index) {
        return STEP_STATUS.PROCESS;
      } else {
        return STEP_STATUS.FINISH;
      }
    },
    [current]
  );

  return (
    <div className={cls(styles.steps, className)}>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement, {
            index,
            status: stepStatus(index)
          });
        }
      })}
    </div>
  );
};

export default Steps;
