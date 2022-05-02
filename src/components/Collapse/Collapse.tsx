import React, { useCallback, useMemo, useState } from 'react';
import cls from 'clsx';
import { CollapseContext } from './context';
import styles from './collapse.module.css';
import { ICollapseProps } from './Collapse.types';

const Collapse: React.FC<ICollapseProps> = ({
  accordion = false,
  className = '',
  children
}) => {
  const [panel, setPanel] = useState<string[]>([]);
  const updatePanel = useCallback(
    (name: string) => {
      const index = panel.indexOf(name);
      {
        if (accordion) {
          if (index > -1) {
            setPanel([]);
          } else {
            setPanel([name]);
          }
        } else {
          if (index > -1) {
            setPanel(prevPanel => {
              const newPanel = [...prevPanel];
              newPanel.splice(index, 1);
              return newPanel;
            });
          } else {
            setPanel(prevPanel => [...prevPanel, name]);
          }
        }
      }
    },
    [accordion, panel]
  );
  const context = useMemo(
    () => ({
      currentPanel: panel,
      accordion,
      updatePanel
    }),
    [panel, accordion, updatePanel]
  );

  return (
    <div className={cls(styles.collapse, className)}>
      <CollapseContext.Provider value={context}>
        {children}
      </CollapseContext.Provider>
    </div>
  );
};

export default Collapse;
