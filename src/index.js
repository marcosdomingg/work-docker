const express = require("express");
const mysql = require("mysql2");

const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: process.env.DB_HOST || "db",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "electivados",
  database: process.env.DB_NAME || "testdb",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL!");
});

app.get("/", (req, res) => {
  res.send("Hello World from Node.js with MySQL!");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
