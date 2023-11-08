let endpoint = ""

try {
    let date = new Date()
    let time = date.toLocaleTimeString()
    mit.innerHTML = time
    navigator.geolocation.getCurrentPosition((res)=>{
        let lat = res.coords.latitude.toFixed(2)
        let lon = res.coords.longitude.toFixed(2)
        let key = "8dafd896c0b6928dd6e91283a99eb2ee"
        console.log(lat, lon);
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`
        fetch(url)
        .then(res=>res.json())
        .then((respo)=>{
            let icon = `https://openweathermap.org/img/wn/${respo.weather[0].icon}@2x.png`
            console.log(respo)
            cityOne.innerHTML = respo.name
            tempe.innerText = `${(respo.main.temp).toFixed(1)}°C`
            desc.innerHTML = respo.weather[0].description
            ico.src = icon
            ws.innerHTML = `${respo.wind.speed} km/h`
            hum.innerHTML = `${respo.main.humidity} %`
        })
    })
} catch (error) {
    console.log(error);
}


const checkWeather = () => {
    if (cityName.value == "") {
        console.log("Input cannot be empty");
    } else {
        if (typeof(cityName.value != "string")) {
            console.log("Numbers are not allowed");
        } else {
            console.log(cityName.value);
        }
    }
}