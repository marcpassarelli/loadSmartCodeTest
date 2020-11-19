import authReducer, {
  initialState,
} from '../../../src/store/modules/auth/reducer';
import actionTypes from '../../../src/store/modules/auth/actionTypes';

describe('AuthReducer', () => {
  it('returns the initial state', () => {
    expect(authReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle loginSuccess', () => {
    expect(
      authReducer([], {
        type: actionTypes.LOGIN_SUCCESS,
        authInfo: {
          accessToken: 'accessTokenTest',
          accessTokenExpirationDate: '20201117',
          refreshToken: 'refreshTokenTest',
        },
      }),
    ).toEqual({
      error: undefined,
      isLogged: true,
      authInfo: {
        accessToken: 'accessTokenTest',
        accessTokenExpirationDate: '20201117',
        refreshToken: 'refreshTokenTest',
      },
    });

    expect(
      authReducer(initialState, {
        type: actionTypes.LOGIN_SUCCESS,
        authInfo: {
          accessToken: 'accessTokenTest2',
          accessTokenExpirationDate: '20201118',
          refreshToken: 'refreshTokenTest2',
        },
      }),
    ).toEqual({
      error: undefined,
      isLogged: true,
      authInfo: {
        accessToken: 'accessTokenTest2',
        accessTokenExpirationDate: '20201118',
        refreshToken: 'refreshTokenTest2',
      },
    });
  });

  it('should handle loginFailed', () => {
    expect(
      authReducer([], {
        type: actionTypes.LOGIN_FAILED,
        error: 'Error 1',
      }),
    ).toEqual({
      error: 'Error 1',
      isLogged: false,
    });

    expect(
      authReducer(initialState, {
        type: actionTypes.LOGIN_FAILED,
        error: 'Error 1',
      }),
    ).toEqual({
      error: 'Error 1',
      isLogged: false,
      authInfo: {},
    });
  });

  it('should handle logout', () => {
    expect(
      authReducer(
        {
          error: undefined,
          authInfo: {
            accessToken: 'accessTokenTest',
            accessTokenExpirationDate: '20201117',
            refreshToken: 'refreshTokenTest',
          },
          isLogged: true,
        },
        {
          type: actionTypes.LOGOUT,
        },
      ),
    ).toEqual(initialState);
  });
});
