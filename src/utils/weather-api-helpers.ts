export const mtvWeather = async () => {
    const response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/mountain%20view?unitGroup=us&key=QY2DRNRWQTJAP2TGYS2ZZT8SR&contentType=json");
    const mtvWeatherData = await response.json();
    console.log(mtvWeatherData);
  };

export const vanWeather = async () => {
    const response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/vancouver?unitGroup=us&key=QY2DRNRWQTJAP2TGYS2ZZT8SR&contentType=json");
    const vanWeatherData = await response.json();
    console.log(vanWeatherData);
  };