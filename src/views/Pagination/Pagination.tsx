import { useState } from 'react';
import { Pagination } from '@/components';
import { useTitle } from '@/hooks/useTitle';
import Code from '@/components/Code';
import styles from '@/styles/view.module.css';
import paginationStyles from './pagination.module.css';

const ThreePages = () => {
  const [page, setPage] = useState(1);
  return <Pagination currentPage={page} total={3} onChange={setPage} />;
};

const threePagesCode = `
const [page, setPage] = useState(1);
return <Pagination currentPage={page} total={3} onChange={setPage} />;
`;

const TwentyPages = () => {
  const [page, setPage] = useState(1);
  return <Pagination currentPage={page} total={20} onChange={setPage} />;
};

const twentyPagesCode = `
const [page, setPage] = useState(1);
return <Pagination currentPage={page} total={20} onChange={setPage} />;
`;

const CustomPages = () => {
  const [page, setPage] = useState(1);
  return (
    <Pagination
      currentPage={page}
      total={20}
      onChange={setPage}
      className={paginationStyles.right}
    />
  );
};

const customPagesCode = `
const [page, setPage] = useState(1);
return (
  <Pagination
    currentPage={page}
    total={20}
    onChange={setPage}
    className={paginationStyles.right}
  />
);
`;

const PaginationView = () => {
  useTitle('Pagination | Simple UI');

  return (
    <article className={styles.article}>
      <h1 className={styles.title}>Pagination</h1>
      <p className={styles.desc}>
        The Pagination component allows you to display active page and navigate
        between multiple pages.
      </p>
      <h2 className={styles.heading}>Example</h2>
      <h3 className={styles.caption}> Pagination with 3 pages</h3>
      <div className={styles.content}>
        <ThreePages />
        <div className={styles.code}>
          <Code code={threePagesCode} />
        </div>
      </div>
      <h3 className={styles.caption}> Pagination with 20 pages</h3>
      <div className={styles.content}>
        <TwentyPages />
        <div className={styles.code}>
          <Code code={twentyPagesCode} />
        </div>
      </div>
      <h3 className={styles.caption}> Pagination with align right</h3>
      <div className={styles.content}>
        <CustomPages />
        <div className={styles.code}>
          <Code code={customPagesCode} />
        </div>
      </div>
    </article>
  );
};

export default PaginationView;
