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
    document.querySelector("#chance-of-rain").innerHTML =
      "Condition: " + response.data.weather[0].main;
    iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`); 
  }


function displayForecast (response) {
  let iconElement3 = document.querySelector("#forecast-3-icon");
  let forecastWeather3 = document.querySelector("#forecast-weather-3");
  forecastWeather3.innerHTML = Math.round(response.data.list[0].main.temp) +"°C";
  iconElement3.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.list.weather[0].icon}@2x.png`); 

  let iconElement6 = document.querySelector("#forecast-6-icon");
  let forecastWeather6 = document.querySelector("#forecast-weather-6");
  forecastWeather6.innerHTML = Math.round(response.data.list[1].main.temp) +"°C";
  iconElement6.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.list.weather[0].icon}@2x.png`); 

  let forecastWeather9 = document.querySelector("#forecast-weather-9");
  forecastWeather9.innerHTML = Math.round(response.data.list[2].main.temp) +"°C";

  let forecastWeather12 = document.querySelector("#forecast-weather-12");
  forecastWeather12.innerHTML = Math.round(response.data.list[3].main.temp) +"°C";

  let forecastWeather15 = document.querySelector("#forecast-weather-15");
  forecastWeather15.innerHTML = Math.round(response.data.list[4].main.temp) +"°C";
}


function searchCity(city) {
  let apiKey = "5d69d77efd19c056bafcabc326753fce";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);

  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast)
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
