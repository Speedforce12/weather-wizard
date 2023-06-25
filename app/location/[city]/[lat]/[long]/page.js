import CurrentWeatherPanel from "@/app/components/CurrentWeatherPanel";
import React from "react";

const CityPage = ({ params: { lat, long, city } }) => {
  let City = decodeURIComponent(city);
  return (
    <div className='flex flex-col md:flex-row bg-blue-50 min-h-screen'>
      <CurrentWeatherPanel city={City} lat={lat} long={long} />
      <div className='flex flex-1 border'></div>
    </div>
  );
};

export default CityPage;
