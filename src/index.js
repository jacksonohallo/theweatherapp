const app = document.querySelector(".weather-app");
const temp = document.querySelector(".temp");
const dateOutput = document.querySelector(".date");
const timeOutput = document.querySelector(".time");
const conditionOutput = document.querySelector(".condition");
const nameOutput = document.querySelector(".name");
const icon = document.querySelector(".icon");
const cloudOutput = document.querySelector(".cloud");
const humidityOutput = document.querySelector(".humidity");
const windOutput = document.querySelector(".wind");
const form = document.getElementById("locationInput");
const search = document.querySelector(".search");
const btn = document.querySelector(".submit");
const cities = document.querySelectorAll(".city");

let cityInput = "Kisumu";

cities.forEach((city) => {
  city.addEventListener('click', (e) => { 
        
        cityInput = e.target.innerHTML;
    
    
    fetchweatherData();
    app.style.opacity = "0";
});
    
})
form.addEventListener('submit', (e) => {
    
    if (search.ariaValueMax.length == 0) {
    
        alert(' Please type your favourite city name');
    } else {
        
        cityInput = search.value;
        fetchweatherData();
        search.value = "";
        app.style.opacity = "0";

        e.preventDefault();

    }

});

function dayOfTheWeek(day, month, year) {
    const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"

    ];
    return weekday[new Date(`${day}/${month} ${year}`).getDay()];
};

function fetchWeather() {
    fetch(`                         `)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            temp.innerHTML = data.current.temp_c + "&#176;"
            conditionOutput.innerHTML = data.current.condition.text;
            const date = data.location.localtime;
            const y = parseInt(date.substr(0, 4));
            const m = parseInt(date, substr(5, 2));
            const d = parseInt(date, substr(8, 2));
            const time = date.substr(11);
            dateOutput.innerHTML = `${dayOfTheWeek(d, m, y)} ${d}, ${m} ${y} `
            timeOutput.innerHTML = time;

            nameOutput.innerHTML = data.location.name;

            const iconId = data.current.current.icon.substr(
                "//cdn.weatherapi.com/waether/64x64/".length
            )
            icon.src = "./" + iconId;

            cloudOutput.innerHTML = data.current.cloud + "%";
            humidityOutput.innerHTML = data.current.humidity + "%";
            windOutput.innerHTML = data.current.wind_kph + "km/h"
            let timeOfDay = "day";
            const code = data.current.condition.code;

            




        }







        )



}