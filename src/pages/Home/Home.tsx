import React, { useState } from "react";

import { BackgroundImage } from "./styles";

import { LatLng } from "../../interfaces/LatLng";
import Contents from "./Contents";
import { Dashboard } from "../Dashboard";
import { useMapQuestContext } from "../../contexts";

const Home: React.FC = () => {
  const [latLng, setLatLng] = useState<LatLng | null>(null);
  const { mapQuest } = useMapQuestContext();
  return (
    <>
      <BackgroundImage>
        <Contents latLng={latLng} setLatLng={setLatLng}  />
      </BackgroundImage>
      {mapQuest && <Dashboard />}
    </>
  );
};

export default Home;
