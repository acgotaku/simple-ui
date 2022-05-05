import React, { useMemo, useState, useRef } from 'react';
import { usePopper } from 'react-popper';
import { CSSTransition } from 'react-transition-group';
import cls from 'clsx';
import styles from './popper.module.css';
import { IPopperProps, ExtendedModifiers } from './Popper.types';
import PopperContainer from './PopperContainer';
import { useClickOutside } from '@/hooks/useClickOutside';

const Popper: React.FC<IPopperProps> = ({
  children,
  referenceElement,
  visible,
  onClose,
  placement,
  withArrow,
  withinPortal,
  sameWidth,
  className = ''
}) => {
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );

  const [x, y] = useMemo(() => {
    if (withArrow) {
      return [0, 8];
    } else {
      return [0, 0];
    }
  }, [withArrow]);

  const modifiers: ExtendedModifiers = useMemo(
    () => [
      {
        name: 'offset',
        options: {
          offset: [x, y]
        }
      },
      {
        name: 'sameWidth',
        enabled: sameWidth,
        fn: ({ state }) => {
          state.styles.popper.width = `${state.rects.reference.width}px`;
        },
        effect: ({ state }) => {
          state.elements.popper.style.width = `${
            (state.elements.reference as HTMLDivElement).offsetWidth
          }px`;
        },
        phase: 'beforeWrite',
        requires: ['computeStyles']
      }
    ],
    [x, y, sameWidth]
  );

  const { styles: popperStyles, attributes } = usePopper(
    referenceElement,
    popperElement,
    {
      modifiers,
      placement: placement
    }
  );

  useClickOutside(onClose, [referenceElement, popperElement]);
  const nodeRef = useRef<HTMLDivElement | null>(null);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={visible}
      unmountOnExit
      timeout={300}
      classNames={{
        enter: styles['popper-enter'],
        enterActive: styles['popper-enter-active'],
        exit: styles['popper-exit'],
        exitActive: styles['popper-exit-active']
      }}
    >
      <PopperContainer withinPortal={withinPortal}>
        <div
          ref={ref => {
            setPopperElement(ref);
            nodeRef.current = ref;
          }}
          role="dialog"
          className={styles.popper}
          style={popperStyles.popper}
          {...attributes.popper}
        >
          {withArrow && <div className={styles.arrow} />}
          <div className={cls(styles.popperInner, className)}>{children}</div>
        </div>
      </PopperContainer>
    </CSSTransition>
  );
};

export default Popper;
