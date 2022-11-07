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
import { flushPromises } from '@/utils/misc';
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

  const recordToast = useCallback(() => {
    for (const [toastId, dom] of Object.entries(toastRefs.current)) {
      if (dom) {
        const rect = dom.getBoundingClientRect();
        prevRects.current[toastId] = rect;
      }
    }
  }, []);

  const flipToast = useCallback(async () => {
    for (const [toastId, dom] of Object.entries(toastRefs.current)) {
      if (dom) {
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
                easing: 'linear',
                fill: 'both'
              }
            );
          }
        }
      }
    }
  }, []);

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
    if (toasts.length === 0) {
      prevRects.current = {};
      toastRefs.current = {};
    }
  }, [toasts]);

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

  const onEnter = useCallback(async (node: HTMLElement) => {
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
  }, []);

  const onExit = useCallback(
    async (node: HTMLElement) => {
      await flushPromises();
      recordToast();
      node.getAnimations().forEach(animation => animation.finish());
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
          easing: 'ease',
          fill: 'both'
        }
      );
      await Promise.allSettled(
        node.getAnimations().map(animation => animation.finished)
      );
    },
    [recordToast]
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
