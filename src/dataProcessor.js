export const processedData = (rawData) => {
  return {
    location: rawData.resolvedAddress,
    current: {
      temp: rawData.currentConditions.temp,
      feelsLike: rawData.currentConditions.feelslike,
      time: rawData.currentConditions.datetime,
      date: rawData.days[0].datetime,
      conditions: rawData.currentConditions.conditions,
      humidity: rawData.currentConditions.humidity,
      wind: rawData.currentConditions.windspeed,
      visibility: rawData.currentConditions.visibility,
      icon: rawData.currentConditions.icon,
    },
    forecast: rawData.days.slice(1, 5).map((day) => ({
      temp: day.temp,
      date: day.datetime,
      conditions: day.conditions,
      icon: day.icon,
    })),
  };
};
