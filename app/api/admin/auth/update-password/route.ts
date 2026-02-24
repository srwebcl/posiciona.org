import { NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma';
import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';

async function getSessionInfo() {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get('admin_session');
    if (!sessionCookie) return null;

    try {
        const decoded = Buffer.from(sessionCookie.value, 'base64').toString('ascii');
        return JSON.parse(decoded); // { id, role, email, name }
    } catch {
        return null;
    }
}

export async function POST(request: Request) {
    try {
        const session = await getSessionInfo();
        if (!session || !session.id) {
            return NextResponse.json({ success: false, message: 'No Autorizado' }, { status: 403 });
        }

        const { currentPassword, newPassword } = await request.json();

        if (!currentPassword || !newPassword) {
            return NextResponse.json({ success: false, message: 'Faltan datos' }, { status: 400 });
        }

        if (newPassword.length < 6) {
            return NextResponse.json({ success: false, message: 'La nueva contraseña debe tener al menos 6 caracteres' }, { status: 400 });
        }

        const user = await prisma.user.findUnique({ where: { id: session.id } });
        if (!user) {
            return NextResponse.json({ success: false, message: 'Usuario no encontrado' }, { status: 404 });
        }

        // Validate current password
        const isValid = await bcrypt.compare(currentPassword, user.password);
        if (!isValid) {
            return NextResponse.json({ success: false, message: 'La contraseña actual es incorrecta' }, { status: 400 });
        }

        // Update password
        const hashedNewPassword = await bcrypt.hash(newPassword, 10);
        await prisma.user.update({
            where: { id: user.id },
            data: { password: hashedNewPassword }
        });

        return NextResponse.json({ success: true, message: 'Contraseña actualizada' });

    } catch (error) {
        console.error("Error updating password:", error);
        return NextResponse.json({ success: false, message: 'Error en el servidor' }, { status: 500 });
    }
}
