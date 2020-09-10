require('dotenv').config();

module.exports = {
  app: {
    port: process.env.PORT,
    env: process.env.NODE_ENV,
  },
  database: {
    dbName: process.env.DB_NAME,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbPort: process.env.DB_PORT,
    dbHost: process.env.DB_HOST,
  }
}