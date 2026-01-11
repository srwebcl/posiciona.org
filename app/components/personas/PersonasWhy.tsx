"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Trophy, Users, MonitorSmartphone } from "lucide-react";

const REASONS = [
    {
        title: "Certificación Real",
        description: "Todos nuestros cursos cuentan con código SENCE o Licencia habilitante (ChileValora, SEC).",
        icon: Trophy,
        color: "text-amber-vial"
    },
    {
        title: "Tecnología de Punta",
        description: "Únicos con simuladores de inmersión total para conducción y laboratorios de computación modernos.",
        icon: MonitorSmartphone,
        color: "text-blue-400"
    },
    {
        title: "Docentes Expertos",
        description: "Instrúyete con profesionales activos en la industria. Aprende lo que realmente se necesita en el trabajo.",
        icon: Users,
        color: "text-green-400"
    },
    {
        title: "Alta Empleabilidad",
        description: "Nuestros programas están diseñados según la demanda laboral actual de la región y el país.",
        icon: CheckCircle2,
        color: "text-purple-400"
    }
];

export function PersonasWhy() {
    return (
        <section className="py-20 bg-navy-deep relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-amber-vial font-bold tracking-widest text-sm uppercase">Nuestra Promesa</span>
                    <h2 className="text-3xl md:text-5xl font-black text-white mt-2 mb-6">
                        ¿Por qué elegir <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Posiciona</span>?
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        No somos solo una OTEC. Somos tu socio en la construcción de una carrera sólida y rentable.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {REASONS.map((reason, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors group"
                        >
                            <div className={`p-4 rounded-2xl bg-white/5 w-fit mb-6 ${reason.color} group-hover:scale-110 transition-transform`}>
                                <reason.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {reason.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
