import Link from "next/link";
import { Mail, MapPin, Phone, Youtube, Linkedin, Facebook, Instagram } from "lucide-react";
import { TechButton } from "@/app/components/ui/tech-button";
import { BrandLogo } from "@/app/components/ui/brand-logo";

export function Footer() {
    return (
        <footer className="relative bg-navy-deep text-white border-t border-white/5 overflow-hidden">
            {/* Grid Background */}
            <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

            <div className="container mx-auto px-4 py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* COLUMN 1: Brand */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <BrandLogo variant="white" className="w-48" />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Posiciona ®. Centro de Capacitación certificado.
                            Calidad y eficiencia en servicios para personas y empresas.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { Icon: Facebook, url: "https://www.facebook.com/posiciona.org/" },
                                { Icon: Instagram, url: "https://www.instagram.com/posiciona?igsh=MWl2ano3NXJyMW1wbw==" },
                                { Icon: Linkedin, url: "https://www.linkedin.com/company/posiciona/" },
                                { Icon: Youtube, url: "https://www.youtube.com/user/MultimediaPosiciona" }
                            ].map((social, i) => (
                                <a key={i} href={social.url} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-lg hover:bg-amber-vial hover:text-navy-deep transition-all duration-300 tech-glow">
                                    <social.Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* COLUMN 2: Personas y Empresas */}
                    <div className="space-y-12">
                        {/* Para Personas */}
                        <div>
                            <h4 className="text-lg font-bold font-sans uppercase mb-6 text-amber-vial">Para Personas</h4>
                            <ul className="space-y-4 text-sm text-gray-300 font-mono">
                                <li><Link href="/personas/cursos" className="hover:text-white transition-colors">Ver Catálogo Cursos</Link></li>
                                <li><Link href="/personas/escuela-conductores" className="hover:text-white transition-colors">Escuela de Conductores</Link></li>
                                <li><Link href="/talento-digital" className="hover:text-white transition-colors">Talento Digital (Becas)</Link></li>
                                <li><Link href="/personas/contacto" className="hover:text-white transition-colors">Atención Personas</Link></li>
                            </ul>
                        </div>

                        {/* Para Empresas */}
                        <div>
                            <h4 className="text-lg font-bold font-sans uppercase mb-6 text-amber-vial">Para Empresas</h4>
                            <ul className="space-y-4 text-sm text-gray-300 font-mono">
                                <li><Link href="/empresas/capacitaciones" className="hover:text-white transition-colors">Capacitación SENCE</Link></li>
                                <li><Link href="/empresas/certificaciones" className="hover:text-white transition-colors">Certificación y Calidad</Link></li>
                                <li><Link href="/empresas/contacto" className="hover:text-white transition-colors">Atención Empresas</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* COLUMN 3: Institucional y Contacto */}
                    <div className="space-y-12">
                        {/* Institucional  */}
                        <div>
                            <h4 className="text-lg font-bold font-sans uppercase mb-6 text-amber-vial">Institucional</h4>
                            <ul className="space-y-4 text-sm text-gray-300 font-mono">
                                <li><Link href="/blog" className="text-amber-vial hover:text-white transition-colors font-bold">Blog Posiciona</Link></li>
                                <li><Link href="/nosotros" className="hover:text-white transition-colors">Sobre Nosotros</Link></li>
                                <li><Link href="/contacto" className="hover:text-white transition-colors">Oficina Virtual</Link></li>
                            </ul>
                        </div>

                        {/* Contacto Directo */}
                        <div>
                            <h4 className="text-lg font-bold font-sans uppercase mb-6 text-amber-vial">Contacto</h4>
                            <ul className="space-y-4 text-sm text-gray-300">
                                <li className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-blue-inst shrink-0" />
                                    <div>
                                        <span className="block font-bold text-white">Sede Santiago:</span>
                                        <span className="block text-gray-400">Alameda Libertador Bernardo Ohiggins 252 Ofic. 21, Santiago</span>
                                        <span className="block font-bold text-white mt-3">Sede Arica:</span>
                                        <span className="block text-gray-400">21 de mayo 699 piso 2, Arica</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Phone className="w-5 h-5 text-blue-inst shrink-0 mt-0.5" />
                                    <div>
                                        <span className="block">+56 9 8453 4364</span>
                                        <span className="block text-gray-400 mt-1">Lunes a viernes 09:00 a 18:00 hrs</span>
                                    </div>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Mail className="w-5 h-5 text-blue-inst shrink-0" />
                                    <span>posiciona@posiciona.org</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-mono">
                    <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center text-center md:text-left">
                        <p>© {new Date().getFullYear()} OTEC Posiciona. Todos los derechos reservados.</p>
                        <span className="hidden md:block text-gray-700">|</span>
                        <p>Desarrollado con ⚡ por <a href="https://srweb.cl" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">SRweb</a></p>
                    </div>
                    <div className="flex gap-8">
                        <Link href="/politicas-de-privacidad" className="hover:text-white transition-colors">Política de Privacidad</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
