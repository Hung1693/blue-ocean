const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express(); //Initialized express
const cors = require("cors");
const { DATABASE_URL, NODE_ENV, PORT } = process.env;
const { Pool } = require("pg");
const pool = new Pool({
  // Format: postgres://user:password@host:5432/database
  connectionString: DATABASE_URL,
  ...(NODE_ENV === "production"
    ? { ssl: { rejectUnauthorized: false } }
    : {}),
});

pool.connect((err) => {
  //Connected Database
  if (err) {
    console.log(err);
  } else {
    console.log("PostgresSQL Connected");
  }
});
app.use(express.urlencoded({ extended: false }));

app.use(express.json());
app.use(cors());

app.get("/api/users", async (req, res) => {
  try {
    const result = await pool.query("select * from users;");
    res.send({ success: true, users: result.rows });
  } catch (err) {
    res.send("Error " + err);
  }
});

app.listen(PORT, () => {
  console.log(`Listen on port ${PORT}.`);
});

