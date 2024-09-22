function updateTime() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  document.getElementById("time").textContent = `${hours}:${minutes}`;
}

setInterval(updateTime, 10);

function updateDay() {
  let today = new Date();
  let dayString = today.getDay();
  let weekdayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  document.getElementById("date").textContent = weekdayNames[dayString];
}

setInterval(updateDay, 10);

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#searchInput");
  let cityElement = document.querySelector("#currentCity");
  cityElement.innerText = searchInput.value;
}

let searchForm = document.querySelector("#searchForm");
searchForm.addEventListener("submit", search);
