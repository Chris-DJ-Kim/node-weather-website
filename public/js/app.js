const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const weatherMessage = document.querySelector("#weather-message");
const errorMessage = document.querySelector("#error-message");

weatherForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const location = search.value;
  weatherMessage.textContent = "Loading";
  errorMessage.textContent = "";
  fetch(`/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        weatherMessage.textContent = "";
        errorMessage.textContent = data.error;
        return;
      }
      weatherMessage.textContent = `${data.location}. ${data.forecastData}`;
    });
  });
});
