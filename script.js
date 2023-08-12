const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

async function checkWeather(city) {
    const api_key = "717100878d870c26941ecbde064655b8";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    
    const response = await fetch(url);
    const weather_data = await response.json();
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.5)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML= `${weather_data.wind.speed}km/H`
    switch(weather_data.weather[0].main){
        case 'Clouds' :
            weather_img.src = "./assets/cloud.png"
        case 'Clear' :
            weather_img.src = "./assets/clear.png"
        case 'Rain' :
            weather_img.src = "./assets/Rain.png"
        case 'Mist' :
            weather_img.src = "./assets/mist.png"
        case 'Snow' :
            weather_img.src = "./assets/snow.png"
    }
}  

searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value);
});
