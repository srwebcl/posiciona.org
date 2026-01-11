"use client";

import { motion } from "framer-motion";

const STEPS = [
    {
        num: "01",
        title: "Elige tu Ruta",
        desc: "Explora nuestro catálogo y selecciona el programa que se ajuste a tus metas.",
        color: "text-amber-vial border-amber-vial"
    },
    {
        num: "02",
        title: "Aprende Haciendo",
        desc: "Formación práctica con simuladores, talleres y herramientas reales.",
        color: "text-blue-400 border-blue-400"
    },
    {
        num: "03",
        title: "Certifícate",
        desc: "Obtén tu licencia o diploma acreditado (SENCE, ChileValora, SEC).",
        color: "text-green-400 border-green-400"
    },
    {
        num: "04",
        title: "Conéctate",
        desc: "Accede a nuestra red de empleadores y potencia tu inserción laboral.",
        color: "text-purple-400 border-purple-400"
    }
];

export function PersonasJourney() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-navy-deep mb-6 uppercase tracking-tight">
                        Tu Ruta al <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-vial to-orange-600">Éxito</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                        Un proceso claro y definido para llevarte desde donde estás hasta donde quieres llegar.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gray-200 -z-0" />

                    {STEPS.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative z-10 text-center group hover:shadow-xl transition-all duration-300"
                        >
                            <div className={`w-24 h-24 mx-auto rounded-full bg-white border-4 ${step.color} flex items-center justify-center text-3xl font-black mb-6 group-hover:scale-110 transition-transform`}>
                                {step.num}
                            </div>
                            <h3 className="text-xl font-bold text-navy-deep mb-3">{step.title}</h3>
                            <p className="text-gray-500 text-sm">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
