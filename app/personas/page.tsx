import { PersonasHero } from "@/app/components/personas/PersonasHero";
import { PersonasCategoryGrid } from "@/app/components/personas/PersonasCategoryGrid";
import { PersonasWhy } from "@/app/components/personas/PersonasWhy";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PersonasJourney } from "@/app/components/personas/PersonasJourney";
import { PersonasFAQ } from "@/app/components/personas/PersonasFAQ";

export const metadata = {
    title: "Posiciona Personas | Tu Carrera Despega Aquí",
    description: "Formación técnica de alto nivel para impulsar tu empleabilidad. Desde conducción profesional hasta programación.",
};

export default function PersonasPage() {
    return (
        <main className="flex flex-col min-h-screen bg-white">
            <PersonasHero />

            {/* 2. TEASER DE CATALOGO */}
            <div className="py-20 bg-gray-50 border-y border-gray-100">
                <div className="container mx-auto px-4 text-center">
                    <span className="text-amber-vial font-bold tracking-widest text-sm uppercase">Nuestra Oferta Académica</span>
                    <h2 className="text-3xl md:text-5xl font-black text-navy-deep mt-2 mb-8">
                        Programas de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Alto Impacto</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed mb-12">
                        Descubre nuestra variedad de cursos diseñados para mejorar tu empleabilidad. Desde conducción profesional hasta desarrollo de software y oficios industriales.
                    </p>

                    {/* Featured Carousel Replaced by Category Grid */}
                    <div className="mb-12">
                        <PersonasCategoryGrid />
                    </div>
                    {/* Link "Ver Todos" removed or kept as fallback? User wanted categories. Keeping as fallback for full catalog traverse */}
                    <Link
                        href="/personas/cursos"
                        className="inline-flex items-center gap-2 bg-navy-deep text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl"
                    >
                        Ver Catálogo Completo <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>

            {/* 3. POR QUÉ y RUTA */}
            <div className="relative z-20">
                <PersonasWhy />
                <PersonasJourney />
            </div>

            <PersonasFAQ />
        </main>
    );
}
