import { WeatherData } from "@/utils/types" 

interface WeatherCardProps {
    weatherData: WeatherData;
}

export const WeatherCard = ({ weatherData }: WeatherCardProps ) => {
    return(
            <div className="w-full h-auto bg-primary rounded-xl shadow border p-0 m-0">
                <div className="flex flex-col flex-wrap items-center">
                    <p className="text-4xl font-semibold text-cyan-400 pt-14">{weatherData.city}</p>
                    <p className="text-xl text-cyan-200 pt-16 pb-5">Current Conditions:</p>
                    <p className="text-2xl text-white">{weatherData.currentTemp} {'\u00b0'}F</p>
                    <p className="text-2xl text-white">{weatherData.conditions}</p>
                </div>
                <div className="flex flex-row flex-wrap justify-center pt-14">
                    <p className="text-xl text-cyan-200">Feels like: </p>
                    <p className="text-xl text-white pl-5">{weatherData.feelsLike} {'\u00b0'}F</p>
                </div >
                <div className="flex flex-row flex-wrap justify-center pt-20">
                    <p className="text-lg text-cyan-200">Precipitation %: </p>
                    <p className="text-lg text-white pl-5">{weatherData.precipProb} %</p>
                    <p className="text-lg text-cyan-200 pl-16">UV Index: </p>
                    <p className="text-lg text-white pl-5">{weatherData.uvIndex}</p>
                </div>
                <div className="flex flex-row flex-wrap justify-center pt-20">
                    <p className="text-lg text-cyan-200">Sunrise: </p>
                    <p className="text-lg text-white pl-5">{weatherData.sunrise.slice(0,5)} AM</p>
                    <p className="text-lg text-cyan-200 pl-16">Sunset: </p>
                    <p className="text-lg text-white pl-5 pb-20">{weatherData.sunset.slice(0,5)} PM</p>
                </div>
            </div>              
        
    )
}