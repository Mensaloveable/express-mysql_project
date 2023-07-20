var mysql = require("mysql2");

require("dotenv").config();

const { DB_USERNAME, DB_PASSWORD } = process.env;

// const DB_USERNAME = process.env.DB_USERNAME;
// const DB_PASSWORD = process.env.DB_PASSWORD;

const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: DB_USERNAME,
  password: DB_PASSWORD,
  database: "express_mysql",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("DB connected");
  }
});

module.exports = connection;
