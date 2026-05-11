import "./styles.css";
import { getWeatherData } from "./api-handler.js";
import { createWeatherCard } from "./ui.js";

// FORMS LOGIC
const formContainer = document.querySelector("form");
const locationInput = document.querySelector("#location");

formContainer.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!locationInput.checkValidity()) {
    formContainer.reportValidity();
    return;
  }

  e.preventDefault();
  const location = locationInput.value;
  try {
    const data = await getWeatherData(location);

    console.log(data);

    const uvIndex = data.currentConditions.uvindex;
    const currentTemp = data.currentConditions.temp;
    const feelsLike = data.currentConditions.feelslike;
    const desc = data.currentConditions.conditions;

    createWeatherCard(location, currentTemp, feelsLike, uvIndex, desc);

    formContainer.reset();
    
  } catch (error) {
    alert("Please Enter a valid location");
    console.log(error);
  }
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
