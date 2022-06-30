import { Collapse, Link } from '@/components';
import { useTitle } from '@/hooks/useTitle';
import Code from '@/components/Code';
import styles from '@/styles/view.module.css';
import collapseStyles from './collapse.module.css';

const StandardCollapse = () => {
  const { Panel } = Collapse;
  return (
    <Collapse className={collapseStyles.collapse}>
      <Panel title="What is your refund policy?">
        <p className={collapseStyles.panel}>
          If you&apos;re unhappy with your purchase for any reason, email us
          within 90 days and we&apos;ll refund you in full, no questions asked.
        </p>
      </Panel>
      <Panel title="Do you offer technical support?">
        <p className={collapseStyles.panel}>{'No.'}</p>
      </Panel>
      <Panel title="What are the supported browsers?">
        <p className={collapseStyles.panel}>{`Supported browsers:
          ・ Firefox (latest version)
          ・ Safari (latest version)
          ・ Google Chrome (latest version)`}</p>
      </Panel>
    </Collapse>
  );
};

const standardCollapseCode = `
const { Panel } = Collapse;
return (
  <Collapse className={collapseStyles.collapse}>
    <Panel title="What is your refund policy?">
      <p className={collapseStyles.panel}>
        If you&apos;re unhappy with your purchase for any reason, email us
        within 90 days and we&apos;ll refund you in full, no questions asked.
      </p>
    </Panel>
    <Panel title="Do you offer technical support?">
      <p className={collapseStyles.panel}>{'No.'}</p>
    </Panel>
    <Panel title="What are the supported browsers?">
      <p className={collapseStyles.panel}>{\`Supported browsers:
        ・ Firefox (latest version)
        ・ Safari (latest version)
        ・ Google Chrome (latest version)\`}</p>
    </Panel>
  </Collapse>
);
`;

const AccordionCollapse = () => {
  const { Panel } = Collapse;
  return (
    <Collapse className={collapseStyles.collapse} accordion>
      <Panel title="What is your refund policy?">
        <p className={collapseStyles.panel}>
          If you&apos;re unhappy with your purchase for any reason, email us
          within 90 days and we&apos;ll refund you in full, no questions asked.
        </p>
      </Panel>
      <Panel title="Do you offer technical support?">
        <p className={collapseStyles.panel}>{'No.'}</p>
      </Panel>
      <Panel title="What are the supported browsers?">
        <p className={collapseStyles.panel}>{`Supported browsers:
          ・ Firefox (latest version)
          ・ Safari (latest version)
          ・ Google Chrome (latest version)`}</p>
      </Panel>
    </Collapse>
  );
};

const accordionCollapseCode = `
const { Panel } = Collapse;
return (
  <Collapse className={collapseStyles.collapse} accordion>
    <Panel title="What is your refund policy?">
      <p className={collapseStyles.panel}>
        If you&apos;re unhappy with your purchase for any reason, email us
        within 90 days and we&apos;ll refund you in full, no questions asked.
      </p>
    </Panel>
    <Panel title="Do you offer technical support?">
      <p className={collapseStyles.panel}>{'No.'}</p>
    </Panel>
    <Panel title="What are the supported browsers?">
      <p className={collapseStyles.panel}>{\`Supported browsers:
        ・ Firefox (latest version)
        ・ Safari (latest version)
        ・ Google Chrome (latest version)\`}</p>
    </Panel>
  </Collapse>
);
`;

const CollapseView = () => {
  useTitle('Collapse | Simple UI');

  return (
    <article className={styles.article}>
      <h1 className={styles.title}>Collapse</h1>
      <p className={styles.desc}>
        A simple, accessible foundation for building custom UIs that show and
        hide content, like togglable accordion panels.
      </p>
      <h2 className={styles.heading}>Example</h2>
      <h3 className={styles.caption}>Collapse</h3>
      <div className={styles.content}>
        <StandardCollapse />
        <div className={styles.code}>
          <Code code={standardCollapseCode} />
        </div>
      </div>
      <h3 className={styles.caption}>Accordion Collapse</h3>
      <div className={styles.content}>
        <AccordionCollapse />
        <div className={styles.code}>
          <Code code={accordionCollapseCode} />
        </div>
      </div>
      <h2 className={styles.heading}>Accessibility</h2>
      <h3 className={styles.caption}>Keyboard Interaction</h3>
      <div className={styles.content}>
        <p className={styles.detail}>When the disclosure control has focus:</p>
        <p className={styles.detail}>
          <b>Enter</b>: activates the disclosure control and toggles the
          visibility of the disclosure content.
        </p>
        <p className={styles.detail}>
          <b>Space</b>: activates the disclosure control and toggles the
          visibility of the disclosure content.
        </p>
        <Link href="https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/">
          Disclosure (Show/Hide)
        </Link>
      </div>
    </article>
  );
};

export default CollapseView;
