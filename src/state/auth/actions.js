import { Platform } from 'react-native';
import { authorize } from 'react-native-app-auth';
import { configAndroid, configIos } from '../../config';
import { getUser } from '../user/actions';

export const loginSuccess = (authInfo) => {
  return {
    type: 'LOGIN_SUCCESS',
    authInfo,
  };
};

export const loginFailed = (error) => {
  return {
    type: 'LOGIN_FAILED',
    error,
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT',
  };
};

export const loginGithub = () => {
  return async (dispatch) => {
    try {
      const authInfo =
        Platform.OS === 'ios'
          ? await authorize(configIos)
          : await authorize(configAndroid);
      dispatch(getUser(authInfo.accessToken));
      dispatch(loginSuccess(authInfo));
    } catch (error) {
      dispatch(loginFailed(error));
    }
  };
};
