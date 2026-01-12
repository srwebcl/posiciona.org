import { TechButton } from "@/app/components/ui/tech-button";
import { BrandLogo } from "@/app/components/ui/brand-logo";
import {
    BookOpen,
    GraduationCap,
    MessageCircle,
    Phone,
    Mail,
    Building2,
    FileText,
    Users,
    Headset
} from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Oficina Virtual | Posiciona.org",
    description: "Centro de atención y soporte para alumnos y empresas. Accede a tu aula virtual, certificados y soporte técnico.",
};

export default function OficinaVirtualPage() {
    return (
        <div className="min-h-screen bg-navy-deep text-white relative overflow-x-hidden">
            {/* Background Effects */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-inst/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-amber-vial/5 rounded-full blur-[100px]" />
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02]" />
            </div>

            <div className="relative z-10 container mx-auto px-6 py-32 md:py-40">
                {/* Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-inst/20 border border-blue-inst/30 text-blue-300 text-xs font-mono mb-6 backdrop-blur-sm">
                        SOPORTE Y GESTIÓN
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
                        Oficina <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-vial to-white">Virtual</span>
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed">
                        Bienvenido a tu centro de gestión. Selecciona tu perfil para acceder a las herramientas y canales de atención correspondientes.
                    </p>
                </div>

                {/* Profile Selector */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">

                    {/* Card: ALUMNOS */}
                    <div className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-inst/20 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative h-full bg-navy-deep/50 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-blue-inst/50 transition-all duration-300 flex flex-col">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-4 rounded-2xl bg-blue-inst/20 text-blue-400 group-hover:bg-blue-inst group-hover:text-white transition-colors duration-300">
                                    <GraduationCap className="w-8 h-8" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-white">Soy Alumno</h2>
                                    <p className="text-gray-400 text-sm">Gestiona tu aprendizaje y trámites</p>
                                </div>
                            </div>

                            <div className="space-y-4 flex-1">
                                <a href="https://aulavirtual.thelondonbridge.cl/" target="_blank" className="block p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all group/item">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <BookOpen className="w-5 h-5 text-amber-vial" />
                                            <span className="font-bold">Ir al Aula Virtual</span>
                                        </div>
                                        <span className="text-gray-500 group-hover/item:translate-x-1 transition-transform">→</span>
                                    </div>
                                </a>

                                <Link href="/personas/contacto" className="block p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all group/item">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <Headset className="w-5 h-5 text-gray-300" />
                                            <span>Soporte Académico</span>
                                        </div>
                                        <span className="text-gray-500 group-hover/item:translate-x-1 transition-transform">→</span>
                                    </div>
                                </Link>

                                <button className="w-full text-left p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all group/item opacity-50 cursor-not-allowed">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <FileText className="w-5 h-5 text-gray-300" />
                                            <span>Solicitar Certificado</span>
                                        </div>
                                        <span className="text-xs text-amber-vial border border-amber-vial px-2 py-0.5 rounded">Pronto</span>
                                    </div>
                                </button>
                            </div>

                            <div className="mt-8 pt-6 border-t border-white/10">
                                <p className="text-sm text-center text-gray-400 mb-4">¿Necesitas ayuda urgente?</p>
                                <a href="https://wa.me/56966664127" target="_blank" rel="noopener noreferrer">
                                    <TechButton variant="secondary" className="w-full justify-center">
                                        <MessageCircle className="w-4 h-4 mr-2" /> Chat Alumnos
                                    </TechButton>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Card: EMPRESAS */}
                    <div className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-b from-amber-vial/20 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative h-full bg-navy-deep/50 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-amber-vial/50 transition-all duration-300 flex flex-col">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-4 rounded-2xl bg-amber-vial/20 text-amber-vial group-hover:bg-amber-vial group-hover:text-navy-deep transition-colors duration-300">
                                    <Building2 className="w-8 h-8" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-white">Soy Empresa</h2>
                                    <p className="text-gray-400 text-sm">Coordinación y servicios corporativos</p>
                                </div>
                            </div>

                            <div className="space-y-4 flex-1">
                                <Link href="/empresas/contacto" className="block p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all group/item">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <Users className="w-5 h-5 text-blue-inst" />
                                            <span className="font-bold">Coordinación de Cursos</span>
                                        </div>
                                        <span className="text-gray-500 group-hover/item:translate-x-1 transition-transform">→</span>
                                    </div>
                                </Link>

                                <button className="w-full text-left p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all group/item opacity-50 cursor-not-allowed">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <FileText className="w-5 h-5 text-gray-300" />
                                            <span>Portal Facturación</span>
                                        </div>
                                        <span className="text-xs text-blue-inst border border-blue-inst px-2 py-0.5 rounded">Pronto</span>
                                    </div>
                                </button>
                            </div>

                            <div className="mt-8 pt-6 border-t border-white/10">
                                <p className="text-sm text-center text-gray-400 mb-4">¿Atención comercial?</p>
                                <div className="grid grid-cols-2 gap-4">
                                    <a href="mailto:posiciona@posiciona.org">
                                        <TechButton variant="outline" className="w-full justify-center text-xs">
                                            <Mail className="w-3 h-3 mr-2" /> Email
                                        </TechButton>
                                    </a>
                                    <a href="https://wa.me/56966664127" target="_blank">
                                        <TechButton variant="outline" className="w-full justify-center text-xs">
                                            <Phone className="w-3 h-3 mr-2" /> WhatsApp
                                        </TechButton>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Footer Note */}
                <div className="text-center">
                    <p className="text-gray-500 text-sm">
                        * Si tienes dudas sobre qué opción elegir, contáctanos al <span className="text-white font-bold">+56 9 6666 4127</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
