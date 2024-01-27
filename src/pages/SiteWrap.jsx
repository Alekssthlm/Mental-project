import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import AppContainer from "../components/AppContainer";
import Time from "../components/Time";

export default function SiteWrap() {
  const [path, setPath] = useState(window.location.pathname);
  const [title, setTitle] = useState();


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
        <div>weather</div>
      </header>
      <div className="site-wrap">
        <div className="app-wrap">
          <Navbar setPath={setPath} />
          <AppContainer title={title} />
        </div>
      </div>
      <footer className="footer">
        <p>"Quote of the day!"</p>
      </footer>
    </div>
  );
}
