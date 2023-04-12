import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Units from "./Units";
import DailyForecast from "./DailyForecast";
import CurrentDate from "./CurrentDate";

function App() {
  const [city, setCity] = useState("");
  const [forecast, setForecast] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  // const [temperature, setTemperature] = useState();

  function getForecast(event) {
    event.preventDefault();
    setErrorMessage("");
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=3673fcbbb0434bfb8eee4e62c8035ae8`;

    axios.get(url).then(fetchForecast).catch(handleError);

    function fetchForecast(response) {
      const temperature = Math.round(response.data.main.temp);
      const description = response.data.weather[0].description;
      const humidity = response.data.main.humidity;
      const wind = response.data.wind.speed;
      const icon = response.data.weather[0].icon;
      const currentCity = response.data.name;
      const coordinates = response.data.coord;

      // console.log(response);

      setForecast({
        temperature,
        description,
        humidity,
        wind,
        icon,
        currentCity,
        coordinates,
      });
    }

    function handleError() {
      setForecast(null);
      setErrorMessage("Something went wrong...");
    }
  }

  function setNewCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="App">
      <form onSubmit={getForecast}>
        <div className="row">
          <div className="col-9">
            <input
              className="form-control"
              type="search"
              placeholder="Type a city..."
              onChange={setNewCity}
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              className="btn btn-outline-primary"
              value="Search"
            />
          </div>
        </div>
      </form>

      {errorMessage ? <h3>{errorMessage}</h3> : null}

      {forecast ? (
        <div className="Forecast">
          <div className="TodayWeather">
            <div className="ShortInformation">
              <h2>{forecast.currentCity}</h2>
              <h3>{forecast.description}</h3>
              <CurrentDate />
            </div>

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

          <DailyForecast coordinates={forecast.coordinates} />
        </div>
      ) : null}
    </div>
  );
}

export default App;
