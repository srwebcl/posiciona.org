import { COURSES } from "@/app/data/courses";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Calendar, Clock, Award, MapPin } from "lucide-react";
import { ContactForm } from "@/app/components/contact/ContactForm";
import { Suspense } from "react";

export async function generateStaticParams() {
    return COURSES.map((course) => ({
        slug: course.slug,
    }));
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const course = COURSES.find((c) => c.slug === slug);

    if (!course) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-navy-deep overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
                <div className="container mx-auto px-4 relative z-10">
                    <Link href="/#catalogo" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Volver al Catálogo
                    </Link>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase bg-white/10 text-${course.color === 'cyan' ? 'cyan-400' : 'amber-400'} border border-white/20`}>
                                {course.category}
                            </span>
                            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
                                {course.title}
                            </h1>
                            <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                                {course.description}
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <div className="flex items-center gap-3 bg-white/5 rounded-xl px-5 py-3 border border-white/10">
                                    <Clock className="w-5 h-5 text-gray-400" />
                                    <div>
                                        <div className="text-xs text-gray-500 uppercase font-bold">Duración</div>
                                        <div className="text-white font-semibold">{course.duration}</div>
                                    </div>

                                    <MapPin className="w-5 h-5 text-gray-400" />
                                    <div>
                                        <div className="text-xs text-gray-500 uppercase font-bold">Modalidad</div>
                                        <div className="text-white font-semibold whitespace-nowrap">{course.location}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
                                <Image
                                    src={course.image}
                                    alt={course.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent" />
                            </div>
                            {/* Icon Float */}
                            <div className={`absolute -bottom-6 -right-6 w-24 h-24 rounded-2xl flex items-center justify-center shadow-xl border-4 border-navy-deep ${course.color === 'cyan' ? 'bg-cyan-500' : course.color === 'blue' ? 'bg-blue-600' : 'bg-amber-500'}`}>
                                <course.icon className="w-12 h-12 text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Main Info */}
                        <div className="lg:col-span-2 space-y-12">
                            {(course as any).details ? (
                                <>
                                    <div>
                                        <h2 className="text-3xl font-bold text-navy-deep mb-4">Descripción del Programa</h2>
                                        <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-line">
                                            {course.extendedDescription || course.description}
                                        </p>
                                    </div>

                                    {(course as any).details.modality && (
                                        <div>
                                            <h3 className="text-2xl font-bold text-navy-deep mb-5 border-b pb-2">Modalidad y Duración</h3>
                                            <ul className="space-y-4">
                                                {(course as any).details.modality.map((item: string, idx: number) => (
                                                    <li key={idx} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                                                        <CheckCircle2 className="w-6 h-6 text-amber-500 shrink-0" />
                                                        <span className="text-gray-700 font-medium">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {(course as any).details.allowsDriving && (
                                        <div>
                                            <h3 className="text-2xl font-bold text-navy-deep mb-5 border-b pb-2">
                                                {course.category === "ESCUELA DE CONDUCTORES" ? "¿Qué permite conducir?" : "Lo que aprenderás"}
                                            </h3>
                                            <ul className="space-y-3">
                                                {(course as any).details.allowsDriving.map((item: string, idx: number) => (
                                                    <li key={idx} className="flex items-start gap-3">
                                                        <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                                                        <span className="text-gray-700">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {(course as any).details.requirements && (
                                        <div>
                                            <h3 className="text-2xl font-bold text-navy-deep mb-5 border-b pb-2">Requisitos de Postulación</h3>
                                            <ul className="space-y-3 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                                {(course as any).details.requirements.map((item: string, idx: number) => (
                                                    <li key={idx} className="flex items-start gap-3">
                                                        <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0"></div>
                                                        <span className="text-gray-700">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {(course as any).details.approval && (
                                        <div>
                                            <h3 className="text-2xl font-bold text-navy-deep mb-5 border-b pb-2">¿Cómo apruebo mi curso?</h3>
                                            <ol className="list-decimal list-inside space-y-3 text-gray-700 font-medium bg-amber-50/50 p-6 rounded-2xl border border-amber-100/50">
                                                {(course as any).details.approval.map((item: string, idx: number) => (
                                                    <li key={idx} className="pl-2">{item}</li>
                                                ))}
                                            </ol>
                                        </div>
                                    )}

                                    {(course as any).details.certification && (
                                        <div>
                                            <h3 className="text-2xl font-bold text-navy-deep mb-5 border-b pb-2">Certificación</h3>
                                            <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100">
                                                <Award className="w-8 h-8 text-blue-600 shrink-0" />
                                                <p className="text-gray-700 font-medium">
                                                    {(course as any).details.certification}
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    {(course as any).details.importantInfo && (
                                        <div>
                                            <h3 className="text-2xl font-bold text-red-900 mb-5 border-b border-red-100 pb-2">Información Importante</h3>
                                            <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                                                <ul className="space-y-3">
                                                    {(course as any).details.importantInfo.map((item: string, idx: number) => (
                                                        <li key={idx} className="flex items-start gap-3 text-red-800">
                                                            <span className="font-bold">•</span>
                                                            <span className="font-medium">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <>
                                    <div>
                                        <h2 className="text-3xl font-bold text-navy-deep mb-6">Descripción del Programa</h2>
                                        <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-line">
                                            {course.extendedDescription || course.description}
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-navy-deep mb-6">Lo que aprenderás</h3>
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            {(course.learning_outcomes || course.tags).map((item, idx) => (
                                                <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-blue-100 hover:shadow-md transition-all">
                                                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                                    <span className="text-gray-700 font-medium">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Sidebar CTA */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden sticky top-24">
                                {/* Form Header */}
                                <div className={`p-6 bg-gradient-to-r ${course.color === 'cyan' ? 'from-cyan-600 to-blue-600' : 'from-amber-500 to-orange-600'}`}>
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="text-xl font-bold text-white">Solicitar Información</h3>
                                        <span className="bg-white/20 text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wider backdrop-blur-sm">
                                            Cupos Limitados
                                        </span>
                                    </div>
                                    <p className="text-white/90 text-sm">
                                        Completa el formulario y te enviaremos la ficha técnica, valores y fechas.
                                    </p>
                                </div>

                                <div className="p-6">
                                    <Suspense fallback={<div className="text-white/80 p-4">Cargando formulario...</div>}>
                                        <ContactForm prefilledInterest={course.title} variant="persona" />
                                    </Suspense>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
