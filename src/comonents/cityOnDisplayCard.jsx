import React from "react";
import weatherIconByCode from "../weather-forecast-icons/png/pngs";

export default function({ cityOnDisplay, currentForcast, isMetric }) {

  const formatTemperature = isMetric => {
    return isMetric
      ? Math.floor(currentForcast.Temperature.Metric.Value) +
          " " +
          currentForcast.Temperature.Metric.Unit
      : Math.floor(currentForcast.Temperature.Imperial.Value) +
          " " +
          currentForcast.Temperature.Imperial.Unit;
  };

  return (
    <React.Fragment>
      <div className="city-on-display-info">
          <h3>
            {cityOnDisplay.LocalizedName}, {cityOnDisplay.Country.LocalizedName}
          </h3>
        <img
          className="weather-icon-landing"
          src={weatherIconByCode[currentForcast.WeatherIcon]}
        />
        <h1>{formatTemperature(isMetric)}</h1>
        <h2>{currentForcast.WeatherText}</h2>
      </div>
    </React.Fragment>
  );
}
