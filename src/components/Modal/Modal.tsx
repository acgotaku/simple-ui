import React, { MouseEvent } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useScrollLock } from '@/hooks/useScrollLock';
import { useWindowEvent } from '@/hooks/useWindowEvent';
import { useFocusTrap } from '@/hooks/useFocusTrap';
import { eventKey } from '@/constants/keyboard';
import { ReactComponent as Close } from '@/assets/icons/close.svg';
import { IModalProps } from './Modal.types';
import Portal from '../Portal';
import styles from './modal.module.css';

const TIMEOUT = 300;

const Modal: React.FC<IModalProps> = ({
  children,
  visible,
  closable = false,
  onClose,
  title
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
        <div
          className={styles.mask}
          ref={nodeRef}
          onClick={() => closable && handleClose()}
        >
          <div
            role="dialog"
            aria-modal="true"
            className={styles.modal}
            ref={focusTrapRef}
            onClick={stopPropagation}
          >
            <div className={styles.inner}>
              {title && (
                <div className={styles.header}>
                  <p className={styles.title}>{title}</p>
                  <button onClick={handleClose} className={styles.close}>
                    <Close className={styles.closeIcon} />
                  </button>
                </div>
              )}
              <div className={styles.body}>{children}</div>
            </div>
          </div>
        </div>
      </CSSTransition>
    </Portal>
  );
};

export default Modal;
