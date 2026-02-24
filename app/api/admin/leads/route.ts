import { NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const filter = searchParams.get('filter');

        let whereClause = {};

        if (filter) {
            if (filter === 'ESCUELA') {
                whereClause = {
                    OR: [
                        { interest: { contains: 'Clase', mode: 'insensitive' } },
                        { interest: { contains: 'Conductor', mode: 'insensitive' } },
                    ]
                };
            } else if (filter === 'OFICINA') {
                whereClause = {
                    interest: { contains: 'Oficina Virtual', mode: 'insensitive' }
                };
            } else if (['PERSONA', 'EMPRESA', 'GENERAL'].includes(filter.toUpperCase())) {
                whereClause = { variant: filter.toUpperCase() };
            }
        }

        const leads = await prisma.lead.findMany({
            where: whereClause,
            orderBy: { createdAt: 'desc' }
        });

        return NextResponse.json({ success: true, leads });
    } catch (error) {
        console.error("Error fetching leads:", error);
        return NextResponse.json({ success: false, message: "Error interno del servidor" }, { status: 500 });
    }
}
