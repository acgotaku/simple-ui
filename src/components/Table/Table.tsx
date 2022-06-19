import React, { useMemo } from 'react';
import cls from 'clsx';
import styles from './table.module.css';
import { ITableProps } from './Table.types';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

const Table: React.FC<ITableProps> = ({
  columns,
  dataSource,
  className = '',
  scroll = {}
}) => {
  const tableStyle = useMemo(
    () => ({
      '--count-column': columns.length,
      maxHeight: scroll.y,
      width: scroll.x
    }),
    [columns, scroll]
  ) as React.CSSProperties;

  return (
    <table className={cls(styles.table, className)} style={tableStyle}>
      <TableHeader columns={columns} />
      <TableBody columns={columns} dataSource={dataSource} />
    </table>
  );
};

export default Table;
