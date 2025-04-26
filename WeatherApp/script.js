document.addEventListener("DOMContentLoaded",()=>{
  const cityInput = document.getElementById("city-input");
  const getWeatherBtn = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const icon = document.getElementById("img");
  const cityNameDisplay = document.getElementById("city-name");
  const temperatureDisplay = document.getElementById("temperature");
  const descriptionDisplay = document.getElementById("description");
  const errorMessage = document.getElementById("error-message");

  const API_KEY = "e5006798861e32336108ba7420718ef3";

  getWeatherBtn.addEventListener("click", async ()=>{
    const city = cityInput.value.trim();
    if(!city) return;

    // if(icon.hasChildNodes()){
    //   const child = icon.querySelector("img");
    //   icon.removeChild(child);
    // } 
    icon.innerHTML = "";

    try {
      const weatherData = await fetchWeatherData(city);
      displayWeatherData(weatherData);
    } catch (error) {
      showError();
    }
    cityInput.value = "";
  });

  async function fetchWeatherData(city){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    const response = await fetch(url);
    if(!response.ok) throw new Error("City not found");
    const data = await response.json();
    return data;
  }

  function displayWeatherData(data){
    console.log(data);
    const {name, main, weather} = data;
    const img = document.createElement("img");
    img.src = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
    icon.appendChild(img);
    cityNameDisplay.textContent = name;
    temperatureDisplay.textContent = `Temperature : ${main.temp}`;
    descriptionDisplay.textContent = `Weather : ${weather[0].description}`;
    weatherInfo.classList.remove("hidden");
    errorMessage.classList.add("hidden");
  }

  function showError(){
    weatherInfo.classList.add("hidden");
    errorMessage.classList.remove("hidden");
  }
})