import React, { useContext, useEffect, useState } from "react";

import { BackgroundImage } from "./styles";

import { LatLng } from "../../interfaces/LatLng";
import Contents from "./Contents/Contents";
import { Dashboard } from "../Dashboard/Dashboard";
import { useWeatherContext } from "../../contexts/Weather";
import { Location, SearchBar } from "../../components";

const Home: React.FC = () => {
  const [latLng, setLatLng] = useState<LatLng | null>(null);
  const { currentWeather } = useWeatherContext();

  useEffect(() => {
    console.log(currentWeather);
  }, []);

  return (
    <>
      <BackgroundImage>
        <Contents latLng={latLng} setLatLng={setLatLng} />
      </BackgroundImage>
      <Dashboard />
    </>
  );
};

export default Home;
