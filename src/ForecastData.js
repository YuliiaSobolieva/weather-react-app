import React from "react";
import "./DailyForecast.css";

export default function ForecastData(props) {
  function WeekDay() {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    const day = new Date(props.data.dt * 1000);
    const dayName = days[day.getDay()];

    return dayName;
  }

  return (
    <div>
      <div className="dateDailyForecast">{WeekDay()}</div>
      <div className="ForecastIcon">
        <img
          src={`https://openweathermap.org/img/wn/${props.data.icon}@2x.png`}
          alt={props.data.description}
        />
      </div>
      <div className="tempDailyForecast">
        <span className="maxTemp">{props.data.maxTemperature}°C</span> |{" "}
        <span className="minTemp">{props.data.minTemperature}°C</span>
      </div>
    </div>
  );
}
