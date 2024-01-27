import React, { useState, useEffect, useRef } from "react";
import "./WeatherApp.css";
import Weather from "../components/Weather";

export default function WeatherPage() {
  let api_key = "aaf1e04e50f0f451f7db8aa0f763a0aa";

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
  const [apiURL, setApiURL] = useState("");

  useEffect(() => {
    const fetchLocation = async () => {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      const { latitude, longitude } = position.coords;
      setLat(latitude);
      setLong(longitude);
      const initialUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${api_key}`;
      setApiURL(initialUrl);
    };

    fetchLocation();
  }, [lat, long]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(apiURL);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, [apiURL]);

  return (
    <>
      {typeof data.main != "undefined" ? (
        <Weather weatherData={data} setApiURL={setApiURL} currentLocation={setLat} />
      ) : (
        <div></div>
      )}
    </>
  );
}
