import React from 'react';
import { cx } from '../../utils/cx';

export type BadgeVariant = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
export type BadgeSize = 'sm' | 'md';

export interface BadgeProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  children: React.ReactNode;
  className?: string;
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  size = 'md',
  children,
  className,
  dot = false,
}) => (
  <span className={cx('nb-badge', `nb-badge--${variant}`, `nb-badge--${size}`, className)}>
    {dot && <span className="nb-badge__dot" aria-hidden="true" />}
    {children}
  </span>
);

Badge.displayName = 'Badge';
