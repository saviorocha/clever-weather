import axios from "axios";

const api = axios.create({
  baseURL: "https://www.mapquestapi.com/geocoding/v1/",
});

export default api;
