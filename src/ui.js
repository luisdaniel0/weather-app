export const updateWeatherDisplay = (processedData) => {
  const currentCity = document.querySelector('.currentCity');
  const currentCityName = document.querySelector('.currentCityName');
  const currentCityDate = document.querySelector('.currentCityDate');
  const headerCityTemp = document.querySelector('.headerCityTemp');
  const headerCityFeelsLike = document.querySelector('.headerCityFeelsLike');
  const headerCityConditions = document.querySelector('.headerCityConditions');
  const forecast = document.querySelector('.nextDaysDetails');

  const wind = document.querySelector('.currentWind');
  const visibility = document.querySelector('.currentVisibility');
  const humidity = document.querySelector('.currentHumidity');
  const currentWeatherIcon = document.querySelector('.weather-icon');

  currentCityName.textContent = processedData.location;
  currentCityDate.textContent = processedData.current.date;
  headerCityTemp.textContent = processedData.current.temp;
  headerCityFeelsLike.textContent = processedData.current.feelsLike;
  headerCityConditions.textContent = processedData.current.conditions;
  wind.textContent = processedData.current.wind;
  visibility.textContent = processedData.current.visibility;
  humidity.textContent = processedData.current.humidity;
  currentWeatherIcon.src = require(
    `./assets/${processedData.current.icon}.svg`
  );

  forecast.innerHTML = '';
  processedData.forecast.forEach((item) => {
    console.log(item);

    const nextDay = document.createElement('div');
    nextDay.classList.add('forecastDay');

    const nextDayTemp = document.createElement('div');
    const nextDayDate = document.createElement('div');
    const nextDayConditions = document.createElement('div');
    const nextDayIcon = document.createElement('img');

    nextDayTemp.textContent = item.temp;
    nextDay.appendChild(nextDayTemp);

    nextDayDate.textContent = item.date;
    nextDay.appendChild(nextDayDate);

    nextDayConditions.textContent = item.conditions;
    nextDay.appendChild(nextDayConditions);

    nextDayIcon.src = require(`./assets/${item.icon}.svg`);
    nextDay.appendChild(nextDayIcon);

    forecast.appendChild(nextDay);
  });
};
