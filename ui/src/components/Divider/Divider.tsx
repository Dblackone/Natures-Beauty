import React from 'react';
import { cx } from '../../utils/cx';

export interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  label?: string;
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  label,
  className,
}) => {
  if (orientation === 'vertical') {
    return <span role="separator" aria-orientation="vertical" className={cx('nb-divider--vertical', className)} />;
  }

  if (label) {
    return (
      <div role="separator" className={cx('nb-divider--labeled', className)}>
        <span className="nb-divider__line" />
        <span className="nb-divider__label">{label}</span>
        <span className="nb-divider__line" />
      </div>
    );
  }

  return <hr role="separator" className={cx('nb-divider', className)} />;
};

Divider.displayName = 'Divider';
