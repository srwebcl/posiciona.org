import { NextResponse } from "next/server";
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import { PrismaClient } from '@prisma/client';

// Initialize Prisma Client with Neon adapter
const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const rawData = body.data;

        if (!Array.isArray(rawData) || rawData.length === 0) {
            return NextResponse.json({ success: false, error: "Datos de Excel inválidos o vacíos." }, { status: 400 });
        }

        let importedCount = 0;

        for (const row of rawData) {
            // Mapping column headers from the exported template back to Prisma keys
            const email = row["Correo Electrónico"]?.toString().trim();
            const name = row["Nombre Completo"]?.toString().trim();
            const phone = row["Teléfono"]?.toString().trim() || "N/A";

            if (!email || !name) {
                continue; // Skip invalid rows
            }

            // Upsert strategy: If an email already exists in the database, 
            // we update its status/notes (preventing duplicates but preserving progress).
            // Since we don't have a unique constraint on email right now, we will use a findFirst approach.

            const existingLead = await prisma.lead.findFirst({
                where: { email: email }
            });

            const leadData = {
                name: name,
                email: email,
                phone: phone,
                variant: row["Origen (Variante)"]?.toString() || "IMPORTACION_EXCEL",
                interest: row["Área de Interés"]?.toString() || "Importado desde Excel",
                message: row["Mensaje Original"]?.toString() || null,
                rut: row["RUT"]?.toString() || null,
                company: row["Empresa"]?.toString() || null,
                role: row["Cargo"]?.toString() || null,
                status: row["Estado CRM"]?.toString() || "NUEVO",
                notes: row["Notas de Gestión"]?.toString() || null,
            };

            if (existingLead) {
                // Actualizar registro existente si es necesario
                await prisma.lead.update({
                    where: { id: existingLead.id },
                    data: {
                        status: leadData.status,
                        notes: leadData.notes
                    }
                });
                importedCount++;
            } else {
                // Crear nuevo registro
                await prisma.lead.create({
                    data: leadData
                });
                importedCount++;
            }
        }

        return NextResponse.json({
            success: true,
            imported: importedCount,
            message: `Proceso completado. ${importedCount} leads importados/actualizados.`
        });

    } catch (error) {
        console.error("Error importing Excel leads:", error);
        return NextResponse.json({ success: false, error: "Failed to import leads from Excel." }, { status: 500 });
    }
}
