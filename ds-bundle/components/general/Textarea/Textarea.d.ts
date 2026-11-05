import * as React from 'react';

/**
 * Textarea — from @natures-beauty/ui@1.0.0.
 * @replaces textarea
 */
export interface TextareaProps {
  label?: string;
  helpText?: string;
  errorText?: string;
  fullWidth?: boolean;
  resize?: "none" | "horizontal" | "vertical" | "both";
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export declare const Textarea: React.ComponentType<TextareaProps>;
