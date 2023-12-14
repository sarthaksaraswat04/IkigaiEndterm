// let weather_data = {};
const api = (location) => {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=a61c8bf99b9e54c26afa49c01b32bcaa`
  )
    .then((response) => response.json())
    .then((data) => {
      show(data);
    })

    .catch((error) => {
      console.log("Error: ", error);
    });
};
api("agra");
  
document.getElementById("search").addEventListener("click", 
    () => {
        api(document.getElementById("locationn").value)
});

const show = (data) => {
    console.log(data)
  let tempe = data.main.temp;
  tempe = (tempe - 32) * (5 / 9);
  tempe = tempe.toFixed(2);

  let weat =  data.weather[0].main;
  let img = document.getElementById("image");
  if(weat === "Clouds"){
    img.src = "clouds.png";
  }

  else if(weat === "Haze"){
    img.src = "drizzle.png"
  }

  else if(weat === "Rain"){
    img.src = "rain.png"
  }

  else if(weat === "Snow"){
    img.src = "snow.png"
  }

  document.getElementById("temperature").innerText = tempe;
  document.getElementById("loca").innerText = data.name;
  document.getElementById("humidi").innerText = data.main.humidity;
  document.getElementById("wind").innerText = data.wind.speed;
};
