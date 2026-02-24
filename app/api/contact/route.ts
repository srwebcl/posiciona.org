import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { prisma } from '@/app/lib/prisma'; // Import Prisma global client

export async function POST(request: Request) {
    try {
        const resend = new Resend(process.env.RESEND_API_KEY || 'default_key_to_bypass_build');
        const data = await request.json();

        // 1. Normalización de campos
        const {
            name, nombre, email, phone, telefono,
            interest, message, mensaje, variant,
            company, role, rut, recaptchaToken
        } = data;

        // 1.5. Validación de reCAPTCHA
        if (!recaptchaToken) {
            return NextResponse.json({ success: false, message: "Falta el token de seguridad reCAPTCHA." }, { status: 400 });
        }

        const secretKey = process.env.RECAPTCHA_SECRET_KEY || "";
        const verifyBody = new URLSearchParams({
            secret: secretKey,
            response: recaptchaToken
        });

        const recaptchaRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: verifyBody.toString()
        });

        const recaptchaData = await recaptchaRes.json();

        if (!recaptchaData.success || recaptchaData.score < 0.5) {
            console.error("reCAPTCHA validation failed:", recaptchaData);

            // Detailed message for the client
            const errorCode = recaptchaData['error-codes'] ? recaptchaData['error-codes'].join(', ') : "Bajo puntaje de confianza (" + recaptchaData.score + ")";
            return NextResponse.json({
                success: false,
                message: "Validación antispam fallida. Google devolvió: " + errorCode
            }, { status: 403 });
        }

        const clientName = nombre || name || "Cliente";
        const clientEmail = email;
        const clientPhone = telefono || phone || "No indicado";
        const clientMessage = mensaje || message || "Sin mensaje.";
        const subjectInterest = interest || "General";
        const formVariant = variant?.toUpperCase() || "GENERAL";

        // 2. Guardar el Lead en la Base de Datos (Neon.tech vía Prisma)
        try {
            await prisma.lead.create({
                data: {
                    name: clientName,
                    email: clientEmail,
                    phone: clientPhone,
                    variant: formVariant,
                    interest: subjectInterest,
                    message: clientMessage !== "Sin mensaje." ? clientMessage : null,
                    rut: rut || null,
                    company: company || null,
                    role: role || null,
                }
            });
            console.log(`--- LEAD GUARDADO EN DB: ${clientEmail} ---`);
        } catch (dbError) {
            console.error("Error al guardar Lead en base de datos:", dbError);
            // No bloqueamos el envío de correo si falla la DB, pero lo registramos
        }

        // 3. Lógica de Destinatarios y Copias
        const isCertificacion = subjectInterest.toLowerCase().includes('certificación');
        const ccEmails = isCertificacion ? ["contacto@wylar.cl"] : [];
        const bccEmails = ["contacto@srweb.cl"]; // Copia oculta de control

        // 3. Identificar si es Escuela de Conductores (Punto 9 de tu lista)
        // Usualmente estos cursos traen nombres como "Clase B", "Clase A2", etc.
        const isEscuelaConductores =
            subjectInterest.toLowerCase().includes('clase') ||
            subjectInterest.toLowerCase().includes('conductor');

        console.log(`--- PROCESANDO: ${formVariant} | Escuela: ${isEscuelaConductores} ---`);

        // A. ENVÍO PRINCIPAL A VENTAS POSICIONA (Anti-Spam Format)
        await resend.emails.send({
            from: 'Web Posiciona <contacto@posiciona.org>',
            to: ['posiciona@posiciona.org'],
            cc: ccEmails,
            bcc: bccEmails,
            replyTo: clientEmail,
            subject: `Nuevo Contacto Web: ${formVariant} - ${subjectInterest}`,
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="utf-8">
                    <title>Nuevo Lead Posiciona</title>
                </head>
                <body style="font-family: Arial, sans-serif; background-color: #f4f6f8; padding: 20px; color: #333333; margin: 0;">
                    <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e0e0e0; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                        <tr>
                            <td style="background-color: #0f172a; padding: 20px; text-align: center; border-bottom: 4px solid #f59e0b;">
                                <h1 style="color: #ffffff; margin: 0; font-size: 20px; text-transform: uppercase; letter-spacing: 1px;">Nuevo Lead Recibido</h1>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 30px;">
                                <table width="100%" cellpadding="10" cellspacing="0" style="border-collapse: collapse;">
                                    <tr>
                                        <td width="30%" style="border-bottom: 1px solid #eeeeee; font-weight: bold; color: #64748b; font-size: 13px; text-transform: uppercase;">Módulo Web</td>
                                        <td width="70%" style="border-bottom: 1px solid #eeeeee; font-weight: bold; color: #0f172a; font-size: 15px;">${formVariant}</td>
                                    </tr>
                                    <tr>
                                        <td style="border-bottom: 1px solid #eeeeee; font-weight: bold; color: #64748b; font-size: 13px; text-transform: uppercase;">Asunto / Curso</td>
                                        <td style="border-bottom: 1px solid #eeeeee; font-weight: bold; color: #f59e0b; font-size: 15px;">${subjectInterest}</td>
                                    </tr>
                                    <tr>
                                        <td style="border-bottom: 1px solid #eeeeee; font-weight: bold; color: #64748b; font-size: 13px; text-transform: uppercase;">Nombre</td>
                                        <td style="border-bottom: 1px solid #eeeeee; color: #333333;">${clientName}</td>
                                    </tr>
                                    <tr>
                                        <td style="border-bottom: 1px solid #eeeeee; font-weight: bold; color: #64748b; font-size: 13px; text-transform: uppercase;">Correo</td>
                                        <td style="border-bottom: 1px solid #eeeeee; color: #2563eb; text-decoration: none;">${clientEmail}</td>
                                    </tr>
                                    <tr>
                                        <td style="border-bottom: 1px solid #eeeeee; font-weight: bold; color: #64748b; font-size: 13px; text-transform: uppercase;">Teléfono</td>
                                        <td style="border-bottom: 1px solid #eeeeee; color: #333333;">${clientPhone}</td>
                                    </tr>
                                    ${rut ? `
                                    <tr>
                                        <td style="border-bottom: 1px solid #eeeeee; font-weight: bold; color: #64748b; font-size: 13px; text-transform: uppercase;">RUT</td>
                                        <td style="border-bottom: 1px solid #eeeeee; color: #333333;">${rut}</td>
                                    </tr>` : ''}
                                    ${company ? `
                                    <tr>
                                        <td style="border-bottom: 1px solid #eeeeee; font-weight: bold; color: #64748b; font-size: 13px; text-transform: uppercase;">Empresa / Cargo</td>
                                        <td style="border-bottom: 1px solid #eeeeee; color: #333333;">${company} <span style="color: #94a3b8; font-size: 13px;">(${role ? role : 'No especificado'})</span></td>
                                    </tr>` : ''}
                                </table>

                                <div style="margin-top: 25px; background-color: #f8fafc; padding: 20px; border-left: 4px solid #0f172a; border-radius: 4px;">
                                    <h3 style="margin-top: 0; color: #0f172a; font-size: 14px; text-transform: uppercase;">Mensaje del Usuario:</h3>
                                    <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #475569; font-style: italic;">
                                        "${clientMessage.replace(/\n/g, '<br/>')}"
                                    </p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td style="background-color: #f8fafc; padding: 15px; text-align: center; color: #94a3b8; font-size: 12px; border-top: 1px solid #e2e8f0;">
                                Enviado automáticamente desde el CRM Posiciona a las ${new Date().toLocaleTimeString('es-CL', { timeZone: 'America/Santiago' })} horas.
                            </td>
                        </tr>
                    </table>
                </body>
                </html>
            `
        });

        // B. RESPUESTA AUTOMÁTICA GLOBAL AL CLIENTE (Auto-Reply)
        if (clientEmail) {
            await resend.emails.send({
                from: 'Posiciona <contacto@posiciona.org>',
                to: [clientEmail],
                subject: `Hemos recibido tu solicitud en Posiciona`,
                html: `
                    <!DOCTYPE html>
                    <html>
                    <body style="font-family: Arial, sans-serif; background-color: #fafafa; padding: 20px; color: #333333; margin: 0;">
                        <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #eaeaea;">
                            <tr>
                                <td style="padding: 40px 40px 20px 40px; text-align: center;">
                                    <h1 style="margin: 0; font-family: 'Arial Black', Impact, sans-serif; font-size: 38px; color: #1e3a8a; letter-spacing: -1px; text-transform: uppercase;">Posiciona</h1>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 40px 40px 40px;">
                                    <h2 style="color: #0f172a; font-size: 24px; margin-bottom: 20px; text-align: center;">¡Hola ${clientName}!</h2>
                                    
                                    <p style="font-size: 16px; line-height: 1.6; color: #475569; margin-bottom: 20px;">
                                        Gracias por contactarte con el equipo de <strong>Posiciona</strong>. Te escribimos para confirmar que hemos recibido exitosamente tus datos y tu solicitud referente a:
                                    </p>
                                    
                                    <div style="background-color: #fffbeb; border: 1px solid #fde68a; padding: 15px; border-radius: 8px; text-align: center; margin-bottom: 30px;">
                                        <strong style="color: #b45309; font-size: 16px;">${subjectInterest}</strong>
                                    </div>
                                    
                                    <p style="font-size: 16px; line-height: 1.6; color: #475569; margin-bottom: 30px;">
                                        Uno de nuestros ejecutivos especializados ya ha sido notificado y se pondrá en contacto contigo muy pronto para brindarte toda la información que necesitas.
                                    </p>
                                    
                                    <div style="text-align: center;">
                                        <a href="https://posiciona.org" style="background-color: #0f172a; color: #ffffff; text-decoration: none; padding: 14px 30px; border-radius: 8px; font-weight: bold; font-size: 15px; display: inline-block;">Visitar nuestro sitio web</a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td style="background-color: #f8fafc; padding: 25px 40px; text-align: center; border-top: 1px solid #f1f5f9;">
                                    <p style="margin: 0; color: #94a3b8; font-size: 12px; line-height: 1.5;">
                                        Alameda Libertador Bernardo Ohiggins 252 Ofic. 21, Santiago.<br/>
                                        Posiciona Capacitación y Certificación.<br/>
                                        Este es un correo automático, por favor no respondas directamente a esta dirección.
                                    </p>
                                </td>
                            </tr>
                        </table>
                    </body>
                    </html>
                `
            });
        }

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
