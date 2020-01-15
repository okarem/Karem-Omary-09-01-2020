import React, { useContext } from "react";
import { endpointUrl, apikey } from "../config";
import { InfoContext } from "../general/weatherContext";
import Card from "../comonents/card";
import { useHistory } from "react-router-dom";
import WeatherCards from "../comonents/betterCard";

const FavoritesPage = () => {
  const history = useHistory();
  const { info, setInfo } = useContext(InfoContext);

  const [citiesData, setCitiesData] = React.useState([]);

  const fetchDataForCity = cityKey =>
    fetch(`${endpointUrl}/currentconditions/v1/${cityKey}?apikey=${apikey}`);

  React.useEffect(() => {
    if (info) {
      Promise.all(info.favoriteCities.map(city => fetchDataForCity(city.Key)))
        .then(responses =>
          Promise.all(responses.map(cityDataRes => cityDataRes.json()))
        )
        .then(citiesData =>
          setCitiesData(citiesData.map(currentDayData => currentDayData[0]))
        )
        .catch(err => console.log(err));
    }
  }, []);

  console.log(citiesData);
  return (
    <React.Fragment>
      <div className="container">
        <h1>FavoritesPage</h1>
        <div className="favorite-cities-collection">

        <WeatherCards citiesData={citiesData} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default FavoritesPage;
