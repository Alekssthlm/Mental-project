import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export default function AppContainer({title}){

  return (
    <div className="app-container">
      <div>
        <h1 className="app-title">{title}</h1>
      </div>
      <Outlet />
    </div>
  )
}