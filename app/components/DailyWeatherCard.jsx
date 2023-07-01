import React from "react";
import { TiWeatherWindy } from "react-icons/ti";
import weatherCodes from "../libs/weatherCodes";
import Image from "next/image";
import { BsUmbrella } from "react-icons/bs";

const DailyWeatherCard = ({ day, weathercode, high, low, wind, raining }) => {
  const weatherIcon = weatherCodes[weathercode].icon;
  return (
    <div className='shadow-sm max-w-sm w-full rounded-lg border border-rose-300 p-4 space-y-5  hover:scale-105 transition-transform duration-200 ease-in-out cursor-pointer dark:border-neutral-100 dark:shadow-rose-200 dark:shadow-sm'>
      <div className='flex items-center justify-between'>
        <div>
          <span className='font-bold text-lg text-gray-600 dark:text-white'>{day}</span>
          <p className='font-medium text-gray-400 dark:text-neutral-400'>
            {weatherCodes[weathercode].label}
          </p>
        </div>
        <Image
          src={`https://www.weatherbit.io/static/img/icons/${weatherIcon}.png`}
          alt={weatherCodes[weathercode].label}
          width={65}
          height={65}
        />
      </div>

      <div className='flex items-center justify-between'>
        <div className='flex flex-col'>
          <div className='flex items-center justify-center gap-3'>
            <TiWeatherWindy size={25} />
            <span className='font-medium text-sm text-gray-500 dark:text-neutral-300'>
              {wind}km/h
            </span>
          </div>

          <div className='flex items-center justify-center gap-3 w-16'>
            <BsUmbrella size={22} className='fill-rose-400 mr-auto' />
            <span className='font-medium text-sm text-gray-500 dark:text-neutral-300'>
              {raining}%
            </span>
          </div>
        </div>
        <p className='font-bold text-gray-600 text-lg dark:text-neutral-300'>{high}&deg;C</p>
      </div>
    </div>
  );
};

export default DailyWeatherCard;
