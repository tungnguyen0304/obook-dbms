import { Pool } from "pg";

async function start() {
  const dbPool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });

  await dbPool.query(`
        CREATE TABLE IF NOT EXISTS users (
            id VARCHAR(255) PRIMARY KEY,
            email VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL,
            first_name VARCHAR(255) NOT NULL,
            last_name VARCHAR(255) NOT NULL,
            avatar VARCHAR(255) NOT NULL,
            sex VARCHAR(255) NOT NULL,
            dob VARCHAR(255) NOT NULL,
            refreshToken VARCHAR(255) NOT NULL
        )`);

  await dbPool.query(`
        CREATE TABLE IF NOT EXISTS posts (
            id VARCHAR(255) PRIMARY KEY,
            description VARCHAR(255) NOT NULL,
            status VARCHAR(255) NOT NULL,
        )`);

  await dbPool.query(`
        CREATE TABLE IF NOT EXISTS photos (
            id VARCHAR(255) PRIMARY KEY,
            status VARCHAR(255) NOT NULL,
            source VARCHAR(255) NOT NULL
        )`);
}

if(require.main === module) {
  start().then(()=>{
    console.log('Database table create completed');
    process.exit();
  }).catch(error => {
    console.error('Creating fails');
    process.exit();
  });
}