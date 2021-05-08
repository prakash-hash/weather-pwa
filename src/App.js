import "./App.css";
import React, { useState } from 'react'
import fetchWeather from './api/fetchWeather'
import WeatherCard from './components/WeatherCard/WeatherCard'
import background_image from './images/background-image.webp' 
const App = () => {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = async (e) => {
    var weatherData;
    if (e.key === 'Enter') {
      try{
        weatherData = await fetchWeather(query);
        // console.log(weatherData);
      // console.log(weatherData.weather[0].main);
        setWeather(weatherData);
        setQuery('');
      }
      catch(err){
        console.log(err);
        
      }
      
    }
  }

  return (
    <>
      <div className="App" style={{ backgroundImage: `url(${background_image})` }}>
        <div className="container">
          <input
            type="text"
            className="input-box"
            placeholder=" Enter City"
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyPress={e => search(e)}
          />
          {weather.main && <WeatherCard city={weather.name}
            country={weather.sys.country}
            temp={weather.main.temp}
            feelsLike={weather.main.feels_like}
            desc={weather.weather[0].main}
            icon={weather.weather[0].icon} />}
        </div>
      </div>
    </>
  );
};

export default App;