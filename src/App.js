import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [forecast, setForecast] = useState("");
  // const [temperature, setTemperature] = useState();

  function searchingCity(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=3673fcbbb0434bfb8eee4e62c8035ae8`;

    axios.get(url).then(showTemperature);

    function showTemperature(response) {
      const temperature = Math.round(response.data.main.temp);
      const description = response.data.weather[0].description;
      const humidity = response.data.main.humidity;
      const wind = response.data.wind.speed;
      const icon = response.data.weather[0].icon;
      // console.log(response);
      setForecast({ temperature, description, humidity, wind, icon });
    }
  }

  function newCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Forecast">
      <h1>Weather App</h1>
      <form onSubmit={searchingCity}>
        <input type="search" onChange={newCity} />
        <input type="submit" value="Search" />
      </form>
      {forecast ? (
        <div>
          <ul>
            <li>Temperature: {forecast.temperature}°C</li>
            <li>Description: {forecast.description}</li>
            <li>Humidity: {forecast.humidity}</li>
            <li>Wind: {forecast.wind}</li>
          </ul>
          <img
            src={`https://openweathermap.org/img/wn/${forecast.icon}@2x.png`}
            alt={forecast.description}
          />
        </div>
      ) : null}
    </div>
  );
}

export default App;
