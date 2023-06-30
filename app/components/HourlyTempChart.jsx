import { Card, Title, AreaChart } from "@tremor/react";

const HourlyTempChart = ({ weather }) => {
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
    "Temperature °C": weather.hourly.temperature_2m[i],
    "UV Index": weather.hourly.uv_index[i],
  }));

//   const dataFormatter = (number) => {`${number} °C`;}

  return (
    <div className='p-5 shadow-sm rounded-md w-1/2 bg-white'>
      <h3 className='text-black font-bold text-xl'>Temperature & UV Index</h3>
      <AreaChart
        className='h-72 mt-4'
        data={chartData}
        index='hour'
        categories={["Temperature °C", "UV Index"]}
        colors={["indigo", "cyan"]}
        minValue={0}
      />
    </div>
  );
};

export default HourlyTempChart;
