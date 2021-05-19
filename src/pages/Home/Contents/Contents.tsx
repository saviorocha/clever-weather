import React, { FormEvent, useEffect, useState } from "react";
import { Title, Location, SearchBarForm, Section, Erro } from "./styles";
import { Search, MapPin } from "react-feather";

import mapquestapi from "../../../services/mapquestapi";
import { AxiosResponse } from "axios";
import { useWindowDimensions } from "../../../hooks/useWindowDimensions";
import { LatLng } from "../../../interfaces/LatLng";
import { LatLngProps } from "../../../interfaces/LatLngProps";

// http://www.mapquestapi.com/geocoding/v1/address?key={API key}&location={location}

const Contents: React.FC<LatLngProps> = ({ latLng, setLatLng }) => {
  const mapQuestKey = process.env.REACT_APP_LOCATION_API_KEY;

  const [location, setLocation] = useState("");
  const [inputError, setInputError] = useState("");

  const { windowWidth, windowHeight } = useWindowDimensions();

  useEffect(() => {
    // console.log(latLng?.results[0].locations[0].latLng.lat);
    // console.log(latLng?.results[0].locations[0].latLng.lng);
    // console.log("chave api: ", mapQuestKey);
    // console.log(latLng);
  }, [latLng]);

  function userLocation() {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLatLng({
        user: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
      });
    });
  }
  const handleAddLocation = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    mapquestapi
      .get(`address?key=${mapQuestKey}&location=${location}`)
      .then((res: AxiosResponse<LatLng>) => {
        setLatLng(res.data);
      })
      .catch((err) => {
        // não tá funcionando :(
        setInputError("Erro ao buscar essa localização");
      });
  };

  return (
    <Section>
      <img
        src="https://assets.materialup.com/uploads/974bd804-5fea-4577-b610-408fc30b500d/preview"
        alt="logo"
      />
      <Title>Clever Weather</Title>
      <SearchBarForm hasError={!!inputError} onSubmit={handleAddLocation}>
        <div>
          <Search />
          <input
            type="text"
            placeholder="Pesquisar por localidade"
            onChange={(evt) => {
              setLocation(evt.target.value);
            }}
            value={location}
          />
        </div>

        <hr />
        {windowWidth > 1025 && windowHeight < 1280 && (
          <button type="submit">Pesquisar</button>
        )}
      </SearchBarForm>

      {inputError && <Erro>{inputError}</Erro>}

      <Location>
        <button onClick={userLocation}>Usar localização atual</button>
        <MapPin />
      </Location>
    </Section>
  );
};

export default Contents;
