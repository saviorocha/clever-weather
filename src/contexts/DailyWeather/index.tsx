import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { DailyWeather } from "../../interfaces/Weather";
interface DailyWeatherContextInterface {
  dailyWeather: DailyWeather;
  setDailyWeather: Dispatch<SetStateAction<DailyWeather>>;
}

const DailyWeatherContext = createContext<DailyWeatherContextInterface>(
  {} as DailyWeatherContextInterface
);

const DailyWeatherProvider: React.FC = ({ children }) => {
  const [dailyWeather, setDailyWeather] = useState({} as DailyWeather);

  return (
    <DailyWeatherContext.Provider
      value={{
        dailyWeather,
        setDailyWeather,
      }}
    >
      {children}
    </DailyWeatherContext.Provider>
  );
};

export function useDailyWeatherContext() {
  const context = useContext(DailyWeatherContext);
  return context;
}

export default DailyWeatherProvider;
