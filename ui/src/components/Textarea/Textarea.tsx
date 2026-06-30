import React from 'react';
import { cx } from '../../utils/cx';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helpText?: string;
  errorText?: string;
  fullWidth?: boolean;
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      helpText,
      errorText,
      fullWidth = false,
      resize = 'vertical',
      className,
      id,
      disabled,
      required,
      rows = 4,
      ...rest
    },
    ref
  ) => {
    const textareaId = id ?? (label ? `nb-textarea-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);
    const hasError = Boolean(errorText);
    const helpId = textareaId ? `${textareaId}-help` : undefined;

    return (
      <div className={cx('nb-textarea-wrapper', fullWidth && 'nb-textarea-wrapper--full', className)}>
        {label && (
          <label htmlFor={textareaId} className="nb-textarea__label">
            {label}
            {required && <span className="nb-textarea__required" aria-hidden="true"> *</span>}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={cx('nb-textarea__field', `nb-textarea__field--resize-${resize}`, hasError && 'nb-textarea__field--error')}
          disabled={disabled}
          required={required}
          rows={rows}
          aria-invalid={hasError || undefined}
          aria-describedby={(helpText || errorText) ? helpId : undefined}
          {...rest}
        />
        {(helpText || errorText) && (
          <p id={helpId} className={cx('nb-textarea__help', hasError && 'nb-textarea__help--error')}>
            {errorText ?? helpText}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
