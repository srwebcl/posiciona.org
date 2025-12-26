import { TradeList } from "@/app/components/oficios/TradeList";
import { Wrench } from "lucide-react";

export const metadata = {
    title: "Oficios Industriales Posiciona | Soldadura y Electricidad",
    description: "Cursos de oficios con certificación SENCE. Soldadura, Electricidad SEC Clase D, Maquinaria Pesada.",
};

export default function TradesPage() {
    return (
        <div className="bg-night-blue min-h-screen">
            {/* Trades Hero */}
            <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-night-blue">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-industrial/10 to-transparent z-0" />
                <div className="absolute inset-0 bg-[url('/imagenes/posiciona-20.jpeg')] bg-cover bg-center opacity-20 mix-blend-overlay" />

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex justify-center mb-6">
                        <div className="p-4 rounded-full bg-orange-industrial/20 border border-orange-industrial/50 shadow-[0_0_30px_rgba(255,102,0,0.3)]">
                            <Wrench className="w-10 h-10 text-orange-industrial" />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-4 uppercase">
                        Oficios <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-industrial to-yellow-500">Industriales</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        La columna vertebral de la productividad. Capacítate con los expertos regionales.
                    </p>
                </div>
            </section>

            <TradeList />

            {/* SENCE Info Section */}
            <section className="py-20 bg-[#050f1a] border-t border-white/5">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">¿Eres empresa? Usa tu Franquicia SENCE</h2>
                    <p className="text-gray-400 mb-8 leading-relaxed">
                        Aprovecha el incentivo tributario del Estado para capacitar a tus colaboradores.
                        Nosotros nos encargamos de la gestión administrativa y la ejecución de calidad.
                        Contamos con código SENCE vigente para todos nuestros cursos industriales.
                    </p>
                </div>
            </section>
        </div>
    );
}
