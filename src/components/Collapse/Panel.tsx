import React, { useState, useCallback, useMemo } from 'react';
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
  const [height, setHeight] = useState(0);

  const measuredRef = useCallback((node: Element | null) => {
    if (node) {
      setHeight(node.scrollHeight);
    }
  }, []);
  const panelName = useRandomId(name);
  const expanded = useMemo(
    () => currentPanel.includes(panelName),
    [currentPanel, panelName]
  );

  const panelStyle = useMemo(
    () => ({
      '--height-panel': `${height}px`
    }),
    [height]
  ) as React.CSSProperties;

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
      <div
        role="region"
        className={cls(styles.panelBody, {
          [styles.expanded]: expanded
        })}
        ref={measuredRef}
        style={panelStyle}
      >
        {children}
      </div>
    </div>
  );
};

export default Panel;
