import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { InfoContext } from "../general/weatherContext";
import Typography from "@material-ui/core/Typography";
import weatherIconByCode from "../weather-forecast-icons/png/pngs";
const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    minWidth:180
  },
  media: {
    height: 140
  }
});

export default function WeatherCard({ citiesData, ...props }) {
  const classes = useStyles();
  const history = useHistory();
  const { info, setInfo } = useContext(InfoContext);

  const formatTemperature = (currentForcast, isMetric) => {
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
      {(Array.isArray(citiesData) &&
        citiesData.length &&
        citiesData.map((cityData, index) => (
          <div key={index} className="city-card">
            <Card
              {...props}
              className={classes.card}
              onClick={() => {
                setInfo({ defaultCityInfo: info.favoriteCities[index] });
                history.push("/");
              }}
            >
              <CardMedia
                className={classes.media}
                image={weatherIconByCode[cityData.WeatherIcon]}
                title={cityData.WeatherText}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {info.favoriteCities[index].LocalizedName}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                  {formatTemperature(cityData,info.isMetric)}
                </Typography>
                <Typography variant="body2" component="p">
                  {cityData.WeatherText}
                </Typography>
              </CardContent>
            </Card>
          </div>
        ))) || <h3>You have no favorite!</h3>}
    </React.Fragment>
  );
}
