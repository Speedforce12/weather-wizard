import CurrentWeatherPanel from "@/app/components/CurrentWeatherPanel";
import DailyWeatherCard from "@/app/components/DailyWeatherCard";
import Greeting from "@/app/components/Greeting";
import React from "react";

const CityPage = ({ params: { lat, long, city } }) => {
  let City = decodeURIComponent(city);
  return (
    <div className='flex flex-col md:flex-row bg-blue-50 min-h-screen'>
      <CurrentWeatherPanel city={City} lat={lat} long={long} />
      <div className='flex flex-1 flex-col  mx-2 sm:mx-8'>
        <Greeting />
        <div className='grid grid-cols-1 grid-flow-row md:grid-cols-3 xl:grid-cols-5 w-full mx-auto  gap-4'>
          <DailyWeatherCard />
          <DailyWeatherCard />
          <DailyWeatherCard />
          <DailyWeatherCard />
          <DailyWeatherCard />
        </div>
      </div>
    </div>
  );
};

export default CityPage;
