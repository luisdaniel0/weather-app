export const fetchWeatherData = async (location) => {
  const apiKey = 'FNQB4HDGXF3W4ELCDM7QU94BX';
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('City not found!');
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error in API call!', error.message);
    return null;
  }
};
