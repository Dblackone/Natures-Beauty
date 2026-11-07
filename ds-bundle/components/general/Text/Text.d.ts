import * as React from 'react';

/**
 * Text — from @natures-beauty/ui@1.0.0.
 */
export interface TextProps {
  as?: "symbol" | "object" | "circle" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | (string & {}) /* +164 more */;
  size?: "xs" | "sm" | "lg" | "xl" | "base" | "2xs" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl";
  weight?: "light" | "regular" | "semibold" | "bold";
  color?: "primary" | "secondary" | "link" | "disabled" | "tertiary" | "inverse" | "accent";
  align?: "center" | "left" | "right";
  display?: boolean;
  truncate?: boolean;
  className?: string;
  children: React.ReactNode;
}

export declare const Text: React.ComponentType<TextProps>;
