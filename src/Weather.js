import React from "react";
import './App.css';
export default function Weather() {
  return (
    <div className="Weather">
      <div class="row">
        <div class="col-6">
          <div class="d-flex weather-temperature">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="cloudy"
              id="icon"
            />

            <strong id="temperature">15</strong>
            <span class="units">
              <div id="c-button">°C</div>{" "}
            </span>
          </div>
        </div>

        <div class="col-6">
          <div class="weather-details">
            <ul>
              <li>
                Humidity: <span id="humidity">5 </span>%
              </li>
              <li>
                Wind: <span id="wind">80 </span>m/h
              </li>
              <li>
                Pressure: <span id="pressure">950 </span>hPa
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
