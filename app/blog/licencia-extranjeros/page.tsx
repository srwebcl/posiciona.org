import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, AlertTriangle, FileText, Settings, Info, MapPin } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Licencia Profesional Clase A para Extranjeros en Chile | Blog Posiciona',
    description: 'Guía completa para extranjeros que desean obtener su Licencia Profesional Clase A en Chile. Conoce los requisitos, convenios y proceso paso a paso.',
    openGraph: {
        title: 'Licencia Profesional Clase A para Extranjeros en Chile',
        description: 'Guía completa para extranjeros que desean obtener su Licencia Profesional Clase A en Chile.',
        images: ['/imagenes/licencia-extranjeros-blog.png'],
        type: 'article',
    },
};

export default function BlogArticle() {
    return (
        <main className="min-h-screen bg-white">
            {/* Header / Hero Article */}
            <article className="pt-32 pb-20">
                <div className="container mx-auto px-4 max-w-4xl">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-amber-vial font-bold hover:text-navy-deep transition-colors mb-8">
                        <ArrowLeft className="w-4 h-4" /> Volver al Blog
                    </Link>

                    <div className="mb-8">
                        <span className="inline-block px-3 py-1 bg-amber-vial/10 text-amber-600 font-bold rounded-lg text-sm mb-4">
                            Escuela de Conductores
                        </span>
                        <h1 className="text-4xl md:text-5xl font-black text-navy-deep leading-tight mb-6">
                            Licencia Profesional Clase A para Extranjeros en Chile
                        </h1>
                        <p className="text-xl text-gray-500 max-w-3xl">
                            En nuestra escuela orientamos a conductores extranjeros que desean obtener su Licencia Profesional Clase A conforme a la normativa vigente del Ministerio de Transportes y Telecomunicaciones y la Ley 18.290. A continuación, te explicamos lo más importante que debes considerar.
                        </p>
                    </div>

                    <div className="relative aspect-video rounded-3xl overflow-hidden mb-16 shadow-2xl">
                        <Image
                            src="/imagenes/licencia-extranjeros-blog.png"
                            alt="Conductor profesional extranjero en Chile"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Content Body */}
                    <div className="prose prose-lg max-w-none text-gray-600 space-y-12">

                        {/* Point 1 */}
                        <section>
                            <h2 className="text-3xl font-bold text-navy-deep flex items-center gap-3 mb-6">
                                <CheckCircle2 className="w-8 h-8 text-green-500" /> 1. Requisito Fundamental: Cédula Chilena Vigente
                            </h2>
                            <p className="mb-4">Para postular a una licencia profesional en Chile es obligatorio:</p>
                            <ul className="list-none space-y-3 pl-0 mb-6">
                                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-vial mt-2 shrink-0"></span>Tener cédula de identidad chilena (RUT) vigente.</li>
                                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-vial mt-2 shrink-0"></span>Contar con residencia legal en el país.</li>
                            </ul>

                            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl my-8">
                                <h4 className="flex items-center gap-2 font-bold text-amber-800 mb-2">
                                    <AlertTriangle className="w-5 h-5" /> Importante
                                </h4>
                                <p className="text-amber-900 mb-2">
                                    Si el carnet chileno está <strong>vencido</strong>, primero debe renovarse en el Servicio de Registro Civil e Identificación antes de iniciar o continuar cualquier trámite.
                                </p>
                                <p className="text-amber-900">
                                    Las personas en calidad de turista <strong>no pueden</strong> obtener licencia profesional para trabajar en Chile.
                                </p>
                            </div>
                        </section>

                        {/* Point 2 */}
                        <section>
                            <h2 className="text-3xl font-bold text-navy-deep flex items-center gap-3 mb-6">
                                <FileText className="w-8 h-8 text-blue-500" /> 2. Si Tienes Licencia Extranjera
                            </h2>

                            <div className="grid md:grid-cols-2 gap-8 mt-8">
                                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                    <h3 className="text-xl font-bold text-navy-deep mb-4 flex items-center gap-2">
                                        <MapPin className="w-5 h-5 text-green-500" /> País con convenio con Chile
                                    </h3>
                                    <p className="mb-4">Chile mantiene convenios de reconocimiento de licencias con algunos países, entre ellos:</p>
                                    <ul className="grid grid-cols-2 gap-2 mb-6 text-sm">
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> España</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Argentina</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Colombia</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Ecuador</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Perú</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Paraguay</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Corea del Sur</li>
                                    </ul>
                                    <div className="bg-white p-4 rounded-xl border border-gray-200">
                                        <h4 className="font-bold text-navy-deep mb-2">¿Qué significa esto?</h4>
                                        <p className="text-sm">En estos casos puede existir canje o reconocimiento parcial. No es una homologación automática de licencia profesional. Puede reconocerse la antigüedad o experiencia, pero igualmente se deben cumplir los requisitos exigidos en Chile.</p>
                                    </div>
                                </div>

                                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                    <h3 className="text-xl font-bold text-navy-deep mb-4 flex items-center gap-2">
                                        <Settings className="w-5 h-5 text-gray-500" /> País sin convenio
                                    </h3>
                                    <p className="mb-4">Si tu país no tiene convenio con Chile:</p>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-1">✕</span> No existe convalidación automática.</li>
                                        <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-1">✕</span> Debes realizar el proceso completo en Chile.</li>
                                        <li className="flex items-start gap-2"><span className="text-amber-500 font-bold mt-1">✓</span> La antigüedad de tu licencia extranjera puede servir para acreditar experiencia, siempre que esté vigente.</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Point 3 */}
                        <section>
                            <h2 className="text-3xl font-bold text-navy-deep flex items-center gap-3 mb-6">
                                <CheckCircle2 className="w-8 h-8 text-cyan-electric" /> 3. Si Ya Tienes Licencia Chilena
                            </h2>
                            <div className="space-y-6">
                                <div className="flex gap-4 items-start">
                                    <div className="w-12 h-12 bg-cyan-50 rounded-full flex items-center justify-center shrink-0">
                                        <b className="text-cyan-600">B</b>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-navy-deep mb-2">Clase B chilena</h3>
                                        <p>Si tienes licencia Clase B chilena con al menos 2 años de antigüedad, puedes postular a Licencia Profesional Clase A cumpliendo los requisitos legales.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center shrink-0">
                                        <b className="text-red-600">A</b>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-navy-deep mb-2">Licencia profesional vencida</h3>
                                        <p>Si tu licencia profesional chilena está vencida debes renovarla en la Municipalidad correspondiente. Además, es obligatorio aprobar los exámenes médicos y psicotécnicos exigidos.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Point 4 */}
                        <section>
                            <h2 className="text-3xl font-bold text-navy-deep flex items-center gap-3 mb-6">
                                <ListIcon className="w-8 h-8 text-purple-500" /> 4. Requisitos Generales para Licencia Profesional Clase A
                            </h2>
                            <p className="mb-4">Todo postulante extranjero debe:</p>
                            <ul className="grid sm:grid-cols-2 gap-4">
                                <li className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                    <span>Tener RUT chileno vigente.</span>
                                </li>
                                <li className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                    <span>Acreditar experiencia o antigüedad de conducción cuando corresponda.</span>
                                </li>
                                <li className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                    <span>Aprobar curso en escuela de conductores profesionales autorizada.</span>
                                </li>
                                <li className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                    <span>Presentar hoja de vida del conductor y certificado de antecedentes.</span>
                                </li>
                                <li className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm flex items-start gap-3 sm:col-span-2">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                    <span>Aprobar exámenes médicos, psicotécnicos y prácticos en la Municipalidad.</span>
                                </li>
                            </ul>
                        </section>

                        {/* Final Info Box */}
                        <div className="bg-navy-deep text-white p-8 md:p-10 rounded-3xl mt-12 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-vial/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <Info className="w-6 h-6 text-amber-vial" /> Información Importante
                            </h3>
                            <ul className="space-y-4 mb-8 relative z-10 text-gray-300">
                                <li className="flex gap-3"><span className="text-amber-vial">✓</span> La aprobación final depende de la Dirección de Tránsito de la Municipalidad correspondiente.</li>
                                <li className="flex gap-3"><span className="text-amber-vial">✓</span> Cada caso se evalúa según situación migratoria, país de origen y vigencia de documentos.</li>
                                <li className="flex gap-3"><span className="text-amber-vial">✓</span> Sin cédula chilena vigente no es posible obtener licencia profesional.</li>
                            </ul>
                            <div className="pt-8 border-t border-white/10 relative z-10">
                                <p className="text-lg font-medium mb-6">
                                    Si eres extranjero y deseas obtener tu Licencia Profesional Clase A en Chile, nuestro equipo te orientará paso a paso para evaluar tu situación y ayudarte en todo el proceso.
                                </p>
                                <Link
                                    href="/personas/contacto"
                                    className="inline-block bg-amber-vial text-navy-deep font-bold px-8 py-4 rounded-xl hover:bg-white transition-colors"
                                >
                                    Contáctanos para más información
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </article>
        </main>
    );
}

// Helper icon component since it was used above
function ListIcon(props: any) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="8" y1="6" x2="21" y2="6"></line>
            <line x1="8" y1="12" x2="21" y2="12"></line>
            <line x1="8" y1="18" x2="21" y2="18"></line>
            <line x1="3" y1="6" x2="3.01" y2="6"></line>
            <line x1="3" y1="12" x2="3.01" y2="12"></line>
            <line x1="3" y1="18" x2="3.01" y2="18"></line>
        </svg>
    )
}
