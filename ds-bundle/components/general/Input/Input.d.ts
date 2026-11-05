import * as React from 'react';

/**
 * Input — from @natures-beauty/ui@1.0.0.
 * @replaces input
 */
export interface InputProps {
  label?: string;
  helpText?: string;
  errorText?: string;
  size?: "sm" | "md" | "lg";
  leftAddon?: React.ReactNode;
  rightAddon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  style?: React.CSSProperties;
  className?: string;
  id?: string;
  children?: React.ReactNode;
}

export declare const Input: React.ComponentType<InputProps>;
