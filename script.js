let endpoint = ""

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