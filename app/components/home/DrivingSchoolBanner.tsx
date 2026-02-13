"use client";

import Link from "next/link";
import { TechButton } from "@/app/components/ui/tech-button";
import { Clock, ShieldCheck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function DrivingSchoolBanner() {
    return (
        <section className="py-20 bg-dark-base relative overflow-hidden border-y border-white/5">
            <div className="absolute inset-0 bg-blue-inst/5 mix-blend-overlay" /> {/* Subtle Tint */}
            {/* Animated Light Beam */}
            <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-vial/10 to-transparent skew-x-12 pointer-events-none"
            />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-left max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-vial/10 text-amber-vial border border-amber-vial/20 mb-4 tech-glow text-xs font-mono font-bold uppercase tracking-wider">
                            <ShieldCheck className="w-4 h-4" /> Nueva Acreditación
                        </div>

                        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase italic leading-tight">
                            De 4 a SOLO <span className="text-amber-vial text-explosive">2 AÑOS</span><br />
                            Para tu Licencia Profesional A3
                        </h2>

                        <p className="text-lg text-gray-300 mb-0 font-mono flex flex-col gap-2">
                            <span><Clock className="w-5 h-5 text-amber-vial inline mr-2" />
                                Ventaja exclusiva del Curso Especial con Simulador.</span>
                            <span className="text-sm opacity-70">Acelera tu inserción laboral en transporte y minería.</span>
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 w-full md:w-auto">
                        <Link href="/escuela-conductores">
                            <TechButton variant="primary" size="lg" className="w-full md:w-auto h-16 text-lg">
                                Postular Ahora <ArrowRight className="ml-2 w-5 h-5" />
                            </TechButton>
                        </Link>
                        <p className="text-xs text-center text-gray-500 font-mono uppercase">
                            Cupos Limitados • Inicia Marzo
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
