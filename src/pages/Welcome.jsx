import { useEffect } from "react"
import useTime from "../hooks/useTime"

export default function Welcome(){
  const {time} = useTime()

  useEffect(()=>{
    let element = document.querySelector("#welcome-page")
    let appContainer = element.parentElement
    appContainer.style.backgroundColor = "transparent"
    console.log(element.parentElement)

    return () => {
      appContainer.style.backgroundColor = "rgba(0, 0, 0, 0.664)";
    }
  })

  return (
    <div id="welcome-page">
      <div className="time-welcome-page">
      {time}
      </div>
    </div>
  )
}