export const setUser = (userInfo) => {
  return {
    type: 'SET_USER',
    userInfo,
  };
};

export const getUser = (accessToken) => {
  return (dispatch) => {
    return fetch('https://api.github.com/user', {
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
  };
};
