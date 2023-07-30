const apiKey = 'e2ac0631decbe15e15f763250b928060';

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';


var weatherIcon = document.querySelector('.weather-icon')


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    var data = await response.json();

    let error = document.querySelector('.error');
    let cardData = document.querySelector('.weather');

    if (response.status == 404) {
        error.style.display = 'block';
        cardData.style.display = 'none';
    }
    else if (data.message == "Nothing to geocode") {
        error.style.display = 'block';
        cardData.style.display = 'none';
    }
    else {
        error.style.display = 'none';
        cardData.style.display = 'block';

        console.log(data)

        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';
        document.getElementById('Weather').innerText = data.weather[0].main;

        let img = data.weather[0].main;

        document.getElementById('icon').src = `images/${img}.png`;
        document.getElementById('icon').alt = `${img} weather icon`;
    }
}

window.addEventListener("load", function () {
    document.getElementById('search').focus();
    
    let searchBtn = document.getElementById('btn')
    let searchBox = document.getElementById('search')

    let timeoutId;

    searchBox.addEventListener('input', () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            checkWeather(searchBox.value);
        }, 1000); // 1000 milliseconds = 1 second
    });

    searchBtn.addEventListener('click', () => {
        checkWeather(searchBox.value);
    })
});
