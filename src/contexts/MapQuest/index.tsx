import { createContext, Dispatch, SetStateAction, useContext } from "react";
import { useMapQuest } from "../../hooks/useMapQuest";
import { MapQuest } from "../../interfaces/MapQuest";

interface MapQuestContextInteface {
  mapQuest: MapQuest;
  setMapQuest: Dispatch<SetStateAction<MapQuest>>;
}

const MapQuestContext = createContext<MapQuestContextInteface>(
  {} as MapQuestContextInteface
);

const MapQuestProvider: React.FC = ({ children }) => {
  const mapQuestInformation = useMapQuest();

  return (
    <MapQuestContext.Provider value={mapQuestInformation}>
      {children}
    </MapQuestContext.Provider>
  );
};

export function useMapQuestContext() {
  const context = useContext(MapQuestContext);
  return context;
}

export default MapQuestProvider;
