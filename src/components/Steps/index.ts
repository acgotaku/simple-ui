import InterSteps from './Steps';
import Step from './Step';

type InternalStepsType = typeof InterSteps;

interface StepsInterface extends InternalStepsType {
  Step: typeof Step;
}

const Steps = InterSteps as StepsInterface;

Steps.Step = Step;

export default Steps;
