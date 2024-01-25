import { Link } from "react-router-dom";

export default function Navbar({setTitle}) {
  return (
    <div className="main-navbar">
      <ul className="nav-link-container">
        <li>
          <Link className="nav-links" to="/" onClick={() => setTitle(()=>"WELCOME")}>WELCOME</Link>
        </li>
        <li>
          <Link className="nav-links" to="/task-manager" onClick={() => setTitle(()=>"TASK MANAGER")}>TASK MANAGER</Link>
        </li>
        <li>
          <Link className="nav-links" to="/weather" onClick={() => setTitle(()=>"WEATHER")}>WEATHER</Link>
        </li>
        <li>
          <Link className="nav-links" to="/calendar" onClick={() => setTitle(()=>"CALENDAR")}>CALENDAR</Link>
        </li>
      </ul>
    </div>
  );
}
