export type ItemType = AnyLiteral | string;

export interface IListProps<T = ItemType> {
  dataSource?: Array<T>;
  children?: React.ReactNode;
  setList?: (list: AnyArray) => void;
  renderItem?: (item: AnyValue, index: number) => React.ReactNode;
  virtualScroll?: boolean;
  draggable?: boolean;
  className?: string;
  itemClassName?: string;
}

export interface IListItemProps {
  children?: React.ReactNode;
  draggable?: boolean;
  id?: string;
  className?: string;
  dragStartHandler?: (event: React.DragEvent<HTMLElement>) => void;
  dragEnterHandler?: () => void;
  dragEndHandler?: () => void;
  dragOverHandler?: (event: React.DragEvent<HTMLElement>) => void;
  dropHandler?: (event: React.DragEvent<HTMLElement>) => void;
}
