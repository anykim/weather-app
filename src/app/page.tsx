'use client'

import React, { useState, useEffect } from 'react'
import { getMtvWeather, getVanWeather } from '@/utils/weather-api-helpers';

export default function Home() {
  const [mtvWeatherData, setMtvWeatherData] = useState<any>();
  const [vanWeatherData, setVanWeatherData] = useState<any>();

  const _getMtvWeaterData = async () => {
    const mtvWeather = await getMtvWeather();
    const mtvData = {
      currentTemp: mtvWeather?.currentConditions.temp,
      feelsLike: mtvWeather?.currentConditions.feelslike,
      conditions: mtvWeather?.currentConditions.conditions,
      humidity: mtvWeather?.currentConditions.humidity,
      precipProb: mtvWeather?.currentConditions.precipProb,
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
      currentTemp: vanWeather?.currentConditions.temp,
      feelsLike: vanWeather?.currentConditions.feelslike,
      conditions: vanWeather?.currentConditions.conditions,
      humidity: vanWeather?.currentConditions.humidity,
      precipProb: vanWeather?.currentConditions.precipProb,
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
    _getVanWeatherData()
  }, []);
  
  return (
    <main>
      <div>
        <p>{vanWeatherData?.currentTemp}</p>
        <p>{mtvWeatherData?.currentTemp}</p>
      </div>
    </main>
  )
}
