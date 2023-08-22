export const getMtvWeather = async () => {
    const response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/mountain%20view?unitGroup=us&key=QY2DRNRWQTJAP2TGYS2ZZT8SR&contentType=json");
    const mtvWeatherData = await response.json();
    console.log(mtvWeatherData);
    return mtvWeatherData
  };

export const getVanWeather = async () => {
    const response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/vancouver?unitGroup=us&key=QY2DRNRWQTJAP2TGYS2ZZT8SR&contentType=json");
    const vanWeatherData = await response.json();
    console.log(vanWeatherData);
    return vanWeatherData
  };