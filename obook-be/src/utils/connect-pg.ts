import { Pool } from "pg";

export const dbPool = new Pool({
  //   connectionString: `${process.env.DATABASE_URL}`,
  connectionString: `postgres://postgres:postgres@localhost:5432/obook`,
});
