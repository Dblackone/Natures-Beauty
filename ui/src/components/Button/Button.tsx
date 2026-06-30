import React from 'react';
import { cx } from '../../utils/cx';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      fullWidth = false,
      leftIcon,
      rightIcon,
      children,
      className,
      disabled,
      ...rest
    },
    ref
  ) => (
    <button
      ref={ref}
      className={cx(
        'nb-btn',
        `nb-btn--${variant}`,
        `nb-btn--${size}`,
        fullWidth && 'nb-btn--full',
        loading && 'nb-btn--loading',
        className
      )}
      disabled={disabled || loading}
      aria-busy={loading}
      {...rest}
    >
      {loading && <span className="nb-btn__spinner" aria-hidden="true" />}
      {leftIcon && !loading && <span className="nb-btn__icon">{leftIcon}</span>}
      <span className="nb-btn__label">{children}</span>
      {rightIcon && <span className="nb-btn__icon">{rightIcon}</span>}
    </button>
  )
);

Button.displayName = 'Button';
