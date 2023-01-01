import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input
          type="search"
          placeholder="Search for a City..."
          className="form-control"
        />
        <button type="button" class="btn btn-success">
          Search
        </button>
      </form>

      <h1>The weather in Manchester is...</h1>
      <ul>
        <li>Sunday 15:00</li>
        <li>Mostly Cloudy</li>
        <li>H: 9°C | L: 3°C</li>
      </ul>

      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <div className="float-left">
              {" "}
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="Mostly Cloudy"
              />{" "}
              9°C
            </div>
          </div>
        </div>

        <div className="col-6">
          <ul>
            <li>Precipitation: 4%</li>
            <li>Humidity: 79%</li>
            <li>Wind: 12 mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
