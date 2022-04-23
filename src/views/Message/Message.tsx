import { Button, message } from '@/components';
import Code from '@/components/Code';
import styles from '@/styles/view.module.css';
import { useCallback } from 'react';

const infoMessageCode = `message.info('This is info message.');`;
const successMessageCode = `message.success('This is success message.');`;
const errorMessageCode = `message.error('This is error message.');`;
const warningMessageCode = `message.warning('This is warning message.');`;
const loadingMessageCode = `message.loading('This is loading message.');`;
const longMessageCode = `
message.info(
  'This is a long message, so that you can see that the message box height adapts to the content automatically.',
  10
);
`;

const MessageView = () => {
  const showInfoMessage = useCallback(() => {
    message.info('This is info message.');
  }, []);

  const showSuccessMessage = useCallback(() => {
    message.success('This is success message.');
  }, []);

  const showErrorMessage = useCallback(() => {
    message.error('This is error message.');
  }, []);

  const showWarningMessage = useCallback(() => {
    message.warning('This is warning message.');
  }, []);

  const showLoadingMessage = useCallback(() => {
    message.loading('This is loading message.');
  }, []);

  const showMessageWithDuration = useCallback(() => {
    message.info('Show message 10s.', 10);
  }, []);

  const showLongMessage = () => {
    message.info(
      'This is a long message, so that you can see that the message box height adapts to the content automatically.',
      10
    );
  };
  return (
    <article className={styles.article}>
      <h1 className={styles.title}>Message</h1>
      <p className={styles.desc}>
        A Message displays errors, warnings, or important information about an
        open app or file. For example, if a file failed to upload an error
        message should appear.
      </p>
      <h2 className={styles.heading}>Example</h2>
      <h3 className={styles.caption}>Info Message</h3>
      <div className={styles.content}>
        <Button onClick={showInfoMessage}>{'Info message'}</Button>
        <div className={styles.code}>
          <Code code={infoMessageCode} />
        </div>
      </div>
      <h3 className={styles.caption}>Success Message</h3>
      <div className={styles.content}>
        <Button color="primary" onClick={showSuccessMessage}>
          {'Success message'}
        </Button>
        <div className={styles.code}>
          <Code code={successMessageCode} />
        </div>
      </div>
      <h3 className={styles.caption}>Error Message</h3>
      <div className={styles.content}>
        <Button color="danger" onClick={showErrorMessage}>
          {'Error message'}
        </Button>
        <div className={styles.code}>
          <Code code={errorMessageCode} />
        </div>
      </div>
      <h3 className={styles.caption}>Warning Message</h3>
      <div className={styles.content}>
        <Button onClick={showWarningMessage}>{'Warning message'}</Button>
        <div className={styles.code}>
          <Code code={warningMessageCode} />
        </div>
      </div>
      <h3 className={styles.caption}>Loading Message</h3>
      <div className={styles.content}>
        <Button onClick={showLoadingMessage}>{'Loading message'}</Button>
        <div className={styles.code}>
          <Code code={loadingMessageCode} />
        </div>
      </div>
      <h3 className={styles.caption}>10s Message</h3>
      <div className={styles.content}>
        <Button onClick={showMessageWithDuration}>{'10s message'}</Button>
        <div className={styles.code}>
          <Code code={loadingMessageCode} />
        </div>
      </div>
      <h3 className={styles.caption}>Long Message</h3>
      <div className={styles.content}>
        <Button onClick={showLongMessage}>{'Long message'}</Button>
        <div className={styles.code}>
          <Code code={longMessageCode} />
        </div>
      </div>
    </article>
  );
};

export default MessageView;
