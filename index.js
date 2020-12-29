let now = new Date();

let currentTime = document.querySelector("#current-time");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();

currentTime.innerHTML = day + ", " + hours + ":" + minutes;



//week5
function displayWeatherCondition(response) {
  document.querySelector("#input-city").innerHTML = response.data.name;
  document.querySelector("#weather-input-city").innerHTML =
    Math.round(response.data.main.temp) + "°C";
    
    let iconElement = document.querySelector("#icon");

    document.querySelector("#humidity").innerHTML =
      "Humidity: " + Math.round(response.data.main.humidity ) + "%";
    document.querySelector("#wind").innerHTML =
      "Wind: " + Math.round(response.data.wind.speed ) + " km/h";
    document.querySelector("#condition").innerHTML =
      "Condition: " + response.data.weather[0].main;
    iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`); 
  }


function displayForecast3 (response) {
  let iconElement3 = document.querySelector("#forecast-3-icon");
  let forecastWeather3 = document.querySelector("#forecast-weather-3");
  let tempMax = Math.round(response.data.list[0].main.temp_max);
  let tempMin = Math.round(response.data.list[0].main.temp_min);
  forecastWeather3.innerHTML = `${tempMax} °C | ${tempMin} °C`;
  iconElement3.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.list.weather[0].icon}@2x.png`);
} 

function displayForecast6 (response) {
  //let iconElement6 = document.querySelector("#forecast-6-icon");
  let forecastWeather6 = document.querySelector("#forecast-weather-6");
  let tempMax = Math.round(response.data.list[1].main.temp_max);
  let tempMin = Math.round(response.data.list[1].main.temp_min);
  forecastWeather6.innerHTML = `${tempMax} °C | ${tempMin} °C`;
  //iconElement6.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.list.weather[0].icon}@2x.png`); 
}

function displayForecast9 (response) {
  let forecastWeather9 = document.querySelector("#forecast-weather-9");
  let tempMax = Math.round(response.data.list[2].main.temp_max);
  let tempMin = Math.round(response.data.list[2].main.temp_min);
  forecastWeather9.innerHTML = `${tempMax} °C | ${tempMin} °C`;
}

function displayForecast12 (response) {
  let forecastWeather12 = document.querySelector("#forecast-weather-12");
  let tempMax = Math.round(response.data.list[3].main.temp_max);
  let tempMin = Math.round(response.data.list[3].main.temp_min);
  forecastWeather12.innerHTML = `${tempMax} °C | ${tempMin} °C`;
}

function displayForecast15 (response) {
  let forecastWeather15 = document.querySelector("#forecast-weather-15");
  let tempMax = Math.round(response.data.list[4].main.temp_max);
  let tempMin = Math.round(response.data.list[4].main.temp_min);
  forecastWeather15.innerHTML = `${tempMax} °C | ${tempMin} °C`;
}


function searchCity(city) {
  let apiKey = "5d69d77efd19c056bafcabc326753fce";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);

  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast3)
  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast6)
  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast9)
  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast12)
  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast15)
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-text-input").value;
  searchCity(city);
}

function searchLocation(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "d69d77efd19c056bafcabc326753fce";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);
