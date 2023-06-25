"use client";

import Select from "react-select";
import { HiGlobe } from "react-icons/hi";
import { useEffect, useState } from "react";
import { Country, City } from "country-state-city";
import { useRouter } from "next/navigation";

const countries = Country.getAllCountries();
const CountryOptions = countries.map((country) => ({
  value: {
    longitude: country.longitude,
    latitude: country.latitude,
    isoCode: country.isoCode,
  },
  label: country.name,
}));

const CityPicker = () => {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [isMounted, setIsMounted] = useState(false)
  const router = useRouter();

  useEffect(() => setIsMounted(true), []);

  // gets the country from the drop down menu
  const handleCountry = (option) => {
    setCountry(option);
  };

  // push the city location to the weather page
  const handleState = (option) => {
    setCity(option);
    
    router.push(
      `/location/${encodeURIComponent(option.value.name)}/${option.value.latitude}/${option.value.longitude}`
    );
  };

  return  isMounted ? (
    <div className='space-y-4 p-3'>
      {/* select country */}
      <div className='space-y-1'>
        <label
          htmlFor=''
          className='flex items-center justify-start gap-x-2 text-white/80 font-bold '>
          <HiGlobe size={20} />
          Country
        </label>
        <Select
          className='text-black'
          options={CountryOptions}
          onChange={handleCountry}
          value={country}
        />
      </div>

      {/* city dropdown base on country selected */}
      {country && (
        <div className='space-y-1'>
          <label
            htmlFor=''
            className='flex items-center justify-start gap-x-2 text-white/80 font-bold'>
            <HiGlobe size={20} />
            State
          </label>
          <Select
            className='text-black'
            onChange={handleState}
            value={city}
            options={City.getCitiesOfCountry(country?.value?.isoCode).map(
              (city) => ({
                value: {
                  longitude: city.longitude,
                  latitude: city.latitude,
                  name: city.name,
                  countryCode: city.countryCode,
                  name: city.name
                },
                label: city.name,
              })
            )}
          />
        </div>
      )}
    </div>
  ) : null;
};

export default CityPicker;
