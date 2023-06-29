import React from "react";
import { WiDayCloudy } from "react-icons/wi";
import {TiWeatherWindy} from "react-icons/ti"

const DailyWeatherCard = () => {
  return (
    <div className='shadow-sm max-w-sm w-full rounded-lg border border-rose-400 p-4 space-y-5  hover:scale-105 transition-transform duration-200 ease-in-out cursor-pointer'>
      <div className='flex items-center justify-between'>
        <div>
          <span className='font-bold text-lg text-gray-600'>Saturday</span>
          <p className='font-medium text-gray-400'>Partly Cloudy</p>
        </div>
        <WiDayCloudy size={50} />
      </div>

      <div className='flex items-center justify-between'>
        <div className='flex flex-col'>
          <div className='flex items-center justify-center gap-3'>
            <TiWeatherWindy size={25} />
            <span className='font-medium text-sm text-gray-500'>10.3km/h</span>
          </div>

          <div className='flex items-center justify-center gap-3'>
            <TiWeatherWindy size={25} />
            <span className='font-medium text-sm text-gray-500'>10.3km/h</span>
          </div>
        </div>
        <WiDayCloudy size={50} />
      </div>
    </div>
  );
};

export default DailyWeatherCard;
