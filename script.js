const apikey = "5d918d66777a81db94e0f967401b7c65";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchInput = document.querySelector('.header input');
const searchBtn = document.querySelector('.header button');
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    
    if (response.status == 404){
        document.querySelector('.error').style.display = "block";
        document.querySelector('.main').style.display = "none";
    }else{
        var data = await response.json();
        
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector('.humid').innerHTML = data.main.humidity + "%";
        document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";
    
        if (data.weather[0].main == 'Clouds'){
            weatherIcon.src = './images/clouds.png'
        }
        else if (data.weather[0].main == 'Clear'){
            weatherIcon.src = './images/clear.png'
        }
        else if (data.weather[0].main == 'Rain'){
            weatherIcon.src = './images/rain.png'
        }
        else if (data.weather[0].main == 'Drizzle'){
            weatherIcon.src = './images/drizzle.png'
        }
        else if (data.weather[0].main == 'Mist'){
            weatherIcon.src = './images/mist.png'
        }
        else if (data.weather[0].main == 'Snow'){
            weatherIcon.src = './images/snow.png'
        }

        document.querySelector('.main').style.display = "block";
        document.querySelector('.error').style.display = "none";

        console.log(data)
    }
}

searchBtn.addEventListener('click', () => {
    checkWeather(searchInput.value);
})
