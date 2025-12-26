"use client";

import * as React from "react";
import { cn } from "@/app/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface GlassCardProps extends HTMLMotionProps<"div"> {
    hoverEffect?: boolean;
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
    ({ className, hoverEffect = true, children, ...props }, ref) => {
        return (
            <motion.div
                ref={ref}
                whileHover={hoverEffect ? { y: -5 } : undefined}
                className={cn(
                    "relative overflow-hidden rounded-xl border border-white/10 bg-blue-inst/10 backdrop-blur-md transition-all duration-300",
                    hoverEffect && "hover:border-b-amber-vial hover:shadow-[0_10px_40px_-10px_rgba(255,176,0,0.2)]",
                    className
                )}
                {...props}
            >
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

                {/* Ambient light reflection top */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                <motion.div className="relative z-10 p-6">
                    {children}
                </motion.div>
            </motion.div>
        );
    }
);
GlassCard.displayName = "GlassCard";

export { GlassCard };
