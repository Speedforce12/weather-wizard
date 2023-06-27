import { IoThunderstormOutline } from "react-icons/io5"
import { RiWindyFill } from "react-icons/ri"
import {WiHumidity} from "react-icons/wi"

const MainWeatherCard = () => {
  return (
    <section className='rounded-md bg-gradient-to-tr border border-blue-400 shadow-md from-blue-600 p-3 to-blue-300 flex flex-col items-center justify-center py-7'>
      <div className='flex items-center flex-col space-y-2'>
        <IoThunderstormOutline size={70} className='text-white' />
        <h2 className='text-white text-sm font-medium'>6/24/2023</h2>
        <h1 className='text-5xl font-bold text-white'>29&deg;C</h1>
      </div>

      <div className='flex flex-col mt-3'>
        <span className='my-3 text-white font-semibold text-base'>ThunderStorm</span>
        <div className='flex divide-x divide-solid divide-white text-white font-medium text-sm'>
          <span className='flex items-center justify-center pr-2'>
            <RiWindyFill size={20} /> Wind
          </span>
                  <p className='pl-2'>19 km/h</p>
                  
        </div>
        <div className='flex divide-x divide-solid divide-white text-white font-medium text-sm mt-3'>
          <span className='flex items-center justify-center pr-2'>
            <WiHumidity size={20} /> Wind
          </span>
          <p className='pl-2'>22 %</p>
        </div>
      </div>
    </section>
  );
}

export default MainWeatherCard