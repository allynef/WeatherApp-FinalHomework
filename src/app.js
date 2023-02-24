//Challenge 1 - Get current date/time and inject in your code.

let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];
let monthdate = now.getDate();
let year = now.getFullYear();

let formatDate = `${day}, ${month} ${monthdate}, ${hours}:${minutes}`;

let currentTime = document.querySelector("#current-time");
currentTime.innerHTML = formatDate;

//Challenge 2 - Change the name of the City when searching
function changeCity(event) {
  event.preventDefault();
  let searchInput = ddocument.querySelector("#search-city").value;
  let newCity = document.querySelector("#current-city");
  newCity.innerHTML = `${searchInput.value}`;
}

let searchCity = document.querySelector("#search-city");
searchCity.addEventListener("submit", changeCity);

// function changeCity(event) {
//   event.preventDefault();
//   let searchForm = document.querySelector("#search-form");
//   let newCity = document.querySelector("#city-display");
//   newCity.innerHTML = `${searchForm.value}`;
// }

// let searchCity = document.querySelector("#search-city");
// searchCity.addEventListener("click", changeCity);

//Challenge 3 - Change temperature over to Celsius or Fahrenheit - use fake data
function changeToCelsius(event) {
  event.preventDefault();
  let celsiusTemp = document.getElementById("current-temp");
  celsiusTemp.innerHTML = "27°";
}

function changeToFahren(event) {
  event.preventDefault();
  let fahrenTemp = document.getElementById("current-temp");
  fahrenTemp.innerHTML = "65°";
}

let celsiusClick = document.querySelector("#cels-temp");
celsiusClick.addEventListener("click", changeToCelsius);

let fahrenClick = document.querySelector("#fahren-temp");
fahrenClick.addEventListener("click", changeToFahren);
