import React from 'react';
import styles from './table.module.css';
import { ITableBodyProps } from './Table.types';

const TableBody: React.FC<ITableBodyProps> = ({ columns, dataSource }) => {
  return (
    <tbody className={styles.body}>
      {dataSource.map((data, rowIndex) => {
        return (
          <tr className={styles.bodyRow} key={rowIndex}>
            {columns.map(column => {
              if (column.render) {
                return (
                  <td className={styles.bodyCell} key={column.name}>
                    {column.render(data[column.name], data, rowIndex)}
                  </td>
                );
              } else {
                return (
                  <td className={styles.bodyCell} key={column.name}>
                    {data[column.name]}
                  </td>
                );
              }
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
