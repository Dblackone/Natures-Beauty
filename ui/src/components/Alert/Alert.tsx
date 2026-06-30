import React from 'react';
import { cx } from '../../utils/cx';

export type AlertVariant = 'success' | 'warning' | 'error' | 'info';

export interface AlertProps {
  variant?: AlertVariant;
  title?: string;
  children?: React.ReactNode;
  className?: string;
  onDismiss?: () => void;
  icon?: React.ReactNode;
}

const defaultIcons: Record<AlertVariant, string> = {
  success: '✓',
  warning: '⚠',
  error: '✕',
  info: 'ℹ',
};

export const Alert: React.FC<AlertProps> = ({
  variant = 'info',
  title,
  children,
  className,
  onDismiss,
  icon,
}) => (
  <div role="alert" className={cx('nb-alert', `nb-alert--${variant}`, className)}>
    <span className="nb-alert__icon" aria-hidden="true">
      {icon ?? defaultIcons[variant]}
    </span>
    <div className="nb-alert__content">
      {title && <p className="nb-alert__title">{title}</p>}
      {children && <div className="nb-alert__body">{children}</div>}
    </div>
    {onDismiss && (
      <button type="button" className="nb-alert__dismiss" aria-label="Dismiss" onClick={onDismiss}>
        ×
      </button>
    )}
  </div>
);

Alert.displayName = 'Alert';
