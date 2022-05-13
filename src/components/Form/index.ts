import InternalForm from './Form';
import Item from './FormItem';

type InternalFormType = typeof InternalForm;

interface FormInterface extends InternalFormType {
  Item: typeof Item;
}

const Form = InternalForm as FormInterface;

Form.Item = Item;

export * from './Form.types';
export default Form;
