import * as React from 'react';

/**
 * Card — from @natures-beauty/ui@1.0.0.
 */
export interface CardProps {
  variant?: "default" | "raised" | "outlined" | "filled";
  padding?: "sm" | "md" | "lg" | "none";
  interactive?: boolean;
  className?: string;
  children: React.ReactNode;
  as?: "symbol" | "object" | "circle" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | (string & {}) /* +164 more */;
  onClick?: () => void;
}

export declare const Card: React.ComponentType<CardProps> & {
  Header: React.ComponentType<any>;
  Body: React.ComponentType<any>;
  Footer: React.ComponentType<any>;
};
