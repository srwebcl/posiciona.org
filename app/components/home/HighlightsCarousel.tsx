"use client";

import { motion } from "framer-motion";
import { Cpu, TrendingUp, ShieldCheck } from "lucide-react";
import Image from "next/image";

const STRENGTHS = [
    {
        title: "Tecnología de Punta",
        description: "Únicos con simuladores de realidad virtual para entrenamiento seguro.",
        icon: Cpu,
        color: "text-amber-500",
        bg: "bg-amber-500/10",
        border: "border-amber-500/20"
    },
    {
        title: "Certificación Oficial",
        description: "Normativa NCh 2728 y acreditación del Ministerio de Transportes.",
        icon: ShieldCheck,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20"
    },
    {
        title: "Impacto Real",
        description: "Más de 5.000 egresados insertados en el mercado laboral.",
        icon: TrendingUp,
        color: "text-green-500",
        bg: "bg-green-500/10",
        border: "border-green-500/20"
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
    return (
        <section className="py-24 bg-white overflow-hidden relative">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

            <div className="container mx-auto px-4">

                {/* 1. Header Centrado */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block py-1 px-3 rounded-full bg-navy-deep/5 border border-navy-deep/10 text-navy-deep font-mono text-xs font-bold tracking-widest mb-4">
                        AUTORIDAD & CONFIANZA
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-navy-deep uppercase tracking-tighter mb-6">
                        Impulsamos tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-vial to-orange-600">Crecimiento</span>
                    </h2>
                    <p className="text-gray-500 text-lg leading-relaxed">
                        En Posiciona, no solo entregamos cursos. Entregamos <strong>certeza y respaldo</strong>.
                        Somos un Organismo Técnico de Capacitación (OTEC) certificado, comprometido con la excelencia,
                        la seguridad normativa y la innovación tecnológica.
                    </p>
                </div>

                {/* 2. Grid de Fortalezas (Icons) */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {STRENGTHS.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 group text-center"
                        >
                            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${item.bg} ${item.color} ${item.border} border shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                                <item.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-navy-deep mb-3 uppercase tracking-tight">
                                {item.title}
                            </h3>
                            <p className="text-gray-500 leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* 3. Logos de Alianzas (Ticker) */}
                <div className="border-t border-gray-100 pt-12 relative">
                    <p className="text-center text-gray-400 text-xs font-bold tracking-widest uppercase mb-8">
                        RESPALDO INSTITUCIONAL
                    </p>
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

            </div>
        </section>
    );
}
