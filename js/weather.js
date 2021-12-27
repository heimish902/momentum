const API_KEY = 'aa2e624891b98ef211a0ab4604cad0d0';

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector('.weather span:first-of-type');
      const weather = document.querySelector('.weather span:last-of-type');
      const icon = document.querySelector('.weather img');

      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}˚C`;
      icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
