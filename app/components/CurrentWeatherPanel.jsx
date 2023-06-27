import UserAvatar from "./UserAvatar";
import CityPicker from "./CityPicker";
import MainWeatherCard from "./MainWeatherCard";
import ThemeSwitch from "./ThemeSwitch";
import { WiSunrise, WiSunset } from "react-icons/wi";

const CurrentWeatherPanel = ({ city, long, lat }) => {
  // bg-gradient-to-br from-[#164f95] to-[#0b2251]
  return (
    <div className='w-full p-5 max-w-sm bg-gradient-to-br from-[#164f95] to-[#0b2251]'>
      <div className='flex items-center justify-between'>
        <ThemeSwitch />
        <UserAvatar />
      </div>
      <div className='bg-gradient-to-br border-[#226cc7] border from-[#164f95] to-[#0b2251] rounded-md p-3 items-start my-5 shadow-sm'>
        <h1 className='pl-3 md:text-5xl text-4xl  font-bold text-white'>
          {city}
        </h1>
        <div className='flex gap-x-2 text-gray-50 text-opacity-80 text-xs my-1  pl-3'>
          <p>Long:{long}</p>
          <p>Lat:{lat}</p>
        </div>
        <CityPicker />
      </div>

      <MainWeatherCard />

      <section className='bg-gradient-to-r my-5 shadow-md p-3 from-pink-300 to-pink-500 rounded-md space-y-4'>
        <div className='flex items-center justify-between'>
          <span className='flex items-center gap-2 font-bold text-white/80'>
            <WiSunrise size={35} className='text-white' /> Sunrise
          </span>
          <p className='font-semibold text-white'>1:50 am</p>
        </div>

        <div className='flex items-center justify-between'>
          <span className='flex items-center gap-2 font-bold text-white/80'>
            <WiSunset size={35} className='text-white' /> Sunset
          </span>
          <p className='font-semibold text-white'>5:50 pm</p>
        </div>
      </section>
    </div>
  );
};

export default CurrentWeatherPanel;
