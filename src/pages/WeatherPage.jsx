import React, { useState, useEffect } from "react";
import "./WeatherApp.css";
import Weather from "../components/Weather";
import apiKeys from "../config.js";
import useWeatherData from "../hooks/useWeatherData.js";

export default function WeatherPage() {
  const { weatherData, fetchWeatherData, updateLocation } = useWeatherData();

  return (
    <>
    {weatherData ? (
      <Weather weatherData={weatherData} fetchWeatherData={fetchWeatherData} updateLocation={updateLocation}/>
    ) : (
      <div>Loading...</div>
    )}
  </>
  );
}