import React, { useState } from "react";
import { fetchWeather } from './api/fetchWeather'
import './App.css'
function App() {

  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState({})

  const search = async (e) => {
    if (e.key === 'Enter') {
      const dataa = await fetchWeather(query)
      console.log(dataa)
      setWeather(dataa)
      setQuery('')
    }
  }
  return (
    <div className="main-container">
      <input type="text"
        placeholder="Search..."
        className="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      />
      {weather.data && (
        <div className="city">
          <h2 className="city-name">
            <span>{weather.data.location.name}</span>
            <sup>{weather.data.location.country}</sup>
          </h2>
          <div className="city-temp">
            {Math.round(weather.data.current.temp_c)}
            <sup>&deg;C</sup>
          </div>
          <div className="info">
            <img src={weather.data.current.condition.icon} />
            <p>{weather.data.current.condition.text}</p>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
