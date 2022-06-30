import { Table } from '@/components';
import { useTitle } from '@/hooks/useTitle';
import Code from '@/components/Code';
import { RecordType } from '@/components/Table';
import { ReactComponent as Delete } from '@/assets/icons/delete.svg';
import styles from '@/styles/view.module.css';
import tableStyles from './table.module.css';
import { useCallback, useState } from 'react';

const BasicTable = () => {
  const columns = [
    {
      name: 'name',
      label: 'Name'
    },
    {
      name: 'age',
      label: 'Age'
    },
    {
      name: 'address',
      label: 'Address'
    }
  ];

  const dataSource = [
    {
      name: 'Mike',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      name: 'John',
      age: 42,
      address: '10 Downing Street'
    },
    {
      name: 'Jim Green',
      age: 36,
      address: 'London No. 1 Lake Park'
    }
  ];
  return <Table columns={columns} dataSource={dataSource} />;
};

const basicTableCode = `
const columns = [
  {
    name: 'name',
    label: 'Name'
  },
  {
    name: 'age',
    label: 'Age'
  },
  {
    name: 'address',
    label: 'Address'
  }
];

const dataSource = [
  {
    name: 'Mike',
    age: 32,
    address: 'New York No. 1 Lake Park'
  },
  {
    name: 'John',
    age: 42,
    address: '10 Downing Street'
  },
  {
    name: 'Jim Green',
    age: 36,
    address: 'London No. 1 Lake Park'
  }
];
return <Table columns={columns} dataSource={dataSource} />;
`;

const FixedHeaderTable = () => {
  const columns = [
    {
      name: 'name',
      label: 'Name'
    },
    {
      name: 'age',
      label: 'Age'
    },
    {
      name: 'address',
      label: 'Address'
    }
  ];

  const dataSource = Array.from(Array(30).keys()).map(key => ({
    name: `Jim Green ${key + 1}`,
    age: 36,
    address: `London No. ${key + 1} Lake Park`
  }));
  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      scroll={{
        y: 400
      }}
    />
  );
};

const fixedHeaderTableCode = `
const columns = [
  {
    name: 'name',
    label: 'Name'
  },
  {
    name: 'age',
    label: 'Age'
  },
  {
    name: 'address',
    label: 'Address'
  }
];

const dataSource = Array.from(Array(30).keys()).map(key => ({
  name: \`Jim Green \${key + 1}\`,
  age: 36,
  address: \`London No. \${key + 1} Lake Park\`
}));
return (
  <Table
    columns={columns}
    dataSource={dataSource}
    scroll={{
      y: 400
    }}
  />
);
`;

const ActionTable = () => {
  const dataSource = Array.from(Array(10).keys()).map(key => ({
    name: `Jim Green ${key + 1}`,
    age: 36,
    address: `London No. ${key + 1} Lake Park`
  }));
  const [data, setData] = useState(dataSource);

  const removeRow = useCallback((index: number) => {
    setData(prevData => {
      const newData = [...prevData];
      newData.splice(index, 1);
      return newData;
    });
  }, []);

  const columns = [
    {
      name: 'name',
      label: 'Name'
    },
    {
      name: 'age',
      label: 'Age'
    },
    {
      name: 'address',
      label: 'Address'
    },
    {
      name: 'Action',
      label: 'Action',
      render: (text: string, record: RecordType, index: number) => {
        return (
          <button
            type="button"
            onClick={() => removeRow(index)}
            className={tableStyles.button}
          >
            <Delete className={tableStyles.icon} />
          </button>
        );
      }
    }
  ];

  return <Table columns={columns} dataSource={data} />;
};

const actionTableCode = `
const dataSource = Array.from(Array(10).keys()).map(key => ({
  name: \`Jim Green \${key + 1}\`,
  age: 36,
  address: \`London No. \${key + 1} Lake Park\`
}));
const [data, setData] = useState(dataSource);

const removeRow = useCallback((index: number) => {
  setData(prevData => {
    const newData = [...prevData];
    newData.splice(index, 1);
    return newData;
  });
}, []);

const columns = [
  {
    name: 'name',
    label: 'Name'
  },
  {
    name: 'age',
    label: 'Age'
  },
  {
    name: 'address',
    label: 'Address'
  },
  {
    name: 'Action',
    label: 'Action',
    render: (text: string, record: RecordType, index: number) => {
      return (
        <button
          type="button"
          onClick={() => removeRow(index)}
          className={tableStyles.button}
        >
          <Delete className={tableStyles.icon} />
        </button>
      );
    }
  }
];

return <Table columns={columns} dataSource={data} />;
`;

const PaginationTable = () => {
  const columns = [
    {
      name: 'name',
      label: 'Name'
    },
    {
      name: 'age',
      label: 'Age'
    },
    {
      name: 'address',
      label: 'Address'
    }
  ];

  const dataSource = Array.from(Array(108).keys()).map(key => ({
    name: `Jim Green ${key + 1}`,
    age: 36,
    address: `London No. ${key + 1} Lake Park`
  }));
  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      pagination={{
        pageSize: 5,
        currentPage: 3
      }}
    />
  );
};

const paginationTableCode = `
const columns = [
  {
    name: 'name',
    label: 'Name'
  },
  {
    name: 'age',
    label: 'Age'
  },
  {
    name: 'address',
    label: 'Address'
  }
];

const dataSource = Array.from(Array(108).keys()).map(key => ({
  name: \`Jim Green \${key + 1}\`,
  age: 36,
  address: \`London No. \${key + 1} Lake Park\`
}));
return (
  <Table
    columns={columns}
    dataSource={dataSource}
    pagination={{
      pageSize: 5,
      currentPage: 3
    }}
  />
);
`;

const TableView = () => {
  useTitle('Table | Simple UI');

  return (
    <article className={styles.article}>
      <h1 className={styles.title}>Table</h1>
      <p className={styles.desc}>
        Tables are containers for displaying information. They allow users to
        quickly scan, sort, compare, and take action on large amounts of data.
      </p>
      <h2 className={styles.heading}>Example</h2>
      <h3 className={styles.caption}>Basic Table</h3>
      <div className={styles.content}>
        <BasicTable />
        <div className={styles.code}>
          <Code code={basicTableCode} />
        </div>
      </div>
      <h3 className={styles.caption}>Fixed Header Table</h3>
      <div className={styles.content}>
        <FixedHeaderTable />
        <div className={styles.code}>
          <Code code={fixedHeaderTableCode} />
        </div>
      </div>
      <h3 className={styles.caption}>Table with Action</h3>
      <div className={styles.content}>
        <ActionTable />
        <div className={styles.code}>
          <Code code={actionTableCode} />
        </div>
      </div>
      <h3 className={styles.caption}>Table with Pagination</h3>
      <div className={styles.content}>
        <PaginationTable />
        <div className={styles.code}>
          <Code code={paginationTableCode} />
        </div>
      </div>
    </article>
  );
};

export default TableView;
