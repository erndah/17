const { validationResult } = require("express-validator");
const db = require("./db_config");

//create
const topup = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const err = new Error("Invalid value");
    err.errorStatus = 400;
    err.data = errors.array();
    throw err;
  }
  // let b ={
  //   saldo:req.body.saldo
  // }
  let a = {
    tanggal: req.body.tanggal,
    tipe: req.body.tipe,
    nominal: req.body.nominal,
  };
  const sql = ` INSERT INTO riwayat ( tanggal ,tipe,nominal )
                VALUE ( "${a.tanggal}","topup","${a.nominal}")`;
  // temp = parseInt(a.nominal)+parseInt(a.nakhir)
  // const sql2 = `UPDATE modal SET saldo="${temp}" WHERE id='0'`
  db.query((sql), (err, result) => {
    if (err) throw err;
    res.status(200).json({
      massage: "berhasil",
      data: a,
    });
  });
};

const jual = (req, res) => {
    const errors = validationResult(req);
  
    if (!errors.isEmpty()) {
      const err = new Error("Invalid value");
      err.errorStatus = 400;
      err.data = errors.array();
      throw err;
    }
    let a = {
      tanggal: req.body.tanggal,
      tipe: req.body.tipe,
      provider: req.body.provider,
      nominal: req.body.nominal,
      nohp: req.body.nohp
    };
    const sql = ` INSERT INTO riwayat ( tanggal, tipe ,provider, nominal, nohp )
                  VALUE ( "${a.tanggal}","jual","${a.provider}","${a.nominal}","${a.nohp}")
                  `;
    
  
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.status(200).json({
        massage: "berhasil",
        data: a,
      });
    });
  };


const datas = (req, res) => {
  const sql = `SELECT tanggal,tipe,nominal FROM riwayat`;

  db.query(sql, (err, result) => {
    if (err) throw err;
    res.status(200).json({
      massage: "berhasil",
      data: result,
    });
  });
};

const datasmodal = (req, res) => {
  const sql = `SELECT * FROM modal`;

  db.query(sql, (err, result) => {
    if (err) throw err;
    res.status(200).json({
      massage: "berhasil",
      data: result,
    });
  });
};

const updatemodal = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const err = new Error("Invalid value");
    err.errorStatus = 400;
    err.data = errors.array();
    throw err;
  }
  let a = {
    // tanggal: req.body.tanggal,
    // tipe: req.body.tipe,
    // provider: req.body.provider,
    saldo: req.body.saldo,
    // nohp: req.body.nohp
    // nominal: req.body.nominal,

  };
  // const sql = ` INSERT INTO modal ( saldo )
  //               `;
  const id = req.body.getId;
  const sql = `UPDATE modal SET saldo="${a.saldo}" WHERE id='0'`
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.status(200).json({
      massage: "berhasil",
      data: a,
    });
  });
};

module.exports = {topup,jual,datas,datasmodal, updatemodal};
