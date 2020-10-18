export const port = Number(process.env.PORT) || 3000;

export const databaseCredentials = {
  hostname: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 5430,
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASS || "mysecretpassword",
  database: process.env.DB_NAME || "postgres",
}
