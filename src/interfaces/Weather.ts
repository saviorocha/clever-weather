export interface CurrentWeather {
  // temperatura, sensação, descrição
  current: {
    temp: number;
    feels_like: number;
  };
  weather: [
    {
      main: string;
      description: string;
    }
  ];
  // pra pegar o máximo e mínimo do dia atual
  // daily: [{
  //   temp: {
  //     min: number;
  //     max: number;
  //   }
  // }]
}

export interface DailyWeather {
  // temperatura, precipitação, humidade
  current: {
    dt: number;
    temp: number;
  };

  hourly: [
    {
      dt: number;
      temp: number;
      pop: number;
      humidity: number;
    }
  ];
}

export interface WeeklyWeather {
  // temp máx, temp min, descrição, precipitação, humidade, pressão, vento, pôr do sol, nascer do sol
  daily: [
    {
      sunrise: number;
      sunset: number;
      humidity: number;
      pressure: number;
      wind_speed: number;
      temp: {
        min: number;
        max: number;
      };
      weather: [
        {
          main: string;
          description: string;
        }
      ];
      pop: number;
      rain: number;
    }
  ];
}
