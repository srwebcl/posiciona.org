import { TechButton } from "@/app/components/ui/tech-button";
import Image from "next/image";
import { Suspense } from "react";
import { Building2, ArrowRight, ShieldCheck, Check, Mail, Loader2, ExternalLink } from "lucide-react";
import { PageHero } from "@/app/components/ui/PageHero";
import { ContactForm } from "@/app/components/contact/ContactForm";

export const metadata = {
    title: "Certificación de Competencias y Calidad | Posiciona Personas",
    description: "Certificación de competencias laborales Wylar (ChileValora). Valida tu experiencia y mejora tu empleabilidad.",
};

export default function CertificacionesPersonasPage() {
    return (
        <div className="min-h-screen bg-white">
            <PageHero
                badge="Validación de Oficios"
                video="/imagenes/simulador.mp4"
                title={
                    <>
                        Certifica tus <span className="text-white">Competencias Laborales</span>
                    </>
                }
                description="Reconoce formalmente lo que sabes hacer. Obtén tu certificación a través de nuestra alianza Wylar y mejora tu currículum."
                align="left"
                className="pt-32 md:pt-48 pb-20 md:pb-32"
            >
                <a href="#contacto">
                    <TechButton variant="primary" size="lg" className="h-14">
                        Consultar Certificación <ArrowRight className="ml-2 w-5 h-5" />
                    </TechButton>
                </a>
            </PageHero>

            {/* SECCIÓN ALIANZAS Y CALIDAD (Light Theme) */}
            <div className="py-24 bg-white relative z-10">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <span className="text-amber-vial font-bold tracking-widest text-sm uppercase">Mejora tu Empleabilidad</span>
                        <h2 className="text-3xl md:text-5xl font-black text-navy-deep mt-2 mb-6">
                            Valida tu Experiencia
                        </h2>
                        <p className="text-gray-500 text-lg">
                            Te ayudamos a certificar en base al catálogo de ChileValora el "Saber Hacer" que has adquirido con los años, apoyando tu crecimiento profesional.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto">

                        {/* CARD 1: Alianza WYLAR */}
                        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 flex flex-col md:flex-row gap-10 items-center hover:border-amber-vial/30 transition-all duration-300">
                            <div className="flex-1">
                                <div className="mb-6 bg-amber-500/10 w-fit p-4 rounded-xl">
                                    <Building2 className="w-8 h-8 text-amber-500" />
                                </div>
                                <h3 className="text-3xl font-bold text-navy-deep mb-4">Alianza WYLAR</h3>
                                <p className="text-gray-600 mb-6 font-sans text-base leading-relaxed">
                                    Ofrecemos servicios de <strong>Certificación de Competencias Laborales</strong> a través de nuestra alianza estratégica con Wylar (Centro en proceso de acreditación ChileValora).
                                </p>
                                <p className="text-gray-600 font-sans text-base leading-relaxed">
                                    Si tienes la habilidad o técnica en un oficio, puedes certificar formalmente tus conocimientos, independientemente de cómo los hayas aprendido, obteniendo ventajas directas en tus postulaciones laborales.
                                </p>
                                <div className="mt-6">
                                    <a href="https://wylar.cl" target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-bold text-amber-500 hover:text-amber-600 group transition-colors">
                                        Conocer más en wylar.cl <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                            <div className="flex-shrink-0 w-full md:w-auto flex flex-col gap-4">
                                <div className="p-2 bg-white rounded-2xl border border-gray-100 text-center min-w-[200px] shadow-sm">
                                    <Image
                                        src="/imagenes/Timbre Wylar.png"
                                        alt="Alianza Wylar"
                                        width={200}
                                        height={100}
                                        className="w-48 h-auto object-contain mx-auto"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* CONTACTO */}
            <section id="contacto" className="py-24 bg-navy-deep relative">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-vial/5 rounded-full blur-[80px] pointer-events-none" />
                        <div className="text-center mb-10 relative z-10">
                            <h2 className="text-3xl font-bold text-white mb-4">Cotizar Certificación de Personas</h2>
                            <p className="text-gray-400">
                                Conversemos sobre cómo lograr la validación formal de tus oficios y experiencia.
                            </p>
                        </div>
                        <div className="relative z-10 max-w-lg mx-auto">
                            <Suspense fallback={<div className="flex justify-center py-10"><Loader2 className="w-8 h-8 animate-spin text-amber-vial" /></div>}>
                                <ContactForm prefilledInterest="Personas - Certificación de Competencias" className="md:grid-cols-1" variant="persona" />
                            </Suspense>
                            <div className="mt-8 pt-8 border-t border-white/10 flex justify-center gap-8 text-sm">
                                <a href="mailto:posiciona@posiciona.org" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                                    <Mail className="w-4 h-4" /> posiciona@posiciona.org
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
