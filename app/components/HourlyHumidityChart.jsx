import { AreaChart } from "@tremor/react";


const HourlyHumidityChart = ({weather}) => {
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
    "Humidity %": weather.hourly.relativehumidity_2m[i],
  }));

  return (
    <div className='p-5 shadow-sm rounded-md  bg-white w-full mb-5'>
      <h3 className='text-black font-bold text-xl'>Hourly Humidity Forecast</h3>
      <AreaChart
        className='mt-6'
        data={chartData}
        index='year'
        categories={["Humidity %"]}
        colors={["teal"]}
        yAxisWidth={40}
      />
    </div>
  );
};

export default HourlyHumidityChart;
