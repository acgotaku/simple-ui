import { Tabs, Link } from '@/components';
import Code from '@/components/Code';
import styles from '@/styles/view.module.css';
import tabsStyles from './tabs.module.css';

const StandardTabs = () => {
  const { TabPane } = Tabs;
  return (
    <Tabs className={tabsStyles.tabs}>
      <TabPane label="Documents" name="doc" className={tabsStyles.pane}>
        <span>{'This is document content.'}</span>
      </TabPane>
      <TabPane label="Start" name="start" className={tabsStyles.pane}>
        <span>{'Get start guide.'}</span>
      </TabPane>
      <TabPane label="Help" name="help" className={tabsStyles.pane}>
        <span>{'Help documents.'}</span>
      </TabPane>
    </Tabs>
  );
};

const standardTabsCode = `
const { TabPane } = Tabs;
return (
  <Tabs className={tabsStyles.tabs}>
    <TabPane label="Documents" name="doc" className={tabsStyles.pane}>
      <span>{'This is document content.'}</span>
    </TabPane>
    <TabPane label="Start" name="start" className={tabsStyles.pane}>
      <span>{'Get start guide.'}</span>
    </TabPane>
    <TabPane label="Help" name="help" className={tabsStyles.pane}>
      <span>{'Help documents.'}</span>
    </TabPane>
  </Tabs>
);
`;

const ActiveTabs = () => {
  const { TabPane } = Tabs;
  return (
    <Tabs className={tabsStyles.tabs} activeTab={'start'}>
      <TabPane label="Documents" name="doc" className={tabsStyles.pane}>
        <span>{'This is document content.'}</span>
      </TabPane>
      <TabPane label="Start" name="start" className={tabsStyles.pane}>
        <span>{'Get start guide.'}</span>
      </TabPane>
      <TabPane label="Help" name="help" className={tabsStyles.pane}>
        <span>{'Help documents.'}</span>
      </TabPane>
    </Tabs>
  );
};

const activeTabsCode = `
const { TabPane } = Tabs;
return (
  <Tabs className={tabsStyles.tabs} activeTab={'start'}>
    <TabPane label="Documents" name="doc" className={tabsStyles.pane}>
      <span>{'This is document content.'}</span>
    </TabPane>
    <TabPane label="Start" name="start" className={tabsStyles.pane}>
      <span>{'Get start guide.'}</span>
    </TabPane>
    <TabPane label="Help" name="help" className={tabsStyles.pane}>
      <span>{'Help documents.'}</span>
    </TabPane>
  </Tabs>
);`;

const DisabledTabs = () => {
  const { TabPane } = Tabs;
  return (
    <Tabs className={tabsStyles.tabs}>
      <TabPane label="Documents" name="doc" className={tabsStyles.pane}>
        <span>{'This is document content.'}</span>
      </TabPane>
      <TabPane label="Start" name="start" className={tabsStyles.pane} disabled>
        <span>{'Get start guide.'}</span>
      </TabPane>
      <TabPane label="Help" name="help" className={tabsStyles.pane}>
        <span>{'Help documents.'}</span>
      </TabPane>
    </Tabs>
  );
};

const disabledTabsCode = `
const { TabPane } = Tabs;
return (
  <Tabs className={tabsStyles.tabs}>
    <TabPane label="Documents" name="doc" className={tabsStyles.pane}>
      <span>{'This is document content.'}</span>
    </TabPane>
    <TabPane label="Start" name="start" className={tabsStyles.pane} disabled>
      <span>{'Get start guide.'}</span>
    </TabPane>
    <TabPane label="Help" name="help" className={tabsStyles.pane}>
      <span>{'Help documents.'}</span>
    </TabPane>
  </Tabs>
);
`;

const TabsView = () => {
  return (
    <article className={styles.article}>
      <h1 className={styles.title}>Tabs</h1>
      <p className={styles.desc}>
        Tabs organize content into multiple sections and allow users to navigate
        between them. The content under the set of tabs should be related and
        form a coherent unit.
      </p>
      <h2 className={styles.heading}>Example</h2>
      <h3 className={styles.caption}>Tabs</h3>
      <div className={styles.content}>
        <StandardTabs />
        <div className={styles.code}>
          <Code code={standardTabsCode} />
        </div>
      </div>
      <h3 className={styles.caption}>Tabs with activeTab</h3>
      <div className={styles.content}>
        <ActiveTabs />
        <div className={styles.code}>
          <Code code={activeTabsCode} />
        </div>
      </div>
      <h3 className={styles.caption}>Tabs with disabled Tab</h3>
      <div className={styles.content}>
        <DisabledTabs />
        <div className={styles.code}>
          <Code code={disabledTabsCode} />
        </div>
      </div>
      <h2 className={styles.heading}>Accessibility</h2>
      <h3 className={styles.caption}>Keyboard Interaction</h3>
      <div className={styles.content}>
        <p className={styles.detail}>For the tab list:</p>
        <p className={styles.detail}>
          <b>Tab</b>: When focus moves into the tab list, places focus on the
          active tab element.
        </p>
        <p className={styles.detail}>
          When the tab list contains the focus, moves focus to the next element
          in the page tab sequence outside the tablist, which is the tabpanel
          unless the first element containing meaningful content inside the
          tabpanel is focusable.
        </p>
        <p className={styles.detail}>
          When focus is on a tab element in a horizontal tab list:
        </p>
        <p className={styles.detail}>
          <b>Left Arrow</b>: moves focus to the previous tab. If focus is on the
          first tab, moves focus to the last tab. Optionally, activates the
          newly focused tab.
        </p>
        <p className={styles.detail}>
          <b>Right Arrow</b>: Moves focus to the next tab. If focus is on the
          last tab element, moves focus to the first tab. Optionally, activates
          the newly focused tab.
        </p>
        <Link href="https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/">
          Tabs
        </Link>
      </div>
    </article>
  );
};

export default TabsView;
