import react, { useCallback, useEffect, useState } from "react";
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
import { useWeatherContext } from "../../../contexts/Weather";
// import Waves from "../../../assets/Vector.js";

export const WeekDetails: React.FC = () => {
  const { weeklyWeather, setWeeklyWeather } = useWeatherContext();
  // useEffect(() => {
  //   console.log(weeklyWeather.daily);
  // }, []);
  return (
    <Container>
      <Waves xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#2f237c"
          fill-opacity="1"
          d="M0,256L24,261.3C48,267,96,277,144,266.7C192,256,240,224,288,197.3C336,171,384,149,432,154.7C480,160,528,192,576,213.3C624,235,672,245,720,234.7C768,224,816,192,864,197.3C912,203,960,245,1008,240C1056,235,1104,181,1152,170.7C1200,160,1248,192,1296,213.3C1344,235,1392,245,1416,250.7L1440,256L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
          data-darkreader-inline-fill=""
        ></path>
      </Waves>

      <Waves />
      <Header>
        <div className="topo">
          <div className="icone">
            <CornerDownLeft />
          </div>
          <div className="icone">
            <AiOutlineHome onClick={() => {}} />
          </div>
        </div>
        <h2>
          Luziânia, Brasil - <span>28°</span> / <span>14°</span>
        </h2>
        <div className="titulo">
          <h1>
            <ChevronLeft />
            Quarta-feira, 12 de Maio
            <ChevronRight />
          </h1>
        </div>
        <hr />
      </Header>
      <Table>
        <tr>
          <td>21:00</td>
          <td>
            <Moon /> 21°
          </td>

          <td>
            <GiHeavyRain />
            1%
          </td>

          <td>
            <BiDroplet />
            65%
          </td>
        </tr>
        <tr>
          <td>21:00</td>
          <td>
            <Moon /> 21°
          </td>

          <td>
            <GiHeavyRain />
            1%
          </td>
          <td>
            <BiDroplet />
            65%
          </td>
        </tr>
        <tr>
          <td>21:00</td>
          <td>
            <Moon /> 21°
          </td>
          <td>
            <GiHeavyRain />
            1%
          </td>

          <td>
            <BiDroplet />
            65%
          </td>
        </tr>
        <tr>
          <td>21:00</td>

          <td>
            <Moon /> 21°
          </td>

          <td>
            <GiHeavyRain />
            1%
          </td>

          <td>
            <BiDroplet />
            65%
          </td>
        </tr>
      </Table>
    </Container>
  );
};
