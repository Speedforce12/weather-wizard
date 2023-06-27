"use client";

import React, { useEffect, useState } from "react";
import { BiSun } from "react-icons/bi";
import { TbSunLow } from "react-icons/tb";
import { BsCloudMoon } from "react-icons/bs";

const Greeting = () => {
  const [date, setDate] = useState(new Date());
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  const getGreeting = () => {
    const hours = new Date().getHours();
    let message = "";

    if (hours < 12)
      message = (
        <div className='flex place-items-center gap-2 md:text-2xl text-xl font-semibold text-blue-500'>
          <BiSun size={30} className='text-orange-500' /> Good morning
        </div>
      );
    else if (hours >= 12 && hours <= 17)
      message = (
        <div className='flex place-items-center gap-2 md:text-2xl text-xl font-semibold text-blue-500'>
          <TbSunLow size={30} className='text-orange-300' /> Good afternoon
        </div>
      );
    else if (hours >= 17 && hours <= 24)
      message = (
        <div className='flex place-items-center gap-2 md:text-2xl text-xl font-semibold text-blue-500'>
          <BsCloudMoon size={30} className='text-blue-500' /> Good evening
        </div>
      );

    return message;
  };

  return mount ? (
    <div className='flex flex-col space-y-2 my-4 w-full'>
      <h2 className='md:text-5xl text-4xl  text-blue-500 font-semibold tracking-tight'>
        {date.toLocaleTimeString()}
      </h2>
      <p className='text-base text-gray-500 font-medium'>
        {" "}
        {date.toDateString()}
      </p>

      <div>{getGreeting()}</div>
    </div>
  ) : null;
};

export default Greeting;
