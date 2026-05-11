const API_KEY = "";

async function getWeatherData(location) {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/today?unitGroup=metric&elements=remove%3Afeelslikemax%2Cremove%3Afeelslikemin%2Cremove%3Amoonphase%2Cremove%3Aprecipcover%2Cremove%3Asevererisk%2Cremove%3Asnow%2Cremove%3Asnowdepth%2Cremove%3Asolarenergy%2Cremove%3Asolarradiation&key=${API_KEY}&contentType=json`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Location not found");

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("api fetch error");

    throw error;
  }
}

export { getWeatherData };
