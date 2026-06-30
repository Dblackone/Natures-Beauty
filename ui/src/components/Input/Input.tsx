import React from 'react';
import { cx } from '../../utils/cx';

export type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  helpText?: string;
  errorText?: string;
  size?: InputSize;
  leftAddon?: React.ReactNode;
  rightAddon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helpText,
      errorText,
      size = 'md',
      leftAddon,
      rightAddon,
      leftIcon,
      rightIcon,
      fullWidth = false,
      className,
      id,
      disabled,
      required,
      ...rest
    },
    ref
  ) => {
    const inputId = id ?? (label ? `nb-input-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);
    const hasError = Boolean(errorText);
    const helpId = inputId ? `${inputId}-help` : undefined;

    return (
      <div className={cx('nb-input-wrapper', fullWidth && 'nb-input-wrapper--full', className)}>
        {label && (
          <label htmlFor={inputId} className="nb-input__label">
            {label}
            {required && <span className="nb-input__required" aria-hidden="true"> *</span>}
          </label>
        )}
        <div className={cx('nb-input__group', `nb-input__group--${size}`, hasError && 'nb-input__group--error', disabled && 'nb-input__group--disabled')}>
          {leftAddon && <span className="nb-input__addon nb-input__addon--left">{leftAddon}</span>}
          {leftIcon && <span className="nb-input__icon nb-input__icon--left">{leftIcon}</span>}
          <input
            ref={ref}
            id={inputId}
            className={cx(
              'nb-input__field',
              leftIcon && 'nb-input__field--left-icon',
              rightIcon && 'nb-input__field--right-icon',
              leftAddon && 'nb-input__field--left-addon',
              rightAddon && 'nb-input__field--right-addon'
            )}
            disabled={disabled}
            required={required}
            aria-invalid={hasError || undefined}
            aria-describedby={(helpText || errorText) ? helpId : undefined}
            {...rest}
          />
          {rightIcon && <span className="nb-input__icon nb-input__icon--right">{rightIcon}</span>}
          {rightAddon && <span className="nb-input__addon nb-input__addon--right">{rightAddon}</span>}
        </div>
        {(helpText || errorText) && (
          <p id={helpId} className={cx('nb-input__help', hasError && 'nb-input__help--error')}>
            {errorText ?? helpText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
