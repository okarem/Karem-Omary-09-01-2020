const express = require("express");
const bodyParser = require("body-parser");
const port = 4000;
const env = require("env2");
env("../.env");
const cors = require("cors");
const apikey = process.env.REACT_APP_APIKEY;
const telavivRequest = require("./dummy-data/telavivRequest.json");
const telaviv5DayData = require("./dummy-data/telaviv5DayData.json");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get(`/currentconditions/v1/215854`, (req, res) => {
  res.json(telavivRequest);
});
app.get(`/forecasts/v1/daily/5day/215854`, (req, res) => {
  res.json(telaviv5DayData);
});
app.get("/apikey", (req, res) => {
  res.json(apikey);
});
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
