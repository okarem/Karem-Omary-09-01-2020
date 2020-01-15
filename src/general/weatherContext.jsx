import React, { useReducer, useEffect } from "react";

const reducer = (info, newInfo) => {
  if (newInfo === null) {
    localStorage.removeItem("weatherInfo");
    return initialState;
  }
  return { ...info, ...newInfo };
};

const initialState = {
  defaultCityInfo: {
    Version: 1,
    Key: "215854",
    Type: "City",
    Rank: 31,
    LocalizedName: "Tel Aviv",
    Country: {
      ID: "IL",
      LocalizedName: "Israel"
    },
    AdministrativeArea: {
      ID: "TA",
      LocalizedName: "Tel Aviv"
    }
  },
  isMetric: true,
  favoriteCities: [
    {
      Version: 1,
      Key: "215854",
      Type: "City",
      Rank: 31,
      LocalizedName: "Tel Aviv",
      Country: {
        ID: "IL",
        LocalizedName: "Israel"
      },
      AdministrativeArea: {
        ID: "TA",
        LocalizedName: "Tel Aviv"
      }
    },
    {
      Version: 1,
      Key: "3431644",
      Type: "City",
      Rank: 45,
      LocalizedName: "Telanaipura",
      Country: {
        ID: "ID",
        LocalizedName: "Indonesia"
      },
      AdministrativeArea: {
        ID: "JA",
        LocalizedName: "Jambi"
      }
    }
  ]
};

const InfoContext = React.createContext();
const localState = JSON.parse(localStorage.getItem("weatherInfo"));

const InfoProvider = props => {
  const [info, setInfo] = useReducer(reducer, localState || initialState);
  useEffect(() => {
    localStorage.setItem("weatherInfo", JSON.stringify(info));
  }, [info]);

  return (
    <InfoContext.Provider value={{ info, setInfo }}>
      {props.children}
    </InfoContext.Provider>
  );
};

export { InfoContext, InfoProvider };
