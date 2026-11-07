import * as React from 'react';

/**
 * Badge — from @natures-beauty/ui@1.0.0.
 */
export interface BadgeProps {
  variant?: "success" | "warning" | "error" | "info" | "default" | "primary" | "secondary";
  size?: "sm" | "md";
  children: React.ReactNode;
  className?: string;
  dot?: boolean;
}

export declare const Badge: React.ComponentType<BadgeProps>;
