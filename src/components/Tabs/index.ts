import InternalTabs from './Tabs';
import TabPane from './TabPane';

type InternalTabsType = typeof InternalTabs;

interface TabsInterface extends InternalTabsType {
  TabPane: typeof TabPane;
}

const Tabs = InternalTabs as TabsInterface;

Tabs.TabPane = TabPane;

export default Tabs;
