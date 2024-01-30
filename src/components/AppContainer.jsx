import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "../pages/SiteWrap";

export default function AppContainer(){
  const {isDarkMode, toggleTheme} = useContext(ThemeContext)

  return (
    <div className= {isDarkMode ? "app-container" : "app-container app-container-lightmode"}>
      <Outlet />
    </div>
  )
}