import { useEffect, useState } from "react";
import { useMapQuestContext } from "../contexts";
import { DailyWeather } from "../interfaces/Weather";
import openweatherapi from "../services/openweather";

/**
 * Hook para consumir api openweather
 * @author Sávio de Melo
 **/
export const useDailyWeather = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dailyWeather, setDailyWeather] = useState({} as DailyWeather);
  const openWeatherKey = process.env.REACT_APP_WEATHER_API_KEY;
  const { mapQuest } = useMapQuestContext();

  useEffect(() => {

    openweatherapi
      .get(
        `onecall?lat=${mapQuest.results[0].locations[0].latLng.lat}&lon=${mapQuest.results[0].locations[0].latLng.lng}&exclude=weekly,minutely&units=metric&appid=${openWeatherKey}`
      )
      .then((res) => {
        setDailyWeather(res.data);
        // console.log("res", res.data);
      })
      .catch((err) => {
        console.log('DEU ERRO KJKK: ', err);
      })
      .finally(() => {
        setIsLoading(false);
      });
    //eslint-disable-next-line
  }, []);
  return { dailyWeather, setDailyWeather, isLoading, setIsLoading };
};
