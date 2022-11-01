const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "pulsa",
});

db.connect((err) => {
  err ? console.error(err) : console.log("Data berhasil");
});

module.exports = db;
