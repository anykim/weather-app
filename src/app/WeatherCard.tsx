import { WeatherData } from "@/utils/types" 

interface WeatherCardProps {
    weatherData: WeatherData;
}

export const WeatherCard = ({ weatherData }: WeatherCardProps ) => {
    return(
        <div className="flex w-full h-5/6 bg-primary rounded-xl shadow border p-0 m-0"></div>
    )
}