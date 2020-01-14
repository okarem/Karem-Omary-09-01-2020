import React, { useContext } from "react";
import { endpointUrl, apikey } from "../config";
import { InfoContext } from "../general/weatherContext";
import Card from "../comonents/card";

const FavoritesPage = () => {
  const { info, setInfo } = useContext(InfoContext);

  const [citiesData, setCitiesData] = React.useState([]);

  const fetchDataForCity = cityKey => {
    return fetch(
      `${endpointUrl}/forecasts/v1/daily/5day/${cityKey}?apikey=${apikey}`
    );
  };
  
  React.useEffect(() => {
    if (info) {
      Promise.all(info.favoriteCities.map(city => fetchDataForCity(city.Key)))
        .then(responses =>
          Promise.all(responses.map(cityDataRes => cityDataRes.json()))
        )
        .then(citiesData =>
          setCitiesData(
            citiesData.map(fiveDayData => fiveDayData.DailyForecasts[0])
          )
        )
        .catch(err => console.log(err));
    }
  }, []);

  return (
    <React.Fragment>
      <div className="container">
      <h1>FavoritesPage</h1>
      <Card />
      {(Array.isArray(citiesData) &&
        citiesData.length &&
        citiesData.map(cityData => (
          <div>
            <h3>cityData:</h3> {JSON.stringify(cityData)}
          </div>
        ))) || <h3>You have no favorite!</h3>}
        </div>
    </React.Fragment>
  );
};

export default FavoritesPage;
