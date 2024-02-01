import { useState } from "react"
import archipelago from "../assets/archipelago_3-wallpaper-3440x1440.jpg"
import cloud from "../assets/clearday.png"
import snow from "../assets/snow.png"


export default function useImages(){

const images = {
  archipelago,

}

function backgroundByTheme(darkmode){ //we need an image for the light mode
  switch (darkmode) {
    case true:
      return archipelago
    case false: 
      return cloud
  }
}

function backgroundByTime(time){  //here we insert the images for the different hours but we should import them
  console.log(time, 'time')

  if (time > 20 || time < 5) {
    console.log('over')
    return snow
  } else if (time > 15) {
    document.body.style.backgroundImage = "url(assets/evening.png";
  } else if (time > 9) {
    document.body.style.backgroundImage = "url(assets/day.png";
  } else {
    document.body.style.backgroundImage = "url(assets/morning.png";
  }
}

  function changeBackground(setting, darkmode, time){
    switch(setting){
      case 'theme':
        return backgroundByTheme(darkmode)
      case 'hour':
        return backgroundByTime(time)
    }
  }

  
return {images, changeBackground}
}