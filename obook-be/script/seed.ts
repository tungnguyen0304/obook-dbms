import { Client, Pool } from "pg";

async function start() {
  const client = new Client({
    connectionString: `postgres://postgres:postgres@localhost:5432/obook`,
  });

  await client.connect();

  // console.log(await client.query(`drop schema obook;`));
  await client.query(`
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            email VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL,
            first_name VARCHAR(255) NOT NULL,
            last_name VARCHAR(255) NOT NULL,
            avatar VARCHAR(255) NOT NULL,
            sex VARCHAR(255) NOT NULL,
            dob VARCHAR(255) NOT NULL,
            refreshToken VARCHAR(255) NOT NULL
        );`);

  await client.query(`
        CREATE TABLE IF NOT EXISTS posts (
            id SERIAL PRIMARY KEY,
            description VARCHAR(255) NOT NULL,
            status VARCHAR(255) NOT NULL,
            user_id INTEGER REFERENCES users(id) NOT NULL
        );`);

  await client.query(`
        CREATE TABLE IF NOT EXISTS photos (
            id SERIAL PRIMARY KEY,
            status VARCHAR(255) NOT NULL,
            source VARCHAR(255) NOT NULL
        );`);

  await client.query(`
  CREATE TABLE follows (
    follower_id INTEGER REFERENCES users(id) NOT NULL,
    following_id INTEGER REFERENCES users(id) NOT NULL,
    PRIMARY KEY (follower_id, following_id)
  );`);

  await client.query(`
  CREATE TABLE likes (
    user_id INTEGER REFERENCES users(id) NOT NULL,
    post_id INTEGER REFERENCES posts(id) NOT NULL,
    PRIMARY KEY (user_id, post_id)
  );`);

  await client.query(`
  CREATE TABLE post_has_photos (
    post_id INTEGER REFERENCES posts(id) NOT NULL,
    photo_id INTEGER REFERENCES photos(id) NOT NULL,
    PRIMARY KEY (post_id, photo_id)
  );`);

  await client.end();
}

if (require.main === module) {
  start()
    .then(() => {
      console.log("Database table create completed");
      process.exit();
    })
    .catch((error) => {
      console.error("Creating fails", error);
      process.exit();
    });
}
