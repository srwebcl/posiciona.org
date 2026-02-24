import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    const email = 'admin@posiciona.org';
    const password = 'admin'; // Temporary password

    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) {
        console.log('Admin user already exists!');
        return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: {
            name: 'Master Admin',
            email: email,
            password: hashedPassword,
            role: 'ADMIN',
        },
    });

    console.log(`Successfully created admin user with email: ${user.email} and password: ${password}`);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
