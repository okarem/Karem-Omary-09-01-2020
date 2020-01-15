import React from "react";

const WeatherCard = props => {
  return (
    <div className="card">
      <div className="card-title">{props.Title || <h3>Sunday</h3>}</div>
      <div className="card-subtitle">{props.Subtitle || "39 C"}</div>
      {props.Subtitle2 && (
        <div className="card-subtitle">{props.Subtitle2}</div>
      )}
    </div>
  );
};

export default WeatherCard;
