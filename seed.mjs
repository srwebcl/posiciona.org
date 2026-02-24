import 'dotenv/config';
import bcrypt from 'bcryptjs';
import pg from 'pg';

const { Pool } = pg;

async function main() {
    const password = 'admin';
    const hashedPassword = await bcrypt.hash(password, 10);
    const cuid = 'cuid' + Date.now(); // fake cuid for now, or just use simple string
    const role = 'ADMIN';

    const pool = new Pool({
        connectionString: process.env.DATABASE_URL
    });

    try {
        const query = `
            INSERT INTO "User" (id, name, email, password, role, "updatedAt")
            VALUES ($1, $2, $3, $4, CAST($5 AS "Role"), NOW())
            ON CONFLICT (email) DO NOTHING
            RETURNING id, email;
        `;
        const values = [cuid, 'Master Admin', 'admin@posiciona.org', hashedPassword, role];

        const res = await pool.query(query, values);
        if (res.rows.length > 0) {
            console.log('Successfully created admin user:', res.rows[0].email);
        } else {
            console.log('Admin user already exists!');
        }
    } catch (e) {
        console.error(e);
    } finally {
        await pool.end();
    }
}

main();
