"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/app/components/ui/button";
import { ChevronRight, Sparkles, Terminal } from "lucide-react";

const HERO_VIDEOS = [
    "/imagenes/simulador.mp4",
    "/imagenes/cursos.mp4"
];

export function Hero() {
    const [currentVideo, setCurrentVideo] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentVideo((prev) => (prev + 1) % HERO_VIDEOS.length);
        }, 8000); // Switch every 8 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-night-blue">
            {/* Video Background Layer with Cinematic Overlay */}
            <div className="absolute inset-0 z-0">
                {/* 1. Tint Layer - Unifies video tone */}
                <div className="absolute inset-0 bg-navy-deep/30 mix-blend-overlay z-20" />

                {/* 2. Vignette - Focus attention to center */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#020617_100%)] opacity-90 z-20" />

                {/* 3. Deep Gradient - Legibility for top/bottom text */}
                <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/80 via-transparent to-navy-deep/90 z-20" />

                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={currentVideo}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-0 z-10"
                    >
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover grayscale-[20%] contrast-125"
                            key={HERO_VIDEOS[currentVideo]} // Force reload on change
                        >
                            <source src={HERO_VIDEOS[currentVideo]} type="video/mp4" />
                        </video>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Animated Cyber Particles/Masks */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <div className="absolute top-10 left-10 w-64 h-64 bg-cyan-electric/30 rounded-full blur-[100px]" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-industrial/20 rounded-full blur-[120px]" />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 z-30 relative text-center flex flex-col items-center justify-center h-full pt-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} // Custom easing for premium feel
                    className="max-w-6xl mx-auto"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-10 shadow-[0_0_20px_rgba(255,176,0,0.1)] group hover:bg-white/10 transition-colors cursor-default"
                    >
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
                        </span>
                        <span className="text-xs md:text-sm font-mono font-bold tracking-[0.2em] text-gray-300 uppercase group-hover:text-amber-vial transition-colors">
                            NCh 2728 • ISO 9001
                        </span>
                    </motion.div>

                    {/* H1 Masterpiece - Optimized Visibility */}
                    <div className="relative mb-8">
                        {/* Glow Effect behind text - Intensified for separation */}
                        <div className="absolute inset-0 bg-amber-vial/10 blur-[80px] opacity-30 pointer-events-none rounded-full" />

                        {/*
                           ALTERNATIVE: "Soft-Lift Shadow"
                           We use drop-shadow for the shape definition (softer) + a very subtle text-shadow for edge definition.
                           This stays clean but adds the requested "pop".
                        */}
                        <h1 className="text-3xl md:text-5xl lg:text-5xl xl:text-7xl font-black tracking-tight md:tracking-tighter text-white leading-[1.1] uppercase relative z-10 drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                            Centro de <br className="md:hidden" /> Capacitación <br />
                            <span className="relative inline-block mt-2 px-4 pb-4 max-w-[95vw] md:max-w-full break-words">
                                {/* Gradient Text with Shining Animation */}
                                <span className="text-transparent bg-clip-text bg-[linear-gradient(110deg,#FFB000,45%,#FFF,55%,#FFB000)] bg-[length:200%_100%] animate-shine drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] pe-4">
                                    & Escuela de Conductores
                                </span>
                            </span>
                        </h1>
                    </div>

                    {/* Paragraph - Slightly Larger & More Readable */}
                    <p className="text-xl md:text-2xl text-gray-100 mb-10 max-w-4xl mx-auto leading-relaxed font-light tracking-wide drop-shadow-md">
                        <span className="text-white font-semibold">15 años de excelencia.</span> Líderes en formación <span className="py-1 px-2 mb bg-white/10 rounded text-amber-vial font-bold backdrop-blur-sm">Industrial</span> y <span className="py-1 px-3 bg-white/90 rounded text-navy-deep font-bold backdrop-blur-sm shadow-lg">Digital</span> desde Arica.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                        <Link href="/personas">
                            <Button size="lg" variant="primary" className="w-full sm:w-auto text-base h-12 px-6 shadow-[0_0_20px_rgba(255,176,0,0.3)] hover:shadow-[0_0_40px_rgba(255,176,0,0.5)] border-amber-vial/50">
                                Soluciones Personas
                                <ChevronRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                        <Link href="/empresas">
                            <Button size="lg" variant="secondary" className="w-full sm:w-auto text-base h-12 px-6 backdrop-blur-md border-blue-inst/50 shadow-[0_0_15px_rgba(15,96,160,0.2)]">
                                <Terminal className="mr-2 w-4 h-4" />
                                Soluciones Empresas
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
