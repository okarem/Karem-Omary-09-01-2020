import React from "react";
import { endpointUrl, apikey } from "../config";

const LandingPage = () => {
  let cityKey = "215854";
  const [cityConditions, setCityConditions] = React.useState({});

  React.useEffect(() => {
    fetch(`${endpointUrl}/currentconditions/v1/${cityKey}?apikey=${apikey}`)
      .then(res => res.json())
      .then(data => setCityConditions(data[0]))
      .catch(err => console.log(err));
  }, []);
  console.log(cityConditions);
  return (
    <React.Fragment>
      <h1>LandingPage</h1>
      <p>{JSON.stringify(cityConditions)}</p>
    </React.Fragment>
  );
};

export default LandingPage;
