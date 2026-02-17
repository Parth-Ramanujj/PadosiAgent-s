import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
    {
        variants: {
            variant: {
                default: "bg-primary-600 text-white hover:bg-primary-700 shadow-sm",
                secondary: "bg-secondary-100 text-secondary-900 hover:bg-secondary-200",
                outline: "border border-input hover:bg-accent hover:text-accent-foreground",
                ghost: "hover:bg-slate-100 hover:text-slate-900",
                link: "underline-offset-4 hover:underline text-primary",
            },
            size: {
                default: "h-10 py-2 px-4",
                sm: "h-9 px-3 rounded-md",
                lg: "h-11 px-8 rounded-md text-base",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    variant?: "default" | "secondary" | "outline" | "ghost" | "link" | null;
    size?: "default" | "sm" | "lg" | "icon" | null;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, ...props }, ref) => {
        return (
            <button
                className={twMerge(clsx(buttonVariants({ variant, size, className })))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
