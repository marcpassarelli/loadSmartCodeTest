import actionTypes from './actionTypes';

export const setUser = (userInfo) => {
  return {
    type: actionTypes.SET_USER,
    userInfo,
  };
};

export const getUser = (accessToken) => (dispatch) =>
  fetch('https://api.github.com/user', {
    method: 'GET',
    headers: {
      Authorization: 'token ' + accessToken,
    },
  })
    .then((response) => response.json())
    .then((userInfo) => {
      dispatch(setUser(userInfo));
    })
    .catch((error) => {
      console.log(error);
    });
