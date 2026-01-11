"use client";

import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { ArrowRight, Truck, Wrench, Code, Globe, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";

// Categories for logic
const FILTERS = [
    { id: "all", label: "Todos los Cursos" },
    { id: "licencias", label: "Escuela de Conductores" },
    { id: "oficios", label: "Oficios Industriales" },
    { id: "digital", label: "Talento Digital" },
];

// Course Data
const COURSES = [
    {
        id: 1,
        title: "Licencia Profesional A3",
        category: "licencias",
        icon: Truck,
        description: "Transporte de Pasajeros. Aprende en buses reales y simuladores europeos.",
        duration: "2 Meses",
        badge: "Alta Empleabilidad",
        link: "/escuela-conductores",
        color: "amber"
    },
    {
        id: 2,
        title: "Licencia Profesional A5",
        category: "licencias",
        icon: Truck,
        description: "Transporte de Carga. Domina camiones de alto tonelaje.",
        duration: "2 Meses",
        badge: "Sueldos Altos",
        link: "/escuela-conductores",
        color: "amber"
    },
    {
        id: 3,
        title: "Soldadura Calificada",
        category: "oficios",
        icon: Wrench,
        description: "Técnicas MIG/TIG y Arco Manual. Certificación para minería.",
        duration: "3 Meses",
        badge: "Cert. Indura/SENCE",
        link: "/oficios",
        color: "blue"
    },
    {
        id: 4,
        title: "Desarrollo Full Stack",
        category: "digital",
        icon: Code,
        description: "Bootcamp intensivo de programación Java/React.",
        duration: "6 Meses",
        badge: "Beca Talento Digital",
        link: "/talento-digital",
        color: "cyan"
    },
    {
        id: 5,
        title: "Electricidad Industrial",
        category: "oficios",
        icon: Zap,
        description: "Instalaciones de baja y media tensión. Normativa SEC.",
        duration: "4 Meses",
        badge: "Certificación SEC",
        link: "/oficios",
        color: "blue"
    },
    {
        id: 6,
        title: "Marketing & E-Commerce",
        category: "digital",
        icon: Globe,
        description: "Ventas digitales y gestión de tiendas online.",
        duration: "2 Meses",
        badge: "Emprendimiento",
        link: "/talento-digital",
        color: "cyan"
    },
];

export function CoursesGrid() {
    const [activeFilter, setActiveFilter] = useState("all");

    const filteredCourses = activeFilter === "all"
        ? COURSES
        : COURSES.filter(course => course.category === activeFilter);

    return (
        <section className="py-24 bg-navy-deep border-t border-white/5">
            <div className="container mx-auto px-4">

                {/* Header & Title */}
                <div className="text-center mb-12">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white font-mono text-xs font-bold tracking-widest mb-4">
                        CATÁLOGO 2025
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
                        Explora nuestra <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Oferta Académica</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Selecciona una categoría para filtrar los programas disponibles.
                    </p>
                </div>

                {/* Floating Filters (Badges) */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {FILTERS.map((filter) => (
                        <button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            className={`
                relative px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 z-10
                ${activeFilter === filter.id
                                    ? "text-navy-deep shadow-lg shadow-white/10 scale-105"
                                    : "bg-white/5 text-gray-400 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:text-white"}
              `}
                        >
                            {filter.label}
                            {activeFilter === filter.id && (
                                <motion.div
                                    layoutId="activeFilterBubble"
                                    className="absolute inset-0 rounded-full bg-white -z-10"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredCourses.map((course) => (
                            <motion.div
                                layout
                                key={course.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="h-full bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:border-gray-200 transition-all duration-300 group flex flex-col">
                                    {/* Card Header */}
                                    <div className="flex justify-between items-start mb-6">
                                        <div className={`p-3 rounded-xl ${course.color === 'amber' ? 'bg-amber-50 text-amber-600' :
                                            course.color === 'cyan' ? 'bg-cyan-50 text-cyan-600' :
                                                'bg-blue-50 text-blue-600'
                                            }`}>
                                            <course.icon className="w-8 h-8" />
                                        </div>
                                        {course.badge && (
                                            <span className="px-3 py-1 rounded-full bg-gray-50 border border-gray-100 text-[10px] font-bold uppercase tracking-wider text-gray-500">
                                                {course.badge}
                                            </span>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-grow">
                                        <h3 className="text-xl font-bold text-navy-deep mb-2 group-hover:text-blue-inst transition-colors">
                                            {course.title}
                                        </h3>
                                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                            {course.description}
                                        </p>
                                    </div>

                                    {/* Footer */}
                                    <div className="pt-6 border-t border-gray-50 flex items-center justify-between mt-auto">
                                        <span className="text-xs font-semibold text-gray-400">
                                            Duración: {course.duration}
                                        </span>
                                        <Link href={course.link}>
                                            <span className="inline-flex items-center text-sm font-bold text-navy-deep group-hover:translate-x-1 transition-transform cursor-pointer">
                                                Ver Detalle <ArrowRight className="ml-1 w-4 h-4" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* View All CTA */}
                <div className="mt-16 text-center">
                    <Link href="/contacto">
                        <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white hover:text-navy-deep transition-colors backdrop-blur-sm">
                            Solicitar Catálogo Completo
                        </Button>
                    </Link>
                </div>

            </div>
        </section>
    );
}
