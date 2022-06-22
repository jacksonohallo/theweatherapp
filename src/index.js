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



}




}





)