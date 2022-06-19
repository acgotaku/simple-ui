import React from 'react';
import styles from './table.module.css';
import { ITableHeaderProps } from './Table.types';

const TableHeader: React.FC<ITableHeaderProps> = ({ columns }) => {
  return (
    <thead className={styles.head}>
      <tr className={styles.headRow}>
        {columns.map(({ name, label }) => {
          return (
            <th className={styles.headCell} key={name}>
              {label}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHeader;
