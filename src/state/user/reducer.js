const initialState = {
  userInfo: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        userInfo: action.userInfo,
      };
      break;
    default:
      return state;
  }
};

export default userReducer;
