import { Card, Title, AreaChart } from "@tremor/react";

const HourlyRainChart = ({ weather }) => {
  // Extract the relevant data from the JSON and create an array of objects
  const dataArray = weather.hourly.time
    .map((time) =>
      new Date(time).toLocaleString("en-US", {
        hour: "numeric",
        hour12: false,
      })
    )
    .slice(0, 24);

  const chartData = dataArray.map((hour, i) => ({
    hour: Number(hour),
    "Precipitation %": weather.hourly.precipitation_probability[i],
  }));

//   const dataFormatter = (number) => {`${number} °C`;}

  return (
    <div className='p-5 shadow-sm rounded-md  bg-white w-full'>
      <h3 className='text-black font-bold text-xl'>Chances of rain</h3>
      <AreaChart
        className='h-72 mt-4'
        data={chartData}
        index='hour'
        categories={["Precipitation %"]}
        colors={["fuchsia"]}
        minValue={0}
      />
    </div>
  );
};

export default HourlyRainChart;
