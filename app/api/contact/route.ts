import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const data = await request.json();

        // Determinar correos en copia según el interés
        const isCertificacion = data.interest && data.interest.toLowerCase().includes('certificación');
        const ccEmails = isCertificacion ? "contacto@wylar.cl" : undefined;

        console.log('--- CONTACT FORM SUBMISSION ---');
        console.log('Variant:', data.variant);
        console.log('Interest:', data.interest);
        if (isCertificacion) console.log('CC:', ccEmails);
        console.log('Data:', data);
        console.log('-------------------------------');

        // TODO: Implement actual email sending using Nodemailer or an external service (Resend, SendGrid, etc.)
        // Example with Nodemailer:
        /*
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: 587,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        await transporter.sendMail({
            from: '"Posiciona Web" <noreply@posiciona.org>',
            to: "posiciona@posiciona.org",
            cc: ccEmails, // Copia a Wylar si es certificación
            subject: `Nuevo Contacto Web: ${data.variant.toUpperCase()} - ${data.interest || "General"}`,
            text: JSON.stringify(data, null, 2),
            html: `<p>Nuevo mensaje de formulario...</p>`
        });
        */

        return NextResponse.json({ success: true, message: "Formulario recibido correctamente" });
    } catch (error) {
        console.error('Error processing contact form:', error);
        return NextResponse.json(
            { success: false, message: "Error al procesar la solicitud" },
            { status: 500 }
        );
    }
}
