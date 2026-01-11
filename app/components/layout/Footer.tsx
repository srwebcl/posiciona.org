import Link from "next/link";
import { Mail, MapPin, Phone, Github, Linkedin, Facebook } from "lucide-react";
import { TechButton } from "@/app/components/ui/tech-button";
import { BrandLogo } from "@/app/components/ui/brand-logo";

export function Footer() {
    return (
        <footer className="relative bg-navy-deep text-white border-t border-white/5 overflow-hidden">
            {/* Grid Background */}
            <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

            <div className="container mx-auto px-4 py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <BrandLogo variant="white" className="w-48" />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Posiciona ®. Centro de Capacitación certificado NCh 2728 e ISO 9001:2008.
                            Calidad y eficiencia en servicios para personas y empresas.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Linkedin, Github].map((Icon, i) => (
                                <a key={i} href="#" className="p-2 bg-white/5 rounded-lg hover:bg-amber-vial hover:text-navy-deep transition-all duration-300 tech-glow">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Para Personas */}
                    <div>
                        <h4 className="text-lg font-bold font-sans uppercase mb-6 text-amber-vial">Para Personas</h4>
                        <ul className="space-y-4 text-sm text-gray-300 font-mono">
                            <li><Link href="/personas#catalogo" className="hover:text-white transition-colors">Ver Cursos</Link></li>
                            <li><Link href="/personas/escuela-conductores" className="hover:text-white transition-colors">Escuela Conductores</Link></li>
                            <li><Link href="/personas" className="hover:text-white transition-colors">Gratuidad (SENCE)</Link></li>
                            <li><Link href="/personas/contacto" className="hover:text-white transition-colors">Matrículas</Link></li>
                        </ul>
                    </div>

                    {/* Para Empresas */}
                    <div>
                        <h4 className="text-lg font-bold font-sans uppercase mb-6 text-amber-vial">Para Empresas</h4>
                        <ul className="space-y-4 text-sm text-gray-300 font-mono">
                            <li><Link href="/empresas" className="hover:text-white transition-colors">Capacitación</Link></li>
                            <li><Link href="/empresas" className="hover:text-white transition-colors">Certificación Wylar</Link></li>
                            <li><Link href="/empresas" className="hover:text-white transition-colors">Franquicia Tributaria</Link></li>
                            <li><Link href="/contacto" className="hover:text-white transition-colors">Cotizar Servicios</Link></li>
                        </ul>
                    </div>

                    {/* Contacto */}
                    <div>
                        <h4 className="text-lg font-bold font-sans uppercase mb-6 text-amber-vial">Contacto</h4>
                        <ul className="space-y-4 text-sm text-gray-300">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-blue-inst mt-0.5" />
                                <span>Av. Santa María 2050,<br />Arica, Chile</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-blue-inst" />
                                <span>+56 58 2 222 222</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-blue-inst" />
                                <span>contacto@posiciona.cl</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-mono">
                    <p>© {new Date().getFullYear()} OTEC Posiciona SpA. Todos los derechos reservados.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white">Política de Privacidad</a>
                        <a href="#" className="hover:text-white">Términos y Condiciones</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
