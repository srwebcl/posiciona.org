import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { password } = body;

        const adminPassword = process.env.ADMIN_PASSWORD || 'posiciona123'; // Falback si no está seteado

        if (password !== adminPassword) {
            return NextResponse.json({ success: false, message: "Contraseña incorrecta" }, { status: 401 });
        }

        const response = NextResponse.json({ success: true });

        // Seteamos una cookie simple para validación básica
        // En un entorno de producción estricto, esto sería un JWT, pero para un CRM simple interno es funcional.
        response.cookies.set({
            name: 'admin_session',
            value: 'authenticated',
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
