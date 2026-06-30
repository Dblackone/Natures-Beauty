import React from 'react';
import { cx } from '../../utils/cx';

export type CardVariant = 'default' | 'raised' | 'outlined' | 'filled';
export type CardPadding = 'none' | 'sm' | 'md' | 'lg';

export interface CardProps {
  variant?: CardVariant;
  padding?: CardPadding;
  interactive?: boolean;
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
  onClick?: () => void;
}

export interface CardHeaderProps { className?: string; children: React.ReactNode; }
export interface CardBodyProps   { className?: string; children: React.ReactNode; }
export interface CardFooterProps { className?: string; children: React.ReactNode; divider?: boolean; }

const CardHeader: React.FC<CardHeaderProps> = ({ children, className }) => (
  <div className={cx('nb-card__header', className)}>{children}</div>
);

const CardBody: React.FC<CardBodyProps> = ({ children, className }) => (
  <div className={cx('nb-card__body', className)}>{children}</div>
);

const CardFooter: React.FC<CardFooterProps> = ({ children, className, divider = true }) => (
  <div className={cx('nb-card__footer', divider && 'nb-card__footer--divider', className)}>
    {children}
  </div>
);

CardHeader.displayName = 'Card.Header';
CardBody.displayName = 'Card.Body';
CardFooter.displayName = 'Card.Footer';

export const Card: React.FC<CardProps> & {
  Header: React.FC<CardHeaderProps>;
  Body: React.FC<CardBodyProps>;
  Footer: React.FC<CardFooterProps>;
} = ({ variant = 'default', padding = 'md', interactive = false, className, children, as: Tag = 'div', onClick }) => (
  <Tag
    className={cx(
      'nb-card',
      `nb-card--${variant}`,
      `nb-card--pad-${padding}`,
      interactive && 'nb-card--interactive',
      className
    )}
    onClick={onClick}
    role={interactive ? 'button' : undefined}
    tabIndex={interactive ? 0 : undefined}
  >
    {children}
  </Tag>
);

Card.displayName = 'Card';
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
