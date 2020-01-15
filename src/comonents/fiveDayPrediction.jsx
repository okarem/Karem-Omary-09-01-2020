import React from "react";
import Card from "../comonents/card";


const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

export default function({weeksForcast}) {
  return (
    <div className="card-group">
      {weeksForcast.map((day,index) => {
        const date = new Date(day.Date);
        return (
          <Card key={index}
            Title={weekDays[date.getDay()]}
            Subtitle={
              Math.floor(day.Temperature.Minimum.Value) +
              "-" +
              Math.floor(day.Temperature.Maximum.Value) +
              " " +
              day.Temperature.Maximum.Unit
            }
          />
        );
      })}
    </div>
  );
}
