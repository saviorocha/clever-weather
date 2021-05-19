import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { CurrentWeather } from "../../interfaces/Weather";

interface CurrentWeatherContextInterface {
  currentWeather: CurrentWeather;
  setCurrentWeather: Dispatch<SetStateAction<CurrentWeather>>;
}

const CurrentWeatherContext = createContext<CurrentWeatherContextInterface>(
  {} as CurrentWeatherContextInterface
);

const CurrentWeatherProvider: React.FC = ({ children }) => {
  const [currentWeather, setCurrentWeather] = useState({} as CurrentWeather);
  return (
    <CurrentWeatherContext.Provider
      value={{
        currentWeather,
        setCurrentWeather,
      }}
    >
      {children}
    </CurrentWeatherContext.Provider>
  );
};

export function useCurrentWeatherContext() {
  const context = useContext(CurrentWeatherContext);
  return context;
}

export default CurrentWeatherProvider;
