"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/app/components/ui/button";
import { Users, FileCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

const SLIDES = [
    {
        id: "capacitacion",
        video: "/imagenes/cursos.mp4",
        title: "Potencia tu Capital Humano",
        subtitle: "Soluciones de capacitación a medida, gestión SENCE y cierre de brechas para equipos de alto rendimiento.",
        cta: { text: "Ver Soluciones", href: "/empresas/capacitaciones", icon: Users, variant: "primary" as const }
    },
    {
        id: "certificacion",
        video: "/imagenes/simulador.mp4",
        title: "Certificación de Calidad",
        subtitle: "Asegure la excelencia de sus procesos con certificación NCh 2728 y competencias laborales.",
        cta: { text: "Consultar Normas", href: "/empresas/certificaciones", icon: FileCheck, variant: "secondary" as const }
    }
];

export function EmpresasHero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
        }, 8000); // 8 seconds per slide
        return () => clearInterval(timer);
    }, []);

    const slide = SLIDES[currentSlide];

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-navy-deep">
            {/* Background Layers (Video + Overlays) */}
            <div className="absolute inset-0 z-0">
                {/* Overlays (Static across slides for consistency) */}
                <div className="absolute inset-0 bg-navy-deep/30 mix-blend-overlay z-20 pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#020617_100%)] opacity-90 z-20 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/80 via-transparent to-navy-deep/90 z-20 pointer-events-none" />

                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={slide.id}
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
                            key={slide.video} // Force reload on source change
                        >
                            <source src={slide.video} type="video/mp4" />
                        </video>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Particle Effects (Static) */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <div className="absolute top-10 left-10 w-64 h-64 bg-cyan-500/30 rounded-full blur-[100px]" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/20 rounded-full blur-[120px]" />
            </div>

            {/* Content Container */}
            <div className="container mx-auto px-4 z-30 relative text-center flex flex-col items-center justify-center h-full pt-16">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={slide.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-6xl mx-auto"
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-10 shadow-[0_0_20px_rgba(255,176,0,0.1)]">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${currentSlide === 0 ? "bg-amber-400" : "bg-blue-400"}`}></span>
                                <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${currentSlide === 0 ? "bg-amber-500" : "bg-blue-500"}`}></span>
                            </span>
                            <span className="text-xs md:text-sm font-mono font-bold tracking-[0.2em] text-gray-300 uppercase">
                                {currentSlide === 0 ? "Soluciones Corporativas" : "Normativa y Calidad"}
                            </span>
                        </div>

                        {/* Title */}
                        <div className="relative mb-8">
                            <div className={`absolute inset-0 blur-[80px] opacity-30 pointer-events-none rounded-full ${currentSlide === 0 ? "bg-amber-vial/10" : "bg-blue-500/20"}`} />
                            <h1 className="text-3xl md:text-5xl lg:text-5xl xl:text-7xl font-black tracking-tight text-white leading-[1.1] uppercase relative z-10 drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                                {slide.id === "capacitacion" ? (
                                    <>
                                        Potencia tu <br />
                                        <span className="text-transparent bg-clip-text bg-[linear-gradient(110deg,#FFB000,45%,#FFF,55%,#FFB000)] bg-[length:200%_100%] animate-shine drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                                            Capital Humano
                                        </span>
                                    </>
                                ) : (
                                    <>
                                        Certificación de <br />
                                        <span className="text-transparent bg-clip-text bg-[linear-gradient(110deg,#3b82f6,45%,#FFF,55%,#3b82f6)] bg-[length:200%_100%] animate-shine drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                                            Calidad y Procesos
                                        </span>
                                    </>
                                )}
                            </h1>
                        </div>

                        {/* Subtitle */}
                        <p className="text-xl md:text-2xl text-gray-100 mb-10 max-w-4xl mx-auto leading-relaxed font-light tracking-wide drop-shadow-md">
                            {slide.subtitle}
                        </p>

                        {/* CTA Button */}
                        <div className="flex justify-center">
                            <Link href={slide.cta.href}>
                                <Button
                                    size="lg"
                                    variant={slide.cta.variant}
                                    className={`text-base h-12 px-8 font-bold shadow-lg transition-all duration-300 ${slide.cta.variant === "primary"
                                        ? "border border-amber-vial/50 bg-amber-vial hover:bg-amber-600 text-navy-deep shadow-[0_0_20px_rgba(255,176,0,0.3)]"
                                        : "backdrop-blur-md border border-blue-inst/50 bg-blue-600/80 hover:bg-blue-600 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                                        }`}
                                >
                                    {slide.cta.text}
                                    <slide.cta.icon className="ml-2 w-4 h-4" />
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
