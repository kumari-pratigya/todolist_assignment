import {
    FETCH_WEATHER_REQUEST,
    FETCH_WEATHER_SUCCESS,
    FETCH_WEATHER_FAILURE,
  } from '../Action/WeatherAction';
  
  const initialState = {
    loading: false,
    data: null,
    error: '',
  };
  
  const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_WEATHER_REQUEST:
        return { ...state, loading: true, error: '' };
      case FETCH_WEATHER_SUCCESS:
        return { ...state, loading: false, data: action.payload, error: '' };
      case FETCH_WEATHER_FAILURE:
        return { ...state, loading: false, data: null, error: action.payload };
      default:
        return state;
    }
  };
  
  export default weatherReducer;
  