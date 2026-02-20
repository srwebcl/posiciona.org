"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Truck, Code2, Wrench, HeartPulse, Languages, Star } from "lucide-react";

const CATEGORIES = [
    {
        id: "escuela",
        title: "Escuela de Conductores",
        icon: Truck,
        description: "Licencias Profesionales A2, A3, A4, A5 y Maquinaria.",
        color: "text-amber-500",
        bg: "bg-amber-50",
        border: "border-amber-100",
        hover: "hover:border-amber-500",
        link: "/personas/escuela-conductores" // Landing especifica
    },
    {
        id: "talento",
        title: "Talento Digital",
        icon: Code2,
        description: "Bootcamps de Programación y Tecnología. Becas SENCE.",
        color: "text-blue-600",
        bg: "bg-blue-50",
        border: "border-blue-100",
        hover: "hover:border-blue-600",
        link: "/talento-digital" // Landing especifica
    },
    {
        id: "oficios",
        title: "Oficios",
        icon: Wrench,
        description: "Soldadura, Electricidad y Montaje Industrial.",
        color: "text-orange-600",
        bg: "bg-orange-50",
        border: "border-orange-100",
        hover: "hover:border-orange-600",
        link: "/personas/cursos?category=OFICIOS" // Filtro en catalogo
    }
];

export function PersonasCategoryGrid() {
    return (
        <section className="py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {CATEGORIES.map((cat, idx) => (
                    <Link href={cat.link} key={cat.id} className="block group h-full">
                        <motion.div
                            whileHover={{ y: -5 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className={`h-full bg-white rounded-2xl p-8 border ${cat.border} ${cat.hover} shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center`}
                        >
                            <div className={`w-16 h-16 rounded-full ${cat.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <cat.icon className={`w-8 h-8 ${cat.color}`} />
                            </div>
                            <h3 className="text-xl font-bold text-navy-deep mb-3 group-hover:text-blue-600 transition-colors">
                                {cat.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {cat.description}
                            </p>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
