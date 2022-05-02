import InternalCollapse from './Collapse';
import Panel from './Panel';

type InternalCollapseType = typeof InternalCollapse;

interface CollapseInterface extends InternalCollapseType {
  Panel: typeof Panel;
}

const Collapse = InternalCollapse as CollapseInterface;

Collapse.Panel = Panel;

export default Collapse;
