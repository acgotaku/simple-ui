import React from 'react';
import Portal from '../Portal';
import { IPopperContainerProps } from './Popper.types';

const PopperContainer: React.FC<IPopperContainerProps> = ({
  children,
  withinPortal
}) => {
  if (withinPortal) {
    return <Portal>{children}</Portal>;
  } else {
    return <>{children}</>;
  }
};

export default PopperContainer;
