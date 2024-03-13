function displayWeather(response){
    console.log(response.data)
}

function searchCity(city){

let apiKey = "oed542abf03fbf05b879d2dac432at2c";
let apiUrl='https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric';
axios.get(apiUrl).then(displayWeather);

}


function handleSearchSubmit(event)
{
event.preventDefault();
let searchInput=document.querySelector("#city-input");
let cityElement=document.querySelector("#city");

cityElement.innerHTML=searchInput.value;
searchCity(searchInput.value);
}
let searchFormElement=document.querySelector("#search-form");
searchFormElement.addEventListener("submit",handleSearchSubmit);