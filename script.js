let endpoint = ""
let date = new Date()
let time = date.toLocaleTimeString()
tim.innerHTML = time

navigator.geolocation.getCurrentPosition((res)=>{
    let lat = res.coords.latitude.toFixed(2)
    let lon = res.coords.longitude.toFixed(2)
    let key = "8dafd896c0b6928dd6e91283a99eb2ee"
    console.log(lat, lon);
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`
    fetch(url)
    .then(res=>res.json())
    .then((respo)=>{
        console.log(respo)
        cityOne.innerHTML = respo.name
        tempe.innerText = `${(respo.main.temp).toFixed(1)}°C`
        desc.innerHTML = respo.weather[0].description

    })
})


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