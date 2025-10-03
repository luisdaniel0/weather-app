const searchBtn = document.getElementById('searchBtn');
const form = document.querySelector('#form');
const input = form.elements.searchBtn; // Change this to match your input's name attribute
console.log(input);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('input works', input.value); // Use input.value instead of e.target.value
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
  const cityTemp = data.currentConditions.temp;
  console.log(cityTemp);
  const cityDate = data.days[0].datetime;
  console.log(cityDate);
  const cityName = data.resolvedAddress;
  console.log(cityName);
  const currentConditions = data.currentConditions.conditions;
  console.log(currentConditions);
  const currentHumidity = data.currentConditions.humidity;
  console.log(currentHumidity);
  const currentVisibility = data.currentConditions.visibility;
  console.log(currentVisibility);
  const currentWind = data.currentConditions.windspeed;
  console.log(currentWind);
  const currentIcon = data.currentConditions.icon;
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
