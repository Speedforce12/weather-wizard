import CityPicker from "./components/CityPicker";

export default function Home() {
  return (
    <main className='bg-gradient-to-br from-sky-400 to-blue-500 min-h-screen flex items-center justify-center px-4'>
      <div className='max-w-3xl mx-auto bg-white rounded-lg shadow-md p-5 w-full'>
        <div className='flex flex-col items-center justify-center space-y-1'>
          <h1 className='md:text-6xl font-semibold text-gray-700 capitalize antialiased text-4xl'>
            Weather Wizard
          </h1>
          <p className='font-medium text-sm text-gray-500 italic whitespace-nowrap'>
            Stay Ahead of the Storms with WeatherWizard
          </p>
        </div>

        <hr className='my-3 border-gray-200' />

        <div className='rounded-lg bg-gradient-to-br from-sky-500 to-blue-600'>
          <CityPicker/>
        </div>
      </div>
    </main>
  );
}
