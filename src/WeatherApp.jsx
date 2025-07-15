import { useState } from "react";
import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox"

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Wanderland",
        feelslike: 24.85,
        temp: 25.05,
        tempMin: 25.25,
        tempMax: 28.25,
        humidity: 47,
        weather: "haze",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return(
        <div style={{ textAlign: "center" }}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}
