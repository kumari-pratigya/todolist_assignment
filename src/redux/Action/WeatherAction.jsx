import axios from 'axios';

export const FETCH_WEATHER_REQUEST = 'FETCH_WEATHER_REQUEST';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE';

const API_KEY = 'f2325970fe8d9045ededbcf4f463b977';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeatherRequest = () => ({
  type: FETCH_WEATHER_REQUEST,
});

export const fetchWeatherSuccess = (data) => ({
  type: FETCH_WEATHER_SUCCESS,
  payload: data,
});

export const fetchWeatherFailure = (error) => ({
  type: FETCH_WEATHER_FAILURE,
  payload: error,
});

export const fetchWeather = (lat, lon) => async (dispatch) => {
  dispatch(fetchWeatherRequest());
  try {
    const response = await axios.get(`${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
    dispatch(fetchWeatherSuccess(response.data));
  } catch (error) {
    dispatch(fetchWeatherFailure(error.message));
  }
};
