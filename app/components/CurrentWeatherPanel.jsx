import UserAvatar from "./UserAvatar";
import CityPicker from "./CityPicker";
import MainWeatherCard from "./MainWeatherCard";
import ThemeSwitch from "./ThemeSwitch";
import { WiSunrise, WiSunset } from "react-icons/wi";

async function getWeather({ lat, long }) {
  const data = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,windgusts_10m,uv_index,uv_index_clear_sky&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max&current_weather=true&timezone=auto`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  return await data.json();
}

const CurrentWeatherPanel = async ({ city, long, lat }) => {
  const weather = await getWeather({ lat, long });

  return (
    <div className='w-full p-5 lg:max-w-sm bg-gradient-to-br from-[#164f95] to-[#0b2251]'>
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

      <MainWeatherCard currentWeather={weather.current_weather} />

      <section className='bg-gradient-to-r my-5 shadow-md p-3 from-pink-300 to-pink-500 rounded-md space-y-4'>
        <div className='flex items-center justify-between'>
          <span className='flex items-center gap-2 font-bold text-white/80'>
            <WiSunrise size={35} className='text-white' /> Sunrise
          </span>
          <p className='font-semibold text-white'>
            {new Date(weather.daily.sunrise[0]).toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}
          </p>
        </div>

        <div className='flex items-center justify-between'>
          <span className='flex items-center gap-2 font-bold text-white/80'>
            <WiSunset size={35} className='text-white' /> Sunset
          </span>
          <p className='font-semibold text-white'>
            {new Date(weather.daily.sunset[0]).toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}
          </p>
        </div>
      </section>
    </div>
  );
};

export default CurrentWeatherPanel;
