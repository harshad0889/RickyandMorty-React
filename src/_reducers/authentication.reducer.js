import { reducerConstants } from '../_constants';

console.log(localStorage.getItem('user'));
let user = JSON.parse(localStorage.getItem('user'));

console.log(user);
const initialState = user ? { loggedIn: true, user } : {};
 console.log(reducerConstants);

export function authentication(state = initialState, action) {
  switch (action.type) {
    case reducerConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case reducerConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
      
    case reducerConstants.LOGIN_FAILURE:
      return {};
    case reducerConstants.LOGOUT:
      return {};
    default:
      return state;
  }
}