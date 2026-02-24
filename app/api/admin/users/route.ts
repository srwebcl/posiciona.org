import { NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma';
import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';
import { Resend } from 'resend';

// Middleware simulado para validar que el request viene de un ADMIN
async function getSessionRole() {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get('admin_session');
    if (!sessionCookie) return null;

    try {
        const decoded = Buffer.from(sessionCookie.value, 'base64').toString('ascii');
        const payload = JSON.parse(decoded);
        return payload.role;
    } catch {
        return null;
    }
}

export async function GET() {
    try {
        const role = await getSessionRole();
        if (role !== 'ADMIN') {
            return NextResponse.json({ success: false, message: 'No Autorizado' }, { status: 403 });
        }

        const users = await prisma.user.findMany({
            select: { id: true, name: true, email: true, role: true, createdAt: true },
            orderBy: { createdAt: 'desc' }
        });

        return NextResponse.json({ success: true, users });
    } catch (error) {
        console.error("Error fetching users:", error);
        return NextResponse.json({ success: false, message: "Error en el servidor" }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const role = await getSessionRole();
        if (role !== 'ADMIN') {
            return NextResponse.json({ success: false, message: 'No Autorizado' }, { status: 403 });
        }

        const { name, email, role: requestedRole } = await request.json();

        if (!name || !email) {
            return NextResponse.json({ success: false, message: "Nombre y correo son obligatorios" }, { status: 400 });
        }

        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return NextResponse.json({ success: false, message: 'El correo ya está registrado' }, { status: 400 });
        }

        // Auto-generate strong temporal password
        const password = Math.random().toString(36).slice(-10) + Math.floor(Math.random() * 9);
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUserRole = requestedRole === "ADMIN" ? "ADMIN" : "USER";
        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role: newUserRole
            },
            select: { id: true, name: true, email: true, role: true, createdAt: true }
        });

        // Send email with credentials
        try {
            const resend = new Resend(process.env.RESEND_API_KEY || 'default_key_to_bypass_build');
            await resend.emails.send({
                from: 'Portal Posiciona <contacto@posiciona.org>',
                to: [email],
                subject: 'Tu cuenta en el CRM Posiciona',
                html: `
                    <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 25px; border: 1px solid #eee; border-radius: 10px;">
                        <h2 style="color: #0b2341;">¡Hola ${name}!</h2>
                        <p>Se ha creado exitosamente una cuenta para ti en la plataforma de gestión comercial de Posiciona.org.</p>
                        <p>Estás habilitado como <strong>${newUserRole}</strong>.</p>
                        <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px; margin: 20px 0;">
                            <h3 style="margin-top: 0; color: #4b5563; font-size: 14px; text-transform: uppercase;">Tus credenciales</h3>
                            <p style="margin: 5px 0;"><strong>Enlace de acceso:</strong> <a href="https://posiciona.org/admin" style="color: #ed9926;">https://posiciona.org/admin</a></p>
                            <p style="margin: 5px 0;"><strong>Correo Electrónico:</strong> ${email}</p>
                            <p style="margin: 5px 0;"><strong>Contraseña Temporal:</strong> <code style="background: #e5e7eb; padding: 2px 6px; border-radius: 4px;">${password}</code></p>
                        </div>
                        <p>Guarda este correo en un lugar seguro. Si no reconoces esta cuenta, ignora este mensaje.</p>
                    </div>
                `
            });
        } catch (emailError) {
            console.error("Error enviando correo de bienvenida", emailError);
            // We don't block the response, user is already saved in DB
        }

        return NextResponse.json({ success: true, user: newUser });
    } catch (error) {
        console.error("Error creating user:", error);
        return NextResponse.json({ success: false, message: "Error en el servidor" }, { status: 500 });
    }
}
