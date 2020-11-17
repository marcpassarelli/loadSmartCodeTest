import { Platform } from 'react-native';
import { authorize, refresh } from 'react-native-app-auth';
import { configAndroid, configIos } from '../../../config';

export const loginSuccess = (authInfo) => ({
  type: 'LOGIN_SUCCESS',
  authInfo,
});

export const loginFailed = (error) => ({
  type: 'LOGIN_FAILED',
  error,
});

export const logout = () => ({
  type: 'LOGOUT',
});

export const loginGithub = () => {
  return async (dispatch) => {
    try {
      const authInfo =
        Platform.OS === 'ios'
          ? await authorize(configIos)
          : await authorize(configAndroid);

      dispatch(loginSuccess(authInfo));
    } catch (error) {
      dispatch(loginFailed(error));
    }
  };
};

export const getNewAccessToken = (refreshToken) => {
  return async (dispatch) => {
    try {
      const config = Platform.OS === 'ios' ? configIos : configAndroid;
      const authInfo = !refreshToken
        ? await authorize(config)
        : await refresh(config, refreshToken);

      dispatch(loginSuccess(authInfo));
    } catch (error) {
      dispatch(loginFailed(error));
    }
  };
};
