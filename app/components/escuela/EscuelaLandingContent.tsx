"use client";

import { useState, Suspense } from "react";
import Image from "next/image";
import { Button } from "@/app/components/ui/button";
import { Check, ShieldCheck, Gauge, Play, HardHat, Forklift, Zap, MessageSquare } from "lucide-react";
import { DrivingSchoolAR } from "@/app/components/home/DrivingSchoolAR";
import { Modal } from "@/app/components/ui/modal";
import { ContactForm } from "@/app/components/contact/ContactForm";

export function EscuelaLandingContent() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedInterest, setSelectedInterest] = useState("");

    const handleCotizar = (interest: string) => {
        setSelectedInterest(interest);
        setIsModalOpen(true);
    };

    return (
        <div className="bg-night-blue min-h-screen">
            {/* AR Simulator Hero */}
            <DrivingSchoolAR>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-vial/20 text-amber-vial border border-amber-vial/30 mb-8 backdrop-blur-md tech-glow animate-fade-in-up">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="text-xs font-bold tracking-wide uppercase">Acreditada 2025</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-black text-white mb-8 uppercase italic leading-tight animate-fade-in-up delay-100">
                    Domina la <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-vial to-orange-500">Conducción Profesional</span>
                </h1>

                <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200">
                    Primera Escuela de Arica con Simulador de Inmersión Total.
                    Obtén tu Licencia A3 en tiempo récord.
                </p>

                <div className="animate-fade-in-up delay-300">
                    <Button
                        onClick={() => handleCotizar("Información General Escuela")}
                        className="bg-amber-vial hover:bg-white hover:text-amber-vial text-navy-deep font-bold h-14 px-10 text-lg rounded-full shadow-[0_0_30px_rgba(255,176,0,0.4)] hover:shadow-[0_0_50px_rgba(255,176,0,0.6)] transition-all duration-300 transform hover:scale-105"
                    >
                        Inscribirme Ahora
                    </Button>
                </div>
            </DrivingSchoolAR>

            {/* BENEFIT SECTION: 4 vs 2 YEARS */}
            <section className="py-20 bg-gradient-to-b from-night-blue to-[#050f1a]">
                <div className="container mx-auto px-4">
                    {/* ROW 1: TEXT & GUARANTEES */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
                        {/* Text Content */}
                        <div>
                            <div className="inline-block px-3 py-1 bg-green-900/30 text-green-400 text-xs font-bold rounded mb-4">
                                NUEVA ACREDITACIÓN 2025
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                                Acelera tu carrera: <br />
                                <span className="text-amber-vial">De 4 a solo 2 Años</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-6">
                                Este hito marca un antes y un después en la región. Posiciona es la <strong>Primera Escuela de Conductores Profesionales de Arica</strong> acreditada con Simulador de Conducción Europeo.
                            </p>
                            <p className="text-gray-400 text-lg">
                                Nuestra tecnología te permite realizar el <strong>Curso Especial</strong> y obtener tu licencia A-3 en la mitad del tiempo tradicional. Una "llave maestra" para insertarte rápido en el mundo laboral.
                            </p>
                        </div>

                        {/* Guarantees Box */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
                            <h4 className="text-white font-bold text-xl mb-6 flex items-center gap-3">
                                <ShieldCheck className="w-6 h-6 text-cyan-electric" /> Garantías Académicas
                            </h4>
                            <ul className="space-y-4">
                                {[
                                    "Autorizada para licencias A-2 y A-3",
                                    "Equipamiento Europeo de Alta Tecnología",
                                    "Alineado con exigencias de minería",
                                    "Formación moderna y 100% segura"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-gray-300">
                                        <div className="bg-cyan-900/30 p-1.5 rounded-full"><Check className="w-4 h-4 text-cyan-electric" /></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* ROW 2: VIDEO CENTERED */}
                    <div className="max-w-5xl mx-auto relative group">
                        {/* Decorator blob */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-cyan-electric/20 rounded-full blur-[100px] pointer-events-none" />

                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 group-hover:border-cyan-electric/50 transition-colors duration-500">
                            <div className="aspect-video">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/kON-oPk-L1Q?rel=0"
                                    title="Simulador de Inmersión Total"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                />
                            </div>

                            {/* Caption */}
                            <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur px-6 py-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                        <Play className="w-5 h-5 text-white fill-current" />
                                    </div>
                                    <div>
                                        <span className="block text-white font-bold text-sm">Simulador Lander en Acción</span>
                                        <span className="text-xs text-cyan-electric">Ver demostración</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                    <span className="text-xs text-gray-300 uppercase tracking-widest hidden sm:block">Live Replay</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SIMULATOR SHOWCASE */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#020B14]" />
                <div className="absolute inset-0 bg-[url('/imagenes/posiciona-21.jpeg')] bg-fixed bg-cover bg-center opacity-10" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-cyan-electric font-bold tracking-widest text-sm uppercase">Tecnología Lander Europeo</span>
                        <h2 className="text-4xl md:text-5xl font-black text-white mt-2 mb-6 uppercase">
                            Entrenamiento <span className="text-cyan-electric drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">Sin Límites</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                            Experimenta condiciones extremas y rutas reales sin riesgo alguno.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                        {[
                            { title: "Seguridad Total", desc: "Entrena fallas mecánicas y reventones de neumáticos sin peligro.", img: "/imagenes/posiciona-4.jpeg" },
                            { title: "Eco-Conducción", desc: "Aprende a reducir el consumo de combustible y desgaste del motor.", img: "/imagenes/posiciona-2.jpeg" },
                            { title: "Rutas Reales", desc: "Escenarios digitalizados de rutas mineras y urbanas complejas.", img: "/imagenes/posiciona-19.jpeg" }
                        ].map((feature, idx) => (
                            <div key={idx} className="group relative h-80 rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-electric/50 transition-colors duration-500">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
                                <Image
                                    src={feature.img}
                                    alt={feature.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute bottom-0 left-0 p-6 z-20">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-electric transition-colors">{feature.title}</h3>
                                    <p className="text-gray-400 text-sm">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CATALOG SECTION: LIGHT BACKGROUND */}
            <section className="py-24 bg-gray-50 text-navy-deep">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-orange-industrial font-bold tracking-widest text-sm uppercase">Oferta Académica</span>
                        <h2 className="text-4xl md:text-5xl font-black text-navy-deep mt-2 mb-6">
                            Formación en <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-deep to-blue-600">Maquinaria y Transporte</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Desde el transporte de pasajeros hasta la operación de alto tonelaje. Tu futuro laboral comienza aquí.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                title: "Licencia Clase A3",
                                desc: "Habilita para conducir taxis, ambulancias, transporte escolar y vehículos de transporte público y privado de personas sin límite de asientos.",
                                features: ["Incluye Simulador", "Práctica en Bus"],
                                icon: ShieldCheck,
                                color: "text-amber-vial",
                                bg: "bg-amber-vial/10",
                                border: "border-amber-vial"
                            },
                            {
                                title: "Licencia Clase A5",
                                desc: "Para la conducción de vehículos de carga, simples o articulados, cuyo peso bruto sea superior a 3.500 kilogramos.",
                                features: ["Alta Empleabilidad Minera", "Manejo articulado"],
                                icon: Gauge,
                                color: "text-orange-industrial",
                                bg: "bg-orange-industrial/10",
                                border: "border-orange-industrial"
                            },
                            {
                                title: "Licencia Clase A2",
                                desc: "Para conducir taxis, ambulancias o vehículos motorizados de transporte público y privado de personas con capacidad de 10 a 17 asientos.",
                                features: ["Ideal para iniciar", "Rápida inserción"],
                                icon: Zap,
                                color: "text-blue-600",
                                bg: "bg-blue-100",
                                border: "border-blue-500"
                            },
                            {
                                title: "Licencia Clase A4",
                                desc: "Transporte de carga cuyo peso bruto sea superior a 3.500 kilogramos (camiones rígidos).",
                                features: ["Transporte urbano", "Distribución"],
                                icon: ShieldCheck,
                                color: "text-cyan-600",
                                bg: "bg-cyan-100",
                                border: "border-cyan-500"
                            },
                            {
                                title: "Grúa Horquilla (Clase D)",
                                desc: "Operación segura, mantenimiento preventivo y técnicas de estiba y desestiba de carga.",
                                features: ["Certificación válida", "Alta Demanda Logística"],
                                icon: Forklift,
                                color: "text-yellow-600",
                                bg: "bg-yellow-100",
                                border: "border-yellow-500"
                            },
                            {
                                title: "Maquinaria Pesada",
                                desc: "Cursos especializados para Retroexcavadora, Cargador Frontal y otros equipos de movimiento de tierra.",
                                features: ["Enfoque Minero", "Seguridad Operacional"],
                                icon: HardHat,
                                color: "text-red-600",
                                bg: "bg-red-100",
                                border: "border-red-500"
                            }
                        ].map((course, idx) => (
                            <div key={idx} className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-b-4 ${course.border} group flex flex-col`}>
                                <div className={`w-14 h-14 ${course.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <course.icon className={`w-7 h-7 ${course.color}`} />
                                </div>
                                <h3 className="text-2xl font-bold text-navy-deep mb-3">{course.title}</h3>
                                <p className="text-gray-600 mb-6 flex-grow">{course.desc}</p>
                                <ul className="space-y-2 mb-8">
                                    {course.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-center gap-2 text-sm text-gray-500">
                                            <Check className="w-4 h-4 text-green-500" /> {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Button
                                    onClick={() => handleCotizar(course.title)}
                                    className="w-full bg-navy-deep text-white hover:bg-amber-vial hover:text-navy-deep font-bold transition-all shadow-md"
                                >
                                    Más Información
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL CONTACT SECTION */}
            <section className="py-24 bg-[#020B14] relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute inset-0 bg-[url('/imagenes/posiciona-20.jpeg')] bg-cover bg-center opacity-5" />
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-vial/5 to-transparent pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-amber-vial font-bold tracking-widest text-sm uppercase mb-2 block">Contacto Directo</span>
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                                ¿Listo para <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-vial to-orange-500">Profesionalizarte?</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-8">
                                No dejes pasar más tiempo. La demanda de conductores profesionales y operadores certificados es altísima. Escríbenos y reserva tu cupo hoy mismo.
                            </p>

                            <div className="flex flex-col gap-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10">
                                        <ShieldCheck className="w-6 h-6 text-amber-vial" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg">Certificación Oficial</h4>
                                        <p className="text-gray-500">Todos nuestros cursos son válidos ante la Dirección del Trabajo y empresas mineras.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10">
                                        <MessageSquare className="w-6 h-6 text-green-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg">Atención Whatsapp</h4>
                                        <p className="text-gray-500">¿Dudas rápidas? +56 9 6666 4127</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md shadow-2xl">
                            <h3 className="text-2xl font-bold text-white mb-6">Solicitar Información</h3>
                            <Suspense fallback={<div className="h-96 animate-pulse bg-white/5 rounded-3xl" />}>
                                <ContactForm />
                            </Suspense>
                        </div>
                    </div>
                </div>
            </section>

            {/* MODAL POPUP */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={`Cotizando: ${selectedInterest}`}>
                <div className="bg-navy-deep p-6 rounded-xl border border-white/10">
                    <p className="text-gray-300 text-sm mb-6">
                        Completa tus datos y te enviaremos la malla curricular y precios actualizados para <strong>{selectedInterest}</strong>.
                    </p>
                    <Suspense fallback={<div className="h-64 animate-pulse bg-white/5 rounded-xl" />}>
                        <ContactForm prefilledInterest={selectedInterest} />
                    </Suspense>
                </div>
            </Modal>
        </div>
    );
}
