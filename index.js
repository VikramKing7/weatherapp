// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=imperial


let API_KEY="a8028e8080e265012ef34f1599d8a972";



getWeatherData=(city)=>{

    const URL="https://api.openweathermap.org/data/2.5/weather"
 const Full_Url=`${URL}?q=${city}&appid=${API_KEY}&units=i mperial`

 const weatherPromise=fetch(Full_Url);


 return weatherPromise.then((response)=>{
    return response.json();
    console.log(city);

 })


}

function searchCity()
{
    const city=document.getElementById("city").value;


    getWeatherData(city)

    .then((response)=>{
        showWeatherData(response);
    })
    .catch((err)=>{
        console.log(err);
    })


}


showWeatherData=(weatherData)=>  {


    document.getElementById("city-name").innerText=`City:${weatherData.name}`;                
    document.getElementById("weather-type").innerText=`☁️${weatherData.weather[0].main}`;
    document.getElementById("temp").innerText=`🌦️Temp ${weatherData.main.temp}`;
    document.getElementById("min-temp").innerText=`🌦️Min Temp   ${weatherData.main.temp_min}`;
    document.getElementById("max-temp").innerText=`🌦️Max Temp  ${weatherData.main.temp_max}`;

}