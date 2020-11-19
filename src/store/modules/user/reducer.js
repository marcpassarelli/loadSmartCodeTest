import actionTypes from './actionTypes';

export const initialState = {
  userInfo: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        userInfo: action.userInfo,
      };
    default:
      return state;
  }
};

export default userReducer;
