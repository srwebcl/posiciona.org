import { NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma';

export async function PATCH(request: Request, context: { params: Promise<{ id: string }> }) {
    try {
        const { id: idParam } = await context.params;
        const id = parseInt(idParam, 10);
        if (isNaN(id)) {
            return NextResponse.json({ success: false, message: "ID no válido" }, { status: 400 });
        }

        const body = await request.json();
        const { status, notes } = body;

        const updatedLead = await prisma.lead.update({
            where: { id },
            data: {
                ...(status !== undefined && { status }),
                ...(notes !== undefined && { notes })
            }
        });

        return NextResponse.json({ success: true, lead: updatedLead });
    } catch (error) {
        console.error("Error updating lead:", error);
        return NextResponse.json({ success: false, message: "Error actualizando el Lead" }, { status: 500 });
    }
}
