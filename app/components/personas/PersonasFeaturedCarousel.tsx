"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code2, Truck, Wrench, Languages, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/app/components/ui/button";

// Featured Data Subset
const FEATURED_COURSES = [
    {
        id: "talento-digital",
        category: "TALENTO DIGITAL",
        title: "Bootcamp Desarrollo Front-End",
        image: "/imagenes/posiciona-23.jpeg",
        icon: Code2,
        link: "/talento-digital",
        color: "blue"
    },
    {
        id: "escuela-a3",
        category: "ESCUELA DE CONDUCTORES",
        title: "Licencia Profesional A3",
        image: "/imagenes/posiciona-21.jpeg",
        icon: Truck,
        link: "/escuela-conductores", // Updated to correct link if needed or keep consistent
        color: "amber"
    },
    {
        id: "oficios-soldadura",
        category: "OFICIOS",
        title: "Soldadura Calificada (MIG/TIG)",
        image: "/imagenes/posiciona-11.jpeg",
        icon: Wrench,
        link: "/personas/cursos?categoria=oficios",
        color: "cyan"
    },
    {
        id: "idiomas-ingles",
        category: "IDIOMAS",
        title: "Inglés Laboral (TOEIC)",
        image: "/imagenes/posiciona-11.jpeg",
        icon: Languages,
        link: "/contacto?interest=ingles",
        color: "indigo"
    }
];

export function PersonasFeaturedCarousel() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 320; // Approx card width + gap
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <div className="relative mb-12 group/carousel">
            {/* Controls - Visible on desktop hover */}
            <div className="hidden md:block absolute top-1/2 -left-4 -translate-y-1/2 z-30 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300">
                <Button
                    variant="outline"
                    size="icon"
                    onClick={() => scroll('left')}
                    className="rounded-full bg-white/80 backdrop-blur shadow-lg hover:bg-white border-white/20"
                >
                    <ChevronLeft className="w-5 h-5 text-navy-deep" />
                </Button>
            </div>
            <div className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2 z-30 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300">
                <Button
                    variant="outline"
                    size="icon"
                    onClick={() => scroll('right')}
                    className="rounded-full bg-white/80 backdrop-blur shadow-lg hover:bg-white border-white/20"
                >
                    <ChevronRight className="w-5 h-5 text-navy-deep" />
                </Button>
            </div>

            {/* Scroll Container */}
            <div
                ref={scrollRef}
                className="flex overflow-x-auto gap-6 pb-8 px-4 snap-x snap-mandatory scrollbar-hide -mx-4 md:mx-0"
            >
                {FEATURED_COURSES.map((course) => (
                    <div
                        key={course.id}
                        className="snap-center shrink-0 w-[280px] md:w-[320px] relative group"
                    >
                        <Link href={course.link} className="block h-full">
                            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                                {/* Image Info */}
                                <div className="absolute inset-0">
                                    <Image
                                        src={course.image}
                                        alt={course.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent opacity-90" />
                                </div>

                                {/* Content */}
                                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                    <div className="mb-auto pt-4">
                                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white mb-4">
                                            <course.icon className="w-5 h-5" />
                                        </div>
                                    </div>

                                    <div>
                                        <span className={`text-[10px] font-bold tracking-widest uppercase mb-2 block ${course.color === 'amber' ? 'text-amber-400' :
                                            course.color === 'cyan' ? 'text-cyan-400' : 'text-blue-400'
                                            }`}>
                                            {course.category}
                                        </span>
                                        <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-amber-vial transition-colors">
                                            {course.title}
                                        </h3>
                                        <div className="flex items-center text-xs font-bold text-white/70 uppercase tracking-wider group-hover:translate-x-2 transition-transform duration-300">
                                            Ver Programa <ArrowRight className="w-4 h-4 ml-2" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
