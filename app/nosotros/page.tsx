"use client";

import { PageHero } from "@/app/components/ui/PageHero";
import { TimelineHUD } from "@/app/components/home/TimelineHUD";
import { TechButton } from "@/app/components/ui/tech-button";
import { BadgeCheck, Building, GraduationCap, Users, Target, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function NosotrosPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header / Hero */}
            {/* Header / Hero */}
            <PageHero
                badge="NUESTRA ESENCIA"
                title={
                    <>
                        Más que Capacitación, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-vial to-amber-300">
                            Construimos Futuro
                        </span>
                    </>
                }
                description="Desde Arica para Chile, somos el puente entre las personas que buscan superarse y las empresas que necesitan excelencia."
            />

            {/* Historia / Main Content */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-amber-vial/20 rounded-2xl -rotate-2 blur-xl" />
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 aspect-video">
                                {/* Placeholder image - Replace with real team/office photo */}
                                <Image
                                    src="/imagenes/posiciona-18.jpeg"
                                    alt="Equipo Posiciona"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            {/* Badger NCh */}
                            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 flex flex-col items-center gap-2">
                                <BadgeCheck className="w-10 h-10 text-blue-inst" />
                                <div className="text-center">
                                    <span className="block text-2xl font-black text-navy-deep">15+</span>
                                    <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">Años de Trayectoria</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-black text-navy-deep mb-4 uppercase">Nuestro Propósito</h2>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    Nacimos con la convicción de que la formación técnica de calidad es el motor de movilidad social más potente. Combinamos la rigurosidad de la norma NCh 2728 con una metodología humana, cercana y enfocada en la empleabilidad real.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                                    <Target className="w-8 h-8 text-amber-vial mb-3" />
                                    <h3 className="font-bold text-navy-deep mb-2">Misión</h3>
                                    <p className="text-sm text-gray-600">
                                        Entregar herramientas técnicas de excelencia que permitan a nuestros alumnos integrarse exitosamente al mercado laboral industrial y minero.
                                    </p>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                                    <ShieldCheck className="w-8 h-8 text-blue-inst mb-3" />
                                    <h3 className="font-bold text-navy-deep mb-2">Calidad</h3>
                                    <p className="text-sm text-gray-600">
                                        Compromiso irrestricto con la mejora continua, certificados bajo rigurosos estándares nacionales e internacionales.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certifications Banner */}
            <section className="py-16 bg-blue-50 border-y border-blue-100">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-navy-deep font-black uc-tracking-widest uppercase mb-10 text-sm tracking-widest opacity-70">
                        Acreditaciones Oficiales
                    </h3>
                    <div className="flex flex-wrap justify-center gap-12 md:gap-24 items-center grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                        {/* NCh 2728 */}
                        <div className="flex flex-col items-center gap-4 group">
                            <div className="relative w-32 h-32 md:w-40 md:h-40 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-gray-100 group-hover:scale-105 transition-transform p-4">
                                <Image
                                    src="/imagenes/nch2728.png"
                                    alt="Certificación NCh 2728"
                                    fill
                                    className="object-contain p-2"
                                />
                            </div>
                            <span className="text-sm font-bold text-gray-600 bg-white px-3 py-1 rounded-full shadow-sm border border-gray-100">NCh2728</span>
                        </div>

                        {/* SENCE */}
                        <div className="flex flex-col items-center gap-4 group">
                            <div className="relative w-32 h-32 md:w-40 md:h-40 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-gray-100 group-hover:scale-105 transition-transform p-4">
                                <Image
                                    src="/imagenes/logo-sence.webp"
                                    alt="SENCE - Registro Nacional"
                                    fill
                                    className="object-contain p-2"
                                />
                            </div>
                            <span className="text-sm font-bold text-gray-600 bg-white px-3 py-1 rounded-full shadow-sm border border-gray-100">Registro Nacional</span>
                        </div>
                    </div>
                </div>
            </section>
            {/* Trayectoria Timeline */}
            <div className="bg-white text-navy-deep relative z-10 border-t border-gray-100">
                <TimelineHUD />
            </div>
        </div>
    );
}
