import React, { useEffect, useState } from 'react';

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

export default function TopWeather({ weatherData }) {
    const [wicon, setWicon] = useState(clearnight_icon);

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
        const weatherIcon = weatherData?.weather[0].icon;
        const selectedIcon = iconMapping[weatherIcon] || iconMapping.default;
    
        setWicon(selectedIcon);
      }, [weatherData?.weather]);

      const [temperature, setTemperature] = useState(null);

      useEffect(() => {
        // Update the temperature initially
        if (weatherData && weatherData.main) {
          setTemperature(Math.round(weatherData.main.temp));
        }
    
        // Set up an interval to periodically update the temperature
        const intervalId = setInterval(() => {
          if (weatherData && weatherData.main) {
            setTemperature(Math.round(weatherData.main.temp));
          }
        }, 1000); // 5 minutes in milliseconds
    
        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
      }, [weatherData]);

    return (
        <>
          {weatherData && weatherData.main && (
            <>
              <img className="header-weather-icon" src={wicon} alt="" />
              <div className="temperature">{temperature} &deg;C</div>
            </>
          )}
        </>
      );
}