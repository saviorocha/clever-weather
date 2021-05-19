import React, {
  useState,
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
} from "react";
import {
  CurrentWeather,
  DailyWeather,
  WeeklyWeather,
} from "../../interfaces/Weather";

interface WheaterContextInterface {
  currentWeather: CurrentWeather;
  setCurrentWeather: Dispatch<SetStateAction<CurrentWeather>>;

  dailyWeather: DailyWeather;
  setDailyWeather: Dispatch<SetStateAction<DailyWeather>>;

  weeklyWeather: WeeklyWeather;
  setWeeklyWeather: Dispatch<SetStateAction<WeeklyWeather>>;
}

const WeatherContext = createContext<WheaterContextInterface>(
  {} as WheaterContextInterface
);

const WeatherProvider: React.FC = ({ children }) => {
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather>(
    {} as CurrentWeather
  );
  const [dailyWeather, setDailyWeather] = useState<DailyWeather>(
    {} as DailyWeather
  );

  const [weeklyWeather, setWeeklyWeather] = useState<WeeklyWeather>(
    {} as WeeklyWeather
  );

  return (
    <WeatherContext.Provider
      value={{
        currentWeather,
        setCurrentWeather,

        dailyWeather,
        setDailyWeather,

        weeklyWeather,
        setWeeklyWeather,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export function useWeatherContext() {
  const context = useContext(WeatherContext);
  return context;
}

export default WeatherProvider;
