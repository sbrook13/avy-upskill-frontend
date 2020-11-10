import React, {useState, useEffect} from 'react';
import {parseJSON, handleError} from '../utils/functions'
import {windDirection, unixConversion} from '../utils/weather'
import {weatherURL} from '../constants'


function WeatherContainer() {

  const [currentWeather, setCurrentWeather] = useState(null)

  useEffect(() => {
    const fetchCurrentWeather = () => {
      fetch(weatherURL)
        .then(parseJSON)
        .then(result => setCurrentWeather(result))
    }
    fetchCurrentWeather()
  }, [])

  const showCurrentWeather = () => {
    return (
      <>
        <p>Current Weather Near:</p>
        <p className="small-title">Eisenhower Tunnel</p>
        <div className="stack-sections weather-section">
          <h2 className="bold">{Math.round(currentWeather.main.temp)}°F</h2>
          <h3>{currentWeather.weather[0].main}</h3>
        </div>
        <p>Feels like: {Math.round(currentWeather.main.feels_like)}°F</p>
        <p>High: {Math.round(currentWeather.main.temp_max)}°F / Low: {Math.round(currentWeather.main.temp_min)}°F</p>
        <p>Wind: {windDirection(currentWeather.wind.deg)} at {Math.round(currentWeather.wind.speed)} mph</p>
        <p>Gusts: {Math.round(currentWeather.wind.gust)} mph</p>
        <div className="stack-sections weather-section">
          <p className="small-title bold">Dawn Patrol at Sunrise:</p>
          <p className="small-title">{unixConversion(currentWeather.sys.sunrise)}  </p>
        </div>
        <div className="stack-sections weather-section">
          <p className="small-title bold">Sunset Skin:</p>
          <p className="small-title">{unixConversion(currentWeather.sys.sunset)}  </p>
        </div>
      </>
    )
  }

  return (
    <div className="current-weather">
      { currentWeather ? showCurrentWeather() : null}
    </div>
  );
}

export default WeatherContainer;