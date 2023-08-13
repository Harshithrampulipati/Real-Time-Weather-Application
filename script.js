const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const locationNotFound = document.getElementById('locationNotFound');
const weatherBody = document.querySelector('.weather-body');

async function checkWeather(city) {
    const api_key = "717100878d870c26941ecbde064655b8";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            locationNotFound.style.display = 'block';
            weatherBody.style.display = 'none';
            return;
        }
        
        const weather_data = await response.json();
        temperature.textContent = `${Math.round(weather_data.main.temp - 273.5)}°C`;
        description.textContent = `${weather_data.weather[0].description}`;
        humidity.textContent = `${weather_data.main.humidity}%`;
        wind_speed.textContent = `${weather_data.wind.speed}km/H`;

        switch (weather_data.weather[0].main) {
            case 'Clouds':
                weather_img.src = "./assets/cloud.png";
                break;
            case 'Clear':
                weather_img.src = "./assets/clear.png";
                break;
            case 'Rain':
                weather_img.src = "./assets/Rain.png";
                break;
            case 'Mist':
                weather_img.src = "./assets/mist.png";
                break;
            case 'Snow':
                weather_img.src = "./assets/snow.png";
                break;
            default:
                weather_img.src = "./assets/cloud.png";
                break;
        }

        locationNotFound.style.display = 'none';
        weatherBody.style.display = 'block';
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value);
});
