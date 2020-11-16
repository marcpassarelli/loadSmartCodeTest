import { Platform } from 'react-native';
import { authorize } from 'react-native-app-auth';
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
