import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import {
  // WeatherProvider,
  // CurrentWeatherProvider,
  // WeeklyWeatherProvider,
  DailyWeatherProvider,
  MapQuestProvider,
} from "../contexts";

// import { DayDetails } from "../pages/Details/DayDetails";
import Home from "../pages/Home/Home";
import { WeekDetails } from "../pages/Details/WeekDetails";
import { NotFound } from "../pages/Errors/NotFound";

export const Routes: React.FC = () => {
  return (
    <MapQuestProvider>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/detalhes/dia" component={DailyWeatherProvider} />
        <Route path="/detalhes/semana" component={WeekDetails} />
        <Route component={NotFound} />
        {/* <Redirect from="/outra" to="/" /> */}
      </Switch>
    </MapQuestProvider>
  );
};
