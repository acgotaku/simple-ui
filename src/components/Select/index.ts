import InternalSelect from './Select';
import Option from './Option';

type InternalSelectType = typeof InternalSelect;

interface SelectInterface extends InternalSelectType {
  Option: typeof Option;
}

const Select = InternalSelect as SelectInterface;

Select.Option = Option;

export * from './Select.types';
export default Select;
