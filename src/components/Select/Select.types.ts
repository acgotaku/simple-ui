import React from 'react';
import { Placement } from '@/floating';

export type SelectValueType = string | number;
export type SelectLabelType = string | React.ReactNode | number;

export interface SelectOptionType {
  label: SelectLabelType;
  value: SelectValueType;
  disabled?: boolean;
}

export interface IBaseSelectProps {
  className?: string;
  disabled?: boolean;
  clearable?: boolean;
  filterable?: boolean;
  invalid?: boolean;
  multiSelect?: boolean;
  virtualScroll?: boolean;
  placement?: Placement;
  withArrow?: boolean;
  withinPortal?: boolean;
  sameWidth?: boolean;
}

export interface IBaseSingleSelectProps extends IBaseSelectProps {
  value?: SelectValueType;
  onSelect?: (value: SelectValueType) => void;
}

export interface IBasicSingleSelectProps extends IBaseSingleSelectProps {
  options: Array<SelectOptionType>;
}

export interface IAdvancedSingleSelectProps extends IBaseSingleSelectProps {
  children: React.ReactNode;
}

export type ISingleSelectProps =
  | IBasicSingleSelectProps
  | IAdvancedSingleSelectProps;

export interface IBaseMultiSelectProps extends IBaseSelectProps {
  value?: Array<SelectValueType>;
  onSelect?: (value: Array<SelectValueType>) => void;
}

export interface IBasicMultiSelectProps extends IBaseMultiSelectProps {
  options: Array<SelectOptionType>;
}

export interface IAdvancedMultiSelectProps extends IBaseMultiSelectProps {
  children: React.ReactNode;
}

export type IMultiSelectProps =
  | IBasicMultiSelectProps
  | IAdvancedMultiSelectProps;

export type ISelectProps = ISingleSelectProps | IMultiSelectProps;

export interface IOptionProps {
  children: React.ReactNode;
  value: SelectValueType;
  label?: string;
  selected?: boolean;
  onClick?: (optionValue: SelectValueType) => void;
  disabled?: boolean;
}

export interface ITagProps {
  children: React.ReactNode;
  disabled?: boolean;
  onClose?: () => void;
}
