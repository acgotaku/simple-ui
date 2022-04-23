import { useState, useImperativeHandle, forwardRef } from 'react';
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

  const add = (config: ToastConfig) => {
    setToasts(toasts => [...toasts, { ...config, key: randomId() }]);
  };
  const remove = (key: string) => {
    setToasts(toasts.filter(toast => toast.key !== key));
  };

  return (
    <TransitionGroup className={styles.message}>
      {toasts.map(toast => (
        <CSSTransition
          key={toast.key}
          timeout={300}
          classNames={{
            enter: styles['toast-enter'],
            enterActive: styles['toast-enter-active'],
            exit: styles['toast-exit'],
            exitActive: styles['toast-exit-active']
          }}
        >
          <Toast {...toast} key={toast.key} onClose={() => remove(toast.key)} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
});

Message.displayName = 'Message';

export default Message;
