"use client";

import Image from "next/image";
import { cn } from "@/app/lib/utils";

interface BrandLogoProps {
    className?: string;
    variant?: "default" | "white";
}

export function BrandLogo({ className, variant = "white" }: BrandLogoProps) {
    return (
        <div className={cn("relative w-40 h-10", className)}>
            <Image
                src="/imagenes/Logo-Posiciona.webp"
                alt="Posiciona.org"
                fill
                className={cn(
                    "object-contain transition-all duration-300",
                    variant === "white" && "filter-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                )}
                priority
            />
        </div>
    );
}
