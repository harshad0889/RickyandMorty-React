


export function users(state = { requestStatus: 0, userData: {}, data: {} }, action) {


  switch (action.type) {

    case 'USERLIST_REQUEST':
      return { ...state, requestStatus: 'USERLIST_REQUEST', requestUserStatus: 'USERLIST_REQUEST', data: action.data };
    case 'USERLIST_SUCCESS':
      return { ...state, requestStatus: 'USERLIST_SUCCESS', requestUserStatus: 'USERLIST_SUCCESS', userData: action.data.data, data: action.data };
    case 'USERLIST_FAILURE':
      return { ...state, requestStatus: 'USERLIST_FAILURE', requestUserStatus: 'USERLIST_FAILURE', data: action.data };

    case 'SAVEUSER_REQUEST':
      return { ...state, requestStatus: 'SAVEUSER_REQUEST', requestUserStatus: 'SAVEUSER_REQUEST', data: action.data };
    case 'SAVEUSER_SUCCESS':
      return { ...state, requestStatus: 'SAVEUSER_SUCCESS', requestUserStatus: 'SAVEUSER_SUCCESS', userData: action.data.data, data: action.data };
    case 'SAVEUSER_FAILURE':
      return { ...state, requestStatus: 'SAVEUSER_FAILURE', requestUserStatus: 'SAVEUSER_FAILURE', data: action.data };

    default:
      return state;

  }

}
