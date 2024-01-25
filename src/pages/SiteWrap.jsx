import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import AppContainer from "../components/AppContainer";

export default function SiteWrap() {
  const [title, setTitle] = useState(() => {
    switch (window.location.pathname){
      case "/":
        return "WELCOME";
      case "/task-manager":
        return "TASK MANAGER";
      case "/weather":
        return "WEATHER";
      default:
        return "ERROR";
    }
  });

  return (
    <div className="body">
      <header className="site-header">
        <div>12:50</div>
        <div>weather</div>
      </header>
      <div className="site-wrap">
        <div className="app-wrap">
          <Navbar setTitle={setTitle} />
          <AppContainer title={title} />
        </div>
      </div>
      <footer className="footer">
        <p>"Quote of the day!"</p>
      </footer>
    </div>
  );
}
