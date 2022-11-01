const db = require("./db_config");

const sql = `
            CREATE TABLE riwayat(
            id int NOT NULL AUTO_INCREMENT,
            tanggal DATE,
            provider VARCHAR(20),
            nominal INT,
            nohp VARCHAR(30),
            PRIMARY KEY (id)
            )`;

db.query(sql, (err, result) => {
  if (err) throw err;
  console.log("table berhasil dibuat");
});
