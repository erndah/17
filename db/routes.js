const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

const {topup,jual,datas,updatemodal,datasmodal } = require("./controllers");

router.get("/data", datas);

router.post("/topup", [body("tanggal").isLength({ min: 4 }).withMessage("Tanggal tidak valid")], topup);

router.post("/jual", [body("tanggal").isLength({ min: 4 }).withMessage("Tanggal tidak valid"), body("nohp").isLength({ min: 7 }).withMessage("No HP tidak valid")], jual);
router.get("/modal", datasmodal);
router.put("/umodal/:getId", updatemodal);

module.exports = router;
