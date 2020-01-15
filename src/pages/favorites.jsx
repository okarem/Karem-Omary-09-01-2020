import React, { useContext } from "react";
import { endpointUrl, apikey } from "../config";
import { InfoContext } from "../general/weatherContext";
import Card from "../comonents/card";
import { useHistory } from "react-router-dom";
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

        {(Array.isArray(citiesData) &&
          citiesData.length &&
          citiesData.map((cityData, index) => (
            <span
              onClick={() => {
                setInfo({ defaultCityInfo: info.favoriteCities[index] });
                history.push("/");
              }}
            >
              <Card
                Title={info.favoriteCities[index].LocalizedName}
                Subtitle={
                  Math.floor(cityData.Temperature.Metric.Value) +
                  " " +
                  cityData.Temperature.Metric.Unit
                }
                Subtitle2={cityData.WeatherText}
              />
            </span>
          ))) || <h3>You have no favorite!</h3>}
      </div>
    </React.Fragment>
  );
};

export default FavoritesPage;
