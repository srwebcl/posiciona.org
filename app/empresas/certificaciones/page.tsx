import { TechButton } from "@/app/components/ui/tech-button";
import Image from "next/image";
import { Suspense } from "react";
import { Building2, ArrowRight, ShieldCheck, Check, Mail, Loader2, ExternalLink } from "lucide-react";
import { PageHero } from "@/app/components/ui/PageHero";
import { ContactForm } from "@/app/components/contact/ContactForm";

export const metadata = {
    title: "Certificación de Competencias y Calidad | Posiciona",
    description: "Certificación de competencias laborales Wylar (ChileValora) y gestión de calidad NCh 2728.",
};

const wylarCertifications = [
    { title: "Instalador(a) Eléctrico Clase D", desc: "Certificación bajo Sistema ChileValora", img: "/imagenes/electricista.jpeg" },
    { title: "Cuidador(a) de Personas Mayores", desc: "Certificación bajo Sistema ChileValora", img: "/imagenes/cuidado-adulto-mayor.jpg" },
    { title: "Calificación de Soldadores", desc: "Certificación Técnica Privada", img: "/imagenes/soldador.jpeg" },
    { title: "Rigger y Maniobras de Izaje, entre otros", desc: "Certificación Técnica Privada", img: "/imagenes/rigger-izaje.png" }
];

export default function CertificacionesEmpresasPage() {
    return (
        <div className="min-h-screen bg-white">
            <PageHero
                badge="Calidad y Normativa"
                title={
                    <>
                        Certificación de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Competencias Laborales</span>
                    </>
                }
                description="Asegure la calidad de sus procesos y competencias laborales con nuestros servicios de certificación y alianza estratégica Wylar Ltda."
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
                                Fortalezca la competitividad de su empresa mediante la Certificación de Competencias Laborales, gracias a nuestra alianza estratégica con <strong className="font-bold text-navy-deep">WYLAR Certificadora</strong>.
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
                                    Asegure personal competente, reduzca riesgos operacionales y cumpla con estándares técnicos exigidos por la industria.
                                </p>
                                <p>
                                    Evalúe y certifique formalmente las competencias de sus trabajadores, transformando su experiencia en respaldo verificable que aumenta la productividad, mejora la seguridad y fortalece la imagen de su empresa frente a clientes y organismos fiscalizadores.
                                </p>
                            </div>

                            <p className="text-navy-deep font-black text-2xl md:text-3xl mb-12">
                                Más confianza, menos riesgos y mayor competitividad para su organización.
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

            {/* SECCIÓN 2: CALIDAD ISO NCH 2728 (Light Gray Minimalist Section) */}
            <div className="py-24 bg-gray-50 relative z-10 overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-5xl mx-auto">

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-center">

                            {/* Text Column */}
                            <div className="md:col-span-7">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold border border-emerald-100 mb-8 tracking-[0.2em] uppercase">
                                    <ShieldCheck className="w-3.5 h-3.5" /> Calidad Asegurada
                                </div>
                                <h2 className="text-3xl md:text-4xl font-black text-navy-deep mb-6 leading-tight">
                                    Norma Chilena <br />
                                    <span className="text-blue-inst font-normal">ISO NCh 2728</span>
                                </h2>
                                <p className="text-gray-600 mb-8 text-lg md:text-xl leading-relaxed font-light">
                                    En Posiciona, la calidad no es una opción, es nuestro compromiso inquebrantable. Garantizamos procesos de capacitación corporativa trazables y de alto impacto.
                                </p>

                                <ul className="space-y-6">
                                    <li className="flex items-start gap-4">
                                        <div className="mt-1 bg-white border border-gray-100 shadow-sm p-2 rounded-xl shrink-0"><Check className="w-4 h-4 text-emerald-600" /></div>
                                        <div>
                                            <h4 className="text-navy-deep font-bold text-base mb-1 tracking-wide">Mejora Continua del Servicio</h4>
                                            <p className="text-gray-500 text-base leading-relaxed">Evaluación constante de nuestros relatores, diseño instruccional y soporte logístico empresarial.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="mt-1 bg-white border border-gray-100 shadow-sm p-2 rounded-xl shrink-0"><Check className="w-4 h-4 text-emerald-600" /></div>
                                        <div>
                                            <h4 className="text-navy-deep font-bold text-base mb-1 tracking-wide">Satisfacción del Cliente B2B</h4>
                                            <p className="text-gray-500 text-base leading-relaxed">Enfoque consultivo en requerimientos específicos para el cumplimiento de objetivos organizacionales.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* Image Column (Clean Insignia) */}
                            <div className="md:col-span-5 flex justify-center md:justify-end">
                                <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-gray-100 w-full max-w-sm flex flex-col items-center">
                                    <Image
                                        src="/imagenes/nch2728.png"
                                        alt="Certificación NCh 2728"
                                        width={400}
                                        height={300}
                                        className="w-full h-auto object-contain mb-8 mix-blend-multiply"
                                    />
                                    <div className="w-full text-center pt-6 border-t border-gray-50">
                                        <p className="text-gray-400 text-[10px] uppercase tracking-[0.2em] font-bold">Certificación Vigente</p>
                                    </div>
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
                            <h2 className="text-3xl font-bold text-white mb-4">Cotizar Certificación</h2>
                            <p className="text-gray-400">
                                Conversemos sobre cómo certificar a su equipo o implementar planes de calidad.
                            </p>
                        </div>
                        <div className="relative z-10 max-w-lg mx-auto">
                            <Suspense fallback={<div className="flex justify-center py-10"><Loader2 className="w-8 h-8 animate-spin text-amber-vial" /></div>}>
                                <ContactForm
                                    customDropdown={{ label: "Certificación de Interés", options: wylarCertifications.map(c => c.title) }}
                                    className="md:grid-cols-1"
                                    variant="empresa"
                                    hideInterestDropdown={true}
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
