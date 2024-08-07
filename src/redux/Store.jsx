import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import weatherReducer from './reducer/WeatherReducer';
import AuthReducer from './reducer/AuthReducer';

const rootReducer = combineReducers({
  weather: weatherReducer,
  auth: AuthReducer,

  // other reducers can go here
});

const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;