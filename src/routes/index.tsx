import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { WeatherProvider } from "../contexts";
import { DayDetails } from "../pages/Details/DayDetails/DayDetails";
import { WeekDetails } from "../pages/Details/WeekDetails/WeekDetails";
import { NotFound } from "../pages/Errors/NotFound";
import Home from "../pages/Home/Home";

export const Routes: React.FC = () => {
  return (
    <Switch>
      <WeatherProvider>
        <Route path="/" exact component={Home} />
        <Route path="/detalhes/semana" component={WeekDetails} />
        <Route path="/detalhes/dia" component={DayDetails} />
        <Route component={NotFound} />
        {/* <Redirect from="/outra" to="/" /> */}
      </WeatherProvider>
    </Switch>
  );
};
