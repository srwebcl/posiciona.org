import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Blog y Novedades | Posiciona',
    description: 'Mantente al día con las últimas noticias, guías y consejos de OTEC Posiciona sobre capacitación, escuela de conductores y certificaciones.',
    openGraph: {
        title: 'Blog y Novedades | Posiciona',
        description: 'Mantente al día con las últimas noticias y guías de OTEC Posiciona.',
        type: 'website',
    },
};

export default function BlogIndex() {
    return (
        <main className="min-h-screen bg-white">
            {/* Header */}
            <section className="bg-navy-deep text-white pt-40 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/imagenes/posiciona-21.jpeg')] bg-cover bg-center opacity-10" />
                <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
                    <span className="text-amber-vial font-bold tracking-widest text-sm uppercase mb-4 block">
                        Actualidad & Formación
                    </span>
                    <h1 className="text-5xl md:text-6xl font-black mb-6">
                        Blog Posiciona
                    </h1>
                    <p className="text-xl text-gray-400">
                        Encuentra guías, noticias y consejos para potenciar tu desarrollo profesional y estar al día con las normativas.
                    </p>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="py-24">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* Article Card */}
                        <Link href="/blog/licencia-extranjeros" className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="relative aspect-[4/3] w-full bg-gray-100 overflow-hidden">
                                <Image
                                    src="/imagenes/licencia-extranjeros-blog.png"
                                    alt="Licencia Profesional Clase A para Extranjeros"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-navy-deep flex items-center gap-2">
                                    <BookOpen className="w-3 h-3" /> Escuela de Conductores
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <h2 className="text-2xl font-bold text-navy-deep leading-tight mb-4 group-hover:text-amber-600 transition-colors">
                                    Licencia Profesional Clase A para Extranjeros en Chile
                                </h2>
                                <p className="text-gray-500 line-clamp-3 mb-8 flex-grow">
                                    Guía completa paso a paso para que extranjeros obtengan la Licencia Profesional Clase A en Chile. Requisitos, convenios internacionales y proceso.
                                </p>
                                <div className="flex items-center text-amber-vial font-bold group-hover:gap-3 transition-all">
                                    Leer Artículo <ArrowRight className="w-5 h-5 ml-2" />
                                </div>
                            </div>
                        </Link>

                    </div>
                </div>
            </section>
        </main>
    );
}
