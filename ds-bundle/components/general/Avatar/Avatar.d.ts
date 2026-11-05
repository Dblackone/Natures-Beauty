import * as React from 'react';

/**
 * Avatar — from @natures-beauty/ui@1.0.0.
 */
export interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "circle" | "square";
  className?: string;
  status?: "online" | "away" | "busy" | "offline";
}

export declare const Avatar: React.ComponentType<AvatarProps>;
