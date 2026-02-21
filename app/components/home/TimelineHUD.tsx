"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/app/lib/utils";

type HistoryItem = {
    year: number;
    title: string;
    text: string;
    current?: boolean;
};

const history: HistoryItem[] = [
    { year: 2009, title: "Origen OTEC Posiciona", text: "Inicios de nuestra trayectoria. Obtención de Certificación NCh 2728." },
    { year: 2012, title: "Alianzas Estratégicas", text: "Ejecución continua de cursos mediante Franquicia Tributaria para el sector empresarial." },
    { year: 2015, title: "Becas CORFO Inglés", text: "Adjudicación de la licitación nacional The London Bridge (TOEIC)." },
    { year: 2017, title: "Becas Laborales SENCE", text: "Despliegue de programas de oficios enfocados en poblaciones y sectores productivos." },
    { year: 2019, title: "Pioneros en Tech", text: "Talento Digital (Ciclo 1): Formación especializada en Front-End, Full Stack JS y Python." },
    { year: 2021, title: "Reinvéntate y Cesantía", text: "Fuerte ejecución de Fondos de Cesantía Solidario y cursos Reinvéntate para la reconversión laboral." },
    { year: 2024, title: "Consolidación Empleabilidad", text: "Programa Talento Digital y ejecución exitosa de más de 26 cursos en el año con alta empleabilidad." },
    { year: 2025, title: "Escuela Profesional A3", text: "Primera escuela acreditada con Simulador Europeo. Curso Especial 2 años." },
    { year: 2026, title: "Proyección Tecnológica", text: "Web, Cloud & Security. Ejecución de 26+ nuevos cursos online." },
];

function Counter({ value }: { value: number }) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { damping: 100, stiffness: 100 });

    useEffect(() => {
        motionValue.set(value);
    }, [value, motionValue]);

    useEffect(() => {
        const unsubscribe = springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Math.round(latest).toString();
            }
        });
        return unsubscribe;
    }, [springValue]);

    return <span ref={ref} className="font-mono text-4xl md:text-6xl font-black text-gray-300 group-hover:text-blue-inst transition-colors">2000</span>;
}

export function TimelineHUD() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section ref={containerRef} className="py-24 relative overflow-hidden bg-white text-navy-deep">
            {/* Background Grids - Subtle gray for white bg */}
            <div className="absolute inset-0 z-0 opacity-40"
                style={{
                    backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)", // Slate-300 dots
                    backgroundSize: "40px 40px"
                }}
            />
            <div className="container mx-auto px-4 relative z-10">

                <div className="text-center mb-16">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-inst/10 border border-blue-inst/20 text-blue-inst font-mono text-xs font-bold tracking-widest mb-4">
                        NUESTRA TRAYECTORIA
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-navy-deep uppercase tracking-tighter">
                        Historia de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-inst to-navy-deep">Impacto</span>
                    </h2>
                </div>

                <div className="relative">
                    {/* Central Line - Darker for contrast */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 -translate-x-1/2">
                        <motion.div
                            style={{ height, scaleY: scaleX }}
                            className="w-full bg-blue-inst origin-top"
                        />
                    </div>

                    <div className="space-y-24">
                        {history.map((item, index) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row gap-6 md:gap-0 items-start md:items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                            >
                                {/* Year Display */}
                                <div className={`flex-1 w-full pl-12 md:pl-0 md:px-12 flex flex-col justify-center ${index % 2 === 0 ? "md:items-start text-left" : "md:items-end text-left md:text-right"}`}>
                                    <div className={`text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-200 to-white stroke-text-gray ${item.current ? "text-amber-vial bg-none" : ""
                                        }`}>
                                        <div className="relative inline-block">
                                            {item.year === 2026 ? <span className="font-mono text-4xl md:text-6xl font-black text-gray-300 group-hover:text-blue-inst transition-colors">2026+</span> : <Counter value={item.year} />}
                                        </div>
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div className={`flex-1 w-full pl-12 md:pl-0 md:px-12 flex flex-col justify-center ${index % 2 === 0 ? "md:items-end text-left md:text-right" : "md:items-start text-left"}`}>
                                    <div className="bg-white border border-gray-100 p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group max-w-lg w-full">
                                        <h3 className="text-xl md:text-2xl font-bold text-navy-deep mb-3 group-hover:text-amber-vial transition-colors">{item.title}</h3>
                                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">{item.text}</p>
                                    </div>
                                </div>

                                {/* Dot on Line */}
                                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-2 border-white -translate-x-1/2 z-20 bg-blue-inst top-10 md:top-1/2 md:-translate-y-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
