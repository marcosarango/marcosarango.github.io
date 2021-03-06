const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=Cozumel&appid=7152e9d6b64b5609d1d13478ad362353&units=imperial"
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject)
        const desc = jsObject.weather[0].description;  // note how we reference the weather array
        document.getElementById('current-cond').textContent = desc;
        const t = document.getElementById('temp-max').textContent = jsObject.main.temp_max;
        document.getElementById('humid').textContent = jsObject.main.humidity;
        const s = document.getElementById('wind-speed').textContent = jsObject.wind.speed;

        if ( t <= 50.0 && s > 3.0) {
            let chillFactor = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s,0.16)) + (0.4275 * t * Math.pow(s,0.16))
            document.querySelector("#chill").innerHTML = Math.ceil(chillFactor)
}
        else {
            document.querySelector("#chill").innerHTML = "N/A"
}
    });