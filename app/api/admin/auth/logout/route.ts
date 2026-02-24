import { NextResponse } from 'next/server';

export async function POST() {
    try {
        const response = NextResponse.json({ success: true, message: 'Sesión cerrada' });

        // Eliminamos la cookie de sesión estableciendo maxAge = 0
        response.cookies.set({
            name: 'admin_session',
            value: '',
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            path: '/',
            maxAge: 0
        });

        return response;
    } catch (error) {
        console.error("Logout error:", error);
        return NextResponse.json({ success: false, message: "Error al cerrar sesión" }, { status: 500 });
    }
}
