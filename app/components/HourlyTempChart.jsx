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
    <Card>
      <Title>Temperature & UV Index</Title>
      <AreaChart
        className='h-72 mt-4'
        data={chartData}
        index='hour'
        categories={["Temperature °C", "UV Index"]}
        colors={["indigo", "cyan"]}
        minValue={0}
      />
    </Card>
  );
};

export default HourlyTempChart;
