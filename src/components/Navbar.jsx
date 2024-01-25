import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar({setPath}) {

  return (
    <div className="main-navbar">
      <ul className="nav-link-container">
        <li>
          <Link className="nav-links" to="/" onClick={() => setPath(()=> window.location.pathname)}>WELCOME</Link>
        </li>
        <li>
          <Link className="nav-links" to="/task-manager" onClick={() => setPath(()=> window.location.pathname)}>TASK MANAGER</Link>
        </li>
        <li>
          <Link className="nav-links" to="/weather" onClick={() => setPath(()=> window.location.pathname)}>WEATHER</Link>
        </li>
      </ul>
    </div>
  );
}
