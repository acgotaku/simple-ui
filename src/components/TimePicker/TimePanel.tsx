import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import cls from 'clsx';
import { eventKey } from '@/constants/keyboard';
import { flushPromises } from '@/utils/misc';
import { ITimePanelProps } from './TimePicker.types';
import { HOUR_COUNTS, MIN_COUNTS, SEC_COUNTS } from './constants';
import { isValidTime, parseTime, timeToString } from './utils';
import styles from './timepicker.module.css';

const TimePanel: React.FC<ITimePanelProps> = ({
  value,
  onChange,
  onClose,
  withSeconds = false
}) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const hours = useMemo(() => Array.from(Array(HOUR_COUNTS).keys()), []);
  const minutes = useMemo(() => Array.from(Array(MIN_COUNTS).keys()), []);
  const seconds = useMemo(() => Array.from(Array(SEC_COUNTS).keys()), []);

  const restoreElement = useRef<HTMLElement>();

  useEffect(() => {
    restoreElement.current = document.activeElement as HTMLElement;
  }, []);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLElement>) => {
      if (event.key === eventKey.Escape) {
        onClose();
        restoreElement.current?.focus();
      }
    },
    [onClose]
  );

  const scorllToCenter = useCallback(
    (node: Element, behavior: ScrollBehavior = 'smooth') => {
      node.scrollIntoView({
        behavior,
        block: 'center'
      });
    },
    []
  );

  useEffect(() => {
    if (isValidTime(value, withSeconds)) {
      const [hour, min, sec] = parseTime(value);
      setHour(hour);
      setMinute(min);
      setSecond(sec);
    }
  }, [value, withSeconds]);

  useEffect(() => {
    const scrollTime = async () => {
      if (panelRef.current) {
        // wait state updated
        await flushPromises();
        const nodes = panelRef.current.querySelectorAll(
          'button[data-selected]'
        );
        Array.from(nodes).forEach(node => {
          scorllToCenter(node, 'auto');
        });
      }
    };
    scrollTime();
  }, [scorllToCenter]);

  const selectHour = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, hour: number) => {
      scorllToCenter(event.target as HTMLElement);
      setHour(hour);
      const time = timeToString(hour, minute, second, withSeconds);
      onChange(time);
    },
    [scorllToCenter, minute, second, withSeconds, onChange]
  );

  const selectMinute = useCallback(
    (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
      minute: number
    ) => {
      scorllToCenter(event.target as HTMLElement);
      setMinute(minute);
      const time = timeToString(hour, minute, second, withSeconds);
      onChange(time);
    },
    [scorllToCenter, hour, second, withSeconds, onChange]
  );

  const selectSecond = useCallback(
    (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
      second: number
    ) => {
      scorllToCenter(event.target as HTMLElement);
      setSecond(second);
      const time = timeToString(hour, minute, second, withSeconds);
      onChange(time);
    },
    [scorllToCenter, hour, minute, withSeconds, onChange]
  );

  return (
    <div className={styles.panel} ref={panelRef} onKeyDown={handleKeyDown}>
      <div className={styles.panelInner}>
        <div className={styles.panelContent}>
          <ul role="listbox" className={styles.panelList}>
            {hours.map(h => (
              <li key={h} role="option" className={styles.panelItem}>
                <button
                  type="button"
                  className={cls(styles.panelButton, {
                    [styles.selected]: h === hour
                  })}
                  data-selected={h === hour ? '' : null}
                  onClick={event => selectHour(event, h)}
                >
                  {h.toString().padStart(2, '0')}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.panelContent}>
          <ul role="listbox" className={styles.panelList}>
            {minutes.map(min => (
              <li key={min} role="option" className={styles.panelItem}>
                <button
                  type="button"
                  className={cls(styles.panelButton, {
                    [styles.selected]: min === minute
                  })}
                  data-selected={min === minute ? '' : null}
                  onClick={event => selectMinute(event, min)}
                >
                  {min.toString().padStart(2, '0')}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {withSeconds && (
          <div className={styles.panelContent}>
            <ul role="listbox" className={styles.panelList}>
              {seconds.map(sec => (
                <li key={sec} role="option" className={styles.panelItem}>
                  <button
                    type="button"
                    className={cls(styles.panelButton, {
                      [styles.selected]: sec === second
                    })}
                    data-selected={sec === second ? '' : null}
                    onClick={event => selectSecond(event, sec)}
                  >
                    {sec.toString().padStart(2, '0')}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimePanel;
