import React from 'react';
import { cx } from '../../utils/cx';

export type SelectSize = 'sm' | 'md' | 'lg';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  label?: string;
  helpText?: string;
  errorText?: string;
  size?: SelectSize;
  options?: SelectOption[];
  placeholder?: string;
  fullWidth?: boolean;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      helpText,
      errorText,
      size = 'md',
      options,
      placeholder,
      fullWidth = false,
      className,
      id,
      disabled,
      required,
      children,
      ...rest
    },
    ref
  ) => {
    const selectId = id ?? (label ? `nb-select-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);
    const hasError = Boolean(errorText);

    return (
      <div className={cx('nb-select-wrapper', fullWidth && 'nb-select-wrapper--full', className)}>
        {label && (
          <label htmlFor={selectId} className="nb-select__label">
            {label}
            {required && <span className="nb-select__required" aria-hidden="true"> *</span>}
          </label>
        )}
        <div className={cx('nb-select__group', `nb-select__group--${size}`, hasError && 'nb-select__group--error', disabled && 'nb-select__group--disabled')}>
          <select
            ref={ref}
            id={selectId}
            className="nb-select__field"
            disabled={disabled}
            required={required}
            aria-invalid={hasError || undefined}
            {...rest}
          >
            {placeholder && <option value="" disabled>{placeholder}</option>}
            {options
              ? options.map((opt) => (
                  <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                    {opt.label}
                  </option>
                ))
              : children}
          </select>
          <span className="nb-select__chevron" aria-hidden="true">
            <svg viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 1l4 4 4-4" />
            </svg>
          </span>
        </div>
        {(helpText || errorText) && (
          <p className={cx('nb-select__help', hasError && 'nb-select__help--error')}>
            {errorText ?? helpText}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';
