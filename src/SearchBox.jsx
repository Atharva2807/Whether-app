import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = import.meta.env.VITE_API_URL;
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

    let getWeatherInfo = async () => {
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse = await response.json();

    // ✅ If city not found, throw error
    if (jsonResponse.cod !== 200) {
        throw new Error(jsonResponse.message);
    }

    let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMix: jsonResponse.main.temp_mix,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description
    };
    return result;
};

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

let handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
        let newinfo = await getWeatherInfo();
        updateInfo(newinfo);
        setError(false); // clear error
        setCity("");     // now clear input
    } catch (err) {
        setError(true);
        updateInfo(null);
    }
};


    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
                <br />
                <br />
                <Button variant="contained" type='submit'>
                Search
                </Button>
                {error && <p style={{ color: "red", marginTop: "10px" }}>No such place exists!</p>}
            </form>
        </div>
    );
}
