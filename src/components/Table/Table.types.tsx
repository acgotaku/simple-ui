export type RecordType = AnyLiteral;

export interface Column {
  name: string;
  label: string;
  render?: (text: string, record: RecordType, index: number) => React.ReactNode;
}

export interface Scroll {
  x?: number | string;
  y?: number | string;
}

export interface ITableProps {
  columns: Array<Column>;
  dataSource: Array<RecordType>;
  className?: string;
  scroll?: Scroll;
}

export interface ITableHeaderProps {
  columns: Array<Column>;
}

export type ITableBodyProps = ITableProps;
