const mysql = require("mysql2/promise");

async function connectDB() {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "Fede",
    password: "lokillo1523",
    database: "personasTrue",
    ssl: {
      rejectUnauthorized: false,
    },
  });
  const result = await connection.query("SELECT * FROM personas");
  console.log(result);
}

module.exports = connectDB;
