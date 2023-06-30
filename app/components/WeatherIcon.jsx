import Image from "next/image";
import React from "react";
import weatherCodes from "../libs/weatherCodes";

const WeatherIcon = ({weather}) => {
  const weatherIcon = weatherCodes[weather.weathercode].icon;

  return (
    <>
      <Image
        src={`https://www.weatherbit.io/static/img/icons/${weatherIcon}.png`}
        alt={weatherCodes[weather.weathercode].label}
        width={80}
        height={80}
      />
    </>
  );
};

export default WeatherIcon;
