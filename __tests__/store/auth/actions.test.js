import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock-jest';
import expect from 'expect'; // You can use any testing library
import actionTypes from '../../../src/store/modules/auth/actionTypes';
import {
  getNewAccessToken,
  loginFailed,
  loginSuccess,
} from '../../../src/store/modules/auth/actions';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates LOGIN_SUCCESS when authentication has been done', () => {
    const store = mockStore({});

    return store.dispatch(getNewAccessToken()).then(() => {
      expect(store.getActions()[0]).toEqual(loginSuccess());
      expect(store.getActions()[0]).toMatchSnapshot();
    });
  });

  it('creates LOGIN_FAILED when authentication has been wrong', () => {
    const store = mockStore({});
    const error = {
      error: undefined,
      type: actionTypes.LOGIN_FAILED,
    };

    return store
      .dispatch(getNewAccessToken())
      .then(() => Promise.reject(error))
      .catch((err) => {
        expect(err).toEqual(loginFailed());
        expect(err).toMatchSnapshot();
      });
  });
});
