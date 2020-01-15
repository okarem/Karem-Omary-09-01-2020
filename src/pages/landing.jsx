import React, { useContext } from "react";
import { endpointUrl, apikey } from "../config";
import { InfoContext } from "../general/weatherContext";
import SearchBox from "../comonents/searchBox";
import { Button } from "@material-ui/core";
import FiveDayPrediction from "../comonents/fiveDayPrediction";
import CityOnDisplayCard from "../comonents/cityOnDisplayCard";

const LandingPage = () => {
  const { info, setInfo } = useContext(InfoContext);

  const [cityOnDisplay, setCityOnDisplay] = React.useState(
    info.defaultCityInfo
  );
  let errMsg = null;
  const [weeksForcast, setWeeksForcast] = React.useState([]);
  const [currentForcast, setCurrentForcast] = React.useState({});
  const [isFavorite, setIsFavorite] = React.useState(
    info.favoriteCities.findIndex(city => city.Key === cityOnDisplay.Key) !== -1
  );
  const fetch5DayForcast = () =>
    fetch(
      `${endpointUrl}/forecasts/v1/daily/5day/${cityOnDisplay.Key}?apikey=${apikey}&metric=${info.isMetric}`
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
      .catch(err => {
        errMsg = "City unavailable";
        console.log(err);
      });

    setIsFavorite(
      info.favoriteCities.findIndex(city => city.Key === cityOnDisplay.Key) !==
        -1
    );
  }, [cityOnDisplay]);

  console.log(currentForcast);
  if (
    weeksForcast === [] ||
    currentForcast === {} ||
    !currentForcast.Temperature
  ) {
    if (errMsg) {
      return (
        <React.Fragment>
          <div className="container">
            <div className="search-box-area">
              <SearchBox setCityOnDisplay={setCityOnDisplay} />
            </div>
            <h3>{errMsg}</h3>
          </div>
        </React.Fragment>
      );
    }
    return <div>Loading...</div>;
  }

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
    setIsFavorite(!isFavorite);
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="search-box-area">
          <SearchBox setCityOnDisplay={setCityOnDisplay} />
        </div>
        <Button onClick={toggleInFavorites}>
          {isFavorite ? "Unfavorite" : "Favorite"}
        </Button>
        <CityOnDisplayCard isMetric={info.isMetric} cityOnDisplay={cityOnDisplay} currentForcast={currentForcast} />
        <FiveDayPrediction isMetric={info.isMetric} weeksForcast={weeksForcast} />
      </div>
    </React.Fragment>
  );
};

export default LandingPage;
