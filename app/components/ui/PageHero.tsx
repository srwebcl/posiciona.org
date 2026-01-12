"use client";

import { cn } from "@/app/lib/utils";
import { motion } from "framer-motion";
import { ParticleNetwork } from "@/app/components/ui/particle-network";

interface PageHeroProps {
    badge?: string;
    title: React.ReactNode | string;
    description?: string;
    image?: string;
    video?: string;
    align?: "left" | "center";
    particles?: boolean;
    children?: React.ReactNode;
    className?: string;
}

export function PageHero({
    badge,
    title,
    description,
    image,
    video,
    align = "center",
    particles = true,
    children,
    className,
}: PageHeroProps) {
    return (
        <section className={cn("relative py-24 md:py-32 bg-navy-deep overflow-hidden", className)}>
            {/* Background Layer */}
            <div className="absolute inset-0 z-0">
                {video ? (
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-30"
                    >
                        <source src={video} type="video/mp4" />
                    </video>
                ) : image ? (
                    <div
                        className="w-full h-full bg-cover bg-center opacity-20"
                        style={{ backgroundImage: `url(${image})` }}
                    />
                ) : (
                    // Default gradient background if no media
                    <div className="w-full h-full bg-gradient-to-br from-navy-deep via-navy-deep to-blue-900/20" />
                )}

                {/* Overlay gradient for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/80 to-transparent" />
            </div>

            {/* Particles Effect */}
            {particles && (
                <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
                    <ParticleNetwork />
                </div>
            )}

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10">
                <div className={cn(
                    "max-w-4xl mx-auto space-y-6",
                    align === "center" ? "text-center" : "text-center md:text-left mx-auto md:mx-0"
                )}>
                    {badge && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-amber-vial font-mono text-xs font-bold tracking-widest backdrop-blur-md uppercase">
                                {badge}
                            </span>
                        </motion.div>
                    )}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-tight">
                            {title}
                        </h1>
                    </motion.div>

                    {description && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <p className="text-lg md:text-xl text-gray-300 font-mono leading-relaxed max-w-2xl mx-auto md:mx-0" style={align === "center" ? { marginLeft: "auto", marginRight: "auto" } : {}}>
                                {description}
                            </p>
                        </motion.div>
                    )}

                    {children && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="pt-4"
                        >
                            {children}
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
}
