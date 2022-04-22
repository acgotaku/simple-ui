import { Link } from '@/components';
import Code from '@/components/Code';
import styles from '@/styles/view.module.css';

const internalLinkCode = `<Link to="/button">Button View</Link>`;
const externalLinkCode = `<Link href="https://github.com/acgotaku/simple-ui">Github</Link>`;

const LinkView = () => {
  return (
    <article className={styles.article}>
      <h1 className={styles.title}>Link</h1>
      <p className={styles.desc}>
        Links allow users to navigate to a different location. They can be
        presented inline inside a paragraph or as standalone text.
      </p>
      <h2 className={styles.heading}>Example</h2>
      <h3 className={styles.caption}>Internal Link</h3>
      <div className={styles.content}>
        <Link to="/button">Button View</Link>
        <div className={styles.code}>
          <Code code={internalLinkCode} />
        </div>
      </div>
      <h3 className={styles.caption}>External Link</h3>
      <div className={styles.content}>
        <Link href="https://github.com/acgotaku/simple-ui">Github</Link>
        <div className={styles.code}>
          <Code code={externalLinkCode} />
        </div>
      </div>
    </article>
  );
};

export default LinkView;
