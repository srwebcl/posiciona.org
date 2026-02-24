import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get('admin_session');

    if (!sessionCookie) return NextResponse.json({ role: null });

    try {
        const decoded = Buffer.from(sessionCookie.value, 'base64').toString('ascii');
        const payload = JSON.parse(decoded);
        return NextResponse.json({ role: payload.role, name: payload.name, email: payload.email });
    } catch {
        return NextResponse.json({ role: null });
    }
}
