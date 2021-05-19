import React, { useContext, useEffect, useState } from "react";

import { BackgroundImage } from "./styles";

import { LatLng } from "../../interfaces/LatLng";
import Contents from "./Contents/Contents";
import { Dashboard } from "../Dashboard/Dashboard";
import { WeatherContext } from "../../components/WeatherContext";

const Home: React.FC = () => {
  const [latLng, setLatLng] = useState<LatLng | null>(null);
  const msg = useContext(WeatherContext);

  useEffect(() => {
    console.log(msg);
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
