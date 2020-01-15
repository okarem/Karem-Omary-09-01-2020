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
        <div className="city-on-display-info_city-name">
          <h3></h3>
            {cityOnDisplay.LocalizedName}, {cityOnDisplay.Country.LocalizedName}
          
        </div>
        <div className="city-on-display-info_weather-image">
          <img
            className="weather-icon-landing"
            src={weatherIconByCode[currentForcast.WeatherIcon]}
          />
        </div>
        <div className="city-on-display-info_temperature">
          {formatTemperature(isMetric)}
        </div>
        <div className="city-on-display-info_weather-text">
        {currentForcast.WeatherText}
        </div>
      </div>
    </React.Fragment>
  );
}
