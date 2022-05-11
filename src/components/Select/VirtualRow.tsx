import React from 'react';

import { IVirtualRowProps } from './Select.types';

const VirtualRow = ({ index, data, style }: IVirtualRowProps) => {
  const children = data[index];
  if (React.isValidElement(children)) {
    return React.cloneElement(children, { style });
  } else {
    return null;
  }
};

export default VirtualRow;
