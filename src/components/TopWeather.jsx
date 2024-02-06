import React, { useEffect, useState } from 'react';
import useWeatherData from "../hooks/useWeatherData.js";

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

export default function TopWeather() {
    const [wicon, setWicon] = useState(clearnight_icon);
    const [temperature, setTemperature] = useState(null);
    const { weatherData } = useWeatherData();
    

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
        if (weatherData && weatherData.main) {
          const { main, weather } = weatherData;
          const weatherIcon = weather[0].icon;
          const selectedIcon = iconMapping[weatherIcon] || iconMapping.default;
    
          setTemperature(Math.round(main.temp));
          setWicon(selectedIcon);
        }
      }, [weatherData]);

    return (
        <>
              <img className="header-weather-icon" src={wicon} alt="" />
              <div className="temperature">{temperature} &deg;C</div>
        </>
      );
}