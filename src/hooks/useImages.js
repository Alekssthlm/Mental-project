const IMAGES_BY_HOUR = {
  h1: "../public/background-images/1.jpg",
  h2: "../public/background-images/2.jpg",
  h3: "../public/background-images/3.jpg",
  h4: "../public/background-images/4.jpg",
  h5: "../public/background-images/5.jpg",
  h6: "../public/background-images/6.jpg",
  h7: "../public/background-images/7.jpg",
  h8: "../public/background-images/8.jpg",
  h9: "../public/background-images/9.jpg",
  h10: "../public/background-images/10.jpg",
  h11: "../public/background-images/11.jpg",
  h12: "../public/background-images/12.jpg",
  h13: "../public/background-images/13.jpg",
  h14: "../public/background-images/14.jpg",
  h15: "../public/background-images/15.jpg",
  h16: "../public/background-images/16.jpg",
  h17: "../public/background-images/17.jpg",
  h18: "../public/background-images/18.jpg",
  h19: "../public/background-images/19.jpg",
  h20: "../public/background-images/20.jpg",
  h21: "../public/background-images/21.jpg",
  h22: "../public/background-images/22.jpg",
  h23: "../public/background-images/23.jpg",
  h24: "../public/background-images/24.jpg",
};

export default function useImages() {
  function backgroundByTheme(darkmode) {
    //handle images for dark/light mode
    switch (darkmode) {
      case true:
        return IMAGES_BY_HOUR.h24;
      case false:
        return IMAGES_BY_HOUR.h12;
    }
  }

  function backgroundByTime(time) {
    //here we insert the images for the different hours

    switch (time) {
      case 1:
        return IMAGES_BY_HOUR.h1;
      case 2:
        return IMAGES_BY_HOUR.h2;
      case 3:
        return IMAGES_BY_HOUR.h3;
      case 4:
        return IMAGES_BY_HOUR.h4;
      case 5:
        return IMAGES_BY_HOUR.h5;
      case 6:
        return IMAGES_BY_HOUR.h6;
      case 7:
        return IMAGES_BY_HOUR.h7;
      case 8:
        return IMAGES_BY_HOUR.h8;
      case 9:
        return IMAGES_BY_HOUR.h9;
      case 10:
        return IMAGES_BY_HOUR.h10;
      case 11:
        return IMAGES_BY_HOUR.h11;
      case 12:
        return IMAGES_BY_HOUR.h12;
      case 13:
        return IMAGES_BY_HOUR.h13;
      case 14:
        return IMAGES_BY_HOUR.h14;
      case 15:
        return IMAGES_BY_HOUR.h15;
      case 16:
        return IMAGES_BY_HOUR.h16;
      case 17:
        return IMAGES_BY_HOUR.h17;
      case 18:
        return IMAGES_BY_HOUR.h18;
      case 19:
        return IMAGES_BY_HOUR.h19;
      case 20:
        return IMAGES_BY_HOUR.h20;
      case 21:
        return IMAGES_BY_HOUR.h21;
      case 22:
        return IMAGES_BY_HOUR.h22;
      case 23:
        return IMAGES_BY_HOUR.h23;
      case 0:
        return IMAGES_BY_HOUR.h24;
    }
  }

  function changeBackground(setting, darkmode, time) { //handles background image for site by theme or hour of day
    switch (setting) { 
      case "theme":
        return backgroundByTheme(darkmode);
      case "hour":
        return backgroundByTime(time);
    }
  }

  return { changeBackground };
}
