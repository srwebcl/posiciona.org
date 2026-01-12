"use client";

import { PageHero } from "@/app/components/ui/PageHero";
import { PersonasCatalog } from "@/app/components/personas/PersonasCatalog";

export default function CursosPage() {
    return (
        <main className="min-h-screen bg-white">
            <PageHero
                badge="Catálogo Académico"
                title={
                    <>
                        Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Cursos</span>
                    </>
                }
                description="Explora nuestra oferta completa de capacitación técnica, oficios y licencias profesionales. Diseñados para potenciar tu empleabilidad."
            />

            <PersonasCatalog />
        </main>
    );
}
