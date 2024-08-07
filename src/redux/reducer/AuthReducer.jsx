import { LOGIN, LOGOUT } from '../Action/AuthAction';

const initialState = {
  isLoggedIn: false,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
        localStorage.setItem('isLoggedIn', JSON.stringify(true)); // Save to localStorage

    return { ...state, isLoggedIn: true };
    case LOGOUT:
        localStorage.setItem('isLoggedIn', JSON.stringify(false)); // Save to localStorage
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};

export default AuthReducer;