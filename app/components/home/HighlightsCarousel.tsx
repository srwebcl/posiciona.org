"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Play, Cpu, Award, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/app/components/ui/button";

const HIGHLIGHTS = [
    {
        id: 1,
        category: "ESCUELA DE CONDUCTORES",
        title: "Entrenamiento con Simuladores Europeos",
        description: "Únicos en el norte con tecnología de Realidad Virtual para cursos A3 y A5. Reduce riesgos y mejora tu aprendizaje.",
        image: "/imagenes/posiciona-20.jpeg",
        icon: Play,
        color: "amber",
        link: "/escuela-conductores",
        badge: "Tecnología 2025"
    },
    {
        id: 2,
        category: "TALENTO DIGITAL",
        title: "Bootcamps de Programación & Data",
        description: "Reconversión laboral acelerada. Aprende las habilidades tecnológicas más demandadas por la industria hoy.",
        image: "/imagenes/posiciona-24.png",
        icon: Cpu,
        color: "cyan",
        link: "/talento-digital",
        badge: "Beca Disponible"
    },
    {
        id: 3,
        category: "CERTIFICACIÓN",
        title: "Evaluación de Competencias WYLAR",
        description: "¿Tienes la experiencia pero no el título? Certifica tu oficio bajo ChileValora y mejora tu sueldo.",
        image: "/imagenes/posiciona-10.jpeg",
        icon: Award,
        color: "blue",
        link: "/empresas",
        badge: "Validez Nacional"
    }
];

const ALLIANCES = [
    { name: "SENCE", logo: "/imagenes/logo-sence.webp", scale: 1 },
    { name: "TALENTO DIGITAL", logo: "/imagenes/logo-talento-digital.png", scale: 1.15 },
    { name: "WYLAR", logo: "/imagenes/logo-wylar.webp", scale: 0.9 },
    { name: "CHILE VALORA", logo: "/imagenes/logo_chilevalora.png", scale: 1.1 },
    { name: "CORFO", logo: "/imagenes/logo-corfo-becas.png", scale: 1.15 },
];

