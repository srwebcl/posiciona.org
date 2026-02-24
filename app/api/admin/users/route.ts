import { NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma';
import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';

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

        const { name, email, password, role: newUserRole } = await request.json();

        // Validaciones básicas
        if (!name || !email || !password || !newUserRole) {
            return NextResponse.json({ success: false, message: 'Faltan datos requeridos' }, { status: 400 });
        }

        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return NextResponse.json({ success: false, message: 'El correo ya está registrado' }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role: newUserRole
            },
            select: { id: true, name: true, email: true, role: true, createdAt: true }
        });

        return NextResponse.json({ success: true, user: newUser });
    } catch (error) {
        console.error("Error creating user:", error);
        return NextResponse.json({ success: false, message: "Error en el servidor" }, { status: 500 });
    }
}
