import React, { useEffect, useState } from "react";
import apiKeys from "../config";

import search_icon from "../assets/search.png";
import currentlocation_icon from "../assets/currentlocation.png";
import clearday_icon from "../assets/clearday.png";
import clearnight_icon from "../assets/clearnight.png";
import fewcloudsday_icon from "../assets/fewcloudsday.png";
import fewcloudsnight_icon from "../assets/fewcloudsnight.png";
import brokencloudsday_icon from "../assets/brokencloudsday.png";
import brokencloudsnight_icon from "../assets/brokencloudsnight.png";
import scatteredclouds_icon from "../assets/scatteredclouds.png";
import lightrainday_icon from "../assets/lightrainday.png";
import lightrainnight_icon from "../assets/lightrainnight.png";
import rain_icon from "../assets/rain.png";
import snow_icon from "../assets/snow.png";
import thunderstorm_icon from "../assets/thunderstorm.png";
import sunrise_icon from "../assets/sunrise.png";
import sunset_icon from "../assets/sunset.png";
import dagtid_background from "../assets/dagtid.jpg";

const Weather = ({ weatherData, fetchWeatherData, updateLocation }) => {
  const [wicon, setWicon] = useState(clearnight_icon);
  const [background, setBackground] = useState(clearnight_icon);

  const formatTime = (timestamp) => {
    const dateObj = new Date(timestamp * 1000);
    const hours = dateObj.getUTCHours().toString().padStart(2, "0");
    const minutes = dateObj.getUTCMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  let sunriseFormatted = formatTime(weatherData.sys.sunrise);
  let sunsetFormatted = formatTime(weatherData.sys.sunset);

  const iconMapping = {
    "01d": clearday_icon,
    "01n": clearnight_icon,
    "02d": fewcloudsday_icon,
    "02n": fewcloudsnight_icon,
    "03d": scatteredclouds_icon,
    "03n": scatteredclouds_icon,
    "04d": brokencloudsday_icon,
    "04n": brokencloudsnight_icon,
    "09d": lightrainday_icon,
    "09n": lightrainnight_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "11d": thunderstorm_icon,
    "11n": thunderstorm_icon,
    "13d": snow_icon,
    default: clearnight_icon,
  };

  useEffect(() => {
    const weatherIcon = weatherData.weather[0].icon;
    const selectedIcon = iconMapping[weatherIcon] || iconMapping.default;

    setWicon(selectedIcon);

    const currentDate = new Date();
    const currentHour = currentDate.getHours();

    // Om klockan är mellan 06:00 och 18:00, använd dagens bild, annars använd kvällsbild.
    if (currentHour >= 6 && currentHour < 23) {
      setBackground(dagtid_background); // Använd sökvägen för dagtid.jpg.
    } else {
      setBackground(clearnight_icon); // Default: använd clearnight_icon vid kväll och natt.
    }
  }, [weatherData.weather]);

  const handleSearch = () => {
    const cityInput = document.querySelector(".cityInput");
    const city = cityInput.value.trim();
    if (city) {
      const newApiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKeys.weather}`;
      fetchWeatherData(newApiURL);
      cityInput.value = "";
    }
  };

  const handleCurrentLocation = () => {
    updateLocation();
  };

  return (
    <div
      className="weather-container"
      style={{ backgroundImage: `url(${background})`, backgroundSize: "cover" }}
    >
      <div className="top-bar">
        <button
          className="currentlocation-icon"
          onClick={handleCurrentLocation}
          title="Get your current locations weather"
        >
          <img src={currentlocation_icon} alt="" />
        </button>
        <input type="text" className="cityInput" placeholder="Search" />
        <button className="search-icon" onClick={handleSearch}>
          <img src={search_icon} alt="" />
        </button>
      </div>
      <div className="weather-image">
        <img src={wicon} alt="" />
      </div>
      <div className="weather-temp">
        {Math.round(weatherData.main.temp)} &deg;C
      </div>
      <div className="weather-location">{weatherData.name}</div>
      <div className="data-container">
        <div className="element">
          <img src={sunrise_icon} alt="" className="icon" />
          <div className="data">
            <div className="text">Sunrise</div>
            <div className="sunrise">{sunriseFormatted}</div>
          </div>
        </div>
        <div className="element">
          <img src={sunset_icon} alt="" className="icon" />
          <div className="data">
            <div className="text">Sunset</div>
            <div className="sunset">{sunsetFormatted}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
