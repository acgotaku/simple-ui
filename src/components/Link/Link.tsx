import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import cls from 'clsx';
import styles from './link.module.css';
import { ILinkProps } from './Link.types';

function isExternal(href: string) {
  return /^(https?:|mailto:|tel:)/.test(href);
}

const Link: React.FC<ILinkProps> = ({
  children,
  href = '',
  to = '',
  className = '',
  ...rest
}) => {
  const externalProps = React.useMemo(() => {
    if (isExternal(href)) {
      return {
        target: '_blank',
        rel: 'noopener noreferrer'
      };
    } else {
      return {};
    }
  }, [href]);

  if (to) {
    return (
      <NavLink to={to} className={cls(styles.link, className)}>
        {children}
      </NavLink>
    );
  } else if (href) {
    return (
      <a
        href={href}
        className={cls(styles.link, className)}
        {...externalProps}
        {...rest}
      >
        {children}
      </a>
    );
  } else {
    return <></>;
  }
};

export default memo(Link);
