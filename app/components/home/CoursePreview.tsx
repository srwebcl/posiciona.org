"use client";

import { GlassCard } from "@/app/components/ui/glass-card";
import { Badge } from "@/app/components/ui/badge";
import { Code2, Flame, Truck } from "lucide-react";

// Simplified preview of main pillars
const highlights = [
    {
        icon: Code2,
        title: "Talento Digital",
        desc: "Desarrollo Full Stack & Ciberseguridad.",
        status: "ADMISIÓN ABIERTA",
        color: "text-blue-inst",
        glow: "group-hover:text-amber-vial",
    },
    {
        icon: Truck,
        title: "Escuela de Conductores",
        desc: "Licencias Profesionales A2 - A3 - A5.",
        status: "MÁXIMA DEMANDA",
        color: "text-amber-vial",
        glow: "",
    },
    {
        icon: Flame,
        title: "Oficios Industriales",
        desc: "Soldadura, Electricidad y Maquinaria.",
        status: "CERTIFICACIÓN SENCE",
        color: "text-gray-300",
        glow: "group-hover:text-amber-vial",
    },
];

export function CoursePreview() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {highlights.map((item, idx) => (
                        <GlassCard key={idx} className="group cursor-pointer">
                            <div className="flex justify-between items-start mb-6">
                                <div className={`p-3 rounded-xl bg-white/5 ${item.color} ${item.glow} transition-colors`}>
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <div className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest border border-white/10 px-2 py-1 rounded bg-black/20">
                                    {item.status}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-vial transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-sm text-gray-400 font-mono">
                                {item.desc}
                            </p>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
