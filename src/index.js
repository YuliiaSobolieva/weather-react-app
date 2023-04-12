import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="Body">
      <header>
        <h1>Forecast App</h1>
      </header>

      <App />
      
      <footer>
        <p>
          <a
            href="https://github.com/YuliiaSobolieva/weather-react-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by{" "}
          <a
            href="https://github.com/YuliiaSobolieva"
            target="_blank"
            rel="noreferrer"
          >
            Yuliia Sobolieva
          </a>{" "}
          for{" "}
          <a href="https://www.shecodes.io/" target="_blank" rel="noreferrer">
            She Codes
          </a>
        </p>
      </footer>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
