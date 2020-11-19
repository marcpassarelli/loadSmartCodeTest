import actionTypes from './actionTypes';

export const initialState = {
  authInfo: {},
  error: undefined,
  isLogged: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        error: undefined,
        authInfo: action.authInfo,
        isLogged: true,
      };

    case actionTypes.LOGIN_FAILED:
      return {
        ...state,
        error: action.error,
        isLogged: false,
      };

    case actionTypes.LOGOUT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default authReducer;

//test login with expirationDate
