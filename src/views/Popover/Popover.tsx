import { useState, useMemo } from 'react';
import { Placement } from '@popperjs/core';
import { Button, Link, Popover } from '@/components';
import Code from '@/components/Code';
import styles from '@/styles/view.module.css';
import popoverStyles from './popover.module.css';

const HoverPopover = () => {
  const refButton = useMemo(() => {
    return <Button>{'Hover me'}</Button>;
  }, []);
  return <Popover target={refButton}>{'Popover content'}</Popover>;
};

const hoverPopoverCode = `
const refButton = useMemo(() => {
  return <Button>{'Hover me'}</Button>;
}, []);
return <Popover target={refButton}>{'Popover content'}</Popover>;
`;

const ClickPopover = () => {
  const refButton = useMemo(() => {
    return <Button>{'Click me'}</Button>;
  }, []);
  return (
    <Popover target={refButton} trigger={'click'}>
      {'Popover content'}
    </Popover>
  );
};

const clickPopoverCode = `
const refButton = useMemo(() => {
  return <Button>{'Click me'}</Button>;
}, []);
return (
  <Popover target={refButton} trigger={'click'}>
    {'Popover content'}
  </Popover>
);
`;

interface IPopoverProps {
  buttonText: string;
  popoverText: string;
  placement?: Placement;
}

const PopoverWithPosition: React.FC<IPopoverProps> = ({
  buttonText,
  popoverText,
  placement
}) => {
  const [visible, setVisible] = useState(false);
  const refButton = useMemo(() => {
    return (
      <Button
        onClick={() => setVisible(visible => !visible)}
        className={popoverStyles.button}
      >
        {buttonText}
      </Button>
    );
  }, [buttonText]);
  return (
    <div className={popoverStyles.wrapper}>
      <Popover
        target={refButton}
        visible={visible}
        withArrow={true}
        placement={placement}
        onClose={() => setVisible(false)}
      >
        {popoverText}
      </Popover>
    </div>
  );
};

const PopoverView = () => {
  return (
    <article className={styles.article}>
      <h1 className={styles.title}>Popover</h1>
      <p className={styles.desc}>
        Popovers are perfect for floating panels with arbitrary content like
        navigation menus, mobile menus and flyout menus.
      </p>
      <h2 className={styles.heading}>Example</h2>
      <h3 className={styles.caption}>Hover Popover</h3>
      <div className={styles.content}>
        <HoverPopover />
        <div className={styles.code}>
          <Code code={hoverPopoverCode} />
        </div>
      </div>
      <h3 className={styles.caption}>Click Popover</h3>
      <div className={styles.content}>
        <ClickPopover />
        <div className={styles.code}>
          <Code code={clickPopoverCode} />
        </div>
      </div>
      <h3 className={styles.caption}>Popover (All Placement)</h3>
      <div className={styles.content}>
        <div className={popoverStyles.popover}>
          <div className={popoverStyles.top}>
            <PopoverWithPosition
              buttonText="TOP-L"
              popoverText="Popover content"
              placement="top-start"
            />
            <PopoverWithPosition
              buttonText="TOP"
              popoverText="Popover content"
              placement="top"
            />
            <PopoverWithPosition
              buttonText="TOP-R"
              popoverText="Popover content"
              placement="top-end"
            />
          </div>
          <div className={popoverStyles.left}>
            <PopoverWithPosition
              buttonText="LEFT-T"
              popoverText="Popover content"
              placement="left-start"
            />
            <PopoverWithPosition
              buttonText="LEFT"
              popoverText="Popover content"
              placement="left"
            />
            <PopoverWithPosition
              buttonText="LEFT-B"
              popoverText="Popover content"
              placement="left-end"
            />
          </div>
          <div className={popoverStyles.right}>
            <PopoverWithPosition
              buttonText="RIGHT-T"
              popoverText="Popover content"
              placement="right-start"
            />
            <PopoverWithPosition
              buttonText="RIGHT"
              popoverText="Popover content"
              placement="right"
            />
            <PopoverWithPosition
              buttonText="RIGHT-B"
              popoverText="Popover content"
              placement="right-end"
            />
          </div>
          <div className={popoverStyles.bottom}>
            <PopoverWithPosition
              buttonText="BOTTOM-L"
              popoverText="Popover content"
              placement="bottom-start"
            />
            <PopoverWithPosition
              buttonText="BOTTOM"
              popoverText="Popover content"
              placement="bottom"
            />
            <PopoverWithPosition
              buttonText="BOTTOM-R"
              popoverText="Popover content"
              placement="bottom-end"
            />
          </div>
        </div>
      </div>
      <h2 className={styles.heading}>Accessibility</h2>
      <h3 className={styles.caption}>Keyboard Interaction</h3>
      <div className={styles.content}>
        <p className={styles.detail}>
          <b>Enter</b>: Toggle popover.
        </p>
        <p className={styles.detail}>
          <b>Space</b>: Toggle popover.
        </p>
        <p className={styles.detail}>
          <b>Escape</b>: Dismisses the Popover.
        </p>
        <Link href="https://www.w3.org/TR/wai-aria-practices/#tooltip">
          WAI-ARIA Authoring Practices - 3.26 Tooltip Widget
        </Link>
      </div>
    </article>
  );
};

export default PopoverView;
