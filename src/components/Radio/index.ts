import InternalRadio from './Radio';
import RadioGroup from './Group';

type InternalRadioType = typeof InternalRadio;

interface RadioInterface extends InternalRadioType {
  Group: typeof RadioGroup;
}

const Radio = InternalRadio as RadioInterface;

Radio.Group = RadioGroup;

export * from './Radio.types';
export default Radio;
