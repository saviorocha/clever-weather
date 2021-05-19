import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { WeatherContext } from "../components/WeatherContext";
import { DayDetails } from "../pages/Details/DayDetails/DayDetails";
import { WeekDetails } from "../pages/Details/WeekDetails/WeekDetails";
import { NotFound } from "../pages/Errors/NotFound";
import Home from "../pages/Home/Home";

import { CurrentWeather } from "../interfaces/Weather";

export const Routes: React.FC = () => (
  <Switch>
    <WeatherContext.Provider value="hello from context">
      <Route path="/" exact component={Home} />
      <Route path="/detalhes/semana" component={WeekDetails} />
      <Route path="/detalhes/dia" component={DayDetails} />
    </WeatherContext.Provider>
    <Route component={NotFound} />
    {/* <Redirect from="/outra" to="/" /> */}
  </Switch>
);
