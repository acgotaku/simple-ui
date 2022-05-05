import React, { useCallback, useMemo, useState } from 'react';
import { useWindowEvent } from '@/hooks/useWindowEvent';
import { eventKey } from '@/constants/keyboard';
import styles from './popover.module.css';
import {
  IPopoverProps,
  IBasicPopoverProps,
  IAdvancedPopoverProps
} from './Popover.types';
import Popper from '../Popper';

const isAdvancedProps = (
  props: IPopoverProps
): props is IAdvancedPopoverProps => 'visible' in props;

const BasicPopover: React.FC<IBasicPopoverProps> = ({
  children,
  disabled = false,
  target,
  trigger = 'hover',
  placement = 'top',
  withArrow = true,
  withinPortal = true,
  sameWidth = false,
  ...rest
}) => {
  const [referenceElement, setReferenceElement] =
    useState<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const onClose = useCallback(() => setVisible(false), []);
  const clickTrigger = useMemo(() => trigger === 'click', [trigger]);
  const hoverTrigger = useMemo(() => trigger === 'hover', [trigger]);
  useWindowEvent('keydown', event => {
    if (event.key === eventKey.Escape && visible) {
      onClose();
    }
  });
  const handleClick = useCallback(() => {
    if (clickTrigger) {
      setVisible(visible => !visible);
    }
  }, [clickTrigger]);
  const handleHover = useCallback(
    (visible: boolean) => {
      if (hoverTrigger) {
        setVisible(visible);
      }
    },
    [hoverTrigger]
  );

  return (
    <>
      <div
        ref={setReferenceElement}
        className={styles.ref}
        onClick={handleClick}
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
        onFocus={() => handleHover(true)}
        onBlur={() => handleHover(false)}
      >
        {target}
      </div>
      {!disabled && (
        <Popper
          referenceElement={referenceElement}
          placement={placement}
          withArrow={withArrow}
          withinPortal={withinPortal}
          sameWidth={sameWidth}
          visible={visible}
          onClose={onClose}
          {...rest}
        >
          <div className={styles.popover}>{children}</div>
        </Popper>
      )}
    </>
  );
};

const AdvancedPopover: React.FC<IAdvancedPopoverProps> = ({
  children,
  disabled = false,
  target,
  placement = 'top',
  withArrow = true,
  withinPortal = true,
  sameWidth = false,
  onClose,
  visible
}) => {
  const [referenceElement, setReferenceElement] =
    useState<HTMLDivElement | null>(null);

  useWindowEvent('keydown', event => {
    if (event.key === eventKey.Escape && visible) {
      onClose();
    }
  });

  return (
    <>
      <div ref={setReferenceElement} className={styles.ref}>
        {target}
      </div>
      {!disabled && (
        <Popper
          referenceElement={referenceElement}
          placement={placement}
          withArrow={withArrow}
          withinPortal={withinPortal}
          sameWidth={sameWidth}
          onClose={onClose}
          visible={visible}
        >
          <div className={styles.popover}>{children}</div>
        </Popper>
      )}
    </>
  );
};

const Popover: React.FC<IPopoverProps> = props => {
  if (isAdvancedProps(props)) {
    return <AdvancedPopover {...props}>{props.children}</AdvancedPopover>;
  } else {
    return <BasicPopover {...props}>{props.children}</BasicPopover>;
  }
};

export default Popover;
