import './style.css';
import { fetchWeatherData } from './weatherAPI';
import { processedData } from './dataProcessor';
import {
  updateWeatherDisplay,
  showLoading,
  hideLoading,
  showError,
  hideError,
} from './ui';

let currentUnit = 'fahrenheit';
let currentLocation = '';

const form = document.querySelector('#form');
const input = form.elements.searchBtn; // Change this to match your input's name attribute
const toggleButton = document.querySelector('#toggleUnit');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  // Use input.value instead of e.target.value
  const userInput = input.value;

  showLoading();
  currentLocation = userInput;
  //call the api with the user's input
  const rawData = await fetchWeatherData(currentLocation);

  hideLoading();
  if (rawData) {
    const processed = processedData(rawData, currentUnit);
    hideError();
    updateWeatherDisplay(processed);
  } else {
    showError('City not found! Please try again');
  }
});

toggleButton.addEventListener('click', async () => {
  if (!currentLocation) return; //exit if no location

  //toggle the unit
  currentUnit = currentUnit === 'fahrenheit' ? 'celsius' : 'fahrenheit';
  showLoading();
  const rawData = await fetchWeatherData(currentLocation);
  hideLoading();

  if (rawData) {
    const processed = processedData(rawData, currentUnit);
    hideError();
    updateWeatherDisplay(processed);
  } else {
    showError('City not found! Please try again');
  }
});
