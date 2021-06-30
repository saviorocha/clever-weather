import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";
import { useDailyWeather } from "../../hooks/useDailyWeather";
import { DailyWeather } from "../../interfaces/Weather";
import { DayDetails } from "../../pages/Details/DayDetails";

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
  const weatherInformation = useDailyWeather();

  return (
    <DailyWeatherContext.Provider value={weatherInformation}>
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
