import InternalList from './List';
import ListItem from './Item';

type InternalListType = typeof InternalList;

interface ListInterface extends InternalListType {
  Item: typeof ListItem;
}

const List = InternalList as ListInterface;
List.Item = ListItem;

export * from './List.types';
export default List;
