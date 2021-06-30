import react, { useCallback, useEffect, useMemo, useState } from "react";
import { useTable, usePagination } from 'react-table';

import {
  Moon,
  Sun,
  ChevronLeft,
  ChevronRight,
  CornerDownLeft,
} from "react-feather";
import { GiHeavyRain } from "react-icons/gi";
import { BiDroplet } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { Container, Header, Table } from "./styles";
import { Waves } from "./styles";
import { useDailyWeatherContext, useMapQuestContext } from "../../../contexts";

import NumberFormat from "react-number-format";
import { useHistory } from "react-router";
import { 
  epochToDay, epochToHour, epochToMonth,
  paginateDailyWeather, paginateMapQuest
} from "../../../utils";

import { ColumnsInterface, DataInterface } from "../../../interfaces/ReactTable";
// import openweatherapi from "../../../services/openweathermapapi";
// import Waves from "../../../assets/Vector.js"


// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
export const DayDetails: React.FC = () => {
  const { dailyWeather, isLoading } = useDailyWeatherContext();
  const { mapQuest } = useMapQuestContext();
  const history = useHistory();
  // const openWeatherKey = process.env.REACT_APP_WEATHER_API_KEY;

  const handleIconClick = useCallback(() => {
    history.push("/");
  }, [history]);

  useEffect(() => {
    // !isLoading && console.log(epochToMonth(dailyWeather.current.dt));
    // console.log('mapQuest: ', mapQuest);
    // console.log('dailyWeather: ', dailyWeather);
    console.log(paginateDailyWeather(dailyWeather), paginateMapQuest(mapQuest));
    
  }, []);

  return isLoading ? (
    <h1>Carregando</h1>
  ) : (
    <Container>
      <Waves xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#2f237c"
          fill-opacity="1"
          d="M0,256L24,261.3C48,267,96,277,144,266.7C192,256,240,224,288,197.3C336,171,384,149,432,154.7C480,160,528,192,576,213.3C624,235,672,245,720,234.7C768,224,816,192,864,197.3C912,203,960,245,1008,240C1056,235,1104,181,1152,170.7C1200,160,1248,192,1296,213.3C1344,235,1392,245,1416,250.7L1440,256L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
          data-darkreader-inline-fill=""
        ></path>
      </Waves>

      <Header>
        <div className="topo">
          <div className="icone">
            <CornerDownLeft onClick={handleIconClick} />
          </div>
          <div className="icone">
            <AiOutlineHome onClick={handleIconClick} />
          </div>
        </div>
        <div className="titulo">
          <h2>
            {mapQuest.results[0].providedLocation.location},{" "}
            {mapQuest.results[0].locations[0].adminArea1} -{" "}
            <span>
              <NumberFormat
                value={dailyWeather.current.temp}
                decimalScale={0}
                displayType={"text"}
                suffix="°C"
              />
            </span>
          </h2>
          <h1>
            <ChevronLeft />
            {epochToDay(dailyWeather.current.dt)},{" "}
            {epochToMonth(dailyWeather.current.dt)}
            <ChevronRight />
          </h1>
        </div>
        <hr />
      </Header>
      <Table>
        {dailyWeather.hourly.map((weather) => (
          <tr>
            <td>{epochToHour(weather.dt)}</td>
            <td>
              <Moon />
              <NumberFormat
                value={weather.temp}
                decimalScale={0}
                displayType={"text"}
                suffix="°C"
              />
            </td>
            <td>
              <GiHeavyRain />
              <NumberFormat
                value={weather.pop}
                decimalScale={2}
                displayType={"text"}
                fixedDecimalScale
                suffix="%"
              />
            </td>

            <td>
              <BiDroplet />
              <NumberFormat
                value={weather.humidity}
                displayType={"text"}
                suffix="%"
              />
            </td>
          </tr>
        ))}
      </Table>
      {/* <PaginatedTable columns={columns} data={data}/> */}
    </Container>
  );
};
