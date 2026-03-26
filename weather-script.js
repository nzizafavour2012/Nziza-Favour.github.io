// weather-script.js

async function fetchWeatherData(city) {
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching weather data: ', error);
    }
}

function displayWeatherData(data) {
    const weatherContainer = document.getElementById('weather');
    if (data && data.weather && data.weather.length > 0) {
        weatherContainer.innerHTML = `<h2>Weather in ${data.name}</h2>\n` + 
            `<p>${data.weather[0].description}</p>\n` + 
            `<p>Temperature: ${data.main.temp} °C</p>`;
    } else {
        weatherContainer.innerHTML = '<p>Weather data not available.</p>';
    }
}

// Example usage: fetchWeatherData('New York').then(displayWeatherData);