import './WeatherCard.css'

const WeatherCard = ({ city, country, temp, feelsLike, desc, icon }) => {
    return (
        <div className="weather-card">
            <h1 className="cityName">
                <span>
                    {city}
                    <sup className="countryName">{country}</sup>
                </span>
            </h1>
            <img className="weather-icon" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
            <h1 className="desc">
                {desc}
            </h1>
            <h2 className="temp">
                Temp {temp}&deg; C
            </h2>
            <h3 className="feelsLike">
                Feels Like {feelsLike}&deg; C
            </h3>

        </div>
    )
}

export default WeatherCard
