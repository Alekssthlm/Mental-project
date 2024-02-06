import { useState, useEffect } from "react";
import apiKeys from "../config";

const useWeatherData = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [lastFetchTime, setLastFetchTime] = useState(null);

  const fetchLocation = async () => {
    try {
      // Check if cached location is available
      const cachedLat = localStorage.getItem("cachedLat");
      const cachedLong = localStorage.getItem("cachedLong");

      if (cachedLat && cachedLong) {
        setLat(cachedLat);
        setLong(cachedLong);
        return;
      }

      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      const { latitude, longitude } = position.coords;
      setLat(latitude);
      setLong(longitude);

      // Cache location
      localStorage.setItem("cachedLat", latitude);
      localStorage.setItem("cachedLong", longitude);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchWeatherData = async (apiURL) => {
    try {
      const response = await fetch(apiURL);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      setWeatherData(result);
      setLastFetchTime(Date.now());

      // Cache weather data
      localStorage.setItem("cachedWeatherData", JSON.stringify(result));
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchLocation();
  }, []);

  useEffect(() => {
    // Check if both lat and long have values
    if (lat !== null && long !== null) {
      // Check if cached weather data is available
      const cachedWeatherData = localStorage.getItem("cachedWeatherData");

      if (cachedWeatherData) {
        // Parse and set cached weather data
        setWeatherData(JSON.parse(cachedWeatherData));
        return;
      }

      // Check if it's time to make a new API call (e.g., 5 minutes)
      const shouldFetchData =
        !lastFetchTime || Date.now() - lastFetchTime >= 5 * 60 * 1000;

      if (shouldFetchData) {
        fetchWeatherData(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${apiKeys.weather}`
        );
      }
    }
  }, [lat, long, lastFetchTime]);

  return { weatherData, setWeatherData, fetchWeatherData, fetchLocation };
};

export default useWeatherData;