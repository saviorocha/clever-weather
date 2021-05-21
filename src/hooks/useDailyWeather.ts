import { useEffect, useState } from "react";
import { DailyWeather } from "../interfaces/Weather";
import openweatherapi from "../services/openweathermapapi";

/**
 * Hook para consumir api de clima
 * @author Sávio de Melo
 **/
export const useDailyWeather = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dailyWeather, setDailyWeather] = useState({} as DailyWeather);
  const openWeatherKey = process.env.REACT_APP_WEATHER_API_KEY;

  useEffect(() => {
    openweatherapi
      .get(
        `onecall?lat=-16.258240&lon=-47.935242&exclude=weekly,minutely&units=metric&appid=${openWeatherKey}`
      )
      .then((res) => {
        setDailyWeather(res.data);
        // console.log("res", res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
    //eslint-disable-next-line
  }, []);
  return { dailyWeather, setDailyWeather, isLoading, setIsLoading };
};
