import clearDay from "../../public/assets/clearDay.jpg";
import clearNight from "../../public/assets/clearNight.jpg";
import dayCloud from "../../public/assets/dayCloud.jpg";
import dayFog from "../../public/assets/dayFog.jpg";
import dayRain from "../../public/assets/dayRain.jpg";
import daySnow from "../../public/assets/daySnow.jpg";
import dayThunder from "../../public/assets/dayThunder.jpg";
import nightCloudy from "../../public/assets/nightCloudy.jpg";
import nightRain from "../../public/assets/nightRain.jpg";
import nightSnow from "../../public/assets/nightSnow.jpg";
import nightThunder from "../../public/assets/nightThunder.jpg";

export function getBackground(isDay, description) {
    let bgImg = null;
    console.log(description, isDay)
  if (isDay === 1) {
    switch (description) {
      case "Clear Sky":
        bgImg = clearDay;
        break;

      case "Mostly Clear":
      case "Partly Cloudy":
      case "Cloudy":
      case "Overcast":
        bgImg = dayCloud;
        break;

      case "Fog":
        bgImg = dayFog;
        break;

      case "Drizzle":
      case "Slight Rain":
      case "Moderate Rain":
      case "Light Rain":
      case "Light Showers":
      case "Moderate Showers":
        bgImg = dayRain;
        break;

      case "Heavy Rain":
      case "Heavy Showers":
            bgImg = dayThunder;
            break;

      case "Light snow":
      case "Light Snow Showers":
      case "Snowing":
      case "Heavy Snow":
      case "Heavy Snow Showers":
        bgImg = daySnow;
        break;

      default:
        bgImg = clearDay;
        break;
    }
  } else {
    switch (description) {
      case "Clear Sky":
        bgImg = clearNight;
        break;

      case "Mostly Clear":
      case "Partly Cloudy":
      case "Cloudy":
        bgImg = nightCloudy;
        break;

      case "Fog":
        bgImg = dayFog;
        break;

      case "Drizzle":
      case "Slight Rain":
      case "Moderate Rain":
      case "Light Rain":
      case "Light Showers":
      case "Moderate Showers":
        bgImg = nightRain;
        break;

      case "Heavy Rain":
      case "Heavy Showers":
        bgImg = nightThunder;
        break;

      case "Light snow":
      case "Light Snow Showers":
      case "Snowing":
      case "Heavy Snow":
      case "Heavy Snow Showers":
        bgImg = nightSnow;
        break;

      default:
        bgImg = clearDay;
        break;
    }
  }

  return bgImg;
}
