import React, { useContext } from "react";
import { endpointUrl, apikey } from "../config";
import { InfoContext } from "../general/weatherContext";
import { useHistory } from "react-router-dom";
import WeatherCards from "../comonents/favoriteCityCard";

const FavoritesPage = () => {
  const history = useHistory();
  const { info, setInfo } = useContext(InfoContext);
  const [citiesData, setCitiesData] = React.useState([]);

  const fetchDataForCity = cityKey =>
    fetch(`${endpointUrl}/currentconditions/v1/${cityKey}?apikey=${apikey}`);

  React.useEffect(() => {
    if (info) {
      Promise.all(info.favoriteCities.map(city => fetchDataForCity(city.Key)))
        .then(responses =>{
          if(!responses.every(response=>response.status&&response.status===200))
          throw new Error("one or more city info fetch failed")
          return Promise.all(responses.map(cityDataRes => cityDataRes.json()))
        }
        )
        .then(citiesData =>
          setCitiesData(citiesData.map(currentDayData => currentDayData[0]))
        )
        .catch(err => {console.log(err)
        return <h3>Network error, please reload, or go to home page</h3>
        });
    }
  }, []);

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
