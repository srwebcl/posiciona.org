import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';

const connectionString = `${process.env.DATABASE_URL}`;

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

let prismaClient: PrismaClient;

if (!globalForPrisma.prisma) {
    const pool = new Pool({ connectionString });
    const adapter = new PrismaPg(pool);
    prismaClient = new PrismaClient({ adapter });
} else {
    prismaClient = globalForPrisma.prisma;
}

export const prisma = prismaClient;

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
