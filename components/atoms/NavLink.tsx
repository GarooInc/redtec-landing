// components/atoms/NavLink.tsx
import * as React from 'react';
import Link from 'next/link'

type Props = React.PropsWithChildren<{ href?: string; variant?: NavLinkVariant }>;
export type NavLinkVariant =
| "primary" 
| "secondary" 
| "outline"


const variants: Record<NavLinkVariant, string> = {
    primary:
    "text-white",
    secondary:
    "text-neutral-900 dark:text-white",
    outline:
    "border border-neutral-300 text-neutral-900 hover:bg-neutral-50 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800",
};

export const NavLink: React.FC<Props> = ({ href = '#', variant = 'secondary', children }) => (
    <Link
        href={href}
        className={`px-3 py-2 text-[15px] ${variants[variant]} hover:text-neutral-900 dark:hover:text-white`}
    >
        {children}
    </Link>
);