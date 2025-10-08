import React from 'react';

export type ButtonVariant =
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'ghost';

export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    href?: string;
    variant?: ButtonVariant;
    size?: ButtonSize;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    href,
    variant = 'primary',
    size = 'md',
    leftIcon,
    rightIcon,
    loading = false,
    className = '',
    children,
    ...props
}) => {
    const base =
        'inline-flex items-center justify-center gap-2 rounded-md font-medium transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer';

    const sizes: Record<ButtonSize, string> = {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-6 text-[15px]',
        lg: 'h-12 px-7 text-base',
    };

    const variants: Record<ButtonVariant, string> = {
        primary: 'bg-white text-black',
        secondary: 'bg-black text-white',
        outline: 'border border-gray-500 text-black hover:ring-1 hover:ring-gray-300',
        ghost: 'text-gray-700 hover:bg-gray-100',
    };

    const classes = [base, sizes[size], variants[variant], className].filter(Boolean).join(' ');

    const content = (
        <>
            {leftIcon && <span className="shrink-0" aria-hidden>{leftIcon}</span>}
            <span className="whitespace-nowrap">{loading ? 'Cargando…' : children}</span>
            {rightIcon && <span className="shrink-0" aria-hidden>{rightIcon}</span>}
        </>
    );

    if (href) {
        return (
            <a href={href} className={classes} {...(props as any)}>
                {content}
            </a>
        );
    }

    return (
        <button className={classes} {...props}>
            {content}
        </button>
    );
};

