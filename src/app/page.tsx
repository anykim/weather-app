'use client'

import React, { useState, useEffect } from 'react'
import { getMtvWeather, getVanWeather } from '@/utils/weather-api-helpers';
import { WeatherCard } from './WeatherCard';
import { WeatherData } from '@/utils/types';

export default function Home() {
  const [mtvWeatherData, setMtvWeatherData] = useState<WeatherData>();
  const [vanWeatherData, setVanWeatherData] = useState<WeatherData>();

  const _getMtvWeaterData = async () => {
    const mtvWeather = await getMtvWeather();
    const mtvData = {
      city: "Mountain View",
      currentTemp: mtvWeather?.currentConditions.temp,
      feelsLike: mtvWeather?.currentConditions.feelslike,
      conditions: mtvWeather?.currentConditions.conditions,
      humidity: mtvWeather?.currentConditions.humidity,
      precipProb: mtvWeather?.currentConditions.precipprob,
      sunrise: mtvWeather?.currentConditions.sunrise,
      sunset: mtvWeather?.currentConditions.sunset,
      uvIndex: mtvWeather?.currentConditions.uvindex,
      windSpeed: mtvWeather?.currentConditions.windspeed,
      windGust: mtvWeather?.currentConditions.temp,
    }
    setMtvWeatherData(mtvData);
  }

  const _getVanWeatherData = async () => {
    const vanWeather = await getVanWeather();
    const vanData = {
      city: "Vancouver",
      currentTemp: vanWeather?.currentConditions.temp,
      feelsLike: vanWeather?.currentConditions.feelslike,
      conditions: vanWeather?.currentConditions.conditions,
      humidity: vanWeather?.currentConditions.humidity,
      precipProb: vanWeather?.currentConditions.precipprob,
      sunrise: vanWeather?.currentConditions.sunrise,
      sunset: vanWeather?.currentConditions.sunset,
      uvIndex: vanWeather?.currentConditions.uvindex,
      windSpeed: vanWeather?.currentConditions.windspeed,
      windGust: vanWeather?.currentConditions.temp,
    };
    setVanWeatherData(vanData);
  }

  useEffect(() => {
    _getMtvWeaterData();
    _getVanWeatherData();
  }, []);
  
  return (
    <main>
      <div className="grid items-center gap-x-16 grid-cols-2 w-full h-screen px-28">
        {vanWeatherData && <WeatherCard weatherData={vanWeatherData}/>}
        {mtvWeatherData && <WeatherCard weatherData={mtvWeatherData}/>}
      </div>
    </main>
  )
}
