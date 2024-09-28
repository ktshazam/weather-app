function newTemperature(response) {
  let tempElement = document.querySelector("#temperature");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#currentCity");
  cityElement.innerHTML = response.data.city;
  tempElement.innerHTML = temperature;
}

function search(event) {
  event.preventDefault();
  let searchTextInput = document.querySelector("#searchInput");
  let city = searchTextInput.value;

  let apiKey = "0ab77a62c3f8ao26f89cct2fa594a1e5";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(newTemperature);
}

function formatDate(currentDay) {
  let minutes = currentDay.getMinutes();
  let hours = currentDay.getHours();
  let day = currentDay.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#searchForm");
searchForm.addEventListener("submit", search);

let currentDateElement = document.querySelector("#currentDate");
let currentDate = new Date();

currentDateElement.innerHTML = formatDate(currentDate);
