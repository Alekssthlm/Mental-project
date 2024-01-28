import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import AppContainer from "../components/AppContainer";
import Time from "../components/Time";
import CurrentDate from "../components/CurrentDate";
import useWeatherData from "../hooks/useWeatherData.js";

import settings_icon from "../assets/settings.png";
import clearday_icon from "../assets/clearday.png";

export default function SiteWrap() {
  const [path, setPath] = useState(window.location.pathname);
  const [title, setTitle] = useState();
  const { weatherData } = useWeatherData();

  useEffect(() => {
    switch (path) {
      case "/":
        setTitle("");
        break;
      case "/task-manager":
        setTitle("");
        break;
      case "/weather":
        setTitle("");
        break;
      default:
        setTitle("Error");
    }
  }, [path]);

  return (
    <div className="body">
      <header className="site-header">
        <Time />
        <CurrentDate />
        <div className="header-weather">
        {weatherData && weatherData.main && (
            <>
              <img className="header-weather-icon" src={clearday_icon} alt="" />
              <div className="temperature">{Math.round(weatherData.main.temp)} &deg;C</div>
            </>
          )}
        </div>
      </header>
      <div className="site-wrap">
        <div className="app-wrap">
          <Navbar setPath={setPath} />
          <AppContainer title={title} />
        </div>
      </div>
      <footer className="footer">
        <div className="todo">To Do</div>
        <p className="quote">"Quote of the day!"</p>
        <img className="settings-icon" src={settings_icon} alt=""></img>
      </footer>
    </div>
  );
}
