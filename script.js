// Replace with your OpenWeather API key
const API_KEY = "b225fd169d5a735e35d6f7b7279a1e35";

document.getElementById("search-btn").addEventListener("click", function () {
  const city = document.getElementById("city-input").value.trim();
  if (city) {
    fetchWeatherData(city);
  } else {
    showErrorMessage("Please enter a city name.");
  }
});

function fetchWeatherData(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then((data) => displayWeatherData(data))
    .catch((error) => showErrorMessage(error.message));
}

function displayWeatherData(data) {
  document.getElementById("error-message").classList.add("hidden");
  document.getElementById("weather-info").classList.remove("hidden");

  document.getElementById("city-name").textContent = data.name;
  document.getElementById("temperature").textContent = `Temperature: ${data.main.temp}°C`;
  document.getElementById("description").textContent = `Weather: ${data.weather[0].description}`;
  document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
}

function showErrorMessage(message) {
  document.getElementById("weather-info").classList.add("hidden");
  const errorMessage = document.getElementById("error-message");
  errorMessage.textContent = message;
  errorMessage.classList.remove("hidden");
}
// Get the input field and button
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

// Add an event listener to the input field
searchInput.addEventListener("keypress", function(event) {
  // Check if the key pressed is 'Enter'
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent the default form submission (if any)
    searchButton.click(); // Trigger the button click event
  }
});

// Add a click event listener for the button (optional functionality)
searchButton.addEventListener("click", function() {
  const query = searchInput.value.trim();
  if (query) {
    alert(`Searching for: ${query}`);
    // Add your search functionality here
  } else {
    alert("Please enter a search term.");
  }
});
