import React from 'react';
import { cx } from '../../utils/cx';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type AvatarVariant = 'circle' | 'square';
export type AvatarStatus = 'online' | 'away' | 'busy' | 'offline';

export interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: AvatarSize;
  variant?: AvatarVariant;
  className?: string;
  status?: AvatarStatus;
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? '')
    .join('');
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  name,
  size = 'md',
  variant = 'circle',
  className,
  status,
}) => (
  <span
    className={cx('nb-avatar', `nb-avatar--${size}`, `nb-avatar--${variant}`, className)}
    aria-label={alt ?? name}
  >
    {src ? (
      <img src={src} alt={alt ?? name ?? ''} className="nb-avatar__img" />
    ) : name ? (
      <span className="nb-avatar__initials" aria-hidden="true">{getInitials(name)}</span>
    ) : (
      <span className="nb-avatar__fallback" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="currentColor" width="60%" height="60%">
          <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
        </svg>
      </span>
    )}
    {status && <span className={cx('nb-avatar__status', `nb-avatar__status--${status}`)} aria-label={status} />}
  </span>
);

Avatar.displayName = 'Avatar';
