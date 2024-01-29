import { Link } from "react-router-dom";

export default function Navbar() {
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
    </div>
  );
}
