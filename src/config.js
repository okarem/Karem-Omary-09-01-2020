// import dotenv from "dotenv";
let endpointUrl = "";
const port = 4000;
const apikey = process.env.REACT_APP_APIKEY;

if (process.env.NODE_ENV === "development") {
  // endpointUrl = `http://localhost:${port}`;
  endpointUrl = `http://192.168.1.104:${port}`
}
if (process.env.NODE_ENV === "production") {
  endpointUrl = `https://dataservice.accuweather.com`;
}
console.log(apikey);
export { endpointUrl, apikey };
