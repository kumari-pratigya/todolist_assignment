import React, {useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../../redux/Action/WeatherAction';

const Weather = ({ lat, lon }) => {
    const [location, setLocation] = useState({ latitude: null, longitude: null });
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          dispatch(fetchWeather(latitude, longitude));
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  }, [dispatch]);

  if (weather.loading) {
    return <div>Loading...</div>;
  }

  if (weather.error) {
    return <div>Error: {weather.error}</div>;
  }

  return (
    <div>
      {weather.data && (
        <div className='d-flex align-item-center justify-content-center gap-3 px-2 w-100'>
          <p className='mb-0'> City:{weather.data.name}</p>
          <p  className='mb-0'>Weather:{weather.data.weather[0].description}</p>
          <p  className='mb-0'>Temperature: {weather.data.main.temp}°K</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
