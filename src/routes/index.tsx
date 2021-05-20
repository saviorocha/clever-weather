import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import {
  WeatherProvider,
  DailyWeatherProvider,
  CurrentWeatherProvider,
  WeeklyWeatherProvider,
} from "../contexts";

import Home from "../pages/Home/Home";
import { WeekDetails } from "../pages/Details/WeekDetails";
import { DayDetails } from "../pages/Details/DayDetails";
import { NotFound } from "../pages/Errors/NotFound";

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/detalhes/dia" component={DailyWeatherProvider} />
      <Route path="/detalhes/semana" component={WeekDetails} />
      <Route component={NotFound} />
      {/* <Redirect from="/outra" to="/" /> */}
    </Switch>
  );
};
