import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Weather.css';

const Weather = ({ apiKey }) => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (cityName) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`);
      setWeatherData(response.data);
      setError(null);
    } catch (error) {
      setError('Weather data not found. Please enter a valid city name.');
      setWeatherData(null);
    }
    setLoading(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchWeather(city);
  };

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        setWeatherData(response.data);
        setError(null);
      } catch (error) {
        setError('Weather data not found. Please enter a valid city name.');
        setWeatherData(null);
      }
      setLoading(false);
    };
  
    if (city) {
      fetchWeather();
    }
  }, [city, apiKey]);
  
  return (
    <div id='weather' className='weather'>
      <h2>Weather</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          required
        />
      </form>
      
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      
      {weatherData && (
        <div className='text'>
          <h3>Weather in {weatherData.name}</h3>
          <p > <span className='temp'>Temperature:</span> {weatherData.main.temp} °C</p>
          <p > <span className='condition'>Condition:</span> {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
