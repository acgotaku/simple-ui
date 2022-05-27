import { useState } from 'react';
import { Button, Modal, Link } from '@/components';
import Code from '@/components/Code';
import styles from '@/styles/view.module.css';
import modalStyles from './modal.module.css';

const DefaultModal = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button onClick={() => setVisible(true)}>{'Default Modal'}</Button>
      <Modal visible={visible} title={'Modal Title'} onClose={setVisible}>
        <div className={modalStyles.modal}>{'Modal Body Content'}</div>
        <div className={modalStyles.footer}>
          <Button
            color="standard"
            className={modalStyles.footerButton}
            onClick={() => setVisible(false)}
          >
            {'close'}
          </Button>
          <Button
            color="primary"
            className={modalStyles.footerButton}
            onClick={() => setVisible(false)}
          >
            {'confirm'}
          </Button>
        </div>
      </Modal>
    </>
  );
};

const defaultModalCode = `
const [visible, setVisible] = useState(false);
return (
  <>
    <Button onClick={() => setVisible(true)}>{'Default Modal'}</Button>
    <Modal visible={visible} title={'Modal Title'} onClose={setVisible}>
      <div className={modalStyles.modal}>{'Modal Body Content'}</div>
      <div className={modalStyles.footer}>
        <Button
          color="standard"
          className={modalStyles.footerButton}
          onClick={() => setVisible(false)}
        >
          {'close'}
        </Button>
        <Button
          color="primary"
          className={modalStyles.footerButton}
          onClick={() => setVisible(false)}
        >
          {'confirm'}
        </Button>
      </div>
    </Modal>
  </>
);
`;

const ClosableModal = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button onClick={() => setVisible(true)}>{'Closable Modal'}</Button>
      <Modal
        visible={visible}
        title={'Modal Title'}
        onClose={setVisible}
        closable={true}
      >
        <div className={modalStyles.modal}>
          {'Click outside can close modal'}
        </div>
        <div className={modalStyles.footer}>
          <Button
            color="standard"
            className={modalStyles.footerButton}
            onClick={() => setVisible(false)}
          >
            {'close'}
          </Button>
          <Button
            color="primary"
            className={modalStyles.footerButton}
            onClick={() => setVisible(false)}
          >
            {'confirm'}
          </Button>
        </div>
      </Modal>
    </>
  );
};

const closeableModalCode = `
const [visible, setVisible] = useState(false);
return (
  <>
    <Button onClick={() => setVisible(true)}>{'Closable Modal'}</Button>
    <Modal
      visible={visible}
      title={'Modal Title'}
      onClose={setVisible}
      closable={true}
    >
      <div className={modalStyles.modal}>
        {'Click outside can close modal'}
      </div>
      <div className={modalStyles.footer}>
        <Button
          color="standard"
          className={modalStyles.footerButton}
          onClick={() => setVisible(false)}
        >
          {'close'}
        </Button>
        <Button
          color="primary"
          className={modalStyles.footerButton}
          onClick={() => setVisible(false)}
        >
          {'confirm'}
        </Button>
      </div>
    </Modal>
  </>
);
`;

const ModalView = () => {
  return (
    <article className={styles.article}>
      <h1 className={styles.title}>Modal</h1>
      <p className={styles.desc}>
        Modals are temporary pop-ups that take focus from the page or app and
        require people to interact with them.
      </p>
      <h2 className={styles.heading}>Example</h2>
      <h3 className={styles.caption}>Default Modal</h3>
      <div className={styles.content}>
        <DefaultModal />
        <div className={styles.code}>
          <Code code={defaultModalCode} />
        </div>
      </div>
      <h3 className={styles.caption}>Click outside can close modal</h3>
      <div className={styles.content}>
        <ClosableModal />
        <div className={styles.code}>
          <Code code={closeableModalCode} />
        </div>
      </div>
      <h2 className={styles.heading}>Accessibility</h2>
      <h3 className={styles.caption}>Keyboard Interaction</h3>
      <div className={styles.content}>
        <p className={styles.detail}>
          When a dialog opens, focus moves to an element inside the dialog. See
          notes below regarding initial focus placement.
        </p>
        <p className={styles.detail}>
          <b>Tab</b>: Moves focus to the next tabbable element inside the
          dialog.
        </p>
        <p className={styles.detail}>
          If focus is on the last tabbable element inside the dialog, moves
          focus to the first tabbable element inside the dialog.
        </p>
        <p className={styles.detail}>
          <b>Shift + Tab</b>: Moves focus to the previous tabbable element
          inside the dialog.
        </p>
        <p className={styles.detail}>
          If focus is on the first tabbable element inside the dialog, moves
          focus to the last tabbable element inside the dialog.
        </p>
        <p className={styles.detail}>
          <b>Escape</b>: Closes the dialog.
        </p>
        <Link href="https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/">
          Dialog (Modal)
        </Link>
      </div>
    </article>
  );
};

export default ModalView;
