import {
  useState,
  useImperativeHandle,
  forwardRef,
  useCallback,
  useRef,
  useEffect,
  createRef
} from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { randomId } from '@/utils/random';
import styles from './message.module.css';
import Toast from './Toast';
import { IMessageRef, ToastState, ToastConfig } from './Message.types';

const TIMEOUT = 300;

const Message = forwardRef<IMessageRef>((props, ref) => {
  const [toasts, setToasts] = useState<ToastState[]>([]);
  const prevRects = useRef<Record<string, DOMRect>>({});

  useImperativeHandle(ref, () => ({
    add,
    remove
  }));

  const add = useCallback((config: ToastConfig) => {
    setToasts(toasts => [
      ...toasts,
      { ...config, toastId: randomId(), nodeRef: createRef() }
    ]);
  }, []);

  const remove = useCallback((toastId: string) => {
    setToasts(toasts => toasts.filter(toast => toast.toastId !== toastId));
  }, []);

  const recordToast = useCallback(() => {
    toasts.map(toast => {
      const dom = toast.nodeRef?.current as HTMLElement;
      if (dom) {
        const key = toast.toastId;
        const rect = dom.getBoundingClientRect();
        prevRects.current[key] = rect;
      }
    });
  }, [toasts]);

  useEffect(() => {
    if (toasts.length === 0) {
      prevRects.current = {};
    }
  }, [toasts]);

  const flipToast = useCallback(() => {
    toasts.map(toast => {
      const dom = toast.nodeRef?.current as HTMLElement;
      if (dom) {
        const key = toast.toastId;
        const prevRect = prevRects.current[key];
        const rect = dom.getBoundingClientRect();
        if (prevRect) {
          const dy = prevRect.y - rect.y;
          const dx = prevRect.x - rect.x;
          dom.animate(
            [
              {
                transform: `translate(${dx}px, ${dy}px)`
              },
              { transform: 'translate(0, 0)' }
            ],
            {
              duration: 300,
              easing: 'linear',
              fill: 'both'
            }
          );
        }
        prevRects.current[key] = rect;
      }
    });
  }, [toasts]);

  const callbackFunction: MutationCallback = useCallback(
    mutations => {
      for (const mutation of mutations) {
        if (mutation.type === 'childList' && mutation.removedNodes.length > 0) {
          flipToast();
        }
      }
    },
    [flipToast]
  );
  useEffect(() => {
    const observer = new MutationObserver(callbackFunction);
    observer.observe(
      document.querySelector(`.${styles.message}`) as HTMLElement,
      {
        childList: true
      }
    );
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [callbackFunction]);

  return (
    <TransitionGroup className={styles.message}>
      {toasts.map(toast => (
        <CSSTransition
          key={toast.toastId}
          timeout={TIMEOUT}
          nodeRef={toast.nodeRef}
          classNames={{
            enter: styles.toastEnter,
            enterActive: styles.toastEnterActive,
            exit: styles.toastExit,
            exitActive: styles.toastExitActive
          }}
          onExit={recordToast}
        >
          <Toast {...toast} remove={remove} ref={toast.nodeRef} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
});

Message.displayName = 'Message';

export default Message;
