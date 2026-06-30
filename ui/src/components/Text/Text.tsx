import React from 'react';
import { cx } from '../../utils/cx';

export type TextSize = '2xs' | 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
export type TextWeight = 'light' | 'regular' | 'semibold' | 'bold';
export type TextColor = 'primary' | 'secondary' | 'tertiary' | 'disabled' | 'inverse' | 'accent' | 'link';
export type TextAlign = 'left' | 'center' | 'right';

export interface TextProps {
  as?: React.ElementType;
  size?: TextSize;
  weight?: TextWeight;
  color?: TextColor;
  align?: TextAlign;
  display?: boolean;
  truncate?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({
  as: Tag = 'p',
  size = 'base',
  weight = 'regular',
  color = 'primary',
  align = 'left',
  display = false,
  truncate = false,
  className,
  children,
}) => (
  <Tag
    className={cx(
      'nb-text',
      `nb-text--${size}`,
      `nb-text--${weight}`,
      `nb-text--${color}`,
      `nb-text--${align}`,
      display && 'nb-text--display',
      truncate && 'nb-text--truncate',
      className
    )}
  >
    {children}
  </Tag>
);

Text.displayName = 'Text';
