import { NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma';
import bcrypt from 'bcryptjs';
import { Resend } from 'resend';

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        if (!email) {
            return NextResponse.json({ success: false, message: 'Se requiere un correo' }, { status: 400 });
        }

        // Search user
        const user = await prisma.user.findUnique({ where: { email } });

        // Return success even if user doesn't exist to prevent email enumeration
        if (!user) {
            return NextResponse.json({ success: true, message: 'Si el correo existe, recibirás instrucciones.' });
        }

        // Generate temporary password (8 chars)
        const temporalPassword = Math.random().toString(36).slice(-8) + Math.floor(Math.random() * 9);
        const hashedPassword = await bcrypt.hash(temporalPassword, 10);

        // Update in DB
        await prisma.user.update({
            where: { email },
            data: { password: hashedPassword }
        });

        // Send email
        const resend = new Resend(process.env.RESEND_API_KEY || 'default_key_to_bypass_build');
        await resend.emails.send({
            from: 'Soporte Posiciona <contacto@posiciona.org>',
            to: [email],
            subject: 'Recuperación de Contraseña - CRM Posiciona',
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 25px; border: 1px solid #eee; border-radius: 10px;">
                    <h2 style="color: #0b2341;">Restablecimiento de Contraseña</h2>
                    <p>Hola ${user.name}, se ha solicitado restablecer la contraseña de tu cuenta en Posiciona.org.</p>
                    
                    <div style="background-color: #fcf8e3; border-left: 4px solid #f0ad4e; padding: 15px; margin: 20px 0;">
                        <p style="margin: 0; color: #8a6d3b;"><strong>Tu nueva contraseña temporal es:</strong> <code style="background: #fff; padding: 2px 6px; border: 1px solid #e5e5e5;">${temporalPassword}</code></p>
                    </div>

                    <p>Por favor ingresa utilizando esta contraseña temporal en <a href="https://posiciona.org/admin">https://posiciona.org/admin</a> y dirígete a la sección <strong>Mi Perfil</strong> para cambiarla por una segura inmediatamente.</p>
                    <p style="font-size: 11px; color: #999; margin-top: 30px;">Si no solicitaste este restablecimiento, por favor contacta al administrador del sistema.</p>
                </div>
            `
        });

        return NextResponse.json({ success: true, message: 'Si el correo existe, recibirás instrucciones.' });

    } catch (error) {
        console.error("Error on password recovery:", error);
        return NextResponse.json({ success: false, message: 'Error procesando solicitud' }, { status: 500 });
    }
}
