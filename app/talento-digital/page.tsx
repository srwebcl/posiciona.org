import { ProgramList } from "@/app/components/tech/ProgramList";
import { StudentPortfolio } from "@/app/components/tech/StudentPortfolio";
import { Terminal, Code2 } from "lucide-react";

export const metadata = {
    title: "Talento Digital Posiciona | Bootcamps y Cursos Tech",
    description: "Formación intensiva en programación, ciencia de datos y ciberseguridad. Conéctate con la industria digital global desde Arica.",
};

export default function TechPage() {
    return (
        <div className="bg-night-blue min-h-screen">
            {/* Tech Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-night-blue">
                {/* Matrix-like background effect placeholder */}
                <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(0, 194, 255, .3) 25%, rgba(0, 194, 255, .3) 26%, transparent 27%, transparent 74%, rgba(0, 194, 255, .3) 75%, rgba(0, 194, 255, .3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 194, 255, .3) 25%, rgba(0, 194, 255, .3) 26%, transparent 27%, transparent 74%, rgba(0, 194, 255, .3) 75%, rgba(0, 194, 255, .3) 76%, transparent 77%, transparent)', backgroundSize: '50px 50px' }}></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-night-blue z-0" />

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="flex justify-center mb-6">
                        <div className="bg-cyan-electric/10 p-4 rounded-full border border-cyan-electric/30 animate-pulse-slow">
                            <Code2 className="w-12 h-12 text-cyan-electric" />
                        </div>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-mono font-bold text-white mb-6 tracking-tighter">
                        HUB <span className="text-cyan-electric">DIGITAL</span>
                    </h1>

                    <div className="flex items-center justify-center gap-2 text-gray-400 font-mono text-sm md:text-base mb-8">
                        <Terminal className="w-4 h-4" />
                        <span>npm install future-skills</span>
                    </div>

                    <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        No necesitas ir a Santiago o al extranjero. En Arica formamos el talento que la economía digital busca. Metodología Bootcamp 100% práctica.
                    </p>
                </div>
            </section>

            <ProgramList />
            <StudentPortfolio />
        </div>
    );
}
