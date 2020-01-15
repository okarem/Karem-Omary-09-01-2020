import LocationOnIcon from "@material-ui/icons/LocationOn";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import _ from "lodash";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import topCities from "../general/topCities";
import { endpointUrl, apikey } from "../config";

const useStyles = makeStyles(theme => ({
  icon: {
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(2)
  }
}));

export default function ComboBox(props) {
  const classes = useStyles();
  //here topCities can be replaced with [], topCities is used for a snappier response
  const [options, setOptions] = React.useState(topCities);
  const [inputValue, setInputValue] = React.useState("");

  React.useEffect(() => {
    let active = true;
    if (inputValue === "") {
      return undefined;
    }

    fetch(
      `${endpointUrl}/locations/v1/cities/autocomplete?apikey=${apikey}&q=${inputValue}`
    )
      .then(res => res.json())
      .then(predictionDataArray => {
        if (active) {
          console.log("results are here");
          setOptions(_.unionBy(predictionDataArray, options, "Key"));
        }
      })
      .catch(err => {
        //failed to fetch cities, but code will still work
        console.log(err)});

    return () => {
      active = false;
    };
  }, [inputValue]);

  const handleTextFieldChange = event => {
    setInputValue(event.target.value);
  };
  return (
    <Autocomplete
      className={classes.bar}
      id="combo-box-demo"
      options={options}
      getOptionLabel={option => option.LocalizedName}
      style={{ width: 300 }}
      renderInput={params => (
        <TextField
          {...params}
          label="Search for location"
          variant="outlined"
          onChange={handleTextFieldChange}
          fullWidth
        />
      )}
      renderOption={option => {
        return (
          <Grid
            onClick={() => {
              props.setCityOnDisplay(option);
            }}
            container
            alignItems="center"
          >
            <Grid item>
              <LocationOnIcon className={classes.icon} />
            </Grid>
            <Grid item xs>
              <span style={{ fontWeight: 700 }}>{option.LocalizedName}</span>
              <Typography variant="body2" color="textSecondary">
                {option.Country.LocalizedName}
              </Typography>
            </Grid>
          </Grid>
        );
      }}
    />
  );
}
