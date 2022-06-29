import cls from 'clsx';
import { STEP_STATUS } from './Steps.constants';
import { IStepProps } from './Steps.types';
import styles from './steps.module.css';

const Step: React.FC<IStepProps> = ({
  status = STEP_STATUS.PROCESS,
  index = 0,
  title = ''
}) => {
  return (
    <div className={cls(styles.step, styles[status])}>
      <div className={styles.line}></div>
      <div className={styles.main}>
        <span className={styles.index}>{index + 1}</span>
        <span className={styles.title}>{title}</span>
      </div>
    </div>
  );
};

export default Step;
