import { Skeleton } from '@/components';
import Code from '@/components/Code';
import styles from '@/styles/view.module.css';
import skeletonStyles from './skeleton.module.css';

const BasicSkeleton = () => {
  return <Skeleton className={skeletonStyles.basic} animate={false} />;
};
const basicSkeletonCode = `<Skeleton className={skeletonStyles.basic} animate={false} />`;

const AnimateSkeleton = () => {
  return <Skeleton className={skeletonStyles.basic} />;
};
const animateSkeletonCode = `<Skeleton className={skeletonStyles.basic} />`;

const CircleSkeleton = () => {
  return <Skeleton className={skeletonStyles.circle} />;
};
const circleSkeletonCode = `<Skeleton className={skeletonStyles.circle} />`;

const SkeletonView = () => {
  return (
    <article className={styles.article}>
      <h1 className={styles.title}>Skeleton</h1>
      <p className={styles.desc}>
        Skeleton is used to display the loading state of some components.
      </p>
      <h2 className={styles.heading}>Example</h2>
      <h3 className={styles.caption}>Basic Skeleton</h3>
      <div className={styles.content}>
        <BasicSkeleton />
        <BasicSkeleton />
        <BasicSkeleton />
        <div className={styles.code}>
          <Code code={basicSkeletonCode} />
        </div>
      </div>
      <h3 className={styles.caption}>Animate Skeleton</h3>
      <div className={styles.content}>
        <AnimateSkeleton />
        <AnimateSkeleton />
        <AnimateSkeleton />
        <div className={styles.code}>
          <Code code={animateSkeletonCode} />
        </div>
      </div>
      <h3 className={styles.caption}>Circle Skeleton</h3>
      <div className={styles.content}>
        <CircleSkeleton />
        <div className={styles.code}>
          <Code code={circleSkeletonCode} />
        </div>
      </div>
    </article>
  );
};

export default SkeletonView;
