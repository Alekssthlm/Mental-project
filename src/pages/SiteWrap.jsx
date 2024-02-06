import Navbar from "../components/Navbar";
import AppContainer from "../components/AppContainer";
import Time from "../components/Time";
import CurrentDate from "../components/CurrentDate";
import Footer from "../components/Footer";
import settings_icon from "../assets/settings.png";
import TopWeather from "../components/TopWeather";

export default function SiteWrap() {

  return (
    <div className="body">
      <header className="site-header">
        <Time />
        <CurrentDate />
        <div className="header-weather">
          <TopWeather />
        </div>
      </header>
      <div className="site-wrap">
        <div className="app-wrap">
          <Navbar />
          <AppContainer />
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
