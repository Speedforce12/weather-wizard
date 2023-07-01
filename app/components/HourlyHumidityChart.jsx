import { AreaChart, Card, Title } from "@tremor/react";


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
    <Card>
      <Title>Hourly Humidity Forecast</Title>
      <AreaChart
        className='mt-6'
        data={chartData}
        index='year'
        categories={["Humidity %"]}
        colors={["teal"]}
        yAxisWidth={40}
      />
    </Card>
  );
};

export default HourlyHumidityChart;
