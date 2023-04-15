import { reducerConstants } from '../_constants';
 
export function registration(state = {}, action) {
  switch (action.type) {
    case reducerConstants.REGISTER_REQUEST:
      return { registering: true };
    case reducerConstants.REGISTER_SUCCESS:
      return {};
    case reducerConstants.REGISTER_FAILURE:
      return {};
    default:
      return state
  }
}