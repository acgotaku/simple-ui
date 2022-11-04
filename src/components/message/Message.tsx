import { useState, useImperativeHandle, forwardRef, useCallback } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { randomId } from '@/utils/random';
import styles from './message.module.css';
import Toast from './Toast';
import { IMessageRef, ToastState, ToastConfig } from './Message.types';

const Message = forwardRef<IMessageRef>((props, ref) => {
  const [toasts, setToasts] = useState<ToastState[]>([]);

  useImperativeHandle(ref, () => ({
    add,
    remove
  }));

  const add = useCallback((config: ToastConfig) => {
    setToasts(toasts => [...toasts, { ...config, toastId: randomId() }]);
  }, []);

  const remove = useCallback((toastId: string) => {
    setToasts(toasts => toasts.filter(toast => toast.toastId !== toastId));
  }, []);

  return (
    <TransitionGroup className={styles.message}>
      {toasts.map(toast => (
        <CSSTransition
          key={toast.toastId}
          timeout={300}
          classNames={{
            enter: styles['toast-enter'],
            enterActive: styles['toast-enter-active'],
            exit: styles['toast-exit'],
            exitActive: styles['toast-exit-active']
          }}
        >
          <Toast {...toast} remove={remove} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
});

Message.displayName = 'Message';

export default Message;
