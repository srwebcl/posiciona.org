import { PersonasHero } from "@/app/components/personas/PersonasHero";
import { PersonasCatalog } from "@/app/components/personas/PersonasCatalog";
import { PersonasWhy } from "@/app/components/personas/PersonasWhy";
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

            {/* 2. CATALOGO - Spacing corrected */}
            <div>
                <PersonasCatalog />
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
