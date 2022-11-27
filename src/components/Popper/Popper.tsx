import React, { useLayoutEffect, useRef, useCallback } from 'react';
import {
  useFloating,
  autoUpdate,
  offset,
  shift,
  flip,
  size,
  arrow,
  hide,
  isElement
} from '@/floating';
import { CSSTransition } from 'react-transition-group';
import cls from 'clsx';
import styles from './popper.module.css';
import { IPopperProps } from './Popper.types';
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
  const arrowRef = useRef<HTMLDivElement | null>(null);
  const {
    x,
    y,
    refs,
    reference,
    floating,
    strategy,
    placement: renderPlacement,
    pluginData
  } = useFloating({
    whileElementsMounted: autoUpdate,
    placement: placement,
    plugin: [
      offset(withArrow ? 8 : 0),
      shift(),
      flip(),
      size({
        apply({ availableWidth, availableHeight, elements, rects }) {
          Object.assign(elements.floating.style, {
            maxWidth:
              rects.floating.width >= availableWidth
                ? `${availableWidth}px`
                : 'none',
            maxHeight:
              rects.floating.height >= availableHeight
                ? `${availableHeight}px`
                : 'none',
            width: sameWidth ? `${rects.reference.width}px` : 'max-content'
          });
        }
      }),
      arrow({
        element: arrowRef
      }),
      hide()
    ]
  });

  useLayoutEffect(() => {
    reference(referenceElement);
  }, [referenceElement, reference]);

  useClickOutside(onClose, [
    ...(isElement(referenceElement) ? [referenceElement] : []),
    refs.floating.current
  ]);
  const nodeRef = useRef<HTMLDivElement | null>(null);
  const stableRef = useCallback(
    (ref: HTMLDivElement | null) => {
      floating(ref);
      nodeRef.current = ref;
    },
    [floating, nodeRef]
  );

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
          ref={stableRef}
          role="dialog"
          className={styles.popper}
          style={{
            position: strategy,
            top: y ?? '',
            left: x ?? ''
          }}
          data-popper-placement={renderPlacement}
          data-popper-reference-hidden={pluginData.hide?.referenceHidden}
        >
          {withArrow && (
            <div
              className={styles.arrow}
              ref={arrowRef}
              style={{
                top: pluginData.arrow?.y ?? '',
                left: pluginData.arrow?.x ?? ''
              }}
            />
          )}
          <div className={cls(styles.popperInner, className)}>{children}</div>
        </div>
      </PopperContainer>
    </CSSTransition>
  );
};

export default Popper;
