import { NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma';
import { cookies } from 'next/headers';

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

export async function DELETE(request: Request, props: { params: Promise<{ id: string }> }) {
    try {
        const role = await getSessionRole();
        if (role !== 'ADMIN') {
            return NextResponse.json({ success: false, message: 'No Autorizado' }, { status: 403 });
        }

        const params = await props.params;
        const userId = params.id;

        // Evitar que el admin se borre a sí mismo (Protección básica)
        const cookieStore = await cookies();
        const sessionCookie = cookieStore.get('admin_session');
        if (sessionCookie) {
            const decoded = Buffer.from(sessionCookie.value, 'base64').toString('ascii');
            const payload = JSON.parse(decoded);
            if (payload.id === userId) {
                return NextResponse.json({ success: false, message: "No puedes eliminar tu propia cuenta" }, { status: 400 });
            }
        }

        await prisma.user.delete({
            where: { id: userId }
        });

        return NextResponse.json({ success: true, message: "Usuario eliminado correctamente" });
    } catch (error) {
        console.error("Error deleting user:", error);
        return NextResponse.json({ success: false, message: "Error en el servidor" }, { status: 500 });
    }
}
