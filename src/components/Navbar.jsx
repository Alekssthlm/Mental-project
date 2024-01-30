import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../pages/SiteWrap";

export default function Navbar() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext)

  return (
    <div className="main-navbar">
      <ul className="nav-link-container">
        <li>
          <Link className="nav-links" to="/" >Welcome</Link>
        </li>
        <li>
          <Link className="nav-links" to="/task-manager" >Tasks</Link>
        </li>
        <li>
          <Link className="nav-links" to="/weather" >Weather</Link>
        </li>
        <li>
          <Link className="nav-links" to="/calendar" >Calendar</Link>
        </li>
      </ul>
          <button className={isDarkMode ? "toggle-theme-btn  toggle-theme-btn-light" : "toggle-theme-btn"} onClick={toggleTheme}>{isDarkMode ? <i class="fa-solid fa-sun" style={{color: 'yellow'}}></i> : <i class="fa-solid fa-moon"></i>}</button>
        
    </div>
  );
}
