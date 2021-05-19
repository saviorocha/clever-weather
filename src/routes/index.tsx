import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import {
  WeatherProvider,
  DailyWeatherProvider,
  CurrentWeatherProvider,
  WeeklyWeatherProvider,
} from "../contexts";

import Home from "../pages/Home/Home";
import { DayDetails } from "../pages/Details/DayDetails/DayDetails";
import { WeekDetails } from "../pages/Details/WeekDetails/WeekDetails";
import { NotFound } from "../pages/Errors/NotFound";

export const Routes: React.FC = () => {
  return (
    <Switch>
      {/* <WeatherProvider> */}

      <CurrentWeatherProvider>
        <Route path="/" exact component={Home} />
      </CurrentWeatherProvider>

      <WeeklyWeatherProvider>
        <Route path="/detalhes/semana" component={WeekDetails} />
      </WeeklyWeatherProvider>

      <DailyWeatherProvider>
        <Route path="/detalhes/dia" component={DayDetails} />
      </DailyWeatherProvider>

      <Route component={NotFound} />
      {/* <Redirect from="/outra" to="/" /> */}
      {/* </WeatherProvider> */}
    </Switch>
  );
};
