const API_KEY = "f7ccfc4d3f3f425c557953667a4bf8ec"

function onGeoOk (position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("Your location is", lat, lon)
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(url).then(response => response.json()).then(data=>{
    const Weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    const name = data.name;
    const weather = data.weather[0].main;
    const temp = data.main.temp;
    Weather.innerText = `${weather} / ${temp}℃`;
    city.innerText = `${name}`;
  })
};

function onGeoError () {
  alert("Can't find your location. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);