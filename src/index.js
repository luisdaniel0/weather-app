const searchBtn = document.getElementById('searchBtn');
const form = document.querySelector('#form');
const input = form.elements.searchBtn; // Change this to match your input's name attribute

//header
const currentCity = document.querySelector('.currentCity');
const currentCityName = document.querySelector('.currentCityName');
const currentCityDate = document.querySelector('.currentCityDate');
const headerCityTemp = document.querySelector('.headerCityTemp');
const headerCityFeelsLike = document.querySelector('.headerCityFeelsLike');
const headerCityConditions = document.querySelector('.headerCityConditions');

//current details container
const wind = document.querySelector('.currentWind');
const visibility = document.querySelector('.currentVisibility');
const humidity = document.querySelector('.currentHumidity');
const currentWeatherIcon = document.querySelector('.weather-icon');
console.log(currentWeatherIcon);

const iconMap = {};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // Use input.value instead of e.target.value
  const userInput = input.value;
  //call the api with the user's input
  apiCall(userInput);
});

const apiCall = async (location) => {
  const apiKey = 'FNQB4HDGXF3W4ELCDM7QU94BX';
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  //HEADER CONTAINER
  const cityTemp = data.currentConditions.temp;
  headerCityTemp.textContent = cityTemp;
  const cityDate = data.days[0].datetime;
  currentCityDate.textContent = cityDate;
  const cityName = data.resolvedAddress;
  currentCityName.textContent = cityName;
  const currentConditions = data.currentConditions.conditions;
  console.log(currentConditions);
  headerCityConditions.textContent = currentConditions;
  const currentFeelsLike = data.currentConditions.feelslike;
  headerCityFeelsLike.textContent = currentFeelsLike;

  //CURRENT DETAILS CONTAINER
  const currentHumidity = data.currentConditions.humidity;
  console.log(currentHumidity);
  humidity.textContent = currentHumidity;
  const currentVisibility = data.currentConditions.visibility;
  console.log(currentVisibility);
  visibility.textContent = currentVisibility;
  const currentWind = data.currentConditions.windspeed;
  console.log(currentWind);
  wind.textContent = currentWind;
  const currentIcon = data.currentConditions.icon;
  currentWeatherIcon.src = require(`./assets/${currentIcon}.svg`);
  console.log(currentIcon);

  const daysAfter = data.days;
  console.log(daysAfter);
  daysAfter.forEach((element, index) => {
    // console.log(element);
    if (index > 0 && index <= 4) {
      const daysAfterTemp = element.temp;
      console.log(daysAfterTemp);
      const daysAfterIcon = element.icon;
      console.log(daysAfterIcon);
      const daysAfterDate = element.datetime;
      console.log(daysAfterDate);
      const daysAfterCondition = element.conditions;
      console.log(daysAfterCondition);
    }
  });
};
