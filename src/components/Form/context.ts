import React from 'react';
import { noop } from '@/utils/misc';
import { FormContextProps } from './Form.types';

export const FormContext = React.createContext<FormContextProps>({
  values: {},
  onValuesChange: noop,
  errors: {},
  updateErrors: noop
});
