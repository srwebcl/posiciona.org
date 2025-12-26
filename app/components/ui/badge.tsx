import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/app/lib/utils";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: "default" | "outline" | "tech" | "success" | "warning";
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
    ({ className, variant = "default", ...props }, ref) => {
        const variants = {
            default: "bg-posiciona-blue/20 text-posiciona-blue border-transparent",
            outline: "bg-transparent border-white/20 text-gray-300",
            tech: "bg-cyan-electric/10 text-cyan-electric border-cyan-electric/30 font-mono tracking-wider",
            success: "bg-green-500/10 text-green-400 border-green-500/20",
            warning: "bg-orange-industrial/10 text-orange-industrial border-orange-industrial/20",
        };

        return (
            <span
                ref={ref}
                className={cn(
                    "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
                    variants[variant],
                    className
                )}
                {...props}
            />
        );
    }
);
Badge.displayName = "Badge";

export { Badge };
