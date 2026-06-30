import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    loading?: boolean;
    fullWidth?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

type BadgeVariant = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
type BadgeSize = 'sm' | 'md';
interface BadgeProps {
    variant?: BadgeVariant;
    size?: BadgeSize;
    children: React.ReactNode;
    className?: string;
    dot?: boolean;
}
declare const Badge: React.FC<BadgeProps>;

type CardVariant = 'default' | 'raised' | 'outlined' | 'filled';
type CardPadding = 'none' | 'sm' | 'md' | 'lg';
interface CardProps {
    variant?: CardVariant;
    padding?: CardPadding;
    interactive?: boolean;
    className?: string;
    children: React.ReactNode;
    as?: React.ElementType;
    onClick?: () => void;
}
interface CardHeaderProps {
    className?: string;
    children: React.ReactNode;
}
interface CardBodyProps {
    className?: string;
    children: React.ReactNode;
}
interface CardFooterProps {
    className?: string;
    children: React.ReactNode;
    divider?: boolean;
}
declare const Card: React.FC<CardProps> & {
    Header: React.FC<CardHeaderProps>;
    Body: React.FC<CardBodyProps>;
    Footer: React.FC<CardFooterProps>;
};

type AlertVariant = 'success' | 'warning' | 'error' | 'info';
interface AlertProps {
    variant?: AlertVariant;
    title?: string;
    children?: React.ReactNode;
    className?: string;
    onDismiss?: () => void;
    icon?: React.ReactNode;
}
declare const Alert: React.FC<AlertProps>;

type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type AvatarVariant = 'circle' | 'square';
type AvatarStatus = 'online' | 'away' | 'busy' | 'offline';
interface AvatarProps {
    src?: string;
    alt?: string;
    name?: string;
    size?: AvatarSize;
    variant?: AvatarVariant;
    className?: string;
    status?: AvatarStatus;
}
declare const Avatar: React.FC<AvatarProps>;

type InputSize = 'sm' | 'md' | 'lg';
interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    label?: string;
    helpText?: string;
    errorText?: string;
    size?: InputSize;
    leftAddon?: React.ReactNode;
    rightAddon?: React.ReactNode;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    fullWidth?: boolean;
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    helpText?: string;
    errorText?: string;
    fullWidth?: boolean;
    resize?: 'none' | 'vertical' | 'horizontal' | 'both';
}
declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;

type SelectSize = 'sm' | 'md' | 'lg';
interface SelectOption {
    value: string;
    label: string;
    disabled?: boolean;
}
interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
    label?: string;
    helpText?: string;
    errorText?: string;
    size?: SelectSize;
    options?: SelectOption[];
    placeholder?: string;
    fullWidth?: boolean;
}
declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLSelectElement>>;

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: string;
    helpText?: string;
    errorText?: string;
    indeterminate?: boolean;
}
declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;

interface DividerProps {
    orientation?: 'horizontal' | 'vertical';
    label?: string;
    className?: string;
}
declare const Divider: React.FC<DividerProps>;

