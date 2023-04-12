import React, { useState } from "react";
import axios from "axios";
import ForecastData from "./ForecastData";
import "./DailyForecast.css";

export default function DailyForecast(props) {
  const [dailyForecast, setDailyForecast] = useState();
  const [coordinates, setCoordinates] = useState(props.coordinates);

  const lon = props.coordinates.lon;
  const lat = props.coordinates.lat;

  if (!dailyForecast || coordinates.lon !== lon || coordinates.lat !== lat) {
    let apikey = "ff1d9ea9376b5c27a82e04fc2b2abdbb";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`;

    axios.get(apiUrl).then(fetchDailyForecast);

    function fetchDailyForecast(response) {
      // console.log(response);

      // const maxTemperature = Math.round(response.data.daily[0].temp.max);
      // const minTemperature = Math.round(response.data.daily[0].temp.min);
      // const dt = response.data.daily[0].dt;
      // const icon = response.data.daily[0].weather[0].icon;
      // const description = response.data.daily[0].weather[0].description;

      setDailyForecast(response.data.daily);

      setCoordinates(props.coordinates);
    }
    return null;
  }

  const dailyForecastComponents = dailyForecast.map(function (item, index) {
    const maxTemperature = Math.round(item.temp.max);
    const minTemperature = Math.round(item.temp.min);
    const dt = item.dt;
    const icon = item.weather[0].icon;
    const description = item.weather[0].description;

    const dailyData = { maxTemperature, minTemperature, dt, icon, description };

    if (index < 6) {
      return (
        <div className="col-2">
          <ForecastData data={dailyData} />
        </div>
      );
    }
  });

  return (
    <div className="WeatherForecast">
      <div className="row">{dailyForecastComponents}</div>
    </div>
  );
}
