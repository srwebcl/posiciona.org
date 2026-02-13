import { TechButton } from "@/app/components/ui/tech-button";
import { Suspense } from "react";
import { Users, Building2, ArrowRight, Loader2 } from "lucide-react";
import { EmpresasHero } from "@/app/components/empresas/EmpresasHero";
import Link from "next/link";
import { ContactForm } from "@/app/components/contact/ContactForm";

export const metadata = {
    title: "Posiciona Empresas | Soluciones Corporativas",
    description: "Capacitación SENCE, cierre de brechas y certificación de competencias laborales para su equipo.",
};

export default function EmpresasHubPage() {
    return (
        <div className="min-h-screen bg-white">
            <EmpresasHero />

            {/* SECCIÓN DE NAVEGACIÓN (Light Theme) */}
            <div className="py-20 bg-gray-50 border-b border-gray-100 relative z-10">
                <div className="container mx-auto px-4">

                    <div className="text-center mb-16">
                        <span className="text-amber-vial font-bold tracking-widest text-sm uppercase">Nuestros Servicios</span>
                        <h2 className="text-3xl md:text-5xl font-black text-navy-deep mt-2">
                            Soluciones Corporativas
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                        {/* ENLACE A CAPACITACIONES */}
                        <Link href="/empresas/capacitaciones" className="group">
                            <div className="h-full bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-amber-vial/30 transition-all duration-300 flex flex-col items-center text-center group-hover:-translate-y-2">
                                <div className="mb-6 bg-amber-vial/10 w-20 h-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                    <Users className="w-10 h-10 text-amber-vial" />
                                </div>
                                <h2 className="text-3xl font-bold text-navy-deep mb-4 group-hover:text-amber-vial transition-colors">Capacitación y SENCE</h2>
                                <p className="text-gray-500 mb-8 text-lg leading-relaxed max-w-sm">
                                    Cierre de brechas, alfabetización digital y gestión experta de franquicia tributaria y becas laborales.
                                </p>
                                <span className="mt-auto inline-flex items-center text-amber-vial font-bold uppercase tracking-wider text-sm group-hover:underline">
                                    Ver Soluciones <ArrowRight className="ml-2 w-4 h-4" />
                                </span>
                            </div>
                        </Link>

                        {/* ENLACE A CERTIFICACIONES */}
                        <Link href="/empresas/certificaciones" className="group">
                            <div className="h-full bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-blue-inst/30 transition-all duration-300 flex flex-col items-center text-center group-hover:-translate-y-2">
                                <div className="mb-6 bg-blue-inst/10 w-20 h-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                    <Building2 className="w-10 h-10 text-blue-inst" />
                                </div>
                                <h2 className="text-3xl font-bold text-navy-deep mb-4 group-hover:text-blue-inst transition-colors">Certificación de Calidad</h2>
                                <p className="text-gray-500 mb-8 text-lg leading-relaxed max-w-sm">
                                    Certificación de competencias laborales (Wylar) y norma NCh 2728.
                                </p>
                                <span className="mt-auto inline-flex items-center text-blue-inst font-bold uppercase tracking-wider text-sm group-hover:underline">
                                    Ver Certificaciones <ArrowRight className="ml-2 w-4 h-4" />
                                </span>
                            </div>
                        </Link>

                    </div>
                </div>
            </div>

            {/* SECCIÓN CONTACTO RÁPIDO */}
            <div className="py-24 bg-white relative overflow-hidden">
                {/* Decorative background elements similar to PersonasJourney/FAQ */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 -skew-x-12 translate-x-1/2 z-0 pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h3 className="text-2xl md:text-3xl font-bold text-navy-deep mb-4">¿Necesita Asesoría Directa?</h3>
                            <p className="text-gray-500 text-lg">
                                Nuestro equipo comercial está listo para diseñar un plan a medida para su organización.
                            </p>
                        </div>

                        {/* Wrapper for Contact Form to look good on light bg (Dark card style preserved for form) */}
                        <div className="bg-navy-deep rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-inst/20 rounded-full blur-[80px] pointer-events-none" />
                            <Suspense fallback={<div className="flex justify-center py-10"><Loader2 className="w-8 h-8 animate-spin text-amber-vial" /></div>}>
                                <ContactForm prefilledInterest="Empresas - General" className="md:grid-cols-2" variant="empresa" />
                            </Suspense>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
