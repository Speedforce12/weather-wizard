import CurrentWeatherPanel from "@/app/components/CurrentWeatherPanel";
import DailyWeatherCard from "@/app/components/DailyWeatherCard";
import Greeting from "@/app/components/Greeting";

async function getWeather({lat, long}) {
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

const CityPage = async ({ params: { lat, long, city } }) => {
  let City = decodeURIComponent(city);
  const weather = await getWeather({lat, long});
  console.log(weather);

  return (
    <div className='flex flex-col lg:flex-row bg-blue-50 min-h-screen'>
      <CurrentWeatherPanel
        city={City}
        lat={lat}
        long={long}
      />
      <div className='flex flex-1 flex-col  mx-5 sm:mx-10'>
        <Greeting />
        <div className='grid grid-cols-1 grid-flow-row md:grid-cols-3 xl:grid-cols-5 w-full mx-auto  gap-5 mb-5 mt-5 '>
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
