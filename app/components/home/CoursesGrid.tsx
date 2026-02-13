"use client";

import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { ArrowRight, Truck, Wrench, Code, Globe, ShieldCheck, Zap, MapPin, Clock } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";

// Categories for logic
import { COURSES } from "@/app/data/courses";

// Categories for logic
const FILTERS = [
    { id: "all", label: "Todos los Cursos" },
    { id: "ESCUELA DE CONDUCTORES", label: "Escuela de Conductores" },
    { id: "OFICIOS INDUSTRIALES", label: "Oficios Industriales" },
    { id: "TALENTO DIGITAL", label: "Talento Digital" },
];

export function CoursesGrid() {
    const [activeFilter, setActiveFilter] = useState("all");

    // Filter logic
    const filteredCourses = activeFilter === "all"
        ? COURSES.filter(c => ["ESCUELA DE CONDUCTORES", "OFICIOS INDUSTRIALES", "TALENTO DIGITAL"].includes(c.category)) // Show only main categories or all? Let's show all from these 3 main ones for Home
        : COURSES.filter(course => course.category === activeFilter);

    // Slice to limit items on Home if needed? User said "mismos del catalogo", so maybe all. But 3 columns x N rows. 

    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-4">

                {/* Header & Title */}
                <div className="text-center mb-12">
                    <span className="inline-block py-1 px-3 rounded-full bg-navy-deep/5 border border-navy-deep/10 text-navy-deep font-mono text-xs font-bold tracking-widest mb-4">
                        CATÁLOGO
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-navy-deep uppercase tracking-tighter mb-4">
                        Explora nuestra <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Oferta Académica</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg hover:text-navy-deep transition-colors duration-300">
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
                                    ? "text-white shadow-lg shadow-navy-deep/20 scale-105"
                                    : "bg-gray-100 text-gray-500 border border-gray-200 hover:border-navy-deep/20 hover:bg-white hover:text-navy-deep"}
              `}
                        >
                            {filter.label}
                            {activeFilter === filter.id && (
                                <motion.div
                                    layoutId="activeFilterBubble"
                                    className="absolute inset-0 rounded-full bg-navy-deep -z-10"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredCourses.slice(0, 6).map((course) => (
                            <motion.div
                                layout
                                key={course.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="h-full bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 transition-all duration-300 group flex flex-col">
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
                                        <h3 className="text-xl font-bold text-navy-deep mb-2 group-hover:text-blue-600 transition-colors">
                                            {course.title}
                                        </h3>
                                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                            {course.description}
                                        </p>
                                    </div>

                                    {/* Footer */}
                                    <div className="pt-6 border-t border-gray-50 flex items-center justify-between mt-auto">
                                        <div className="flex flex-col gap-1.5">
                                            <span className="text-xs font-semibold text-gray-400 flex items-center gap-1.5">
                                                <Clock className="w-3.5 h-3.5" /> {course.duration}
                                            </span>
                                            <span className={`text-xs font-bold flex items-center gap-1.5 ${course.location.includes("Arica") ? "text-amber-600" : "text-blue-600"}`}>
                                                <MapPin className="w-3.5 h-3.5" /> {course.location}
                                            </span>
                                        </div>
                                        <Link href={`/cursos/${course.slug}`}>
                                            <span className="inline-flex items-center text-sm font-bold text-navy-deep group-hover:translate-x-1 transition-transform cursor-pointer hover:text-blue-600 self-end">
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
                    <Link href="/personas/cursos">
                        <Button variant="outline" size="lg" className="border-navy-deep/20 text-navy-deep hover:bg-navy-deep hover:text-white transition-all duration-300">
                            Ver Catálogo Completo
                        </Button>
                    </Link>
                </div>

            </div>
        </section>
    );
}
