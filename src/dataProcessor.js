const convertTemp = (tempF, unit) => {
  if (unit === 'celsius') {
    return Math.round(((tempF - 32) * 5) / 9);
  } else {
    return tempF;
  }
};

console.log(convertTemp('89', 'celsius'));

export const processedData = (rawData, unit = 'fahrenheit') => {
  return {
    location: rawData.resolvedAddress,
    current: {
      temp: convertTemp(rawData.currentConditions.temp, unit),
      feelsLike: convertTemp(rawData.currentConditions.feelslike, unit),
      time: rawData.currentConditions.datetime,
      date: rawData.days[0].datetime,
      conditions: rawData.currentConditions.conditions,
      humidity: rawData.currentConditions.humidity,
      wind: rawData.currentConditions.windspeed,
      visibility: rawData.currentConditions.visibility,
      icon: rawData.currentConditions.icon,
    },
    forecast: rawData.days.slice(1, 5).map((day) => ({
      temp: convertTemp(day.temp, unit),
      date: day.datetime,
      conditions: day.conditions,
      icon: day.icon,
    })),
  };
};
