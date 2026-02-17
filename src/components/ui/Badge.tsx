import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

const badgeVariants = cva(
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
        variants: {
            variant: {
                default:
                    "border-transparent bg-primary-600 text-white hover:bg-primary-700",
                secondary:
                    "border-transparent bg-secondary-100 text-secondary-900 hover:bg-secondary-200",
                destructive:
                    "border-transparent bg-red-500 text-white hover:bg-red-600",
                outline: "text-slate-950",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
    variant?: "default" | "secondary" | "destructive" | "outline" | null;
}

function Badge({ className, variant, ...props }: BadgeProps) {
    return (
        <div className={twMerge(clsx(badgeVariants({ variant }), className))} {...props} />
    );
}

export { Badge, badgeVariants };
