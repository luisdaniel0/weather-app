export const showLoading = () => {
  // select the loading element
  const loading = document.querySelector('.loading');
  loading.classList.remove('hidden');
  // remove the 'hidden' class
};

export const hideLoading = () => {
  // select the loading element
  // add the 'hidden' class
  const loading = document.querySelector('.loading');
  loading.classList.add('hidden');
};

export const showError = (message) => {
  const error = document.querySelector('.error');
  error.textContent = message;
  error.classList.remove('hidden');
};

export const hideError = () => {
  const error = document.querySelector('.error');
  error.classList.add('hidden');
};

export const updateWeatherDisplay = (processedData) => {
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
    const nextDay = document.createElement('div');
    nextDay.classList.add('forecastDay');

    const nextDayTemp = document.createElement('div');
    nextDayTemp.classList.add('forecast-temp');
    const nextDayDate = document.createElement('div');
    nextDayDate.classList.add('forecast-date');
    const nextDayConditions = document.createElement('div');
    nextDayConditions.classList.add('forecast-conditions');
    const nextDayIcon = document.createElement('img');
    nextDayIcon.classList.add('forecast-icon');

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
