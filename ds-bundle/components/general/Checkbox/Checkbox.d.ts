import * as React from 'react';

/**
 * Checkbox — from @natures-beauty/ui@1.0.0.
 * @replaces input[type=checkbox]
 */
export interface CheckboxProps {
  label?: string;
  helpText?: string;
  errorText?: string;
  indeterminate?: boolean;
  style?: React.CSSProperties;
  className?: string;
  id?: string;
  children?: React.ReactNode;
}

export declare const Checkbox: React.ComponentType<CheckboxProps>;
