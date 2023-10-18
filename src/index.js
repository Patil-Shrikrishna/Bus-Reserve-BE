const express = require("express");
const connectDB = require("./configs/connectDB");
require("dotenv").config();
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

connectDB();
app.use(express.json());
app.use(cors());

app.use("/trip", require("./routes/trip"));

app.use(bodyParser.urlencoded({ extended: false }));
app.listen(3001, "localhost", () => {
  console.log("started on localhost:3001");
});
