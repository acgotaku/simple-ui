import { useState } from 'react';
import { Button, Drawer, Link } from '@/components';
import Code from '@/components/Code';
import { ReactComponent as Close } from '@/assets/icons/close.svg';
import styles from '@/styles/view.module.css';
import drawerStyles from './drawer.module.css';

const StandardDrawer = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button className={drawerStyles.button} onClick={() => setVisible(true)}>
        {'Open Drawer'}
      </Button>
      <Drawer visible={visible} onClose={setVisible}>
        <div className={drawerStyles.left}>
          <div className={drawerStyles.inner}>
            <div className={drawerStyles.header}>
              <button
                onClick={() => setVisible(false)}
                className={drawerStyles.close}
              >
                <Close className={drawerStyles.closeIcon} />
              </button>
            </div>
            <Link to="/button">Button View</Link>
            <p>{'Press escape to close the drawer.'}</p>
            <Link href="https://github.com/acgotaku/simple-ui">Github</Link>
            <p>{'Trap focus inside drawer.'}</p>
          </div>
        </div>
      </Drawer>
    </>
  );
};

const standardDrawerCode = `
const [visible, setVisible] = useState(false);
return (
  <>
    <Button className={drawerStyles.button} onClick={() => setVisible(true)}>
      {'Open Drawer'}
    </Button>
    <Drawer visible={visible} onClose={setVisible}>
      <div className={drawerStyles.left}>
        <div className={drawerStyles.inner}>
          <div className={drawerStyles.header}>
            <button
              onClick={() => setVisible(false)}
              className={drawerStyles.close}
            >
              <Close className={drawerStyles.closeIcon} />
            </button>
          </div>
          <Link to="/button">Button View</Link>
          <p>{'Press escape to close the drawer.'}</p>
          <Link href="https://github.com/acgotaku/simple-ui">Github</Link>
          <p>{'Trap focus inside drawer.'}</p>
        </div>
      </div>
    </Drawer>
  </>
);
`;

const LeftDrawer = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button className={drawerStyles.button} onClick={() => setVisible(true)}>
        {'Left'}
      </Button>
      <Drawer visible={visible} onClose={setVisible}>
        <div className={drawerStyles.left}>
          {'Press escape to close the drawer.'}
        </div>
      </Drawer>
    </>
  );
};

const RightDrawer = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button className={drawerStyles.button} onClick={() => setVisible(true)}>
        {'Right'}
      </Button>
      <Drawer visible={visible} position="right" onClose={setVisible}>
        <div className={drawerStyles.right}>
          {'Press escape to close the drawer.'}
        </div>
      </Drawer>
    </>
  );
};

const TopDrawer = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button className={drawerStyles.button} onClick={() => setVisible(true)}>
        {'Top'}
      </Button>
      <Drawer visible={visible} position="top" onClose={setVisible}>
        <div className={drawerStyles.top}>
          {'Press escape to close the drawer.'}
        </div>
      </Drawer>
    </>
  );
};

const BottomDrawer = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button className={drawerStyles.button} onClick={() => setVisible(true)}>
        {'Bottom'}
      </Button>
      <Drawer visible={visible} position="bottom" onClose={setVisible}>
        <div className={drawerStyles.bottom}>
          {'Press escape to close the drawer.'}
        </div>
      </Drawer>
    </>
  );
};

const DrawerView = () => {
  return (
    <article className={styles.article}>
      <h1 className={styles.title}>Drawer</h1>
      <p className={styles.desc}>
        Display overlay area at any side of the screen.
      </p>
      <h2 className={styles.heading}>Example</h2>
      <h3 className={styles.caption}>Standard Drawer</h3>
      <div className={styles.content}>
        <StandardDrawer />
        <div className={styles.code}>
          <Code code={standardDrawerCode} />
        </div>
      </div>
      <h3 className={styles.caption}>Drawer Position</h3>
      <div className={styles.content}>
        <LeftDrawer />
        <RightDrawer />
        <TopDrawer />
        <BottomDrawer />
      </div>
    </article>
  );
};

export default DrawerView;
