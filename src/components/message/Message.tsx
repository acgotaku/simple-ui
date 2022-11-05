import {
  useState,
  useImperativeHandle,
  forwardRef,
  useCallback,
  useRef,
  useEffect
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
  const toastRefs = useRef<Record<string, HTMLDivElement | null>>({});

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

  useEffect(() => {
    if (toasts.length === 0) {
      prevRects.current = {};
      toastRefs.current = {};
    }
  }, [toasts]);

  const flipToast = useCallback(async () => {
    for (const [toastId, dom] of Object.entries(toastRefs.current)) {
      if (dom) {
        await Promise.allSettled(
          dom.getAnimations().map(animation => animation.finished)
        );
        const rect = dom.getBoundingClientRect();
        const prevRect = prevRects.current[toastId];
        if (prevRect) {
          const dy = prevRect.y - rect.y;
          if (dy) {
            dom.animate(
              [
                {
                  transform: `translate(0, ${dy}px)`
                },
                { transform: 'translate(0, 0)' }
              ],
              {
                duration: TIMEOUT,
                easing: 'ease'
              }
            );
          }
        }

        prevRects.current[toastId] = rect;
      }
    }
  }, []);

  const onEnter = useCallback(
    async (node: HTMLElement) => {
      node.animate(
        [
          {
            opacity: '0',
            transform: 'translate(0, 24px)'
          },
          { opacity: '1', transform: 'translate(0, 0)' }
        ],
        {
          duration: TIMEOUT,
          easing: 'ease'
        }
      );
      await Promise.allSettled(
        node.getAnimations().map(animation => animation.finished)
      );
      flipToast();
    },
    [flipToast]
  );

  const onExit = useCallback(
    async (node: HTMLElement) => {
      node.animate(
        [
          {
            opacity: '1',
            transform: 'translate(0, 0)'
          },
          { opacity: '0', transform: 'translate(0, -24px)' }
        ],
        {
          duration: TIMEOUT,
          easing: 'ease'
        }
      );
      await Promise.allSettled(
        node.getAnimations().map(animation => animation.finished)
      );
      flipToast();
    },
    [flipToast]
  );

  return (
    <TransitionGroup className={styles.message}>
      {toasts.map(toast => (
        <CSSTransition
          key={toast.toastId}
          timeout={TIMEOUT}
          onEnter={onEnter}
          onExit={onExit}
        >
          <Toast
            {...toast}
            remove={remove}
            ref={ele => (toastRefs.current[toast.toastId] = ele)}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
});

Message.displayName = 'Message';

export default Message;
