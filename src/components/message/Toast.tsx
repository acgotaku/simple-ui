import React, {
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useMemo
} from 'react';
import styles from './message.module.css';
import { IToastProps } from './Message.types';
import { ReactComponent as Info } from '@/assets/icons/info.svg';
import { ReactComponent as Success } from '@/assets/icons/success.svg';
import { ReactComponent as Error } from '@/assets/icons/error.svg';
import { ReactComponent as Warning } from '@/assets/icons/warning.svg';
import { ReactComponent as Loading } from '@/assets/icons/loading.svg';
import { ReactComponent as Close } from '@/assets/icons/close.svg';

const typeToIcon = {
  info: Info,
  success: Success,
  error: Error,
  warning: Warning,
  loading: Loading
};

const Toast = forwardRef<HTMLDivElement, IToastProps>(
  ({ content, type, duration, remove, toastId }, ref) => {
    const IconComponent = typeToIcon[type];
    const onClose = useCallback(() => {
      remove(toastId);
    }, [remove, toastId]);

    useEffect(() => {
      let timer: ReturnType<typeof setTimeout> | null = null;

      if (duration) {
        timer = setTimeout(onClose, duration * 1000);
      }

      return () => {
        if (timer) clearTimeout(timer);
      };
    }, [duration, onClose]);

    const canClose = useMemo(() => duration === 0 || duration > 5, [duration]);

    return (
      <div role="alert" className={styles.toast} ref={ref}>
        {IconComponent && (
          <div className={styles.iconWrapper}>
            <IconComponent className={styles.icon} />
          </div>
        )}
        <span className={styles.text}>{content}</span>
        {canClose && (
          <button onClick={onClose} className={styles.close}>
            <Close className={styles.closeIcon} />
          </button>
        )}
      </div>
    );
  }
);

Toast.displayName = 'Toast';

export default memo(Toast);
