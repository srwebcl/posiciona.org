import { GlassCard } from "@/app/components/ui/glass-card";
import { TechButton } from "@/app/components/ui/tech-button";
import { Code2, Truck, Wrench, ArrowRight, HeartPulse, Languages } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Posiciona Personas | Tu Carrera Despega Aquí",
    description: "Formación técnica de alto nivel para impulsar tu empleabilidad. Desde conducción profesional hasta programación.",
};

const categories = [
    {
        title: "Talento Digital 2025",
        icon: Code2,
        desc: "Desarrollo Front-End, Full Stack JavaScript, Mobile Android, Python, Seguridad Computacional.",
        bg: "bg-blue-inst",
        link: "/talento-digital"
    },
    {
        title: "Escuela Profesional",
        icon: Truck,
        desc: "Licencias A2 y A3. Curso Especial con Simulador Europeo (reducción de 4 a 2 años).",
        bg: "bg-amber-vial",
        link: "/escuela-conductores"
    },
    {
        title: "Oficios Industriales",
        icon: Wrench,
        desc: "Soldadura (MIG, TIG, Arco Manual), Electricidad Clase D (SEC), Operación Grúa Horquilla.",
        bg: "bg-gray-500",
        link: "/oficios"
    },
    {
        title: "Salud y Cuidados",
        icon: HeartPulse,
        desc: "Atención de enfermos (dependencia leve, moderada, grave).",
        bg: "bg-red-500",
        link: "/contacto?interest=salud"
    },
    {
        title: "Inglés & Gestión",
        icon: Languages,
        desc: "Inglés The London Bridge (TOEIC), SAP, Excel y Alfabetización Digital.",
        bg: "bg-purple-500",
        link: "/contacto?interest=ingles"
    },
    {
        title: "Artesanales",
        icon: Wrench,
        desc: "Corte y confección, orfebrería y oficios artesanales.",
        bg: "bg-pink-500",
        link: "/contacto?interest=artesania"
    }
];

export default function PersonasPage() {
    return (
        <div className="min-h-screen bg-navy-deep pt-24 pb-20">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase">
                        <span className="text-explosive">Evoluciona</span> tu Perfil
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto font-mono">
                        Elige tu ruta de especialización. Tecnología, Industria o Transporte.
                        La certificación que buscas, con la calidad que exige el mercado.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {categories.map((cat, idx) => (
                        <Link key={idx} href={cat.link}>
                            <GlassCard className="h-full group cursor-pointer hover:bg-white/5">
                                <div className={`w-12 h-12 rounded-lg ${cat.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform tech-glow`}>
                                    <cat.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-vial transition-colors">
                                    {cat.title}
                                </h3>
                                <p className="text-gray-400 mb-6 font-mono text-sm">
                                    {cat.desc}
                                </p>
                                <div className="flex items-center text-amber-vial text-sm font-bold uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                                    Ver Programas <ArrowRight className="ml-2 w-4 h-4" />
                                </div>
                            </GlassCard>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
