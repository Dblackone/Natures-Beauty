import * as React from 'react';

/**
 * Select — from @natures-beauty/ui@1.0.0.
 * @replaces select
 */
export interface SelectProps {
  label?: string;
  helpText?: string;
  errorText?: string;
  size?: "sm" | "md" | "lg";
  options?: SelectOption[];
  placeholder?: string;
  fullWidth?: boolean;
  style?: React.CSSProperties;
  className?: string;
  id?: string;
  children?: React.ReactNode;
}

export declare const Select: React.ComponentType<SelectProps>;
