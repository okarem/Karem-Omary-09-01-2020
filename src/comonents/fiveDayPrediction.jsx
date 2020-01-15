import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
const useStyles = makeStyles({
  root: {
    textAlign: "center"
  }
});

export default function({ weeksForcast }) {
  const classes = useStyles();

  return (
    <div className="card-group">
      {weeksForcast.map((day, index) => {
        const date = new Date(day.Date);
        return (
          <div className="card">
            <Card className={classes.root} key={index}>
              <Typography variant="subtitle1">
                {weekDays[date.getDay()]}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {Math.floor(day.Temperature.Minimum.Value) +
                  "/" +
                  Math.floor(day.Temperature.Maximum.Value) +
                  " " +
                  day.Temperature.Maximum.Unit}
              </Typography>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
