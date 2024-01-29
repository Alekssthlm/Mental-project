import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import AppContainer from "../components/AppContainer";
import Footer from "../components/Footer";

export default function SiteWrap() {
  const [path, setPath] = useState(window.location.pathname);
  const [title, setTitle] = useState();

  useEffect(() => {
    switch (path) {
      case "/":
        setTitle("WELCOME");
        break;
      case "/task-manager":
        setTitle("TASK MANAGER");
        break;
      case "/weather":
        setTitle("WEATHER");
        break;
      default:
        setTitle("Error");
    }
  }, [path]);

  return (
    <div className="body">
      <header className="site-header">
        <div>12:50</div>
        <div>weather</div>
      </header>
      <div className="site-wrap">
        <div className="app-wrap">
          <Navbar setPath={setPath} />
          <AppContainer title={title} />
        </div>
      </div>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}
