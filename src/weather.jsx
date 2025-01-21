import { useState } from "react";
import axios from "axios";

function Weather() {

    const [city, setcity] = useState("");

    const [weather, setweather] = useState("");
    const [temp, settemp] = useState("");
    const [desc, setdesc] = useState("");

    function cityName(evt) {
        setcity(evt.target.value)
    }

    function getWeather() {
        var data = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8b2513ab6589101fd836a7b8913f13e8`)

        data.then(function (success) {
            console.log(success.data);

            setweather(success.data.weather[0].main)
            setdesc(success.data.weather[0].description)
            settemp(success.data.main.temp)
        })
    }

    return (
        <div className="bg-[url('./assets/bg.jpg')] bg-cover bg-center h-screen w-screen flex items-center justify-center">
            <div className="bg-transperant p-10">
                <div className="bg-blue-100  text-black border  border-black rounded-md p-4">
                    <h1 className="text-2xl text-center font-medium">Weather Report ⛅</h1>
                    <p>Enter your city name to know about the weather :)</p>
                    <input onChange={cityName} className="border border-black bg-transparent p-1 mt-3" placeholder="Enter Your City Name" type="text" /><br />
                    <button onClick={getWeather} className="bg-black text-white p-2 mt-2 border rounded-md border-black">Get Report</button>
                </div>
                <div className="text-white mt-2">
                    <p>Weather: {weather}</p>
                    <p>Temperature: {temp}</p>
                    <p>Description: {desc}</p>
                </div>
            </div>
        </div>
    )
}
export default Weather;