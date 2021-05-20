import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { DailyWeather } from "../../interfaces/Weather";
import { DayDetails } from "../../pages/Details/DayDetails";
import Home from "../../pages/Home/Home";
import openweatherapi from "../../services/openweathermapapi";

interface DailyWeatherContextInterface {
  dailyWeather: DailyWeather;
  setDailyWeather: Dispatch<SetStateAction<DailyWeather>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const DailyWeatherContext = createContext<DailyWeatherContextInterface>(
  {} as DailyWeatherContextInterface
);

const DailyWeatherProvider: React.FC = ({ children }) => {
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

  return (
    <DailyWeatherContext.Provider
      value={{
        dailyWeather,
        setDailyWeather,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
      <DayDetails />
    </DailyWeatherContext.Provider>
  );
};

export function useDailyWeatherContext() {
  const context = useContext(DailyWeatherContext);

  return context;
}

export default DailyWeatherProvider;
