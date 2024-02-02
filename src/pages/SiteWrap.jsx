import { createContext, useState } from "react";
import Navbar from "../components/Navbar";
import AppContainer from "../components/AppContainer";

import CurrentDate from "../components/CurrentDate";
import useWeatherData from "../hooks/useWeatherData.js";
import Footer from "../components/Footer";

import settings_icon from "../assets/settings.png";
import clearday_icon from "../assets/clearday.png";
import useLocalStorage from "../hooks/useLocalStorage.js";
import useTime from "../hooks/useTime.js";
import useImages from "../hooks/useImages.js";

export const ThemeContext = createContext();

export default function SiteWrap() {
  const { time, hour } = useTime();
  const { weatherData } = useWeatherData();
  const { images, changeBackground } = useImages();
  const [isDarkMode, setIsDarkMode] = useLocalStorage("DARKMODE", true);
  const [showMenu, setShowMenu] = useState(false)
  const [backgroundSetting, setBackgroundSetting] = useLocalStorage("BACKGROUND-SETTING", 'theme')


  function toggleTheme() {
    setIsDarkMode((d) => !d);
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <div
        className="body"
        style={{ backgroundImage: `url(${changeBackground(backgroundSetting, isDarkMode, hour)})` }}
      >
        <header className="site-header">
          <div className="site-header-menu-wrap">
          <div className="fa-solid fa-bars menu-btn" onClick={() => {setShowMenu(!showMenu)}}>
          <div className={showMenu ? "settings" : "settings hide-settings"}>
              <p>Change background:</p>
              <div className="settings-group">
                <div className="setting-option">
                  <input
                    type="radio"
                    name="background-settings"
                    id="theme"
                    value="theme"
                    checked={backgroundSetting === 'theme'}
                    onChange={(e)=>{setBackgroundSetting(e.target.value)}}
                  />
                  <label htmlFor="theme">By theme</label>
                </div>
                <div className="setting-option">
                  <input
                    type="radio"
                    name="background-settings"
                    id="hour"
                    value="hour"
                    checked={backgroundSetting === 'hour'}
                    onChange={(e)=>{setBackgroundSetting(e.target.value)}}

                  />
                  <label htmlFor="hour">By time of day</label>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="site-header-widget-wrap">
          <div>{time}</div>
          <CurrentDate />
          <div className="header-weather">
            {weatherData && weatherData.main && (
              <>
                <img
                  className="header-weather-icon"
                  src={clearday_icon}
                  alt=""
                />
                <div className="temperature">
                  {Math.round(weatherData.main.temp)} &deg;C
                </div>
              </>
            )}
          </div>
          </div>
        </header>
        <div className="site-wrap">
          <div className="app-wrap">
            <Navbar />
            <AppContainer />
          </div>
        </div>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </ThemeContext.Provider>
  );
}
