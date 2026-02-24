import { NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, password } = body;

        if (!email || !password) {
            return NextResponse.json({ success: false, message: "Faltan credenciales" }, { status: 400 });
        }

        // Buscar al usuario
        const user = await prisma.user.findUnique({
            where: { email }
        });

        if (!user) {
            return NextResponse.json({ success: false, message: "Credenciales incorrectas" }, { status: 401 });
        }

        // Comparar contraseñas
        const isValid = await bcrypt.compare(password, user.password);

        if (!isValid) {
            return NextResponse.json({ success: false, message: "Credenciales incorrectas" }, { status: 401 });
        }

        const response = NextResponse.json({ success: true, role: user.role });

        // Crear un payload simple codificado en Base64 para la cookie
        const payload = JSON.stringify({ id: user.id, email: user.email, role: user.role, name: user.name });
        const cookieValue = Buffer.from(payload).toString('base64');

        response.cookies.set({
            name: 'admin_session',
            value: cookieValue,
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            path: '/',
            maxAge: 60 * 60 * 24 * 7 // 1 semana
        });

        return response;

    } catch (error) {
        console.error("Login error:", error);
        return NextResponse.json({ success: false, message: "Error en el servidor" }, { status: 500 });
    }
}
