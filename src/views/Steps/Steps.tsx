import { useState } from 'react';
import { Steps, Button } from '@/components';
import { useTitle } from '@/hooks/useTitle';
import Code from '@/components/Code';
import styles from '@/styles/view.module.css';
import stepsStyles from './steps.module.css';

const BasicSteps = () => {
  const [step, setStep] = useState(1);

  const prev = () => setStep(current => (current > 0 ? current - 1 : current));
  const next = () => setStep(current => (current < 3 ? current + 1 : current));

  return (
    <>
      <Steps current={step} className={stepsStyles.steps}>
        <Steps.Step title="Create an account" />
        <Steps.Step title="Verify email" />
        <Steps.Step title="Get full access" />
      </Steps>
      <div className={stepsStyles.action}>
        <Button onClick={prev}>{'Prev step'}</Button>
        <Button color="primary" onClick={next}>
          {'Next step'}
        </Button>
      </div>
    </>
  );
};

const basicStepsCode = `
const [step, setStep] = useState(1);

const prev = () => setStep(current => (current > 0 ? current - 1 : current));
const next = () => setStep(current => (current < 3 ? current + 1 : current));

return (
  <>
    <Steps current={step} className={stepsStyles.steps}>
      <Steps.Step title="Create an account" />
      <Steps.Step title="Verify email" />
      <Steps.Step title="Get full access" />
    </Steps>
    <div className={stepsStyles.action}>
      <Button onClick={prev}>{'Prev step'}</Button>
      <Button color="primary" onClick={next}>
        {'Next step'}
      </Button>
    </div>
  </>
);
`;

const StepsView = () => {
  useTitle('Steps | Simple UI');

  return (
    <article className={styles.article}>
      <h1 className={styles.title}>Steps</h1>
      <p className={styles.desc}>
        Steps is a navigation bar that guides users through the steps of a task.
      </p>
      <h2 className={styles.heading}>Example</h2>
      <h3 className={styles.caption}>Basic Steps</h3>
      <div className={styles.content}>
        <BasicSteps />
        <div className={styles.code}>
          <Code code={basicStepsCode} />
        </div>
      </div>
    </article>
  );
};

export default StepsView;
