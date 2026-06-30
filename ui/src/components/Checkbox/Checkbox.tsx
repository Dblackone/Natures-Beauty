import React from 'react';
import { cx } from '../../utils/cx';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  helpText?: string;
  errorText?: string;
  indeterminate?: boolean;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, helpText, errorText, indeterminate = false, className, id, ...rest }, ref) => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    React.useImperativeHandle(ref, () => inputRef.current!);

    React.useEffect(() => {
      if (inputRef.current) inputRef.current.indeterminate = indeterminate;
    }, [indeterminate]);

    const checkId = id ?? (label ? `nb-checkbox-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);
    const hasError = Boolean(errorText);

    return (
      <div className={cx('nb-checkbox-wrapper', className)}>
        <label className="nb-checkbox__row" htmlFor={checkId}>
          <span className={cx('nb-checkbox__control', hasError && 'nb-checkbox__control--error')}>
            <input ref={inputRef} type="checkbox" id={checkId} className="nb-checkbox__input" {...rest} />
            <span className="nb-checkbox__indicator" aria-hidden="true">
              {indeterminate ? (
                <svg viewBox="0 0 12 2" fill="currentColor"><rect x="0" y="0" width="12" height="2" rx="1"/></svg>
              ) : (
                <svg viewBox="0 0 12 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="1 5 4.5 9 11 1" />
                </svg>
              )}
            </span>
          </span>
          {label && <span className="nb-checkbox__label">{label}</span>}
        </label>
        {(helpText || errorText) && (
          <p className={cx('nb-checkbox__help', hasError && 'nb-checkbox__help--error')}>
            {errorText ?? helpText}
          </p>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
