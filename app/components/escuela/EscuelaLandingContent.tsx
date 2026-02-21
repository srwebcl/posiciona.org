"use client";

import { useState, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { Check, ShieldCheck, Gauge, Play, HardHat, Forklift, Zap, MessageSquare } from "lucide-react";
import { DrivingSchoolAR } from "@/app/components/home/DrivingSchoolAR";
import { Modal } from "@/app/components/ui/modal";
import { ContactForm } from "@/app/components/contact/ContactForm";
import { COURSES } from "@/app/data/courses";

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
                    <span className="text-xs font-bold tracking-wide uppercase">Acreditada</span>
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
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                        {/* LEFT COLUMN: INFO & GUARANTEES */}
                        <div className="flex flex-col gap-8">
                            <div>
                                <div className="inline-block px-3 py-1 bg-green-900/30 text-green-400 text-xs font-bold rounded mb-4">
                                    NUEVA ACREDITACIÓN
                                </div>
                                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                                    Acceso Directo con Simulador:<br />
                                    <span className="text-amber-vial">Solo 2 años clase B</span>
                                </h2>
                                <p className="text-gray-400 text-lg mb-6">
                                    Hoy puedes acceder a Licencia Profesional <strong>Clase A3 (buses)</strong> o <strong>Clase A5 (camiones articulados)</strong> sin esperar 2 años con otra licencia profesional clase A.
                                </p>
                                <p className="text-gray-400 text-lg mb-8">
                                    Gracias al <strong>Plan Especial con Simulador</strong>, autorizado por el Ministerio de Transportes y Telecomunicaciones, puedes avanzar directamente si cumples con los requisitos.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white/5 border border-white/10 rounded-2xl p-6 mb-6">
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                            <Check className="text-green-500 w-5 h-5" /> ¿Qué necesitas?
                                        </h3>
                                        <ul className="space-y-3 pl-2">
                                            <li className="text-gray-300 relative before:content-[''] before:absolute before:-left-3 before:top-2 before:w-1.5 before:h-1.5 before:bg-amber-vial before:rounded-full text-sm">Tener 20 años o más</li>
                                            <li className="text-gray-300 relative before:content-[''] before:absolute before:-left-3 before:top-2 before:w-1.5 before:h-1.5 before:bg-amber-vial before:rounded-full text-sm">Licencia Clase B con mínimo 2 años de antigüedad</li>
                                            <li className="text-gray-300 relative before:content-[''] before:absolute before:-left-3 before:top-2 before:w-1.5 before:h-1.5 before:bg-amber-vial before:rounded-full text-sm">Cédula de identidad chilena vigente</li>
                                            <li className="text-gray-300 relative before:content-[''] before:absolute before:-left-3 before:top-2 before:w-1.5 before:h-1.5 before:bg-amber-vial before:rounded-full text-sm">Extranjeros: residencia legal en Chile</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                            <ShieldCheck className="text-cyan-electric w-5 h-5" /> Ventajas del Plan
                                        </h3>
                                        <ul className="space-y-3 pl-2">
                                            <li className="text-gray-300 relative before:content-[''] before:absolute before:-left-3 before:top-2 before:w-1.5 before:h-1.5 before:bg-cyan-electric before:rounded-full text-sm">Sin esperar 2 años con otra Clase A</li>
                                            <li className="text-gray-300 relative before:content-[''] before:absolute before:-left-3 before:top-2 before:w-1.5 before:h-1.5 before:bg-cyan-electric before:rounded-full text-sm">Formación avanzada con simulador</li>
                                            <li className="text-gray-300 relative before:content-[''] before:absolute before:-left-3 before:top-2 before:w-1.5 before:h-1.5 before:bg-cyan-electric before:rounded-full text-sm">Acceso más rápido al mercado laboral</li>
                                            <li className="text-gray-300 relative before:content-[''] before:absolute before:-left-3 before:top-2 before:w-1.5 before:h-1.5 before:bg-cyan-electric before:rounded-full text-sm">Capacitación de alto estándar</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-blue-900/20 border border-blue-500/20 rounded-xl p-5 mb-6">
                                    <h3 className="text-lg font-bold text-white mb-3">¿Qué permite cada licencia?</h3>
                                    <ul className="space-y-2">
                                        <li className="text-gray-300 text-sm"><strong className="text-cyan-400">A3:</strong> Conducir buses y transporte de pasajeros sin límite de capacidad.</li>
                                        <li className="text-gray-300 text-sm"><strong className="text-cyan-400">A5:</strong> Conducir camiones de alto tonelaje y vehículos articulados.</li>
                                    </ul>
                                </div>
                                <div className="bg-amber-vial/10 border border-amber-vial/30 rounded-xl p-6 text-center shadow-inner">
                                    <p className="text-amber-100 font-medium mb-4">
                                        Si ya tienes Clase B con 2 años, estás listo para dar el siguiente paso.
                                    </p>
                                    <Button
                                        onClick={() => handleCotizar("Plan Especial A3/A5")}
                                        className="w-full bg-amber-vial text-navy-deep hover:bg-white font-bold transition-colors shadow-lg shadow-amber-500/20 py-6 text-lg"
                                    >
                                        Matricúlate hoy
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: CONTACT FORM */}
                        <div id="contacto-form-top" className="relative group lg:sticky lg:top-40">
                            {/* Decorator blob */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-amber-vial/10 rounded-full blur-[100px] pointer-events-none" />

                            <div className="bg-gradient-to-br from-[#1c1c1c] to-[#2a2a2a] border border-white/10 rounded-[1.5rem] p-8 md:p-10 shadow-2xl relative z-10">
                                <h3 className="text-2xl font-bold text-white mb-6">Solicitar Información</h3>
                                <Suspense fallback={<div className="h-96 animate-pulse bg-white/5 rounded-3xl" />}>
                                    <ContactForm variant="persona" filterCategory="ESCUELA DE CONDUCTORES" />
                                </Suspense>
                            </div>
                        </div>
                    </div>

                    {/* ROW 2: VIDEO CENTERED (FULL WIDTH) */}
                    <div className="max-w-5xl mx-auto relative group mt-24">
                        <div className="text-center mb-10">
                            <h3 className="text-3xl font-bold text-white uppercase tracking-wider">Conoce nuestro simulador</h3>
                            <div className="w-24 h-1 bg-cyan-electric mx-auto mt-4 rounded-full"></div>
                        </div>

                        {/* Decorator blob */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-cyan-electric/20 rounded-full blur-[100px] pointer-events-none" />

                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 group-hover:border-cyan-electric/50 transition-colors duration-500">
                            <div className="aspect-video relative">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/kON-oPk-L1Q?rel=0"
                                    title="Simulador de Inmersión Total"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Caption */}
                            <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur px-6 py-4 flex items-center justify-between pointer-events-none">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                        <Play className="w-5 h-5 text-white fill-current" />
                                    </div>
                                    <div>
                                        <span className="block text-white font-bold text-sm">Simulador Simestruck en Acción</span>
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
                        <span className="text-cyan-electric font-bold tracking-widest text-sm uppercase">Tecnología Simestruck</span>
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
                            Formación Profesional <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-deep to-blue-600">En Arica</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Cursos presenciales con tecnología de punta. Única escuela acreditada con Simulador para Licencia A3.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {COURSES.filter(c => c.category === "ESCUELA DE CONDUCTORES").map((course, idx) => (
                            <div key={idx} className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden group hover:shadow-2xl transition-all duration-300 flex flex-col">
                                <div className="relative h-56 w-full overflow-hidden bg-navy-deep">
                                    <Image src={course.image} alt={course.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-90" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent z-10" />

                                    {/* Icon Badge */}
                                    <div className="absolute top-4 right-4 z-20 bg-white/10 backdrop-blur-md p-2 rounded-xl border border-white/20 shadow-sm">
                                        <course.icon className="w-6 h-6 text-white" />
                                    </div>

                                    {/* Title Context */}
                                    <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                                        <span className="inline-block px-3 py-1 bg-amber-vial text-navy-deep text-xs font-black uppercase tracking-wider rounded-md mb-2 shadow-sm">
                                            {course.location}
                                        </span>
                                        <h3 className="text-2xl font-bold text-white leading-tight drop-shadow-md">{course.title}</h3>
                                    </div>
                                </div>

                                <div className="p-6 md:p-8 flex flex-col flex-grow">
                                    <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                                        {course.description}
                                    </p>

                                    <ul className="space-y-3 mb-8">
                                        {course.tags.map((tag, tIdx) => (
                                            <li key={tIdx} className="flex items-center gap-3 text-sm text-gray-500 font-medium bg-gray-50 px-4 py-2.5 rounded-lg border border-gray-100">
                                                <Check className="w-4 h-4 text-green-500 shrink-0" /> {tag}
                                            </li>
                                        ))}
                                    </ul>

                                    <Button
                                        onClick={() => handleCotizar(course.title)}
                                        className="w-full bg-navy-deep text-white hover:bg-amber-vial hover:text-navy-deep font-bold transition-all shadow-md py-6 text-base"
                                    >
                                        Más Información
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL CONTACT SECTION */}
            <section className="py-24 bg-[#020B14] relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute inset-0 bg-[url('/imagenes/posiciona-21.jpeg')] bg-cover bg-center opacity-5" />
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
                                        <p className="text-gray-500">¿Dudas rápidas? +56 9 8453 4364</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md shadow-2xl text-center">
                            <h3 className="text-2xl font-bold text-white mb-4">¿Tienes Dudas Adicionales?</h3>
                            <p className="text-gray-400 mb-8">
                                Si aún tienes dudas sobre el proceso de matrícula, los requisitos específicos para el subsidio o cualquier otro detalle de la Escuela de Conductores, estamos aquí para ayudarte en todo momento.
                            </p>
                            <Link
                                href="/personas/contacto"
                                className="w-full sm:w-auto inline-flex justify-center items-center bg-amber-vial text-navy-deep hover:bg-white font-bold transition-colors py-6 px-10 text-lg shadow-lg rounded-xl"
                            >
                                Solicitar Información
                            </Link>
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
                        <ContactForm prefilledInterest={selectedInterest} variant="persona" filterCategory="ESCUELA DE CONDUCTORES" />
                    </Suspense>
                </div>
            </Modal>
        </div>
    );
}
