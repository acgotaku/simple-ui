import { useEffect, useRef, useState } from 'react';
import { Button, Link } from '@/components';
import { useTitle } from '@/hooks/useTitle';
import styles from './home.module.css';

function shuffle(list: number[]) {
  const shuffledList = [...list];
  for (let i = shuffledList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledList[i], shuffledList[j]] = [shuffledList[j], shuffledList[i]];
  }
  return shuffledList;
}

const HomeView = () => {
  useTitle('Simple UI');
  const containerRef = useRef<HTMLUListElement>(null);
  const prevRects = useRef<Record<string, DOMRect>>({});

  const [data, setData] = useState([
    10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
    29, 30
  ]);
  const shuffleList = () => setData(shuffle(data));

  useEffect(() => {
    if (containerRef.current) {
      Array.from(containerRef.current.children).forEach(node => {
        const dom = node as HTMLElement;
        const key = dom.dataset.id as string;
        const prevRect = prevRects.current[key];
        const rect = dom.getBoundingClientRect();
        if (prevRect) {
          const dy = prevRect.y - rect.y;
          const dx = prevRect.x - rect.x;
          dom.animate(
            [
              {
                transform: `translate(${dx}px, ${dy}px)`
              },
              { transform: 'translate(0, 0)' }
            ],
            {
              duration: 300,
              easing: 'linear',
              fill: 'both'
            }
          );
        }
        prevRects.current[key] = rect;
      });
    }
  }, [data]);

  return (
    <article className={styles.home}>
      <h1 className={styles.title}>Simple UI</h1>
      <p className={styles.desc}>
        Learn how to build a simple user interface from the soucre code.
      </p>
      <Link
        className={styles.link}
        href="https://github.com/acgotaku/simple-ui"
      >
        Github
      </Link>
      <Button onClick={shuffleList}>shuffle</Button>
      <ul className={styles.list} ref={containerRef}>
        {data.map(d => (
          <li key={d} data-id={d} className={styles.item}>
            {d}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default HomeView;
