import * as React from 'react';

/**
 * Alert — from @natures-beauty/ui@1.0.0.
 */
export interface AlertProps {
  variant?: "success" | "warning" | "error" | "info";
  title?: string;
  children?: React.ReactNode;
  className?: string;
  onDismiss?: () => void;
  icon?: React.ReactNode;
}

export declare const Alert: React.ComponentType<AlertProps>;
