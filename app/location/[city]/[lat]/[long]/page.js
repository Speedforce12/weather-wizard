import CurrentWeatherPanel from "@/app/components/CurrentWeatherPanel";
import DailyWeatherCard from "@/app/components/DailyWeatherCard";
import Greeting from "@/app/components/Greeting";
import HourlyHumidityChart from "@/app/components/HourlyHumidityChart";
import HourlyRainChart from "@/app/components/HourlyRainChart";
import HourlyTempChart from "@/app/components/HourlyTempChart";

async function getWeather({ lat, long }) {
  const data = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,windgusts_10m,uv_index,uv_index_clear_sky&daily=weathercode,windspeed_10m_max,precipitation_probability_max,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max&current_weather=true&timezone=auto`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  return await data.json();
}

const CityPage = async ({ params: { lat, long, city } }) => {
  let City = decodeURIComponent(city);
  const weather = await getWeather({ lat, long });
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  console.log(weather);
  const dailyCards = [];

  for (let i = 1; i < 7; i++) {
    let day = weekdays[new Date(weather.daily.time[i]).getUTCDay()];
    dailyCards.push(
      <DailyWeatherCard
        key={i}
        day={day}
        weathercode={weather.daily.weathercode[i]}
        high={weather.daily.temperature_2m_max[i]}
        low={weather.daily.temperature_2m_min[i]}
        wind={weather.daily.windspeed_10m_max[i]}
        raining={weather.daily.precipitation_probability_max[i]}
      />
    );
  }

  return (
    <div className='flex flex-col lg:flex-row bg-blue-50 dark:bg-black min-h-screen'>
      <CurrentWeatherPanel city={City} lat={lat} long={long} />
      <div className='flex flex-1 flex-col  mx-5 sm:mx-10'>
        <Greeting />
        <div className='grid grid-cols-1 grid-flow-row md:grid-cols-3 xl:grid-cols-4 w-full mx-auto  gap-5 mb-5 mt-5 '>
          {dailyCards}
        </div>

        <div className='flex lg:flex-row flex-col my-5 gap-5'>
          <HourlyTempChart weather={weather} />
          <HourlyRainChart weather={weather} />
        </div>

        <HourlyHumidityChart weather={weather} />
      </div>
    </div>
  );
};

export default CityPage;
