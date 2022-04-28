import InternalCheckbox from './Checkbox';
import CheckboxGroup from './Group';

type InternalCheckboxType = typeof InternalCheckbox;

interface CheckboxInterface extends InternalCheckboxType {
  Group: typeof CheckboxGroup;
}

const Checkbox = InternalCheckbox as CheckboxInterface;

Checkbox.Group = CheckboxGroup;

export * from './Checkbox.types';
export default Checkbox;
