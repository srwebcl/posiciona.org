import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/app/lib/utils";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    hoverEffect?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className, children, hoverEffect = false, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "relative rounded-xl border border-white/5 bg-night-blue/50 backdrop-blur-md p-6 overflow-hidden",
                    hoverEffect && "transition-all duration-300 hover:border-cyan-electric/30 hover:shadow-[0_0_30px_rgba(0,194,255,0.1)] hover:-translate-y-1 group",
                    className
                )}
                {...props}
            >
                {/* Decorator line for cyber effect */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                {children}
            </div>
        );
    }
);
Card.displayName = "Card";

export { Card };
