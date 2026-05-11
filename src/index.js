import "./styles.css";
import { getWeatherData } from "./api-handler.js";
import { createWeatherCard } from "./ui.js";

// FORMS LOGIC
const formContainer = document.querySelector("form");
const locationInput = document.querySelector("#location");

formContainer.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!locationInput.checkValidity()) {
    formContainer.reportValidity();
    return;
  }

  e.preventDefault();
  const location = locationInput.value;
  getWeatherData(location)
    .then((data) => {
      console.log(data);

      const uvIndex = data.currentConditions.uvindex;
      const currentTemp = data.currentConditions.temp;
      const feelsLike = data.currentConditions.feelslike;
      const desc = data.currentConditions.conditions;

      createWeatherCard(location, currentTemp, feelsLike, uvIndex, desc);
    })
    .catch((error) => {
      alert("Please Enter a valid location");
      console.log(error);
    });

  formContainer.reset();
});

locationInput.addEventListener("input", validateLocation);

// validity functions
function validateLocation() {
  if (this.value.trim() === "") {
    this.setCustomValidity("I am expecting a location!");
  } else {
    this.setCustomValidity("");
  }
}
