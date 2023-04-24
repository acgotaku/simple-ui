import { useState, useCallback } from 'react';
import { List } from '@/components';
import { useTitle } from '@/hooks/useTitle';
import Code from '@/components/Code';
import styles from '@/styles/view.module.css';
import listStyles from './list.module.css';

interface Item {
  label: string;
  key: string;
}

const DraggableList = () => {
  const [countries, setCountries] = useState<Item[]>([
    { label: 'Australia', key: 'AU' },
    { label: 'Brazil', key: 'BR' },
    { label: 'China', key: 'CN' },
    { label: 'Egypt', key: 'EG' },
    { label: 'France', key: 'FR' },
    { label: 'Germany', key: 'DE' },
    { label: 'India', key: 'IN' },
    { label: 'Japan', key: 'JP' },
    { label: 'Spain', key: 'ES' },
    { label: 'United States', key: 'US' }
  ]);

  const renderItem = useCallback((item: Item) => {
    return item.label;
  }, []);
  return (
    <List
      dataSource={countries}
      setList={setCountries}
      renderItem={renderItem}
      draggable
    />
  );
};

const draggableListCode = `
const [countries, setCountries] = useState<Item[]>([
  { label: 'Australia', key: 'AU' },
  { label: 'Brazil', key: 'BR' },
  { label: 'China', key: 'CN' },
  { label: 'Egypt', key: 'EG' },
  { label: 'France', key: 'FR' },
  { label: 'Germany', key: 'DE' },
  { label: 'India', key: 'IN' },
  { label: 'Japan', key: 'JP' },
  { label: 'Spain', key: 'ES' },
  { label: 'United States', key: 'US' }
]);

const renderItem = useCallback((item: Item) => {
  return <div className={styles.listItem}>{item.label}</div>;
}, []);
return (
  <List
    dataSource={countries}
    setList={setCountries}
    draggable
    renderItem={renderItem}
    className={styles.listInner}
  />
);
`;

const DraggableGrid = () => {
  const [countries, setCountries] = useState<Item[]>([
    { label: 'Australia', key: 'AU' },
    { label: 'Brazil', key: 'BR' },
    { label: 'China', key: 'CN' },
    { label: 'Egypt', key: 'EG' },
    { label: 'France', key: 'FR' },
    { label: 'Germany', key: 'DE' },
    { label: 'India', key: 'IN' },
    { label: 'Japan', key: 'JP' },
    { label: 'Spain', key: 'ES' },
    { label: 'United States', key: 'US' }
  ]);

  const renderItem = useCallback((item: Item) => {
    return item.label;
  }, []);
  return (
    <List
      dataSource={countries}
      setList={setCountries}
      draggable
      renderItem={renderItem}
      className={listStyles.grid}
      itemClassName={listStyles.gridItem}
    />
  );
};

const draggableGridCode = `
const [countries, setCountries] = useState<Item[]>([
  { label: 'Australia', key: 'AU' },
  { label: 'Brazil', key: 'BR' },
  { label: 'China', key: 'CN' },
  { label: 'Egypt', key: 'EG' },
  { label: 'France', key: 'FR' },
  { label: 'Germany', key: 'DE' },
  { label: 'India', key: 'IN' },
  { label: 'Japan', key: 'JP' },
  { label: 'Spain', key: 'ES' },
  { label: 'United States', key: 'US' }
]);

const renderItem = useCallback((item: Item) => {
  return item.label;
}, []);
return (
  <List
    dataSource={countries}
    setList={setCountries}
    draggable
    renderItem={renderItem}
    className={listStyles.grid}
    itemClassName={listStyles.gridItem}
  />
);
`;

const ListView = () => {
  useTitle('List | Simple UI');

  return (
    <article className={styles.article}>
      <h1 className={styles.title}>List</h1>
      <p className={styles.desc}>Lists display a set of related contents.</p>
      <h2 className={styles.heading}>Example</h2>
      <h3 className={styles.caption}>Draggable List</h3>
      <div className={styles.content}>
        <DraggableList />
        <div className={styles.code}>
          <Code code={draggableListCode} />
        </div>
      </div>
      <h3 className={styles.caption}>Draggable Grid</h3>
      <div className={styles.content}>
        <DraggableGrid />
        <div className={styles.code}>
          <Code code={draggableGridCode} />
        </div>
      </div>
    </article>
  );
};

export default ListView;
