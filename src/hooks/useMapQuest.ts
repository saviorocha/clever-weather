import { useEffect, useState } from "react";
import { MapQuest } from "../interfaces/MapQuest";
import { mapquestapi } from "../services/index";

/**
 * Hook para consumir api mapquest
 * @author Sávio de Melo
 **/
export const useMapQuest = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [mapQuest, setMapQuest] = useState({} as MapQuest);
  const mapQuestKey = process.env.REACT_APP_LOCATION_API_KEY;

  useEffect(() => {
    mapquestapi
      .get(`address?key=${mapQuestKey}&location=Luziânia`)
      .then((res) => {
        setMapQuest(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return { isLoading, setIsLoading, mapQuest, setMapQuest };
};
