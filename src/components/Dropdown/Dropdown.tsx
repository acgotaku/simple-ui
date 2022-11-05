import React, { useCallback, useMemo, useState } from 'react';
import cls from 'clsx';
import { useListKeyboardNav } from '@/hooks/useListKeyboardNav';
import styles from './dropdown.module.css';
import {
  IDropdownProps,
  IBasicDropdownProps,
  IAdvancedDropdownProps,
  IDropdownMenuProps,
  IDropdownItemProps
} from './Dropdown.types';
import { DropdownContext, useDropdownContext } from './context';
import { isTouchDevice } from '@/utils/context';
import Popper from '../Popper';

const isAdvancedProps = (
  props: IDropdownProps
): props is IAdvancedDropdownProps => 'visible' in props;

const BasicDropdown: React.FC<IBasicDropdownProps> = ({
  children,
  disabled = false,
  target,
  trigger = 'click',
  placement = 'bottom',
  withArrow = false,
  withinPortal = true,
  sameWidth = true,
  ...rest
}) => {
  const [referenceElement, setReferenceElement] =
    useState<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const onClose = useCallback((visible = false) => setVisible(visible), []);
  const hoverTrigger = useMemo(
    () => trigger === 'hover' && !isTouchDevice,
    [trigger]
  );
  const handleClick = useCallback(() => {
    setVisible(visible => !visible);
  }, []);
  const handleHover = useCallback(
    (visible: boolean) => {
      if (hoverTrigger) {
        setVisible(visible);
      }
    },
    [hoverTrigger]
  );
  const [handleKeyDown, setPopperRef] = useListKeyboardNav(visible, onClose);
  const context = useMemo(
    () => ({
      onClose
    }),
    [onClose]
  );

  const targetMenu = useMemo(() => {
    return React.cloneElement(target, {
      role: 'button',
      'aria-haspopup': 'menu',
      'aria-expanded': visible,
      onKeyDown: handleKeyDown
    });
  }, [target, visible, handleKeyDown]);

  return (
    <>
      <div
        ref={setReferenceElement}
        className={styles.ref}
        onClick={handleClick}
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
      >
        {targetMenu}
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
          <div
            className={styles.dropdown}
            ref={setPopperRef}
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)}
            onKeyDown={handleKeyDown}
          >
            <DropdownContext.Provider value={context}>
              {children}
            </DropdownContext.Provider>
          </div>
        </Popper>
      )}
    </>
  );
};
const AdvancedDropdown: React.FC<IAdvancedDropdownProps> = ({
  children,
  disabled = false,
  placement = 'bottom',
  withArrow = false,
  withinPortal = true,
  sameWidth = true,
  target,
  visible,
  onClose
}) => {
  const [referenceElement, setReferenceElement] =
    useState<HTMLDivElement | null>(null);
  const [handleKeyDown, setPopperRef] = useListKeyboardNav(visible, onClose);
  const context = useMemo(
    () => ({
      onClose
    }),
    [onClose]
  );

  const targetMenu = useMemo(() => {
    return React.cloneElement(target, {
      role: 'button',
      'aria-haspopup': 'menu',
      'aria-expanded': visible,
      onKeyDown: handleKeyDown
    });
  }, [target, visible, handleKeyDown]);

  return (
    <>
      <div ref={setReferenceElement} className={styles.ref}>
        {targetMenu}
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
        >
          <div
            className={styles.dropdown}
            ref={setPopperRef}
            onKeyDown={handleKeyDown}
          >
            <DropdownContext.Provider value={context}>
              {children}
            </DropdownContext.Provider>
          </div>
        </Popper>
      )}
    </>
  );
};

const Dropdown: React.FC<IDropdownProps> = props => {
  if (isAdvancedProps(props)) {
    return <AdvancedDropdown {...props} />;
  } else {
    return <BasicDropdown {...props} />;
  }
};

const DropdownMenu: React.FC<IDropdownMenuProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <ul role="menu" className={cls(styles.dropdownMenu, className)} {...rest}>
      {children}
    </ul>
  );
};

const DropdownItem: React.FC<IDropdownItemProps> = ({
  children,
  className,
  ...rest
}) => {
  const { onClose } = useDropdownContext();

  const childrenWithClose = useMemo(() => {
    if (React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement, {
        onClick: (event: MouseEvent) => {
          onClose();
          if (typeof children.props.onClick === 'function') {
            children.props.onClick(event);
          }
        }
      });
    } else {
      return children;
    }
  }, [children, onClose]);
  return (
    <li
      role="menuitem"
      className={cls(styles.dropdownItem, className)}
      {...rest}
    >
      {childrenWithClose}
    </li>
  );
};

export { Dropdown, DropdownMenu, DropdownItem };
