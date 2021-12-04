require("dotenv").config();
const path = require("path");

module.exports = {
    migrationPattern: path.join("migrations", "*"),
    driver: "pg",
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
};