import dotenv from "dotenv";
let endpointUrl = "";
const port = 4000;
const apikey = process.env.REACT_APP_APIKEY;

if (process.env.NODE_ENV === "development") {
  endpointUrl = `http://localhost:${port}`;
}
if (process.env.NODE_ENV === "production") {
  endpointUrl = `http://dataservice.accuweather.com`;
}

export { endpointUrl, apikey };
