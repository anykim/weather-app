'use client'
import React, { useState, useEffect } from 'react'
import { mtvWeather, vanWeather } from '@/utils/weather-api-helpers';


export default function Home() {

  useEffect(() => {
    mtvWeather()
    vanWeather()
  }, []);

//   return (
//     <main>    </main>
//   )
}
