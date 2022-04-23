import React from 'react';
import { createPortal } from 'react-dom';

interface IPortalProps {
  children: React.ReactNode;
  getContainer?: () => HTMLElement;
}

const Portal: React.FC<IPortalProps> = ({ children, getContainer }) => {
  const container = getContainer ? getContainer() : document.body;
  return createPortal(children, container);
};

export default Portal;
