import React, { useContext } from "react";
import { endpointUrl, apikey } from "../config";
import { InfoContext } from "../general/weatherContext";
import SearchBox from "../comonents/searchBox";
import topCities from "../general/topCities";
import Card from "../comonents/card";
import icons from "../weather-forecast-icons/png/pngs";
import { Button } from "@material-ui/core";
const LandingPage = () => {
  const { info, setInfo } = useContext(InfoContext);

  const [cityOnDisplay, setCityOnDisplay] = React.useState(
    info.defaultCityInfo
  );
  const [weeksForcast, setWeeksForcast] = React.useState([]);
  const [currentForcast, setCurrentForcast] = React.useState({});
  const fetch5DayForcast = () =>
    fetch(
      `${endpointUrl}/forecasts/v1/daily/5day/${cityOnDisplay.Key}?apikey=${apikey}`
    );
  const fetchCurrentForcast = () =>
    fetch(
      `${endpointUrl}/currentconditions/v1/${cityOnDisplay.Key}?apikey=${apikey}`
    );

  React.useEffect(() => {
    Promise.all([fetch5DayForcast(), fetchCurrentForcast()])
      .then(res =>
        Promise.all([res[0].json(), res[1].json()]).then(
          ([fiveDayForcast, currentConditions]) => {
            setWeeksForcast(fiveDayForcast.DailyForecasts);
            setCurrentForcast(currentConditions[0]);
          }
        )
      )

      .catch(err => console.log(err));
  }, []);

  console.log(currentForcast);
  if (
    weeksForcast === [] ||
    currentForcast === {} ||
    !currentForcast.Temperature
  )
    return <div>Loading...</div>;

  const toggleInFavorites = () => {
    if (
      info.favoriteCities.findIndex(city => city.Key === cityOnDisplay.Key) ===
      -1
    ) {
      const newarray = [cityOnDisplay, ...info.favoriteCities];
      setInfo({ favoriteCities: [...newarray] });
    } else {
      const newarray = info.favoriteCities.filter(
        citie => citie.Key !== cityOnDisplay.Key
      );
      setInfo({ favoriteCities: [...newarray] });
    }
  };

  return (
    <React.Fragment>
      {/* <h1>LandingPage</h1>
      <SearchBox />
      <Card Title={"Bananaaaa"} />
  <p>{JSON.stringify(topCities)}</p>
      <p>{JSON.stringify(weeksForcast[0])}</p> */}

      <div className="container">
        <SearchBox />
        <Button onClick={toggleInFavorites}>toggle favorite</Button>
        <div className="city-on-display-info">
          <img className="weather-icon-landing" src={icons.cloudy} />
          <h3>
            {cityOnDisplay.LocalizedName},{cityOnDisplay.Country.LocalizedName}
          </h3>
        <h1>
          {currentForcast.Temperature.Metric.Value}{" "}
          {currentForcast.Temperature.Metric.Unit}
        </h1>
        </div>
          <h2>{currentForcast.WeatherText}</h2>
      </div>
      <div className="card-group">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </React.Fragment>
  );
};

export default LandingPage;
