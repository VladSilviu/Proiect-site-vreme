const APPID = "29a1a272d53f9164f3704ac70192599a";


function getCurrentWeatherEndpoint(city){

    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ro&appid=${APPID}`;

}