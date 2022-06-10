"use strict"

document.querySelector(".btn").addEventListener('click', function () {
     let t = new Date();
    let hour = t.getHours();
    let minute = t.getMinutes();
    let second = t.getSeconds();

    if (hour > 12) {  
        hour = hour - 12;
        if (hour < 10) {
            document.querySelector(".h").innerHTML = `0${hour}`;
        }
        else {
            document.querySelector(".h").innerHTML = `${hour}`;
        }
        document.querySelector(".meridian").innerHTML = "&nbsp;&nbsp;&nbsp;PM";
    }
    else {
        if (hour < 10) {
            document.querySelector(".h").innerHTML = `0${hour}`;
        }
        else {
            document.querySelector(".h").innerHTML = `${hour}`;
        }
        document.querySelector(".meridian").innerHTML = "&nbsp;&nbsp;&nbsp;AM";
    }
    if (minute < 10) {
        document.querySelector(".m").innerHTML = `0${minute}`;
    }
    else {
        document.querySelector(".m").innerHTML = `${minute}`;
    }

    if (second < 10) {
        document.querySelector(".s").innerHTML = `0${second}`;
    }
    else {
        document.querySelector(".s").innerHTML = `${second}`;
    }
    
    let inputValue = document.querySelector(".inp").value;
    let deg = document.querySelector('.deg');
    let lowTemp = document.querySelector(".lowTemp");
    let highTemp = document.querySelector(".highTemp");
    let cityName = document.querySelector(".cityName");
    let lat = document.querySelector(".lat");
    let lon = document.querySelector(".lon");
    let count = document.querySelector(".count");
    let wind = document.querySelector(".wind");
    let humi = document.querySelector(".humi");
    let visi = document.querySelector(".visi");
    let press = document.querySelector(".press");
    let desc = document.querySelector(".desc");

    document.querySelector(".loader").style.display = "inline";
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + inputValue + "&appid=795a2bf2f4aab15cd827770a331c97ec")
        .then(response => response.json())
        // .then(data => console.log(data))
        .then(data => {
            deg.innerHTML = (data['main']['temp'] - 273).toFixed(2) + " &deg;C";
            let ltemp = (data['main']['temp_min'] - 273).toFixed(2) + " &deg;C";
            lowTemp.innerHTML = ltemp;
            let htemp = (data['main']['temp_max'] - 273).toFixed(2) + " &deg;C";
            highTemp.innerHTML = htemp;
            let city = data['name'];
            cityName.innerHTML = city;
            let latitude = (data['coord']['lon']).toFixed(2);
            lat.innerHTML = latitude;
            let longitude = (data['coord']['lat']).toFixed(2);
            lon.innerHTML = longitude;
            let country = data['sys']['country'];
            count.innerHTML = country;
            let winds = data['wind']['speed'] + " Km/h";
            wind.innerHTML = winds;
            let humidity = data['main']['humidity'] + " %";
            humi.innerHTML = humidity;
            let visibility = data['visibility'];
            visi.innerHTML = visibility;
            let pressure = data['main']['pressure'] + " mb";
            press.innerHTML = pressure;
            let description = data['weather'][0]['description'];
            document.querySelector(".loader").style.display = "none";
            console.log(description);
            desc.innerHTML = description;
           if (description == "clear sky") {
                let bg = document.body;
                bg.removeAttribute("class");
                bg.classList.add("clear");
            }
            else if (description == "haze") {
                let bg = document.body;
                bg.removeAttribute("class");
                bg.classList.add("haze");
            }
            else if (description == "overcast clouds") {
                let bg = document.body;
                bg.removeAttribute("class");
                bg.classList.add("overcastClouds");
            }
            else if (description == "mist") {
                let bg = document.body;
                bg.removeAttribute("class");
                bg.classList.add("mist");
            }
            else if (description == "scattered clouds") {
                let bg = document.body;
                bg.removeAttribute("class");
                bg.classList.add("scattered");
            }
            else if (description == "few clouds") {
                let bg = document.body;
                bg.removeAttribute("class");
                bg.classList.add("fewClouds");
            }
            else if (description == "broken clouds") {
                let bg = document.body;
                bg.removeAttribute("class");
                bg.classList.add("brokenClouds");
            }
            else if (description == "moderate rain") {
                let bg = document.body;
                bg.removeAttribute("class");
                bg.classList.add("moderateRain");
            }
            else if (description == "light intensity shower rain") {
                let bg = document.body;
                bg.removeAttribute("class");
                bg.classList.add("moderateRain");
            }
            else if (description == "smoke") {
                let bg = document.body;
                bg.removeAttribute("class");
                bg.classList.add("smoke");
            }
            else {
                let bg = document.body;
                bg.removeAttribute("class");
                bg.classList.add("default");
            } 

        })
    deg.classList.add("shadow");
 
})


