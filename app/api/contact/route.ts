import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
    try {
        const resend = new Resend(process.env.RESEND_API_KEY || 'default_key_to_bypass_build');
        const data = await request.json();

        // 1. Normalización de campos
        const {
            name, nombre, email, phone, telefono,
            interest, message, mensaje, variant,
            company, role, rut
        } = data;

        const clientName = nombre || name || "Cliente";
        const clientEmail = email;
        const clientPhone = telefono || phone || "No indicado";
        const clientMessage = mensaje || message || "Sin mensaje.";
        const subjectInterest = interest || "General";
        const formVariant = variant?.toUpperCase() || "GENERAL";

        // 2. Lógica de Destinatarios y Copias
        const isCertificacion = subjectInterest.toLowerCase().includes('certificación');
        const ccEmails = isCertificacion ? ["contacto@wylar.cl"] : [];
        const bccEmails = ["contacto@srweb.cl"]; // Copia oculta de control

        // 3. Identificar si es Escuela de Conductores (Punto 9 de tu lista)
        // Usualmente estos cursos traen nombres como "Clase B", "Clase A2", etc.
        const isEscuelaConductores =
            subjectInterest.toLowerCase().includes('clase') ||
            subjectInterest.toLowerCase().includes('conductor');

        console.log(`--- PROCESANDO: ${formVariant} | Escuela: ${isEscuelaConductores} ---`);

        // A. ENVÍO PRINCIPAL (Para Posiciona)
        await resend.emails.send({
            from: 'Web Posiciona <contacto@posiciona.org>',
            to: ['posiciona@posiciona.org'],
            cc: ccEmails,
            bcc: bccEmails,
            replyTo: clientEmail,
            subject: `Nuevo Contacto Web: ${formVariant} - ${subjectInterest}`,
            html: `
                <div style="font-family: sans-serif; padding: 20px; color: #333;">
                    <h2 style="color: #0055ff;">Nueva Solicitud de Contacto</h2>
                    <p><strong>Curso/Interés:</strong> ${subjectInterest}</p>
                    <p><strong>Nombre:</strong> ${clientName}</p>
                    <p><strong>Email:</strong> ${clientEmail}</p>
                    <p><strong>Teléfono:</strong> ${clientPhone}</p>
                    ${rut ? `<p><strong>RUT:</strong> ${rut}</p>` : ''}
                    ${company ? `<p><strong>Empresa:</strong> ${company} (${role ? role : 'No especificado'})</p>` : ''}
                    <p><strong>Mensaje:</strong><br/>${clientMessage}</p>
                </div>
            `
        });

        // B. RESPUESTA AUTOMÁTICA (Solo para Escuela de Conductores)
        if (isEscuelaConductores && clientEmail) {
            await resend.emails.send({
                from: 'Escuela de Conductores Posiciona <contacto@posiciona.org>',
                to: [clientEmail],
                subject: `Información y Cotización: Curso de Conducción ${subjectInterest}`,
                html: `
                    <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px;">
                        <h2 style="color: #e11d48;">¡Hola ${clientName}!</h2>
                        <p>Gracias por interesarte en nuestra <strong>Escuela de Conductores</strong>. Aquí tienes la información sobre el curso <strong>${subjectInterest}</strong>:</p>
                        
                        <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; margin: 20px 0;">
                            <h3 style="margin-top:0;">Detalles del Curso:</h3>
                            <ul>
                                <li><strong>Modalidad:</strong> Teórica (Online/Presencial) y Práctica.</li>
                                <li><strong>Incluye:</strong> Material de estudio, horas de simulación y examen práctico en vehículo institucional.</li>
                                <li><strong>Requisitos:</strong> Cédula de identidad vigente y edad mínima según ley.</li>
                            </ul>
                        </div>

                        <p>Un ejecutivo de nuestra sede se pondrá en contacto contigo al teléfono <strong>${clientPhone}</strong> para detallar los horarios disponibles y facilidades de pago.</p>
                        
                        <a href="https://posiciona.org/personas/escuela-conductores" 
                           style="display: inline-block; background: #e11d48; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold;">
                           Ver más detalles en la web
                        </a>

                        <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;" />
                        <p style="font-size: 12px; color: #777;">Escuela de Conductores Posiciona - Av. Principal #1234, Chile.</p>
                    </div>
                `
            });
        }

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
