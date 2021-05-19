import React, { useState } from "react";
import { Waves } from "./styles";
import openweatherapi from "../../services/openweathermapapi";

// https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=minutely&appid={API key}
export const Dashboard: React.FC = () => {
  const openWeatherKey = process.env.REACT_APP_WEATHER_API_KEY;

  const [weather, setWeather] = useState("");

  const getWeather = () => {
    // openweatherapi
    //   .get(
    //     `onecall?lat=33.44&lon=-94.04&exclude=minutely&appid={api key}`
    //   )
    //   .then((res) => {});
  };

  return (
    <>
      <Waves xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#131025"
          fill-opacity="1"
          d="M0,192L34.3,192C68.6,192,137,192,206,170.7C274.3,149,343,107,411,101.3C480,96,549,128,617,154.7C685.7,181,754,203,823,197.3C891.4,192,960,160,1029,133.3C1097.1,107,1166,85,1234,101.3C1302.9,117,1371,171,1406,197.3L1440,224L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
          data-darkreader-inline-fill=""
        ></path>
      </Waves>
    </>
  );
};
