import './style.css';
import { fetchWeatherData } from './weatherAPI';
import { processedData } from './dataProcessor';
import { updateWeatherDisplay } from './ui';

let currentUnit = 'fahrenheit';
let currentLocation = '';

const form = document.querySelector('#form');
const input = form.elements.searchBtn; // Change this to match your input's name attribute
const toggleButton = document.querySelector('#toggleUnit');
console.log(toggleButton);

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  // Use input.value instead of e.target.value
  const userInput = input.value;
  currentLocation = userInput;
  //call the api with the user's input
  const rawData = await fetchWeatherData(currentLocation);
  if (rawData) {
    const processed = processedData(rawData, currentUnit);
    console.log('processed data', processed);
    updateWeatherDisplay(processed);
  }
});

toggleButton.addEventListener('click', async () => {
  console.log('testing toggle button');
  if (!currentLocation) return; //exit if no location

  //toggle the unit
  currentUnit = currentUnit === 'fahrenheit' ? 'celsius' : 'fahrenheit';

  const rawData = await fetchWeatherData(currentLocation);
  if (rawData) {
    const processed = processedData(rawData, currentUnit);
    updateWeatherDisplay(processed);
  }
});
