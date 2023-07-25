import React, { MouseEvent } from 'react';
import { CSSTransition } from 'react-transition-group';
import cls from 'clsx';
import { useScrollLock } from '@/hooks/useScrollLock';
import { useWindowEvent } from '@/hooks/useWindowEvent';
import { useFocusTrap } from '@/hooks/useFocusTrap';
import { eventKey } from '@/constants/keyboard';
import styles from './drawer.module.css';
import { IDrawerProps } from './Drawer.types';
import Portal from '../Portal';

const TIMEOUT = 300;

const Drawer: React.FC<IDrawerProps> = ({
  children,
  visible,
  onClose,
  position = 'left'
}) => {
  const nodeRef = React.useRef(null);
  const stopPropagation = (event: MouseEvent) => {
    event.stopPropagation();
  };

  const handleClose = () => typeof onClose === 'function' && onClose(false);

  useScrollLock(visible);

  useWindowEvent('keydown', event => {
    if (event.key === eventKey.Escape && visible) {
      handleClose();
    }
  });

  const focusTrapRef = useFocusTrap(visible);

  return (
    <Portal>
      <CSSTransition
        nodeRef={nodeRef}
        in={visible}
        unmountOnExit
        timeout={TIMEOUT}
        classNames={{
          enter: styles.maskEnter,
          enterActive: styles.maskEnterActive,
          exit: styles.maskExit,
          exitActive: styles.maskExitActive
        }}
      >
        <div className={styles.mask} ref={nodeRef} onClick={handleClose}>
          <div
            role="dialog"
            aria-modal="true"
            className={cls(styles.drawer, styles[position])}
            ref={focusTrapRef}
            onClick={stopPropagation}
          >
            {children}
          </div>
        </div>
      </CSSTransition>
    </Portal>
  );
};

export default Drawer;
