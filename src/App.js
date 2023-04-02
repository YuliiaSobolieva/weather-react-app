import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Units from "./Units";

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

  let City = city.toLowerCase();
  return (
    <div className="App">
      <form onSubmit={searchingCity}>
        <div className="row">
          <div className="col-9">
            <input
              class="form-control"
              type="search"
              placeholder="Type a city..."
              onChange={newCity}
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              class="btn btn-outline-primary"
              value="Search"
            />
          </div>
        </div>
      </form>

      {forecast ? (
        <div className="Forecast">

          <h2>{City}</h2>
          <h3>{forecast.description}</h3>
          <div className="ForecastDetails">
            <div className="ForecastDetailsIcon">
              <img
                src={`https://openweathermap.org/img/wn/${forecast.icon}@2x.png`}
                alt={forecast.description}
              />
            </div>

            <div className="ForecastDetailsTemperature">
              <Units celsius={forecast.temperature} />
            </div>

            <div className="ForecastDetailsDescription">
              <ul>
                <li>Humidity: {forecast.humidity}</li>
                <li>Wind: {forecast.wind}</li>
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
