import moment from "moment/moment";
import { RiWindyFill } from "react-icons/ri";
import weatherCodes from "../libs/weatherCodes";
import Image from "next/image";
import WeatherIcon from "./WeatherIcon";

const MainWeatherCard = ({ currentWeather }) => {
  // const weatherIcon = weatherCodes[currentWeather.weathercode].icon;
  return (
    <section className='rounded-md bg-gradient-to-tr border border-blue-400 shadow-md from-blue-600 p-3 to-blue-300 flex flex-col items-center justify-center py-7'>
      <div className='flex items-center flex-col space-y-2'>
        <WeatherIcon weather={currentWeather} />
        <h2 className='text-white text-sm font-medium'>
          {moment(currentWeather.time).format("MMMM D, YYYY")}
        </h2>
        <h1 className='text-5xl font-bold text-white'>
          {Math.round(currentWeather.temperature)}&deg;C
        </h1>
      </div>

      <div className='flex flex-col mt-3'>
        <span className='my-3 text-white font-semibold text-base text-center'>
          {weatherCodes[currentWeather.weathercode].label}
        </span>
        <div className='flex divide-x divide-solid divide-white text-white font-medium text-sm'>
          <span className='flex items-center justify-center pr-2'>
            <RiWindyFill size={20} /> Wind
          </span>
          <p className='pl-2'>{currentWeather.windspeed} km/h</p>
        </div>
      </div>
    </section>
  );
};

export default MainWeatherCard;
