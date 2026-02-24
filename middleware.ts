import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const isDashboardRoute = request.nextUrl.pathname.startsWith('/admin') && request.nextUrl.pathname !== '/admin/login';
    const isApiAdminRoute = request.nextUrl.pathname.startsWith('/api/admin') && request.nextUrl.pathname !== '/api/admin/auth';

    const sessionCookie = request.cookies.get('admin_session');

    // Protect Dashboard Pages
    if (isDashboardRoute) {
        if (!sessionCookie || sessionCookie.value !== 'authenticated') {
            return NextResponse.redirect(new URL('/admin/login', request.url));
        }
    }

    // Protect Admin API Routes
    if (isApiAdminRoute) {
        if (!sessionCookie || sessionCookie.value !== 'authenticated') {
            return NextResponse.json({ success: false, message: 'No Autorizado' }, { status: 401 });
        }
    }

    // Si ya está logueado y trata de ir al login, redirigir al admin
    if (request.nextUrl.pathname === '/admin/login' && sessionCookie && sessionCookie.value === 'authenticated') {
        return NextResponse.redirect(new URL('/admin', request.url));
    }

    return NextResponse.next();
}

// Configurar sobre qué rutas corre este middleware
export const config = {
    matcher: ['/admin/:path*', '/api/admin/:path*'],
};
