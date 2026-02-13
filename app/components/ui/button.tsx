import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/app/lib/utils";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "cyber" | "link";
    size?: "sm" | "md" | "lg" | "icon";
    isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, children, variant = "primary", size = "md", isLoading, disabled, ...props }, ref) => {
        const variants = {
            primary: "bg-orange-industrial text-white hover:bg-orange-600 shadow-[0_0_15px_rgba(255,102,0,0.3)] border border-transparent",
            secondary: "bg-posiciona-blue text-white hover:bg-blue-800 border border-transparent",
            outline: "bg-transparent border border-cyan-electric text-cyan-electric hover:bg-cyan-electric/10 shadow-[0_0_10px_rgba(0,194,255,0.2)]",
            ghost: "bg-transparent text-gray-300 hover:text-white hover:bg-white/5",
            cyber: "bg-night-blue border-l-4 border-cyan-electric text-white hover:bg-cyan-electric/10 hover:border-orange-industrial transition-all duration-300 uppercase tracking-widest font-mono",
            link: "text-posiciona-blue underline-offset-4 hover:underline bg-transparent",
        };

        const sizes = {
            sm: "h-8 px-3 text-xs",
            md: "h-10 px-5 text-sm",
            lg: "h-12 px-8 text-base font-semibold",
            icon: "h-10 w-10 p-2 flex items-center justify-center",
        };

        return (
            <button
                ref={ref}
                disabled={isLoading || disabled}
                className={cn(
                    "inline-flex items-center justify-center rounded-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-electric/50 focus:ring-offset-2 focus:ring-offset-night-blue disabled:opacity-50 disabled:pointer-events-none active:scale-95",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";

export { Button };
