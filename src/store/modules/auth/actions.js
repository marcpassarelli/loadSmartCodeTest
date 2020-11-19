import { Platform } from 'react-native';
import { authorize, refresh } from 'react-native-app-auth';
import { configAndroid, configIos } from '../../../config';
import actionTypes from './actionTypes';

export const loginSuccess = (authInfo) => ({
  type: actionTypes.LOGIN_SUCCESS,
  authInfo,
});

export const loginFailed = (error) => ({
  type: actionTypes.LOGIN_FAILED,
  error,
});

export const logout = () => ({
  type: actionTypes.LOGOUT,
});

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
