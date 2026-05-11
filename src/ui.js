function createWeatherElement(tagName, className, text) {
  const el = document.createElement(tagName);
  el.classList.add(className);
  el.textContent = text;
  return el;
}

const contentContainer = document.querySelector("#content");
// Building the UI
function createWeatherCard(locName, temp, feels, uv, desc) {
  const cardContainer = createWeatherElement("div", "card-container");
  const location = createWeatherElement("h3", "location-name", locName);
  const pTemp = createWeatherElement("p", "temperature", `${temp}°C`);
  const pFeels = createWeatherElement(
    "p",
    "feels-like",
    `feels like: ${feels}°C`,
  );
  const pUV = createWeatherElement("p", "uv-index", `UV index: ${uv}`);
  const pDesc = createWeatherElement("p", "description", desc);

  cardContainer.append(location, pTemp, pFeels, pUV, pDesc);
  contentContainer.appendChild(cardContainer);
}

function clearWeatherCard() {
  contentContainer.replaceChildren();
}

export { createWeatherCard, clearWeatherCard };
