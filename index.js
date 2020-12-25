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

  document.querySelector("#detail-high").innerHTML =
    "High:" + Math.round(response.data.main.temp_max ) + "°C";
  document.querySelector("#detail-low").innerHTML =
    "Low:" + Math.round(response.data.main.temp_min ) + "°C";
  document.querySelector("#detail-chance-of-rain").innerHTML =
    "Condition: " + response.data.weather[0].main;
}

function searchCity(city) {
  let apiKey = "5d69d77efd19c056bafcabc326753fce";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeatherCondition);
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