export function HighlightsCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Handlers for Desktop Navigation
    const nextSlide = () => {
        setCurrentIndex((prev: number) => (prev + 1) % HIGHLIGHTS.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev: number) => (prev - 1 + HIGHLIGHTS.length) % HIGHLIGHTS.length);
    };

    // Helper to get current icon component
    const CurrentIcon = HIGHLIGHTS[currentIndex].icon;

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    {/* LEFT COLUMN: Text & Controls */}
                    <div className="lg:col-span-5 flex flex-col items-start text-left">
                        <span className="inline-block py-1 px-3 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 font-mono text-[10px] sm:text-xs font-bold tracking-widest mb-6">
                            FORMACIÓN & CERTIFICACIÓN
                        </span>

                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-navy-deep uppercase tracking-tighter mb-6 leading-[0.95]">
                            Impulsamos tu <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-vial to-orange-600">
                                Crecimiento
                            </span>
                        </h3>

                        <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-md">
                            Ya sea que busques tu licencia profesional, aprender programación o certificar tu oficio, en Posiciona tenemos una ruta para ti. Desarrollamos capital humano con tecnología de punta y estándares de calidad certificada (ISO 9001).
                        </p>

                        {/* Desktop Controls */}
                        <div className="hidden lg:flex gap-3">
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={prevSlide}
                                className="rounded-full w-14 h-14 border-2 border-gray-100 hover:border-amber-vial hover:text-amber-vial hover:bg-white text-gray-400 transition-all duration-300 group"
                                aria-label="Anterior"
                            >
                                <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
                            </Button>
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={nextSlide}
                                className="rounded-full w-14 h-14 border-2 border-gray-100 hover:border-amber-vial hover:text-amber-vial hover:bg-white text-gray-400 transition-all duration-300 group"
                                aria-label="Siguiente"
                            >
                                <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
                            </Button>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Visual Display */}
                    <div className="lg:col-span-7 w-full relative">

                        {/* DESKTOP VIEW: Single Card with Transitions */}
                        <div className="hidden lg:block relative h-[500px] w-full max-w-md mx-auto">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className="absolute inset-0 w-full h-full"
                                >
                                    {/* Card Component (Reused Logic) */}
                                    <div className="w-full h-full relative group rounded-[2.5rem] overflow-hidden shadow-2xl shadow-navy-deep/20 border border-gray-100">
                                        {/* Background */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${HIGHLIGHTS[currentIndex].color === 'amber' ? 'from-amber-900 via-amber-950 to-black' :
                                            HIGHLIGHTS[currentIndex].color === 'cyan' ? 'from-cyan-900 via-cyan-950 to-black' :
                                                'from-blue-900 via-blue-950 to-black'
                                            }`} />
                                        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110 opacity-60 mix-blend-overlay">
                                            <Image
                                                src={HIGHLIGHTS[currentIndex].image}
                                                alt={HIGHLIGHTS[currentIndex].title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />

                                        {/* Top Badge */}
                                        <div className="absolute top-8 left-8 z-20">
                                            <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border backdrop-blur-md ${HIGHLIGHTS[currentIndex].color === 'amber' ? 'bg-amber-500/20 border-amber-500/50 text-amber-400' :
                                                HIGHLIGHTS[currentIndex].color === 'cyan' ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400' :
                                                    'bg-blue-500/20 border-blue-500/50 text-blue-400'
                                                }`}>
                                                <CurrentIcon className="w-4 h-4" />
                                                {HIGHLIGHTS[currentIndex].badge}
                                            </span>
                                        </div>

                                        {/* Content */}
                                        <div className="absolute bottom-0 left-0 right-0 p-10 z-20">
                                            <span className="block text-xs font-black uppercase tracking-widest text-white/60 mb-3">
                                                {HIGHLIGHTS[currentIndex].category}
                                            </span>
                                            <h4 className="text-3xl font-bold text-white mb-4 leading-tight">
                                                {HIGHLIGHTS[currentIndex].title}
                                            </h4>
                                            <Link href={HIGHLIGHTS[currentIndex].link}>
                                                <Button className={`w-full rounded-2xl font-bold h-14 text-base border-none transition-all duration-300 ${HIGHLIGHTS[currentIndex].color === 'amber' ? 'bg-amber-500 hover:bg-amber-600' :
                                                    HIGHLIGHTS[currentIndex].color === 'cyan' ? 'bg-cyan-500 hover:bg-cyan-600' :
                                                        'bg-blue-600 hover:bg-blue-700'
                                                    }`}>
                                                    Explorar <ArrowUpRight className="ml-2 w-5 h-5" />
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Progress Decoration for Desktop */}
                            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
                                {HIGHLIGHTS.map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={`transition-all duration-300 rounded-full h-1.5 ${idx === currentIndex ? 'w-8 bg-navy-deep' : 'w-2 bg-gray-200'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* MOBILE VIEW: Horizontal Scroll (Original) */}
                        <div className="flex lg:hidden overflow-x-auto snap-x snap-mandatory gap-4 pb-8 scrollbar-hide -mx-4 px-4">
                            {HIGHLIGHTS.map((item) => (
                                <div
                                    key={item.id}
                                    className="snap-center shrink-0 w-[85vw] aspect-[4/5] relative rounded-3xl overflow-hidden shadow-lg"
                                >
                                    {/* Simplified Card for Mobile */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color === 'amber' ? 'from-amber-900 to-black' :
                                        item.color === 'cyan' ? 'from-cyan-900 to-black' :
                                            'from-blue-900 to-black'
                                        }`} />
                                    <Image src={item.image} alt={item.title} fill className="object-cover opacity-60 mix-blend-overlay" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />

                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                                        <Link href={item.link}>
                                            <Button size="sm" className="w-full rounded-xl bg-white/10 backdrop-blur border border-white/20 hover:bg-white/20">
                                                Ver Más
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* INTEGRATED ALLIANCE TICKER */}
            <div className="mt-20 border-t border-gray-100 pt-12 relative">
                {/* Added py-4 to extend vertical space for scaled logos */}
                <div className="flex overflow-hidden relative z-10 masking-gradient-white py-4">
                    <motion.div
                        className="flex min-w-full items-center gap-10 md:gap-20 pl-4"
                        animate={{ x: ["0%", "-100%"] }}
                        transition={{ duration: 45, ease: "linear", repeat: Infinity }}
                    >
                        {[...ALLIANCES, ...ALLIANCES, ...ALLIANCES, ...ALLIANCES].map((partner, idx) => (
                            <div key={idx} className="relative group flex items-center justify-center shrink-0 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-500">
                                <div
                                    className="relative h-12 w-36 md:w-44 transition-transform duration-300"
                                    style={{ transform: `scale(${partner.scale})` }}
                                >
                                    <Image
                                        src={partner.logo}
                                        alt={partner.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
