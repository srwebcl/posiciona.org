import { PageHero } from "@/app/components/ui/PageHero";
import { TechButton } from "@/app/components/ui/tech-button";
import {
    Code2,
    Terminal,
    Database,
    Layout,
    Shield,
    Cloud,
    Briefcase,
    Smartphone,
    LineChart,
    CheckCircle,
    ArrowRight,
    ExternalLink
} from "lucide-react";
import Image from "next/image";

export const metadata = {
    title: "Talento Digital | Becas SENCE Reinvéntate",
    description: "Postula a las becas Talento Digital para Chile. Cursos gratuitos de programación, ciencia de datos y diseño UX/UI en Arica.",
};

const COURSES = [
    { title: "Full Stack Python", icon: Code2, desc: "Desarrollo completo de aplicaciones web modernas." },
    { title: "Desarrollo Front-end", icon: Layout, desc: "Interfaces de usuario interactivas y responsivas." },
    { title: "Full Stack JavaScript", icon: Terminal, desc: "Dominio del stack JS para web y servidores." },
    { title: "Full Stack Java", icon: Code2, desc: "Aplicaciones empresariales robustas y escalables." },
    { title: "Análisis de Datos", icon: LineChart, desc: "Extracción de valor e insights desde datos." },
    { title: "Diseño UX/UI", icon: Layout, desc: "Experiencia de usuario y diseño de interfaces." },
    { title: "Ciencia de Datos", icon: Database, desc: "Modelos predictivos y machine learning." },
    { title: "Ciberseguridad", icon: Shield, desc: "Protección de sistemas y redes informáticas." },
    { title: "Product Owner", icon: Briefcase, desc: "Gestión ágil de productos digitales con Scrum." },
    { title: "Arquitectura Cloud", icon: Cloud, desc: "Infraestructura y servicios en la nube." },
    { title: "Apps Móviles Android", icon: Smartphone, desc: "Desarrollo nativo para dispositivos móviles." },
];

export default function TalentoDigitalPage() {
    return (
        <div className="min-h-screen bg-white">
            <PageHero
                badge="Becas 100% SENCE"
                video="/imagenes/simulador.mp4"
                title={
                    <>
                        Hub <span className="text-white">Talento Digital</span>
                    </>
                }
                description="Conéctate con la industria tecnológica global. Cursos intensivos tipo Bootcamp para transformar tu carrera profesional."
                align="left"
                className="pt-32 md:pt-48 pb-20 md:pb-32"
            >
                <div className="flex flex-wrap gap-4">
                    <a href="https://sence.gob.cl/personas/talento-digital-reinventate" target="_blank" rel="noopener noreferrer">
                        <TechButton variant="primary" size="lg" className="h-14">
                            Postular en SENCE <ExternalLink className="ml-2 w-5 h-5" />
                        </TechButton>
                    </a>
                </div>
            </PageHero>

            {/* SECCIÓN CURSOS (Clean Light Grid) */}
            <div className="py-24 bg-white relative z-10">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <span className="text-blue-inst font-bold tracking-widest text-sm uppercase">Convocatoria Reinvéntate</span>
                        <h2 className="text-3xl md:text-5xl font-black text-navy-deep mt-2 mb-6">
                            Oferta Formativa
                        </h2>
                        <p className="text-gray-500 text-lg">
                            Programas intensivos de 4 a 6 meses. Metodología Bootcamp 100% práctica.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 hover-effect-group">
                        {COURSES.map((course, idx) => {
                            const Icon = course.icon;
                            return (
                                <div key={idx} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-blue-inst/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                                    <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-blue-inst transition-colors duration-300">
                                        <Icon className="w-7 h-7 text-blue-inst group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-xl font-bold text-navy-deep mb-3 group-hover:text-blue-inst transition-colors">
                                        {course.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        {course.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* SECCIÓN REQUISITOS + LOGO SENCE */}
            <section className="py-24 bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto px-4">
                    <div className="bg-white rounded-3xl p-8 md:p-16 shadow-xl border border-gray-100 flex flex-col lg:flex-row gap-16 items-center">

                        <div className="flex-1 space-y-8">
                            <h2 className="text-3xl font-black text-navy-deep">Requisitos de Postulación</h2>
                            <ul className="space-y-4">
                                <li className="flex gap-4 items-start">
                                    <CheckCircle className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                                    <div>
                                        <strong className="block text-navy-deep">Edad y Escolaridad</strong>
                                        <span className="text-gray-600">Mayor de 18 años con Enseñanza Media completa.</span>
                                    </div>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <CheckCircle className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                                    <div>
                                        <strong className="block text-navy-deep">Situación Laboral</strong>
                                        <span className="text-gray-600">Encontrarse cesante o ser trabajador por cuenta propia (ingreso máx $1.2M).</span>
                                    </div>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <CheckCircle className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                                    <div>
                                        <strong className="block text-navy-deep">Cotizaciones</strong>
                                        <span className="text-gray-600">Mínimo 3 cotizaciones previsionales en los últimos 36 meses.</span>
                                    </div>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <CheckCircle className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                                    <div>
                                        <strong className="block text-navy-deep">Test de Admisión</strong>
                                        <span className="text-gray-600">Rendir satisfactoriamente el test lógico matemático en línea.</span>
                                    </div>
                                </li>
                            </ul>

                            <div className="pt-6">
                                <a href="https://talentodigitalparachile.cl/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-inst font-bold hover:text-blue-700 transition-colors group">
                                    Visitar sitio oficial Talento Digital <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center gap-8 p-8 bg-gray-50 rounded-3xl w-full lg:w-auto min-w-[300px]">
                            <div className="relative w-64 h-32 grayscale hover:grayscale-0 transition-all duration-500 opacity-80 hover:opacity-100">
                                <Image
                                    src="/imagenes/logo-sence.webp"
                                    alt="Logo SENCE"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="text-center">
                                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Iniciativa Impulsada Por</p>
                                <a href="https://sence.gob.cl/personas/talento-digital-reinventate" target="_blank" rel="noopener noreferrer">
                                    <TechButton variant="secondary" className="w-full justify-center">
                                        Postular Ahora
                                    </TechButton>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
