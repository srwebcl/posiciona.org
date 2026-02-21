import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Mail, MapPin } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Políticas de Privacidad | Posiciona',
    description: 'Conoce cómo en OTEC Posiciona protegemos y gestionamos tus datos personales de acuerdo a la normativa vigente.',
};

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-gray-50">
            {/* Header */}
            <section className="bg-navy-deep text-white pt-40 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/imagenes/posiciona-21.jpeg')] bg-cover bg-center opacity-10" />
                <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
                    <span className="text-amber-vial font-bold tracking-widest text-sm uppercase mb-4 block">
                        Transparencia y Seguridad
                    </span>
                    <h1 className="text-4xl md:text-5xl font-black mb-6">
                        Políticas de Privacidad
                    </h1>
                    <p className="text-xl text-gray-400">
                        Tu confianza es fundamental. Conoce cómo gestionamos, protegemos y utilizamos tu información en OTEC Posiciona.
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="py-24">
                <div className="container mx-auto px-4 max-w-4xl">
                    <Link href="/" className="inline-flex items-center gap-2 text-amber-vial font-bold hover:text-navy-deep transition-colors mb-12">
                        <ArrowLeft className="w-4 h-4" /> Volver al Inicio
                    </Link>

                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 prose prose-lg max-w-none text-gray-600">
                        <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-100">
                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                                <ShieldCheck className="w-8 h-8 text-blue-inst" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-navy-deep m-0">Última actualización: Febrero 2026</h2>
                                <p className="text-sm text-gray-500 m-0 mt-1">Vigente para todos los servicios de Posiciona</p>
                            </div>
                        </div>

                        <h3>1. Información General</h3>
                        <p>
                            En <strong>Posiciona (Centro de Capacitación y Escuela de Conductores)</strong>, la privacidad y seguridad de los datos de nuestros estudiantes, clientes y empresas asociadas es una prioridad absoluta. Esta Política de Privacidad describe cómo recopilamos, utilizamos, almacenamos y procesamos la información personal que nos proporcionas a través de nuestro sitio web y servicios presenciales.
                        </p>

                        <h3>2. Información que Recopilamos</h3>
                        <p>
                            Recopilamos información personal necesaria para ofrecer nuestros servicios de capacitación y certificación, la cual puede incluir:
                        </p>
                        <ul>
                            <li><strong>Datos de Identificación:</strong> Nombre completo, RUT, fecha de nacimiento, nacionalidad.</li>
                            <li><strong>Datos de Contacto:</strong> Correo electrónico, número de teléfono, dirección física.</li>
                            <li><strong>Datos Académicos y Profesionales:</strong> Antecedentes de conducción, certificados médicos (cuando sean requeridos por la Municipalidad), licencias previas, currículum vitae (en procesos de postulación).</li>
                            <li><strong>Información de Empresas:</strong> Razón social, RUT de empresa, datos de representantes legales, información de facturación (para servicios SENCE).</li>
                        </ul>

                        <h3>3. Uso de la Información</h3>
                        <p>
                            La información recopilada es estrictamente utilizada para:
                        </p>
                        <ul>
                            <li>Gestionar inscripciones, matrículas y emisión de certificados en nuestros cursos.</li>
                            <li>Realizar los trámites legales y de certificación correspondientes ante el Ministerio de Transportes y Telecomunicaciones, SENCE u otras entidades fiscalizadoras.</li>
                            <li>Comunicar actualizaciones de cursos, horarios, y confirmar pagos o agendas.</li>
                            <li>Resolver consultas técnicas a través de nuestros asesores y canales de soporte (incluido WhatsApp).</li>
                            <li>Mejorar continuamente nuestra plataforma web y la calidad de los programas educativos.</li>
                        </ul>

                        <h3>4. Protección y Seguridad de Datos</h3>
                        <p>
                            Implementamos medidas de seguridad técnicas, administrativas y físicas de alto estándar para proteger tu información contra acceso no autorizado, alteración, divulgación o destrucción. Nuestro equipo y asesores (tanto en Sede Arica como Sede Santiago) manejan tu información bajo estrictos estándares de confidencialidad.
                        </p>

                        <h3>5. Compartición de Información</h3>
                        <p>
                            <strong>Posiciona no vende, no alquila y no comercializa tus datos personales a terceros.</strong>
                        </p>
                        <p>
                            Solo compartiremos la información estrictamente necesaria con:
                        </p>
                        <ul>
                            <li>Entidades gubernamentales (como SENCE, Ministerio de Transportes, Municipalidades) cuando sea un requisito legal ineludible para la obtención de licencias o certificados.</li>
                            <li>Proveedores de servicios tecnológicos que facilitan nuestras operaciones (ej. plataformas de facturación, pasarelas de pago o simuladores como Simestruck), bajo acuerdos de confidencialidad.</li>
                        </ul>

                        <h3>6. Derechos del Usuario</h3>
                        <p>
                            Conforme a la legislación chilena (Ley N° 19.628 sobre Protección de la Vida Privada), tienes derecho a solicitar acceso, rectificación, actualización o eliminación de tus datos personales, siempre y cuando estos no deban ser retenidos por exigencias legales de acreditación académica o certificación fiscal.
                        </p>

                        <h3>7. Enlaces a Terceros</h3>
                        <p>
                            Nuestro sitio puede contener enlaces hacia sitios de terceros o portales de pago (ej. Transbank). Esta política de privacidad no aplica a esos sitios web y te recomendamos leer sus políticas respectivas de manera independiente.
                        </p>

                        <div className="mt-16 bg-gray-50 border border-gray-100 rounded-2xl p-8">
                            <h3 className="text-xl font-bold text-navy-deep mt-0 mb-6 border-none pb-0">¿Dudas o Consultas?</h3>
                            <p className="mb-6">Si tienes alguna pregunta sobre nuestra política de privacidad o el manejo de tus datos, no dudes en contactarnos directamente mediante nuestros canales oficiales:</p>

                            <div className="grid sm:grid-cols-2 gap-6 not-prose">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 border border-gray-200">
                                        <Mail className="w-5 h-5 text-blue-inst" />
                                    </div>
                                    <div>
                                        <strong className="block text-navy-deep">Correo Electrónico</strong>
                                        <a href="mailto:posiciona@posiciona.org" className="text-gray-500 hover:text-amber-vial transition-colors">posiciona@posiciona.org</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 border border-gray-200">
                                        <MapPin className="w-5 h-5 text-blue-inst" />
                                    </div>
                                    <div>
                                        <strong className="block text-navy-deep">Dirección Principal</strong>
                                        <span className="text-gray-500 text-sm">Alameda Libertador Bernardo Ohiggins 252 Ofic. 21, Santiago</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}
