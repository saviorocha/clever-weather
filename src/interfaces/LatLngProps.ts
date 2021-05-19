import { LatLng } from "./LatLng";

export interface LatLngProps {
  latLng: LatLng | null;
  setLatLng: React.Dispatch<React.SetStateAction<LatLng | null>>;
}
