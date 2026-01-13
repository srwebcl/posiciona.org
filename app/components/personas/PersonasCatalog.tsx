"use client";

import { useState, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Code2, Truck, Wrench, HeartPulse, Languages, Star, GraduationCap, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/app/components/ui/button";

// DATA for "Personas" Services - Colors neutralized in display logic
const PERSONAS_SERVICES = [
    {
        id: "talento-digital",
        category: "TALENTO DIGITAL",
        title: "Bootcamp Desarrollo Front-End",
        description: "Domina React, JavaScript y CSS moderno. Conviértete en un desarrollador web demandado por la industria.",
        icon: Code2,
        image: "/imagenes/posiciona-23.jpeg",
        link: "/talento-digital",
        tags: ["Beca SENCE", "Online"]
    },
    {
        id: "talento-digital-fs",
        category: "TALENTO DIGITAL",
        title: "Full Stack Java Trainee",
        description: "Formación completa de Back-End a Front-End. Java, Spring Boot y bases de datos.",
        icon: Code2,
        image: "/imagenes/posiciona-23.jpeg",
        link: "/talento-digital",
        tags: ["Intensivo", "Alta Empleabilidad"]
    },
    {
        id: "escuela-a3",
        category: "ESCUELA DE CONDUCTORES",
        title: "Licencia Profesional A3",
        description: "Para taxis, ambulancias y transporte escolar. Entrenamiento avanzado con simulador europeo.",
        icon: Truck,
        image: "/imagenes/posiciona-21.jpeg",
        link: "/escuela-conductores",
        tags: ["Simulador Real", "Acelerado"]
    },
    {
        id: "escuela-a5",
        category: "ESCUELA DE CONDUCTORES",
        title: "Licencia Profesional A5",
        description: "Transporte de carga pesada y articulados. Especialízate en el sector logístico.",
        icon: Truck,
        image: "/imagenes/posiciona-14.jpeg",
        link: "/escuela-conductores",
        tags: ["Alta Demanda", "Práctico"]
    },
    {
        id: "oficios-soldadura",
        category: "OFICIOS INDUSTRIALES",
        title: "Soldadura Calificada (MIG/TIG)",
        description: "Certifícate en procesos de soldadura industrial. Estándares mineros y de construcción.",
        icon: Wrench,
        image: "/imagenes/posiciona-11.jpeg", // Industrial welding image
        link: "/oficios",
        tags: ["Presencial", "Certificación"]
    },
    {
        id: "oficios-elect",
        category: "OFICIOS INDUSTRIALES",
        title: "Electricidad Certificada SEC",
        description: "Preparación para obtención de licencia Clase D. Instalaciones domiciliarias e industriales.",
        icon: Wrench,
        image: "/imagenes/posiciona-9.jpeg",
        link: "/oficios",
        tags: ["Licencia SEC", "Técnico"]
    },
    {
        id: "salud-curador",
        category: "SALUD",
        title: "Cuidados de Enfermería",
        description: "Atención de pacientes con dependencia. Técnicas de higiene, alimentación y primeros auxilios.",
        icon: HeartPulse,
        image: "/imagenes/posiciona-18.jpeg",
        link: "/contacto?interest=salud",
        tags: ["Vocación", "Salud"]
    },
    {
        id: "idiomas-ingles",
        category: "IDIOMAS",
        title: "Inglés Laboral (TOEIC)",
        description: "Mejora tu perfil con certificación internacional. Cursos adaptados a necesidades profesionales.",
        icon: Languages,
        image: "/imagenes/posiciona-11.jpeg",
        link: "/contacto?interest=ingles",
        tags: ["The London Bridge", "Certificado"]
    },
    {
        id: "artesania-orfebre",
        category: "ARTESANÍA",
        title: "Orfebrería y Diseño",
        description: "Técnicas tradicionales y modernas para la creación de joyas y objetos de valor.",
        icon: Star,
        image: "/imagenes/posiciona-16.jpeg",
        link: "/contacto?interest=artesania",
        tags: ["Creativo", "Emprendimiento"]
    }
];

const CATEGORIES = [
    "TODOS",
    "ESCUELA DE CONDUCTORES",
    "TALENTO DIGITAL",
    "OFICIOS INDUSTRIALES",
    "SALUD",
    "IDIOMAS",
    "ARTESANÍA"
];

import { Modal } from "@/app/components/ui/modal";
import { ContactForm } from "@/app/components/contact/ContactForm";

export function PersonasCatalog() {
    const [activeCategory, setActiveCategory] = useState("TODOS");
    const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

    const filteredServices = activeCategory === "TODOS"
        ? PERSONAS_SERVICES
        : PERSONAS_SERVICES.filter(service =>
            service.category === activeCategory ||
            service.tags.some(tag => tag.toUpperCase() === activeCategory)
        );

    return (
        <section id="catalogo" className="py-24 bg-white relative" style={{ scrollMarginTop: "200px" }}>
            {/* Background Pattern */}
            <div className="absolute inset-0 grid-bg opacity-5" />
            <div className="container mx-auto px-4">

                {/* Header removido - manejado por PageHero en la página padre */}
                <div className="mb-8" />

                {/* Categories Filter (Tab System) */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-5 py-2 rounded-full text-[11px] font-bold tracking-widest uppercase transition-all duration-300 border ${activeCategory === cat
                                ? "bg-navy-deep text-white border-navy-deep shadow-lg scale-105"
                                : "bg-white text-gray-500 border-gray-200 hover:border-amber-vial hover:text-amber-vial"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* GRID Display */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredServices.map((service) => (
                            <motion.div
                                key={service.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-blue-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 flex flex-col h-full"
                            >
                                {/* Image Area with Neutral styling */}
                                <div className="relative h-52 w-full overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 to-transparent z-10" />
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    {/* Icon Badge */}
                                    <div className="absolute top-4 left-4 z-20">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full backdrop-blur-md bg-white/10 text-white border border-white/20 shadow-lg">
                                            <service.icon className="w-5 h-5" />
                                        </div>
                                    </div>
                                    {/* Category Label Overlay */}
                                    <div className="absolute bottom-4 left-4 z-20">
                                        <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest bg-navy-deep/80 px-2 py-1 rounded backdrop-blur-sm">
                                            {service.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content Area */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-lg font-bold text-navy-deep mb-3 leading-snug group-hover:text-blue-600 transition-colors">
                                        {service.title}
                                    </h3>

                                    {/* Tags Row */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {service.tags.map((tag, idx) => (
                                            <button
                                                key={idx}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    // Buscamos si el tag ya existe en categorias, si no, podríamos agregarlo dinámicamente o simplemente filtrar
                                                    // Por simplicidad, asumimos que queremos filtrar por este texto exacto
                                                    // Pero para que funcione con el estado activeCategory que es string, necesitamos que la lógica de arriba lo soporte.
                                                    // Una mejor opción rápida es solo permitir filtrar si el tag coincide con una categoría o implementar lógica de tag libre.
                                                    // Vamos a mejorar esto permitiendo filtro por texto libre en activeCategory
                                                    setActiveCategory(tag.toUpperCase());
                                                }}
                                                className="px-2 py-1 rounded-md text-[10px] font-bold uppercase bg-gray-100 text-gray-600 border border-gray-200 hover:bg-amber-vial hover:text-white hover:border-amber-vial transition-colors cursor-pointer"
                                            >
                                                {tag}
                                            </button>
                                        ))}
                                    </div>

                                    <p className="text-gray-500 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
                                        {service.description}
                                    </p>

                                    {/* Modal Trigger Button */}
                                    <div className="mt-auto">
                                        <Button
                                            variant="ghost"
                                            onClick={() => setSelectedCourse(service.title)}
                                            className="w-full justify-between border border-gray-200 text-gray-600 hover:bg-navy-deep hover:text-white hover:border-navy-deep transition-all duration-300 group-hover/btn:translate-x-1"
                                        >
                                            Solicitar Info <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredServices.length === 0 && (
                    <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-200">
                        <Users className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                        <p className="text-gray-400 font-medium">Selecciona otra categoría para ver programas disponibles.</p>
                    </div>
                )}

                {/* MODAL Actions */}
                <Modal
                    isOpen={!!selectedCourse}
                    onClose={() => setSelectedCourse(null)}
                    title={`Información: ${selectedCourse}`}
                    className="bg-navy-deep text-white border border-white/10" // Custom dark style for modal content
                >
                    <p className="text-gray-300 mb-6 text-sm">
                        Déjanos tus datos y te enviaremos la ficha técnica, valores y próximas fechas de inicio para <strong>{selectedCourse}</strong>.
                    </p>
                    <Suspense fallback={<div className="h-64 w-full bg-white/5 animate-pulse rounded-lg" />}>
                        <ContactForm prefilledInterest={selectedCourse || ""} />
                    </Suspense>
                </Modal>
            </div>
        </section>
    );
}
