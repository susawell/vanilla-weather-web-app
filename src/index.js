//// Display weather

function displayWeather(response) {
  document.querySelector(".display-city").innerHTML = response.data.name;
  document
    .querySelector(".current-icon")
    .setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  document.querySelector(".display-temp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector(
    ".date"
  ).innerHTML = `${weekday}, ${hour}:${minutes} GMT+1,`;
  document.querySelector(".weather-description").innerHTML =
    response.data.weather[0].description;
  document.querySelector(
    ".display-humidity"
  ).innerHTML = `${response.data.main.humidity}%`;
  document.querySelector(
    ".display-wind"
  ).innerHTML = `${response.data.wind.speed}km/h`;
  celsiusTemp = response.data.main.temp;
}

//// Search for city

function searchCity(city) {
  let apiKey = "5a3765f1638343389914d53c0f8bc4b6";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
  axios.get(apiUrl).then(displayWeather);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-field").value;
  searchCity(city);
}

let inputForm = document.querySelector("#search-form");
inputForm.addEventListener("submit", handleSubmit);

//// Search current location

function usePosition(position) {
  let apiKey = "5a3765f1638343389914d53c0f8bc4b6";
  let units = "metric";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;
  axios.get(apiUrl).then(displayWeather);
}

function getPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(usePosition);
}

let locationButton = document.querySelector("#current-location-btn");
locationButton.addEventListener("click", getPosition);

// Unit conversion C / F
//To Fahrenheit
function displayFahrenheitTemp(event) {
  event.preventDefault();
  let fahrenheitTemp = celsiusTemp * 1.8 + 32;
  let temperatureElement = document.querySelector(".display-temp");
  temperatureElement.innerHTML = Math.round(fahrenheitTemp);
  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
}

let celsiusTemp = null;

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemp);

//To Celsius

function displayCelsiusTemp(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector(".display-temp");
  temperatureElement.innerHTML = Math.round(celsiusTemp);
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
}

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemp);

// Default
searchCity("Cologne");

//// Dates

let now = new Date();
let date = now.getDate();
let weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let weekday = weekdays[now.getDay()];
let hour = now.getHours();
let minutes = (now.getMinutes() < 10 ? "0" : "") + now.getMinutes();

//Day +1

//Day +2

//Day +3

//Day +4

//Day +5
