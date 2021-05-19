import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { WeeklyWeather } from "../../interfaces/Weather";

interface WeeklyWeatherContextInterface {
  weeklyWeather: WeeklyWeather;
  setWeeklyWeather: Dispatch<SetStateAction<WeeklyWeather>>;
}

const WeeklyWeatherContext = createContext<WeeklyWeatherContextInterface>(
  {} as WeeklyWeatherContextInterface
);

const WeeklyWeatherProvider: React.FC = ({ children }) => {
  const [weeklyWeather, setWeeklyWeather] = useState({} as WeeklyWeather);
  return (
    <WeeklyWeatherContext.Provider
      value={{
        weeklyWeather,
        setWeeklyWeather,
      }}
    >
      {children}
    </WeeklyWeatherContext.Provider>
  );
};

export function useWeeklyWeatherContext() {
  const context = useContext(WeeklyWeatherContext);
  return context;
}

export default WeeklyWeatherProvider;
