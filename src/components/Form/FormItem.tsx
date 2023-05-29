import React, {
  useMemo,
  useContext,
  useCallback,
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle
} from 'react';
import cls from 'clsx';
import AsyncValidator, { ValidateError } from 'async-validator';
import styles from './form.module.css';
import { FormContext } from './context';
import Input from '../Input';
import Select from '../Select';
import {
  IFormItemProps,
  IFormItemRef,
  Trigger,
  ValueOf,
  FormValues
} from './Form.types';

const FormItem = forwardRef<IFormItemRef, IFormItemProps>((props, ref) => {
  const {
    children,
    field,
    label,
    className = '',
    disabled = false,
    rules = []
  } = props;
  const {
    values,
    onValuesChange,
    errors,
    updateErrors,
    items,
    rules: rulesForm,
    disabled: disabledForm
  } = useContext(FormContext);
  const [touched, setTouched] = useState<boolean>(false);
  const disableState = useMemo(
    () => disabled || disabledForm,
    [disabled, disabledForm]
  );

  const fieldRules = useMemo(() => {
    if (rulesForm && field) {
      return rulesForm[field] || [];
    } else {
      return rules;
    }
  }, [field, rulesForm, rules]);

  const fieldValue = useMemo(() => {
    if (field) {
      return values[field];
    } else {
      return '';
    }
  }, [values, field]);

  const errorMessage = useMemo(() => {
    if (field) {
      return errors[field];
    } else {
      return '';
    }
  }, [field, errors]);

  const filteredRule = useCallback(
    (trigger: Trigger) => {
      if (trigger) {
        return fieldRules.filter(rule => rule.trigger.includes(trigger));
      } else {
        return fieldRules;
      }
    },
    [fieldRules]
  );

  const validate = useCallback(
    (trigger: Trigger): Promise<ValidateError[] | null> => {
      const rules = filteredRule(trigger);
      if (field) {
        const descriptor = {
          [field]: rules
        };
        const validator = new AsyncValidator(descriptor);
        return new Promise(resolve => {
          if (rules.length === 0) {
            resolve([]);
          } else {
            validator.validate(
              {
                [field]: fieldValue
              },
              { firstFields: true },
              errors => {
                if (errors) {
                  updateErrors(field, errors[0].message || '');
                } else {
                  updateErrors(field, '');
                }
                resolve(errors);
              }
            );
          }
        });
      } else {
        return new Promise(resolve => resolve([]));
      }
    },
    [field, filteredRule, fieldValue, updateErrors]
  );

  useEffect(() => {
    if (touched) {
      validate('change');
    }
  }, [touched, validate]);

  useEffect(() => {
    const currentItems = items?.current;
    if (field && currentItems) {
      currentItems[field] = {
        validate
      };
    }

    return () => {
      if (field && currentItems) {
        delete currentItems[field];
      }
    };
  }, [field, validate, items]);

  useImperativeHandle(ref, () => ({
    validate
  }));

  const changeHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (field) {
        const value = event.target.value;
        const newValues = { ...values, [field]: value };
        onValuesChange(newValues);
      }
      if (!touched) {
        setTouched(true);
      }
    },
    [onValuesChange, values, field, touched]
  );

  const selectHandler = useCallback(
    (value: ValueOf<FormValues>) => {
      if (field) {
        const newValues = { ...values, [field]: value };
        onValuesChange(newValues);
      }
      if (!touched) {
        setTouched(true);
      }
    },
    [onValuesChange, values, field, touched]
  );

  const blurHandler = useCallback(() => {
    validate('blur');
  }, [validate]);

  const childrenElement = useMemo(() => {
    if (field && React.isValidElement(children)) {
      switch (children.type) {
        case Input: {
          return React.cloneElement(children as React.ReactElement, {
            value: fieldValue,
            invalid: !!errorMessage,
            disabled: disableState,
            onChange: changeHandler,
            onBlur: blurHandler
          });
        }
        case Select: {
          return React.cloneElement(children as React.ReactElement, {
            value: fieldValue,
            invalid: !!errorMessage,
            disabled: disableState,
            onSelect: selectHandler
          });
        }
        default: {
          return children;
        }
      }
    } else {
      return children;
    }
  }, [
    children,
    changeHandler,
    blurHandler,
    selectHandler,
    fieldValue,
    errorMessage,
    field,
    disableState
  ]);
  return (
    <div
      className={cls(
        styles.formItem,
        {
          [styles.showMessage]: !!errorMessage
        },
        className
      )}
    >
      <label className={styles.formItemLabel}>{label}</label>
      <div className={styles.formItemBody}>
        {childrenElement}
        {errorMessage && (
          <div className={styles.message}>
            <span className={styles.messageText}>{errorMessage}</span>
          </div>
        )}
      </div>
    </div>
  );
});

FormItem.displayName = 'FormItem';

export default FormItem;
