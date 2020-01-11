import React from "react";
import { endpointUrl, apikey } from "../config";

const LandingPage = () => {
  let cityKey = "215854";
  
  const [weeksForcast,setWeeksForcast] = React.useState([]);


  React.useEffect(() => {
    fetch(`${endpointUrl}/forecasts/v1/daily/5day/${cityKey}?apikey=${apikey}`)
      .then(res => res.json())
      .then(data => setWeeksForcast(data.DailyForecasts))
      .catch(err => console.log(err));
  }, []);
  
  return (
    <React.Fragment>
      <h1>LandingPage</h1>
      <p>{JSON.stringify(weeksForcast[0])}</p>
    </React.Fragment>
  );
};

export default LandingPage;
