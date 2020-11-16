const initialState = {
  authInfo: {},
  error: undefined,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        error: undefined,
        authInfo: action.authInfo,
      };

    case 'LOGIN_FAILED':
      return {
        ...state,
        error: action.error,
      };

    case 'LOGOUT':
      return {
        ...state,
        authInfo: {},
      };
    default:
      return state;
  }
};

export default authReducer;
