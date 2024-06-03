import { Search } from "@mui/icons-material";
import axios from "axios";
import React, { useState } from "react";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const API_KEY = "cadc7ddcb8dc0e60d83f96b8f9bfcfed";
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  const getWeather = async () => {
    if (!city) return;

    try {
      const res = await axios.get(API_URL);
      setWeather(res.data);
    } catch (error) {
      console.log("error : ", error);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-blue-100 flex items-center justify-center">
        <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4 text-center">Weather App</h1>
          <div className="mb-4">
            <input
              type="text"
              className="border rounded w-80 py-2 px-3 text-gray-700 mr-2"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter City Name"
            />
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded"
              onClick={getWeather}
            >
              <Search />
            </button>
          </div>

          {/* Weather */}
          {weather && (
            <div className="bg-gray-200 p-4 rounded">
              <h2 className="text-xl font-bold">{weather.name}</h2>
              <div className="flex items-center">
                <img
                  src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
                  alt=""
                  className="w-12 h-12 text-center"
                />
              </div>
              <p>Temperature : {`${weather.main.temp}\u00B0C`}</p>
              <p>Humidity : {weather.main.humidity}%</p>
              <p>Condition : {weather.weather[0].description}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default WeatherApp;
