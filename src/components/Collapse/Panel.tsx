import React, { useCallback, useRef, useMemo, memo } from 'react';
import { Transition } from 'react-transition-group';
import cls from 'clsx';
import { useRandomId } from '@/hooks/useRandomId';
import { useCollapseContext } from './context';
import styles from './collapse.module.css';
import { IPanelProps } from './Collapse.types';
import { ReactComponent as Down } from '@/assets/icons/caret-down.svg';

const Panel: React.FC<IPanelProps> = ({
  title,
  name,
  className = '',
  children
}) => {
  const { currentPanel, updatePanel } = useCollapseContext();
  const nodeRef = useRef<HTMLDivElement>(null);

  const panelName = useRandomId(name);
  const expanded = useMemo(
    () => currentPanel.includes(panelName),
    [currentPanel, panelName]
  );

  const onEnter = useCallback(() => {
    if (nodeRef.current) {
      const node = nodeRef.current;
      node.style.height = '0';
    }
  }, []);
  const onEntering = useCallback(() => {
    if (nodeRef.current) {
      const node = nodeRef.current;
      if (node.scrollHeight !== 0) {
        node.style.height = node.scrollHeight + 'px';
      } else {
        node.style.height = '';
      }
    }
  }, []);
  const onEntered = useCallback(() => {
    if (nodeRef.current) {
      const node = nodeRef.current;
      node.style.height = '';
    }
  }, []);

  const onExit = useCallback(() => {
    if (nodeRef.current) {
      const node = nodeRef.current;
      node.style.height = node.scrollHeight + 'px';
    }
  }, []);
  const onExiting = useCallback(() => {
    if (nodeRef.current) {
      const node = nodeRef.current;
      if (node.scrollHeight !== 0) {
        node.style.height = '0';
      }
    }
  }, []);
  const onExited = useCallback(() => {
    if (nodeRef.current) {
      const node = nodeRef.current;
      node.style.height = '';
    }
  }, []);

  return (
    <div className={cls(styles.panel, className)}>
      <div className={styles.panelHeader}>
        <button
          type="button"
          aria-expanded={expanded}
          className={styles.panelButton}
          onClick={() => updatePanel(panelName)}
        >
          <span className={styles.panelText}> {title}</span>
          <Down
            className={cls(styles.panelIcon, {
              [styles.expanded]: expanded
            })}
          />
        </button>
      </div>
      <Transition
        nodeRef={nodeRef}
        in={expanded}
        unmountOnExit
        timeout={300}
        onEnter={onEnter}
        onEntering={onEntering}
        onEntered={onEntered}
        onExit={onExit}
        onExiting={onExiting}
        onExited={onExited}
      >
        <div
          role="region"
          className={cls(styles.panelBody, {
            [styles.expanded]: expanded
          })}
          ref={nodeRef}
        >
          {children}
        </div>
      </Transition>
    </div>
  );
};

export default memo(Panel);
