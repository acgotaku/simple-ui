import React from 'react';

export type StepStatus = 'wait' | 'process' | 'finish' | 'error' | 'warning';

export interface IStepsProps {
  children: React.ReactNode;
  current?: number;
  className?: string;
}

export interface IStepProps {
  title?: string;
  className?: string;
  index?: number;
  status?: string;
}
