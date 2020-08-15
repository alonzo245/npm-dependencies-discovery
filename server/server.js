const express = require("express");
const path = require('path')
const cors = require("cors");
require('dotenv').config({path: path.join('..', '.env')})
const app = express();
const routes = require("./src/routes/index");
const BASE_API_ROUTE = "/api/v1";
app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  next();
});

app.use(`${BASE_API_ROUTE}/packages`, routes.npmPackages);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
