import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import AppContainer from "../components/AppContainer";

import Time from "../components/Time";
import CurrentDate from "../components/CurrentDate";
import useWeatherData from "../hooks/useWeatherData.js";
import Footer from "../components/Footer";

import settings_icon from "../assets/settings.png";
import clearday_icon from "../assets/clearday.png";

export default function SiteWrap() {
  const { weatherData } = useWeatherData();
  const [title, setTitle] = useState(() => {
    switch (window.location.pathname){
      case "/":
        return "WELCOME";
      case "/task-manager":
        return "TASK MANAGER";
      case "/weather":
        return "WEATHER";
        case "/calendar":
          return "CALENDAR";
      default:
        return "ERROR";
    }
  });

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
          <Navbar setTitle={setTitle} />
          <AppContainer title={title} />
        </div>
      </div>
      <footer className="footer">
        <div className="todo">To Do</div>
        <Footer />
        <img className="settings-icon" src={settings_icon} alt=""></img>
      </footer>
    </div>
  );
}
