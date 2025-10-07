import './style.css';
import { fetchWeatherData } from './weatherAPI';
import { processedData } from './dataProcessor';
import { updateWeatherDisplay } from './ui';

const searchBtn = document.getElementById('searchBtn');
const form = document.querySelector('#form');
const input = form.elements.searchBtn; // Change this to match your input's name attribute

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  // Use input.value instead of e.target.value
  const userInput = input.value;
  //call the api with the user's input
  const rawData = await fetchWeatherData(userInput);
  if (rawData) {
    const processed = processedData(rawData);
    console.log('processed data', processed);
    updateWeatherDisplay(processed);
  }
});
