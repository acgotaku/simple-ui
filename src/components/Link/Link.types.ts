import React from 'react';

export interface ILinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  to?: string;
}
