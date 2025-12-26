"use client";

import { motion } from "framer-motion";

const alliances = [
    { name: "SENCE", sub: "Ministerio del Trabajo" },
    { name: "TALENTO DIGITAL", sub: "Para Chile" },
    { name: "WYLAR", sub: "Certificación Competencias ISO" },
    { name: "CHILE VALORA", sub: "Sistema Nacional" },
    { name: "CORFO", sub: "Becas Capital Humano" },
];

export function AllianceCarousel() {
    return (
        <section className="py-12 bg-navy-deep border-t border-white/5 relative overflow-hidden">
            {/* Scrolling Content */}
            <div className="flex overflow-hidden relative z-10">
                <motion.div
                    className="flex gap-16 md:gap-32 min-w-full px-4"
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{ duration: 30, ease: "linear", repeat: Infinity }}
                >
                    {[...alliances, ...alliances, ...alliances].map((partner, idx) => (
                        <div key={idx} className="flex flex-col items-center justify-center min-w-max grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100">
                            <span className="text-2xl font-black text-white">{partner.name}</span>
                            <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">{partner.sub}</span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Gradient Masks */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-navy-deep to-transparent z-20" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-navy-deep to-transparent z-20" />
        </section>
    );
}
