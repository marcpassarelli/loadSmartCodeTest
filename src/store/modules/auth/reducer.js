const initialState = {
  authInfo: {},
  error: undefined,
  isLogged: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        error: undefined,
        authInfo: action.authInfo,
        isLogged: true,
      };

    case 'LOGIN_FAILED':
      return {
        ...state,
        error: action.error,
      };

    case 'LOGOUT':
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default authReducer;
