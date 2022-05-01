import { Tabs } from '@/components';
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
    </article>
  );
};

export default TabsView;
