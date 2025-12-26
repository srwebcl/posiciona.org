"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/app/lib/utils";
import { motion } from "framer-motion";

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 uppercase tracking-wider font-sans",
    {
        variants: {
            variant: {
                primary: "bg-amber-vial text-navy-deep hover:bg-white hover:text-amber-vial tech-glow",
                secondary: "bg-blue-inst/20 text-white border border-blue-inst/40 hover:bg-blue-inst/40 hover:border-amber-vial hover:text-amber-vial",
                outline: "border border-amber-vial text-amber-vial hover:bg-amber-vial hover:text-navy-deep",
                ghost: "hover:bg-white/10 hover:text-amber-vial text-gray-300",
                link: "text-amber-vial underline-offset-4 hover:underline",
            },
            size: {
                default: "h-11 px-6 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-14 rounded-md px-10 text-base",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const TechButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
TechButton.displayName = "TechButton";

export { TechButton, buttonVariants };
