const apiKey = '0695bd64a5348a29a0967425eb751c9e'; // ✅ Your API Key

async function getWeather() {
  const city = document.getElementById('cityInput').value.trim();
  if (!city) {
    alert('Please enter a city name!');
    return;
  }

  document.getElementById('city').innerText = 'Loading...';
  document.getElementById('temperature').innerText = '';
  document.getElementById('description').innerText = '';

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) {
      throw new Error('City not found');
    }

    const data = await response.json();

    document.getElementById('city').innerText = data.name;
    document.getElementById('temperature').innerText = `${data.main.temp}°C`;
    document.getElementById('description').innerText = data.weather[0].description;

  } catch (error) {
    document.getElementById('city').innerText = '';
    document.getElementById('temperature').innerText = '';
    document.getElementById('description').innerText = 'City not found. Please try again.';
    console.error(error);
  }
}
