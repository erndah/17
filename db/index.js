const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const multer = require("multer");
const port = 4001;

app.use(cors());
app.use(bodyParser.json());
app.use(multer().single("none"));

const dataRoutes = require("./routes");

app.use("/users", dataRoutes);

app.listen(port, () => console.log(`server berjalan di localhost:${port}`));
