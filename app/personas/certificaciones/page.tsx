import Image from "next/image";
import { Suspense } from "react";
import { Building2, Mail, Loader2, ExternalLink } from "lucide-react";
import { PageHero } from "@/app/components/ui/PageHero";
import { ContactForm } from "@/app/components/contact/ContactForm";

export const metadata = {
    title: "Certificación de Competencias y Calidad | Posiciona Personas",
    description: "Certificación de competencias laborales Wylar (ChileValora). Valida tu experiencia y mejora tu empleabilidad.",
};

const wylarCertifications = [
    { title: "Instalador(a) Eléctrico Clase D", desc: "Certificación bajo Sistema ChileValora", img: "/imagenes/electricista.jpeg" },
    { title: "Cuidador(a) de Personas Mayores", desc: "Certificación bajo Sistema ChileValora", img: "/imagenes/cuidado-adulto-mayor.jpg" },
    { title: "Calificación de Soldadores", desc: "Certificación Técnica Privada", img: "/imagenes/soldador.jpeg" },
    { title: "Rigger y Maniobras de Izaje, entre otros", desc: "Certificación Técnica Privada", img: "/imagenes/grua-horquilla.jpeg" }
];

export default function CertificacionesPersonasPage() {
    return (
        <div className="min-h-screen bg-white">
            <PageHero
                badge="Validación de Oficios"
                title={
                    <>
                        Certifica tus <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Competencias Laborales</span>
                    </>
                }
                description="Reconoce formalmente lo que sabes hacer. Obtén tu certificación a través de nuestra alianza estratégica con Wylar Ltda. y mejora tu currículum."
            />

            {/* SECCIÓN 1: ALIANZA WYLAR (Minimalist Focused Layout) */}
            <div className="py-24 md:py-32 bg-white relative z-10 border-b border-gray-100/50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">

                        {/* Encabezado y Badge */}
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/80 text-blue-700 text-[11px] font-bold border border-blue-100/50 mb-8 tracking-[0.2em] uppercase shadow-sm">
                                <Building2 className="w-3.5 h-3.5" /> Alianza Estratégica
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-navy-deep mb-8 leading-[1.1] tracking-tight">
                                Alianza Estratégica <br className="hidden md:block" />
                                <span className="text-blue-inst">con WYLAR</span>
                            </h2>
                            <p className="text-gray-600 text-xl md:text-2xl leading-relaxed font-light">
                                Impulsa tu crecimiento profesional a través de la Certificación de Competencias Laborales, gracias a nuestra <strong className="font-bold text-navy-deep">alianza estratégica con WYLAR Certificadora</strong>.
                            </p>
                        </div>

                        {/* Carrusel Infinito de Certificaciones */}
                        <style>{`
                            @keyframes infiniteScroll {
                                0% { transform: translateX(0); }
                                100% { transform: translateX(calc(-50% - 12px)); }
                            }
                            .animate-infinite-scroll {
                                animation: infiniteScroll 30s linear infinite;
                                width: max-content;
                            }
                            .animate-infinite-scroll:hover {
                                animation-play-state: paused;
                            }
                        `}</style>
                        <div className="w-[100vw] relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-x-hidden bg-gray-50/30 py-16 border-y border-gray-100 mb-16 [mask-image:_linear-gradient(to_right,transparent_0,_black_10vw,_black_90vw,transparent_100%)] md:[mask-image:_linear-gradient(to_right,transparent_0,_black_20vw,_black_80vw,transparent_100%)]">
                            <div className="flex animate-infinite-scroll gap-6">
                                {[...wylarCertifications, ...wylarCertifications].map((cert, index) => {
                                    const isChileValora = cert.desc.toLowerCase().includes("chilevalora");
                                    return (
                                        <div key={index} className="w-[280px] md:w-[320px] shrink-0 bg-white rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col group hover:shadow-xl transition-all duration-300 hover:border-blue-100">
                                            <div className="h-44 relative overflow-hidden bg-gray-200">
                                                <Image
                                                    src={cert.img}
                                                    alt={cert.title}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                                />
                                                {isChileValora && (
                                                    <Image
                                                        src="/imagenes/logo_chilevalora.webp"
                                                        alt="Sello ChileValora"
                                                        width={90}
                                                        height={30}
                                                        className="absolute top-3 right-3 z-10 object-contain drop-shadow-md"
                                                    />
                                                )}
                                            </div>
                                            <div className="p-6 flex-1 flex flex-col justify-center">
                                                <strong className="font-bold text-navy-deep block mb-2 leading-tight text-lg group-hover:text-blue-600 transition-colors">{cert.title}</strong>
                                                <span className="text-gray-500 text-sm font-medium">{cert.desc}</span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Cierre / Call to Action Textual */}
                        <div className="text-center">
                            <div className="mb-10 text-xl font-medium text-gray-600 leading-relaxed max-w-3xl mx-auto space-y-6">
                                <p>
                                    Convierte tu experiencia en una certificación con respaldo formal. Valida tus conocimientos y habilidades, sin importar cómo los hayas adquirido.
                                </p>
                                <p>
                                    Abre nuevas oportunidades laborales, mejora tus ingresos y fortalece tu perfil profesional frente a empleadores y proyectos de mayor nivel.
                                </p>
                            </div>

                            <p className="text-navy-deep font-black text-2xl md:text-3xl mb-12">
                                Más oportunidades, mayor reconocimiento y un futuro laboral más sólido.
                            </p>

                            <div className="flex flex-col items-center justify-center gap-6 pt-10 border-t border-gray-100">
                                <Image
                                    src="/imagenes/Timbre Wylar.png"
                                    alt="Logo Wylar Certificadora"
                                    width={160}
                                    height={60}
                                    className="w-40 h-auto object-contain mb-2"
                                />
                                <a href="https://wylar.cl" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-gray-900 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-inst hover:shadow-xl hover:shadow-blue-inst/20 hover:-translate-y-1 transition-all duration-300 group text-lg">
                                    Conoce más en wylar.cl <ExternalLink className="ml-3 w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                                </a>
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
                                <ContactForm
                                    customDropdown={{ label: "Oficio a Certificar", options: wylarCertifications.map(c => c.title) }}
                                    className="md:grid-cols-1"
                                    variant="persona"
                                    hideInterestDropdown={true}
                                    certificacionLayout={true}
                                />
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