type TextSize = '2xs' | 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
type TextWeight = 'light' | 'regular' | 'semibold' | 'bold';
type TextColor = 'primary' | 'secondary' | 'tertiary' | 'disabled' | 'inverse' | 'accent' | 'link';
type TextAlign = 'left' | 'center' | 'right';
interface TextProps {
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
declare const Text: React.FC<TextProps>;

/**
 * Nature's Beauty Construction — Design Tokens (JS mirror of tokens.css)
 * All values reference CSS custom properties so they stay in sync with the stylesheet.
 */
declare const tokens: {
    readonly color: {
        readonly gold100: "var(--gold-100)";
        readonly gold200: "var(--gold-200)";
        readonly gold300: "var(--gold-300)";
        readonly gold400: "var(--gold-400)";
        readonly gold500: "var(--gold-500)";
        readonly gold600: "var(--gold-600)";
        readonly gold700: "var(--gold-700)";
        readonly gold800: "var(--gold-800)";
        readonly gold900: "var(--gold-900)";
        readonly green100: "var(--green-100)";
        readonly green200: "var(--green-200)";
        readonly green300: "var(--green-300)";
        readonly green400: "var(--green-400)";
        readonly green500: "var(--green-500)";
        readonly green600: "var(--green-600)";
        readonly green700: "var(--green-700)";
        readonly green800: "var(--green-800)";
        readonly green900: "var(--green-900)";
        readonly brown100: "var(--brown-100)";
        readonly brown200: "var(--brown-200)";
        readonly brown300: "var(--brown-300)";
        readonly brown400: "var(--brown-400)";
        readonly brown500: "var(--brown-500)";
        readonly brown600: "var(--brown-600)";
        readonly brown700: "var(--brown-700)";
        readonly brown800: "var(--brown-800)";
        readonly brown900: "var(--brown-900)";
        readonly primary: "var(--color-primary)";
        readonly primaryHover: "var(--color-primary-hover)";
        readonly primaryActive: "var(--color-primary-active)";
        readonly primarySubtle: "var(--color-primary-subtle)";
        readonly primaryOn: "var(--color-primary-on)";
        readonly secondary: "var(--color-secondary)";
        readonly secondaryHover: "var(--color-secondary-hover)";
        readonly secondaryActive: "var(--color-secondary-active)";
        readonly secondarySubtle: "var(--color-secondary-subtle)";
        readonly secondaryOn: "var(--color-secondary-on)";
        readonly surface: "var(--color-surface)";
        readonly surfaceRaised: "var(--color-surface-raised)";
        readonly surfaceSunken: "var(--color-surface-sunken)";
        readonly surfaceOverlay: "var(--color-surface-overlay)";
        readonly surfaceInverse: "var(--color-surface-inverse)";
        readonly textPrimary: "var(--color-text-primary)";
        readonly textSecondary: "var(--color-text-secondary)";
        readonly textTertiary: "var(--color-text-tertiary)";
        readonly textDisabled: "var(--color-text-disabled)";
        readonly textInverse: "var(--color-text-inverse)";
        readonly textAccent: "var(--color-text-accent)";
        readonly textLink: "var(--color-text-link)";
        readonly textLinkHover: "var(--color-text-link-hover)";
        readonly border: "var(--color-border)";
        readonly borderStrong: "var(--color-border-strong)";
        readonly borderFocus: "var(--color-border-focus)";
        readonly success: "var(--color-success)";
        readonly successSubtle: "var(--color-success-subtle)";
        readonly warning: "var(--color-warning)";
        readonly warningSubtle: "var(--color-warning-subtle)";
        readonly error: "var(--color-error)";
        readonly errorSubtle: "var(--color-error-subtle)";
        readonly info: "var(--color-info)";
        readonly infoSubtle: "var(--color-info-subtle)";
    };
    readonly font: {
        readonly display: "var(--font-display)";
        readonly body: "var(--font-body)";
    };
    readonly text: {
        readonly '2xs': "var(--text-2xs)";
        readonly xs: "var(--text-xs)";
        readonly sm: "var(--text-sm)";
        readonly base: "var(--text-base)";
        readonly lg: "var(--text-lg)";
        readonly xl: "var(--text-xl)";
        readonly '2xl': "var(--text-2xl)";
        readonly '3xl': "var(--text-3xl)";
        readonly '4xl': "var(--text-4xl)";
        readonly '5xl': "var(--text-5xl)";
        readonly '6xl': "var(--text-6xl)";
        readonly '7xl': "var(--text-7xl)";
    };
    readonly space: {
        readonly 0: "var(--space-0)";
        readonly px: "var(--space-px)";
        readonly '0.5': "var(--space-0-5)";
        readonly 1: "var(--space-1)";
        readonly 1.5: "var(--space-1-5)";
        readonly 2: "var(--space-2)";
        readonly 3: "var(--space-3)";
        readonly 4: "var(--space-4)";
        readonly 5: "var(--space-5)";
        readonly 6: "var(--space-6)";
        readonly 8: "var(--space-8)";
        readonly 10: "var(--space-10)";
        readonly 12: "var(--space-12)";
        readonly 16: "var(--space-16)";
        readonly 20: "var(--space-20)";
        readonly 24: "var(--space-24)";
        readonly 32: "var(--space-32)";
    };
    readonly radius: {
        readonly none: "var(--radius-none)";
        readonly sm: "var(--radius-sm)";
        readonly md: "var(--radius-md)";
        readonly lg: "var(--radius-lg)";
        readonly xl: "var(--radius-xl)";
        readonly '2xl': "var(--radius-2xl)";
        readonly '3xl': "var(--radius-3xl)";
        readonly full: "var(--radius-full)";
    };
    readonly shadow: {
        readonly sm: "var(--shadow-sm)";
        readonly md: "var(--shadow-md)";
        readonly lg: "var(--shadow-lg)";
        readonly xl: "var(--shadow-xl)";
        readonly '2xl': "var(--shadow-2xl)";
        readonly inner: "var(--shadow-inner)";
        readonly gold: "var(--shadow-gold)";
        readonly green: "var(--shadow-green)";
    };
    readonly transition: {
        readonly fast: "var(--transition-fast)";
        readonly base: "var(--transition-base)";
        readonly slow: "var(--transition-slow)";
    };
};
type Tokens = typeof tokens;

/** Lightweight className combiner. */
declare function cx(...classes: (string | number | undefined | false | null)[]): string;

export { Alert, type AlertProps, type AlertVariant, Avatar, type AvatarProps, type AvatarSize, type AvatarVariant, Badge, type BadgeProps, type BadgeSize, type BadgeVariant, Button, type ButtonProps, type ButtonSize, type ButtonVariant, Card, type CardBodyProps, type CardFooterProps, type CardHeaderProps, type CardProps, type CardVariant, Checkbox, type CheckboxProps, Divider, type DividerProps, Input, type InputProps, type InputSize, Select, type SelectOption, type SelectProps, type SelectSize, Text, type TextAlign, type TextColor, type TextProps, type TextSize, type TextWeight, Textarea, type TextareaProps, type Tokens, cx, tokens };
