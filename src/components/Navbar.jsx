import { Link } from "react-router-dom";

export default function Navbar({setTitle}) {
  return (
    <div className="main-navbar">
      <ul className="nav-link-container">
        <li>
          <Link className="nav-links" to="/" onClick={() => setPath(()=> window.location.pathname)}>Welcome</Link>
        </li>
        <li>
          <Link className="nav-links" to="/task-manager" onClick={() => setPath(()=> window.location.pathname)}>Tasks</Link>
        </li>
        <li>
          <Link className="nav-links" to="/weather" onClick={() => setPath(()=> window.location.pathname)}>Weather</Link>
        </li>
      </ul>
    </div>
  );
}
