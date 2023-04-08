import React from 'react';
import { RuleItem, ValidateError } from 'async-validator';

export type Trigger = 'change' | 'blur' | '';
export interface Rule extends RuleItem {
  trigger: Trigger | Array<Trigger>;
}

export type Rules = Record<string, Rule[]>;

export type FormValues = AnyLiteral;

export type ValueOf<T> = T[keyof T];

export type Validate = (trigger: Trigger) => Promise<ValidateError[] | null>;

export interface IFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  values: FormValues;
  onValuesChange: (changedValue: FormValues) => void;
  onValidateChange?: (valid: boolean) => void;
  rules?: Rules;
  disabled?: boolean;
}

export interface IFormItemProps {
  children: React.ReactNode;
  field?: string;
  label?: string;
  className?: string;
  rules?: Rule[];
  disabled?: boolean;
}

export interface IFormItemRef {
  validate: Validate;
}

export interface FormContextProps {
  values: FormValues;
  onValuesChange: (changedValue: FormValues) => void;
  errors: Record<string, string>;
  updateErrors: (field: string, error: string) => void;
  items?: React.MutableRefObject<Record<string, IFormItemRef>>;
  rules?: Rules;
  disabled?: boolean;
}
